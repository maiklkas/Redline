import React from 'react';
import {Container, Carousel, Button, Icon} from "react-materialize";
import coat1 from './1 media/1_1.JPG'
import coat1_1 from './1 media/1.JPG'


export const Onepage = () => (


    <div style={{marginTop:"10px"}} >



            <Carousel
                carouselId="Carousel-2"
                className="white-text center"
                options={{
                    fullWidth: true,
                    indicators: true
                }}
            >
                <div >
                    <h2>
                        <img src={coat1} alt="" height="500" width="350"/>
                    </h2>

                </div>
                <div>
                    <h2>
                        <img src={coat1_1} alt="" height="500" width="350"/>
                    </h2>

                </div>


            </Carousel>
            <Container>
                <div class  = "animate__animated animate__fadeInUp">
            <table style={{marginTop: "20px"}}>
                <tr><h5><b>Описание:</b> Блестящая удлиненная куртка из люрекса со вставками из экокожи</h5></tr>
                <tr><h5><b>Состав:</b> пух</h5></tr>
                <tr><h5><b>Размеры:</b> 42, 44</h5></tr>
            </table>
                <Button style={{marginBottom: "100px", marginTop: "15px"}}
                        waves="light"
                        className="red accent-4 btn-ens-action"
                        data-rel="cc4e0db6213593">
                    Добавить в корзину
                </Button>
                <Button style={{marginBottom: "100px", marginTop: "15px", marginLeft: "10px"}}
                        waves="light" className="red accent-4"  floating>
                    <Icon>favorite</Icon>
                </Button>
                </div>
            </Container>


    </div>

)