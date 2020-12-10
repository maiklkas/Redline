import React from 'react';
import {Container, Carousel, Button, Icon} from "react-materialize";
import coat2 from './2 media/2.png'
import coat2_1 from './2 media/2_1.png'


export const Twopage = () => (


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
                    <img src={coat2} alt="" height="500" width="350"/>
                </h2>

            </div>
            <div>
                <h2>
                    <img src={coat2_1} alt="" height="500" width="350"/>
                </h2>

            </div>


        </Carousel>
        <Container>
            <div class  ="animate__animated animate__fadeInUp">
            <table style={{marginTop: "20px"}}>
                <tr><h5><b>Описание:</b> Укорочённая эко шуба</h5></tr>
                <tr><h5><b>Состав:</b> 12% альпака, 16% лана верджин, 72% шёлк</h5></tr>
                <tr><h5><b>Наполнитель:</b> синтепон</h5></tr>
                <tr><h5><b>Цвета:</b> синий, розовый</h5></tr>
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