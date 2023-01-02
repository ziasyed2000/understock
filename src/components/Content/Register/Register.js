import { useRef, useState, useEffect } from "react";
import { Container, Button, Form } from "react-bootstrap";
import {
  faCheck,
  faInfoCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Register.module.css";
import SimpleHeader from "../LoginPage/SimpleHeader/SimpleHeader";
import axios from "../../../api/axios";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const registerPage = "/register";

function Register() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  // const [matchP, setUser] = useState('')
  // const [validName, setValidName] = useState(false);
  // const [userFocus, setUserFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
  }, [pwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userCheck = USER_REGEX.test(user);
    const pwdCheck = PWD_REGEX.test(pwd);
    if (!userCheck || !pwdCheck) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        registerPage,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response?.data);
      console.log(response?.accesstoken);
      console.log(JSON.stringify(response));
      setSuccess(true);
      setUser("");
      setPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Sever response");
      } else if (err.response.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <Container fluid className={styles.loginPageContainer}>
      <Container fluid className={styles.headerContainer}>
        <SimpleHeader />
      </Container>
      {success ? (
        <Container>asd</Container>
      ) : (
        <>
          <Container className={styles.loginFormContainer}>
            <Form.Text
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </Form.Text>
            <Form
              action="http://localhost:8080/login"
              onSubmit={handleSubmit}
              method="POST"
              className={styles.Form}
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  Username:
                  <span className={validName ? styles.valid : styles.hide}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span
                    className={
                      validName || !user ? styles.hide : styles.invalid
                    }
                  >
                    <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                  </span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter Username"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  required
                  aria-invalid={validName ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                />
                <Form.Text
                  id="uidnote"
                  className={
                    userFocus && user && !validName
                      ? styles.instructions
                      : styles.offscreen
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  4 to 24 characters. <br />
                  Must begin with a letter. <br />
                  Letters, numbers, underscores, hyphens allowed.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  Password:
                  <span className={validPwd ? styles.valid : styles.hide}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span
                    className={validPwd || !pwd ? styles.hide : styles.invalid}
                  >
                    <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                  </span>
                </Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  required
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby="pwdnote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                />
                <Form.Text
                  id="pwdnote"
                  className={
                    pwdFocus && !validPwd
                      ? styles.instructions
                      : styles.offscreen
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  8 to 24 characters. <br />
                  Must include uppercase and lowercase letters, a number and a
                  special character. <br />
                  Allowed special characters Letters, numbers, underscores,
                  hyphens allowed.
                </Form.Text>
              </Form.Group>

              <Button
                disabled={!validName || !validPwd ? true : false}
                variant="danger"
                type="submit"
              >
                Sign Up
              </Button>

              <Button
                className={styles.btn}
                variant="danger"
                type="Button"
                href="/"
              >
                Cancel
              </Button>
            </Form>
            <p>
              Already Registered? <br />
              <span>
                <a href="/LoginPage">Login</a>
              </span>
            </p>
          </Container>
        </>
      )}
    </Container>
  );
}

export default Register;
