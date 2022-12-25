import { useRef, useState, useEffect } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { faCheck, faInfoCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Register.module.css";
import SimpleHeader from "../LoginPage/SimpleHeader/SimpleHeader";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


function Register() {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('')
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);
    
    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);
    
    // const [matchP, setUser] = useState('')
    // const [validName, setValidName] = useState(false);
    // const [userFocus, setUserFocus] = useState(false);
    
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user])
    
    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
    }, [pwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

  return (
    <Container fluid className={styles.loginPageContainer}>
      <Container fluid className={styles.headerContainer}>
        <SimpleHeader />
      </Container>
      <Container className={styles.loginFormContainer}>
        <Form action="http://localhost:8080/login" method="POST" className={styles.Form}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
                Username: 
                <span className={validName ? styles.valid : styles.hide}>
                    <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={validName || !user ? styles.hide : styles.invalid}>
                    <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                </span>
            </Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Enter Username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describeby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}  
              />
            <Form.Text id="uidnote" className={userFocus && user && !validName ? styles.instructions : styles.offscreen}>
                <FontAwesomeIcon icon = {faInfoCircle} />
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
              <span className={validPwd || !pwd ? styles.hide : styles.invalid}>
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
              aria-describeby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}  
            />
            <Form.Text id="pwdnote" className={pwdFocus && !validPwd ? styles.instructions : styles.offscreen}>
                <FontAwesomeIcon icon = {faInfoCircle} />
                8 to 24 characters. <br />
                Must include uppercase and lowercase letters, a number and a special
                character. <br />
                Allowed special characters Letters, numbers, underscores, hyphens allowed.
            </Form.Text>
          </Form.Group>

          <Button disabled={!validName || !validPwd ? true : false} variant="danger" type="submit">
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
      </Container>
    </Container>
  );
}

export default Register;
