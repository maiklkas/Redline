import React from 'react';
import {One} from "./coats catalog/1/1";
import {Row, Container} from "react-materialize";
import {Two} from "./coats catalog/2/2";

export const Coats = () => (


        <div style={{marginTop:"30px"}} >

            <Container>
                <Row>
                    <One/>
                    <Two/>
                </Row>
            </Container>

        </div>

)