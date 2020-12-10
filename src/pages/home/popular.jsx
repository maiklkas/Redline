import React from 'react';
import {Container, Row} from "react-materialize";
import {One} from "../../products/winter coat/coats catalog/1/1";
import {Two} from "../../products/winter coat/coats catalog/2/2";
import {Seven} from "../../products/winter Jackets/jackets catalog/7/7";

export const Popular = () => (
    <div align='center' class  ="animate__animated animate__pulse">
        <h4><b>Популярные товары</b></h4>
        <Container>
            <Row>
                <One/>
                <Two/>
                <Seven/>
            </Row>
        </Container>
    </div>
)