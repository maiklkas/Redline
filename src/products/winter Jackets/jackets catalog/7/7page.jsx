import React from 'react';
import {Button, Carousel, Container, Icon} from "react-materialize";
import jacket7 from './7 media/7.JPG'
import jacket7_1 from './7 media/7_1.JPG'

export const SevenPage = () => (
    <div style={{marginTop: "10px"}}>


        <Carousel
            carouselId="Carousel-2"
            className="white-text center"
            options={{
                fullWidth: true,
                indicators: true
            }}
        >
            <div>
                <h2>
                    <img src={jacket7} alt="" height="500" width="350"/>
                </h2>

            </div>
            <div>
                <h2>
                    <img src={jacket7_1} alt="" height="500" width="350"/>
                </h2>

            </div>


        </Carousel>
        <Container>
            <div className="animate__animated animate__fadeInUp">
                <table style={{marginTop: "20px"}}>
                    <tr><h5><b>Описание:</b> Зимнее пальто</h5></tr>
                    <tr><h5><b>Состав:</b> пух</h5></tr>
                    <tr><h5><b>Размеры:</b>44</h5></tr>
                </table>
                <Button style={{marginBottom: "100px", marginTop: "15px"}}
                        waves="light"
                        className="red accent-4 btn-ens-action"
                        data-rel="cc4e0db6213593">
                    Добавить в корзину
                </Button>
                <Button style={{marginBottom: "100px", marginTop: "15px", marginLeft: "10px"}}
                        waves="light" className="red accent-4" floating>
                    <Icon>favorite</Icon>
                </Button>
            </div>
        </Container>

    </div>
)