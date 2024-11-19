import {useEffect, useState} from 'react';
import { getGitHub } from '../../utils/getGitHub.js';
import { Card, Row, Container, Button } from 'react-bootstrap';
import { getLogos } from '../../utils/getLogo.js';
import './repositories.css';

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
                console.error('Error: ',error);
            }
        };

        getData();

    }, []);

    const handleClick = (link) => {
        link ? window.open(link, '_blank') : null;
    }

    return (
        <div className={'bg-dark'}>
            <Container>
                {data ? data.map((elements) => (
                    <Row id={'Row'} key={elements.id}>
                        <Card id={'Card'} >
                            <Card.Img id={'ImgRepositories'} src={getLogos[elements.language]} alt={'Logo ' + elements.language} />
                            <Card.Header>
                                <Card.Title>Project {elements.language}</Card.Title>
                            </Card.Header>
                            <Card.Body id={'Text'}>
                                <Card.Text>Name project - {elements.full_name}</Card.Text>
                                <Card.Text>Project description - {
                                    elements.description ?
                                        elements.description: 'Não contem descrição.'}</Card.Text>

                                <Card.Text>Project owner - {elements.owner.login}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button id={'ButtonRepositories'} onClick={() => handleClick(elements.html_url)}>Go view</Button>
                            </Card.Footer>
                        </Card>
                    </Row>

                )): <Row>Unable to obtain data</Row>}
            </Container>

        </div>

    );
}

export { Repositories };