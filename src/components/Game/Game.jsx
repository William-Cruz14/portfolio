import { useState, useEffect } from 'react';
import { getPassword, passwordAttemp } from '../../utils/getGame.js';
import Button from "react-bootstrap/Button";
import { Alert, Form, Container, ListGroup } from 'react-bootstrap/';
import { Card, Col, ListGroupItem } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import './game.css';


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
        setAttempt("");
    };

    return (
        <div className={'bg-dark d-flex flex-column min-vh-100'}>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col id={'Input'} lg={8} xs={9}>
                            <Form.Control
                                type='text'
                                maxLength={password.length}
                                placeholder='Insira sua tentativa'
                                value={attempt}
                                onChange={(e) => setAttempt(e.target.value)}
                            />
                        </Col>
                        <Col className={'d-flex gap-1 mt-1 mb-1'} xs={12} sm={10} lg={4}>
                            <Button id={'Button'} type={'submit'}>Guess</Button>
                            <Button id={'Button'} variant={'danger'} onClick={handleNewGame}>New game</Button>
                            <Button id={'Button2'} onClick={handleClickPassword}>View password</Button>
                        </Col>

                    </Row>
                </Form>

                {attempts.length > 0 && (
                    <Card id={'Table'}>
                        <Card.Header>Ultimas tentativas:</Card.Header>
                        <ListGroup variant={'flush'}>
                            {attempts.reverse().map((attempt, index) => (
                                <ListGroupItem key={index}>
                                    Tentativas: {attempt.value} - Resultado: {attempt.result}
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Card>
                )}

                {result ? (
                    <Alert variant='info' className='mt-3' style={{fontFamily: 'Roboto Slab, serif'}}>
                        Resultado: {result}
                    </Alert>
                ): null}

                {showPassword ? (
                    <Alert variant='info' style={{fontFamily: 'Roboto Slab, serif'}}>
                        <Alert.Heading>Essa é senha secreta: {password}</Alert.Heading>
                    </Alert>
                ): null}

                {repeat === true ? (
                    <Alert variant='success'>
                        <Alert.Heading>
                            Parabéns! Você ganhou 🎉
                        </Alert.Heading>
                    </Alert>
                ): null}

            </Container>
        </div>

    );
};

export { Game };