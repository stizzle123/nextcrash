import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Card, Button } from "@material-ui/core";
import { useRouter } from "next/router";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    // backgroundImage: "url(/login-bg.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    height: "100%",
    backgroundAttachment: "fixed"
  },
  center: {
    padding: theme.spacing(8),
    flexGrow: 1,
    textAlign: "start",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(4)
    }
  },
  card: {
    margin: "auto",
    marginTop: theme.spacing(8),
    padding: theme.spacing(8)
  }
}));

export default function CookiePolicy() {
  const classes = useStyles();
  const router = useRouter();
  return (
    <div className={classes.root}>
      <div className={classes.center}>
        <Card className={classes.card} elevation={5}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => router.back()}
          >
            <ArrowBackIosIcon /> Back
          </Button>
          <h1 style={{ textAlign: "center" }}>
            Privacy Policy for Russelsmith
          </h1>

          <p>
            At RS EDGE, accessible from{" "}
            <a
              style={{ color: "#333" }}
              href="http://www.russelsmithedge.com"
              target="_blank"
            >
              www.russelsmithedge.com
            </a>
            , one of our main priorities is the privacy of our visitors. This
            Privacy Policy document contains types of information that is
            collected and recorded by RS EDGE and how we use it.
          </p>

          <p>
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to contact us.
          </p>

          <h2>General Data Protection Regulation (GDPR)</h2>
          <p>We are a Data Controller of your information.</p>

          <p>
            Russelsmith legal basis for collecting and using the personal
            information described in this Privacy Policy depends on the Personal
            Information we collect and the specific context in which we collect
            the information:
          </p>
          <ul>
            <li>Russelsmith needs to perform a contract with you</li>
            <li>You have given Russelsmith permission to do so</li>
            <li>
              Processing your personal information is in Russelsmith legitimate
              interests
            </li>
            <li>Russelsmith needs to comply with the law</li>
          </ul>

          <p>
            Russelsmith will retain your personal information only for as long
            as is necessary for the purposes set out in this Privacy Policy. We
            will retain and use your information to the extent necessary to
            comply with our legal obligations, resolve disputes, and enforce our
            policies.
          </p>

          <p>
            If you are a resident of the European Economic Area (EEA), you have
            certain data protection rights. If you wish to be informed what
            Personal Information we hold about you and if you want it to be
            removed from our systems, please contact us. Our Privacy Policy was
            generated with the help of{" "}
            <a href="https://www.gdprprivacypolicy.net/">
              GDPR Privacy Policy Generator
            </a>{" "}
            and the{" "}
            <a href="https://www.app-privacy-policy.com">
              App Privacy Policy Generator
            </a>
            .
          </p>

          <p>
            In certain circumstances, you have the following data protection
            rights:
          </p>
          <ul>
            <li>
              The right to access, update or to delete the information we have
              on you.
            </li>
            <li>The right of rectification.</li>
            <li>The right to object.</li>
            <li>The right of restriction.</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>

          <h2>Log Files</h2>

          <p>
            RS EDGE follows a standard procedure of using log files. These files
            log visitors when they visit websites. All hosting companies do this
            and a part of hosting services' analytics. The information collected
            by log files include internet protocol (IP) addresses, browser type,
            Internet Service Provider (ISP), date and time stamp, referring/exit
            pages, and possibly the number of clicks. These are not linked to
            any information that is personally identifiable. The purpose of the
            information is for analyzing trends, administering the site,
            tracking users' movement on the website, and gathering demographic
            information.
          </p>

          <h2>Cookies and Web Beacons</h2>

          <p>
            Like any other website, RS EDGE uses 'cookies'. These cookies are
            used to store information including visitors' preferences, and the
            pages on the website that the visitor accessed or visited. The
            information is used to optimize the users' experience by customizing
            our web page content based on visitors' browser type and/or other
            information.
          </p>

          <h2>Privacy Policies</h2>

          <p>
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of RS EDGE.
          </p>

          <p>
            Third-party ad servers or ad networks uses technologies like
            cookies, JavaScript, or Web Beacons that are used in their
            respective advertisements and links that appear on RS EDGE, which
            are sent directly to users' browser. They automatically receive your
            IP address when this occurs. These technologies are used to measure
            the effectiveness of their advertising campaigns and/or to
            personalize the advertising content that you see on websites that
            you visit.
          </p>

          <p>
            Note that RS EDGE has no access to or control over these cookies
            that are used by third-party advertisers.
          </p>

          <h2>Third Party Privacy Policies</h2>

          <p>
            RS EDGE's Privacy Policy does not apply to other advertisers or
            websites. Thus, we are advising you to consult the respective
            Privacy Policies of these third-party ad servers for more detailed
            information. It may include their practices and instructions about
            how to opt-out of certain options. You may find a complete list of
            these Privacy Policies and their links here: Privacy Policy Links.
          </p>

          <p>
            You can choose to disable cookies through your individual browser
            options. To know more detailed information about cookie management
            with specific web browsers, it can be found at the browsers'
            respective websites. What Are Cookies?
          </p>
          <p>
            A computer “cookie” is more formally known as an HTTP cookie, a web
            cookie, an Internet cookie or a browser cookie. The name is a
            shorter version of “magic cookie,” which is a term for a packet of
            data that a computer receives and then sends back without changing
            or altering it.
          </p>

          <h2>Children's Information</h2>

          <p>
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.
          </p>

          <p>
            RS EDGE does not knowingly collect any Personal Identifiable
            Information from children under the age of 13. If you think that
            your child provided this kind of information on our website, we
            strongly encourage you to contact us immediately and we will do our
            best efforts to promptly remove such information from our records.
          </p>

          <h2>Consent</h2>

          <p>
            By using our website, you hereby consent to our Privacy Policy and
            agree to its terms.
          </p>
        </Card>
      </div>
    </div>
  );
}
