import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'
import {useParams} from "react-router-dom";
import {fetchOneDevices} from "../http/deviceAPI";

const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()

    useEffect(() => {
        fetchOneDevices(id).then(data => setDevice(data))
    }, [])

    return (
        <Container className={'mt-3'}>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
                </Col>
                <Col md={4}>
                    <Row className={'d-flex flex-column align-items-center'}>
                        <Col className={'align-items-center'}>
                            <h2>{device.name}</h2>
                            <div
                                style={{background: `url(${bigStar}) no-repeat center center`, width: 240, height: 228, backgroundSize: 'cover', fontSize: 48}}
                                className={'d-flex justify-content-center align-items-center'}
                            >
                                {device.rating}
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className={'d-flex flex-column align-items-center justify-content-around p-3'}
                        style={{width:300, height: 300, fontSize: 32, border: '4px solid lightgray'}}
                    >
                        <h3>Стоимость: {device.price}₽</h3>
                        <Button variant={'outline-dark'}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className={'d-flex flex-column mt-3'}>
                <h2>Характеристики</h2>
                {device.info.map((info, index) =>
                    <Row
                        key={info.id}
                        style={{background: index % 2 === 0 ? 'lightblue': 'skyblue', padding: 10}}
                    >
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;