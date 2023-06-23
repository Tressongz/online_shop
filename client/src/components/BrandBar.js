import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Col, Container, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Container>
            <Row className={'mt-4'}>
                {device.brands.map(brand =>
                    <Col>
                        <Card
                            style={{cursor: 'pointer'}}
                            key={brand.id}
                            className={'p-3'}
                            onClick={() => device.setSelectedBrand(brand)}
                            border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                        >
                            {brand.name}
                        </Card>
                    </Col>
                )}
            </Row>
        </Container>
    );
});

export default BrandBar;