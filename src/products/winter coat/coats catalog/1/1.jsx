import React from 'react';
import {Card, Icon, Col, CardTitle} from "react-materialize";
import coat1 from './1 media/1_1.JPG'
import {Link} from "react-router-dom";

export const One = () => (
    <div  class  ="animate__animated animate__fadeInUp">

        <div style={{marginTop:"30px"}}  class  ="animate__animated animate__fadeInDownBig">

            <Col
                m={4}
                s={8}
            >
                <Card
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image={coat1} reveal waves="light"/>}
                    reveal={<p>Блестящая удлиненная куртка из люрекса со вставками из экокожи .</p>}
                >
                    <p>
                        <Link className="red-text" to ="/One">
                            250 BYN
                        </Link>
                    </p>
                </Card>

            </Col>

            </div>

    </div>
)