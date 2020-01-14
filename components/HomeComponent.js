import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_USERS } from "../queries";
import { List, ListItem, ListItemText, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(8)
  },
  list: {
    backgroundColor: theme.palette.background.paper
  }
}));

export default function HomeComponent() {
  const { loading, error, data } = useQuery(GET_USERS, {
    // ssr: true,
    errorPolicy: "all"
  });
  const classes = useStyles();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return error.graphQLErrors.map(({ message }, i) => (
      <p key={i}>{message}</p>
    ));
  }

  return (
    <div className={classes.root}>
      <Container>
        <List className={classes.list}>
          {data.users.map(user => (
            <ListItem key={user.id} button>
              <ListItemText primary={user.username} />
            </ListItem>
          ))}
        </List>
      </Container>
    </div>
  );
}