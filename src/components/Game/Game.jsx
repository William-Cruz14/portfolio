import { useState, useEffect } from "react";
import { getPassword, passwordAttemp } from "../../utils/getGame.js";
import Button from "react-bootstrap/Button";
import {Alert, Form, Container, ListGroup} from "react-bootstrap/";
import {Card, Col, ListGroupItem} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import styles from "./Game.module.css";


const Game = () => {
    const [attempt, setAttempt] = useState("");
    const [result, setResult] = useState(null);
    const [attempts, setAttempts] = useState([]);
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [repeat, setRepeat] = useState(null);

    useEffect(() => {
        setPassword(getPassword());
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!attempt) return;

        const response = passwordAttemp(attempt);

        if (response === true) {
            setRepeat(response)
        } else {
            setResult(response);
            setAttempts((prevAttempts) => [...prevAttempts, { value: attempt, result: response }]);
            setAttempt("");
        }
    };

    const handleNewGame = () => {
        const newPassword = getPassword();

        setPassword(newPassword)
        setResult(null);
        setAttempt("");
        setAttempts([]);
        setShowPassword(false);
        setRepeat(null);
    };

    const handleClickPassword = () => {
        setShowPassword(true);
    };

    return (
        <div className={"bg-dark d-flex flex-column min-vh-100"}>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col className={styles.Input} lg={8} xs={9}>
                            <Form.Control
                                type="text"
                                maxLength={password.length}
                                placeholder="Enter your attempt"
                                value={attempt}
                                onChange={(e) => setAttempt(e.target.value)}
                            />
                        </Col>
                        <Col className={'d-flex gap-1 mt-1 mb-1'} xs={12} sm={10} lg={4}>
                            <Button className={styles.myCustom} type={'submit'} variant={'success'}>Guess</Button>
                            <Button className={styles.Button} variant={'danger'} onClick={handleNewGame}>New game</Button>
                            <Button className={styles.Button2} onClick={handleClickPassword}>View password</Button>
                        </Col>

                    </Row>
                </Form>

                {attempts.length > 0 && (
                    <Card className={styles.Table}>
                        <Card.Header>Previous attempts:</Card.Header>
                        <ListGroup variant={'flush'}>
                            {attempts.reverse().map((attempt, index) => (
                                <ListGroupItem key={index}>
                                    Attempts {index + 1}: {attempt.value} - Result: {attempt.result}
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Card>
                )}

                {result ? (
                    <Alert variant="info" className="mt-3" style={{fontFamily: "Roboto Slab, serif"}}>
                        Result: {result}
                    </Alert>
                ): null}

                {showPassword ? (
                    <Alert variant="info" style={{fontFamily: "Roboto Slab, serif"}}>
                        <Alert.Heading>This is password: {password}</Alert.Heading>
                    </Alert>
                ): null}

                {repeat === true ? (
                    <Alert variant="success">
                        <Alert.Heading>
                            Congratulations! You won 🎉
                        </Alert.Heading>
                    </Alert>
                ): null}

            </Container>
        </div>

    );
};

export { Game };