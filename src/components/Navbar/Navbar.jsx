
import { Image, Nav, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import logo from '../../assets/imgnavbar/p_icon.svg';
import { Link } from "react-router-dom";
import './navbar.css';

const Nave = () => {

    const urlLinkedin = 'https://www.linkedin.com/in/william-cruz-da-silva-a6a394b9/';

    return (
            <Navbar expand={"md"} sticky={"top"} id={'NavBar'}>
                <Container>
                    <Navbar.Brand id={'Brand'} href='/'>
                        <Image id={'ImgBrand'} src={logo ?? 'oops'}></Image>
                        <Navbar.Text id={'NavBarElements'}>ortifolio</Navbar.Text>
                    </Navbar.Brand>
                    <div id={'NavToggle'}>
                        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                    </div>
                    <Navbar.Collapse id="basic-navbar-nav" className={'text-end d-md-flex justify-content-end'}>
                        <Nav>
                            <div>
                                <Link to={'/projects'} id={'acustom'}>Projetos</Link>
                            </div>
                            <div>
                                <Link to={'/game'} id={'acustom'}>Jogo</Link>
                            </div>
                            <div>
                                <Link to={urlLinkedin}  id={'acustom'} target={'_blank'}>Linkedin</Link>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}

export { Nave };