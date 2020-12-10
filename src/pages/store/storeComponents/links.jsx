import React from "react";
import {Link} from "react-router-dom";

export const Links = () => (
    <div>

        <div style={{marginTop:'50px'}} class="animate__animated animate__fadeInLeft" align = "center">

            <Link  style={{szie: '40px'}} to="/Jackets">
                <h5 className="black-text">Зимние пальто</h5>
            </Link>
            <Link style={{szie: '40px'}} to = "/Coats">
                <h5 className="black-text">Зимние куртки</h5>
            </Link>

        </div>

        <div style={{marginTop: '30px'}} className="animate__animated animate__fadeInLeft" align="center">

            <Link style={{szie: '40px'}} to="/">
                <h5 className="black-text">Платья</h5>
            </Link>
            <Link style={{szie: '40px'}} to="/">
                <h5 className="black-text">Костюмы</h5>
            </Link>

        </div>

        <div style={{marginTop: '30px'}} className="animate__animated animate__fadeInLeft" align="center">

            <Link style={{szie: '40px'}} to="/">
                <h5 className="black-text">Свитеры</h5>
            </Link>
            <Link style={{szie: '40px'}} to="/">
                <h5 className="black-text">Рубашки</h5>
            </Link>
            <Link style={{szie: '40px'}} to="/">
                <h5 className="black-text">Топики</h5>
            </Link>

        </div>

        <div style={{marginTop: '30px'}} className="animate__animated animate__fadeInLeft" align="center">

            <Link style={{szie: '40px'}} to="/">
                <h5 className="black-text">Штаны</h5>
            </Link>
            <Link style={{szie: '40px'}} to="/">
                <h5 className="black-text">Шорты</h5>
            </Link>

        </div>

    </div>
)
