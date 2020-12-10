import React from 'react';
import {CollapsibleItem, Collapsible, Icon, Container} from "react-materialize";

export const Delivery = () => (
    <div>

        <div style={{marginTop:"30px"}} align = "center" class  ="animate__animated animate__fadeInRight">
            <h4><i><u><b>Доставка</b></u></i></h4>
            <Container style={{marginTop:"20px"}}>
            <Collapsible
                accordion
                popout
            >

                <CollapsibleItem
                    expanded={false}
                    header="Самовызов"
                    icon={<Icon>place</Icon>}
                    node="div"
                >
                    Самовызов, ВРЕМЕННО НЕДОСТУПЕН.
                </CollapsibleItem>
                <CollapsibleItem
                    expanded={false}
                    header="Курьерская доставка"
                    icon={<Icon>local_shipping</Icon>}
                    node="div"
                >
                    Вы можете оставить свои данные в форме, при завершении покупки в корзине, выбрав товар из каталога. В пределах г. Минск, доставка осуществляется БЕСПЛАТНО.
                </CollapsibleItem>
            </Collapsible>
           </Container>
        </div>

    </div>
)