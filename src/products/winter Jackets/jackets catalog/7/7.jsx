import React from 'react';
import jacket7 from './7 media/7.JPG'
import {Card, CardTitle, Col, Icon} from "react-materialize";
import {Link} from "react-router-dom";

export const Seven = () => (
    <div className="animate__animated animate__fadeInUp">

        <div style={{marginTop: "30px"}} className="animate__animated animate__fadeInDownBig">

            <Col
                m={4}
                s={8}
            >
                <Card
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image={jacket7} reveal waves="light"/>}
                    reveal={<p> Зимнее пальто.</p>}
                >
                    <p>
                        <Link className="red-text" to="/Seven">
                            218 BYN
                        </Link>
                    </p>
                </Card>

            </Col>

        </div>

    </div>
)