
import {Image, Nav, Navbar} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import styles from "./Navbar.module.css"
import logo from "../../assets/imghome/p_icon.svg";

const Nave = () => {
    return (
        <Navbar expand={"md"} sticky={"top"} className={styles.NavBar}>
            <Container>
                <Navbar.Brand className={styles.Brand} href="/">
                    <Image className={styles.ImgBrand} src={logo ?? "oops"}></Image>
                    <Navbar.Text className={styles.NavBarElements}>ortifolio</Navbar.Text>
                </Navbar.Brand>
                <div className={styles.NavToggle}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                </div>
                <Navbar.Collapse id="basic-navbar-nav" className={styles.NavCollapse}>
                    <Nav>
                        <div id={"acustom"}>
                            <a className={styles.acustom} href={urlGitHub} target={'_blank'}>Projects</a>
                        </div>
                        <div id={"acustom"}>
                            <a className={styles.acustom} href={urlLinkedin} target={'_blank'}>Game</a>
                        </div>
                        <div id={"acustom"}>
                            <a className={styles.acustom} href={urlLinkedin} target={'_blank'}>Linkedin</a>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export { Nave }