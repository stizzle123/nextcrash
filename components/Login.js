import React, { useState } from "react";
import { Typography, Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Link from "next/link";
import { LOGIN } from "../queries";
import { useMutation } from "@apollo/react-hooks";
import { handleLogin } from "../utils/auth";
import CircularProgress from "@material-ui/core/CircularProgress";
import Feedback from "./Feedback";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundImage: "url(/login-bg.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
    // height: "100vh"
    // backgroundImage:
    //   "radial-gradient(circle at 17% 36%, rgba(35, 35, 35,0.06) 0%, rgba(35, 35, 35,0.06) 25%,rgba(42, 42, 42,0.06) 25%, rgba(42, 42, 42,0.06) 50%,rgba(48, 48, 48,0.06) 50%, rgba(48, 48, 48,0.06) 75%,rgba(55, 55, 55,0.06) 75%, rgba(55, 55, 55,0.06) 100%),radial-gradient(circle at 4% 82%, rgba(0, 0, 0,0.06) 0%, rgba(0, 0, 0,0.06) 25%,rgba(39, 39, 39,0.06) 25%, rgba(39, 39, 39,0.06) 50%,rgba(78, 78, 78,0.06) 50%, rgba(78, 78, 78,0.06) 75%,rgba(117, 117, 117,0.06) 75%, rgba(117, 117, 117,0.06) 100%),radial-gradient(circle at 45% 66%, rgba(64, 64, 64,0.06) 0%, rgba(64, 64, 64,0.06) 25%,rgba(91, 91, 91,0.06) 25%, rgba(91, 91, 91,0.06) 50%,rgba(117, 117, 117,0.06) 50%, rgba(117, 117, 117,0.06) 75%,rgba(144, 144, 144,0.06) 75%, rgba(144, 144, 144,0.06) 100%),linear-gradient(129deg, rgb(29, 29, 29),rgb(24, 24, 24))"
  },
  card: {
    minWidth: 275,
    width: "50%",
    margin: "auto",
    padding: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(3),
      width: "80%"
    }
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.75)"
  },
  center: {
    textAlign: "center",
    height: "100vh",
    paddingTop: "150px"
  },
  form: {},
  textField: {
    marginBottom: theme.spacing(3)
  },
  link: {
    color: theme.palette.secondary.black
  }
}));

const INIT_STATE = {
  email: "",
  password: "",
  open: false,
  message: "",
  success: false
};

export default function Login() {
  const classes = useStyles();
  const [togglePassword, setTogglePassword] = useState(false);
  const [login, { loading }] = useMutation(LOGIN, {
    errorPolicy: "all"
  });
  const [state, setState] = useState(INIT_STATE);

  const onToggle = () => {
    setTogglePassword(!togglePassword);
  };

  const handleChange = e => {
    e.persist();
    setState(prevState => ({ ...prevState, [e.target.id]: e.target.value }));
  };

  const handleCloseFeed = () => {
    setState(prevState => ({ ...prevState, open: false }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    login({
      variables: {
        email: state.email,
        password: state.password
      }
    })
      .then(doc => {
        setState(prevState => ({
          ...prevState,
          open: !state.open,
          message: "You're logged in successfully!!!",
          success: true
        }));
        handleLogin(doc.data.login.token);
      })
      .catch(err => {
        console.error(err);
        setState(prevState => ({
          ...prevState,
          open: !state.open,
          message:
            "An Unexpected error has occurred, Check your email/password.",
          success: false
        }));
      });
  };

  return (
    <div className={classes.root}>
      {state.success ? (
        <Feedback
          handleCloseFeed={handleCloseFeed}
          open={state.open}
          severity="success"
          message={state.message}
        />
      ) : (
        <Feedback
          handleCloseFeed={handleCloseFeed}
          open={state.open}
          severity="error"
          message={state.message}
        />
      )}
      <div className={classes.center}>
        <Card className={classes.card}>
          <Typography align="center" variant="h3" gutterBottom>
            LOGIN
          </Typography>
          <form onSubmit={handleSubmit} className={classes.form}>
            <TextField
              id="email"
              type="email"
              label="Email"
              variant="outlined"
              placeholder="Email"
              fullWidth
              className={classes.textField}
              value={state.email}
              onChange={handleChange}
            />
            <TextField
              id="password"
              type={togglePassword ? "text" : "password"}
              label="Password"
              variant="outlined"
              placeholder="Password"
              fullWidth
              onChange={handleChange}
              className={classes.textField}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={onToggle}>
                      {togglePassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />

            <Button
              variant="contained"
              fullWidth
              color="secondary"
              type="submit"
              size="large"
              disabled={!(state.email && state.password) || loading}
              style={{
                cursor:
                  !(state.email && state.password) || loading
                    ? "not-allowed"
                    : "pointer",
                pointerEvents: "all"
              }}
            >
              {loading ? (
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  Loading...
                  <CircularProgress size={20} />
                </span>
              ) : (
                <span>Login</span>
              )}
            </Button>
          </form>
          <Grid
            container
            justify="space-between"
            alignContent="flex-start"
            style={{ marginTop: 5 }}
          >
            <Link href="/forgot">
              <a className={classes.link}>Forgot Password?</a>
            </Link>

            <Link href="/vendor/register">
              <a className={classes.link}>
                Are you a New Vendor? click to Create an Account
              </a>
            </Link>
          </Grid>
        </Card>
      </div>
    </div>
  );
}
