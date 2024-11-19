import {useEffect, useState} from "react";
import { getGitHub } from "../../utils/getGitHub.js";
import { Card, Row, Container, Button } from "react-bootstrap";
import { getLogos } from "../../utils/getLogo.js";
import styles from "./Repositories.module.css";


const Repositories = () => {

    const [data , setData] = useState(null);

    useEffect(() => {

        const getData = async () => {
            try {
                const result = await getGitHub();
                if (result) {
                    setData(result);

                }

            } catch (error) {
                console.error("Error: ",error);
            }
        };

        getData();

    }, []);

    const handleClick = (link) => {
        link ? window.open(link, "_blank") : null;
    }

    return (
        <div className={'bg-dark'}>
            <Container>
                {data ? data.map((elements) => (
                    <Row className={styles.Row} key={elements.id}>
                        <Card className={styles.Card} >
                            <Card.Img className={styles.Img} src={getLogos[elements.language]} alt={"Logo " + elements.language} />
                            <Card.Header>
                                <Card.Title>Project {elements.language}</Card.Title>
                            </Card.Header>
                            <Card.Body className={styles.Text}>
                                <Card.Text>Name project - {elements.full_name}</Card.Text>
                                <Card.Text>Project description - {
                                    elements.description ?
                                        elements.description: "Not have description."}</Card.Text>

                                <Card.Text>Project owner - {elements.owner.login}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button className={styles.Button} onClick={() => handleClick(elements.html_url)}>Go view</Button>
                            </Card.Footer>
                        </Card>
                    </Row>

                )): <Row>Unable to obtain data</Row>}
            </Container>

        </div>

    );
}

export { Repositories };