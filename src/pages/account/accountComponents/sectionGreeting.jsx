import React from 'react';
import {Container} from "react-materialize";

export const GreetingSection = () => (
    <div>

        <div class  ="animate__animated animate__fadeInLeft">
            <section>
                <Container>
                    <h5 align = "center" className="white-text">
                        <i>
                            <li style={{paddingTop:'30px'}}>На этой странице вы можете ознакомится с возможностями сайта</li>
                            <li style={{paddingTop:'30px'}}>Сохранять и просматривать сохраненные вами ранее товары</li>
                            <li style={{paddingTop:'30px'}}>Ознакомится с вариантами доставки</li>
                        </i>
                    </h5>
                </Container>
            </section>
        </div>

    </div>
)