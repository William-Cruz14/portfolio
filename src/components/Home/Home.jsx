import { Container, Row, Col, Image, Card, Badge, Stack, CardHeader } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import { homeImg } from "./getHomeImg.js";
import './home.css';

const HomePage = () =>  {

    const urlGitHub = 'https://github.com/William-Cruz14';
    const urlLinkedin = 'https://www.linkedin.com/in/william-cruz-da-silva-a6a394b9/';


    const handleClick = (link) => {
        link ? window.open(link, '_blank') : null;
    }

    return (
        <div className={'bg-dark d-flex flex-column min-vh-100'}>
            <section>
                <Container>
                    <Row className={'d-flex gap-1'}>
                        <Col md={12} className={'d-sm-flex flex-column mb-0'}>
                                <h1 className={'Title'}>Olá 👋,</h1>
                                <h2 className={'SubTitle'}>Eu Sou</h2>
                                <h2 className={'SubTitle'}>Desenvolvedor</h2>
                        </Col>
                        <Col md={6} lg={6}>
                        <p className={'Paragraph'}>
                                Sou um profissional apaixonado por criar soluções digitais inovadoras.
                                Em meu portfólio, você encontrará projetos desenvolvidos com tecnologias de ponta,
                                além de minhas habilidades técnicas e certificações.
                            </p>
                            <p className={'Paragraph'}>
                                Explore meu trabalho e conheça minhas contribuições para a área de tecnologia da informação.
                            </p>
                        </Col>
                        <Col md={12}>
                            <Button href={'/projects'} id={'btn-primary'}>
                                Projetos
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={'Section'}>
                <Container>
                    <Row>
                        <Col className={'Col'} md={6}>
                            <Image id={'Img'} src={homeImg['photo'] ?? 'oops'} thumbnail/>
                        </Col>
                        <Col md={6}>
                            <h2 className={'SubText'}>Quem Sou Eu</h2>
                            <p className={'Paragraph'}>
                                Sou William Cruz, estudante de Sistemas para Internet na Universidade Católica de Pernambuco.
                                Tenho especialização em Suporte de TI, Bancos de Dados e Gestão de Servidores, com certificações em Python, Java e cibersegurança.
                            </p>
                            <p className={'Paragraph'}>
                                Atualmente, sou Residente em TI na Residência Onboard - Porto Digital, onde desenvolvo protótipos e aplicativos utilizando práticas ágeis.
                                Busco oportunidades para aplicar meus conhecimentos e contribuir com a eficiência dos processos e sistemas organizacionais.
                            </p>
                            <Button id={'btn-primary'} onClick={() => handleClick(urlLinkedin)}>
                                Saiba mais
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg={12} md={12}>
                            <h1 className={'SubText'}>Minhas Habilidades</h1>
                        </Col>
                        <Col lg={12}>
                            <div className={'d-flex flex-column flex-md-row gap-2'}>
                                <Card id={'card'}>
                                    <CardHeader>
                                        <Card.Img id={'imgcode'} src={homeImg['code'] ?? 'oops'} />
                                    </CardHeader>
                                    <Card.Body>
                                        <Card.Title id={'cardtext'}>Back-End Development</Card.Title>
                                        <Card.Text className={'CardText'}>
                                            Tenho experiência no desenvolvimento de APIs RESTful utilizando tecnologias como Java (Spring Boot) e Django.
                                            Também possuo conhecimento sólido em conceitos de arquitetura de software e manipulação de bancos de dados relacionais,
                                            como PostgreSQL e MySQL.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Stack gap={2} direction="horizontal">
                                            <Badge bg={""} className={'Badge'}>Java</Badge>
                                            <Badge bg={""} className={'Badge'}>Python</Badge>
                                            <Badge bg={""} className={'Badge'}>C++</Badge>
                                        </Stack>
                                    </Card.Footer>
                                </Card>

                                <Card id={'card'}>
                                    <Card.Header>
                                        <Card.Img id={'imgcode'} src={homeImg['code'] ?? 'oops'} />
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Title id={'cardtext'}>Front-End Development</Card.Title>
                                        <Card.Text className={'CardText'}>
                                            Tenho conhecimento aprofundado em tecnologias front-end, como React,
                                            o que me permite construir interfaces interativas e proporcionar experiências digitais fluidas.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Stack gap={2} direction='horizontal'>
                                            <Badge bg={''} className={'Badge'}>React</Badge>
                                            <Badge bg={''} className={'Badge'}>Figma</Badge>
                                            <Badge bg={''} className={'Badge'}>CSS</Badge>
                                        </Stack>
                                    </Card.Footer>
                                </Card>


                                <Card id={'card'}>
                                    <Card.Header>
                                        <Card.Img id={'imgcode'} src={homeImg['mobile'] ?? 'oops'} />
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Title id={'cardtext'}>Mobile Development</Card.Title>
                                        <Card.Text className={'CardText'}>
                                            Experiência em desenvolvimento de aplicativos mobile com foco em usabilidade e performance.
                                            Adaptação de layouts para diferentes dispositivos.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Stack gap={2} direction='horizontal'>
                                            <Badge bg={''} className={'Badge'}>Flutter</Badge>
                                            <Badge  bg={''} className={'Badge'}>Dart</Badge>
                                        </Stack>
                                    </Card.Footer>

                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <footer className={'Footer'}>
                    <Container>
                        <Row>
                            <Col sm={12} md={6} className={'text-center text-sm-center text-lg-start align-content-sm-center'}>
                                <p className={'TextFooter'}>&copy; 2023 William Cruz. All rights reserved.</p>
                            </Col>
                            <Col sm={12} md={6} className={'text-center text-sm-center text-lg-end mt-1 mt-md-0'}>
                                <Image onClick={() => handleClick(urlGitHub)} className={'ImageFooter'} src={homeImg['github'] ?? "oops"}></Image>
                                <Image onClick={() => handleClick(urlLinkedin)} className={'ImageFooter'} src={homeImg['linkedin'] ?? "oops"}></Image>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </section>

        </div>
    );
}

export {HomePage};