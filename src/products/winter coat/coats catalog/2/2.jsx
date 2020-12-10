import React from 'react';
import {Card, Icon, Col, CardTitle} from "react-materialize";
import coat2 from './2 media/2.png'
import {Link} from "react-router-dom";

export const Two = () => (
    <div  class  ="animate__animated animate__fadeInUp">

        <div style={{marginTop:"30px"}}  class  ="animate__animated animate__fadeInUpBig">

            <Col
                m={4}
                s={8}
            >
                <Card
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image={coat2} reveal waves="light"/>}
                    reveal={<p>Укорочённая эко шуба.</p>}
                >
                    <p>
                        <Link className="red-text" to ="/Two">
                            210 BYN
                        </Link>
                    </p>
                </Card>

            </Col>

        </div>

    </div>
)