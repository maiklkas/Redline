import {  Route, Switch} from 'react-router-dom';
import React from 'react';
import {Home} from "../pages/home/Home";
import {Store} from "../pages/store/Store";
import {OwnPage} from "../pages/account/ownPage";
import {Coats} from "../products/winter coat/Coats";
import {Onepage} from "../products/winter coat/coats catalog/1/1page";
import {Twopage} from "../products/winter coat/coats catalog/2/2page";
import {SevenPage} from "../products/winter Jackets/jackets catalog/7/7page";
import {Jackets} from "../products/winter Jackets/Jackets";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return(
            <Switch>

                <Route exact path="/" component={Home} />
                <Route exact path="/Store" component={Store}/>
                <Route exact path="/OwnPage" component={OwnPage}/>
                <Route exact path="/Coats" component={Coats}/>
                <Route exact path="/One" component={Onepage}/>
                <Route exact path="/Two" component={Twopage}/>
                <Route exact path="/Seven" component={SevenPage}/>
                <Route exact path="/Jackets" component={Jackets}/>
            </Switch>
        )
    }

    return (

        <Switch>

            <Route exact path="/" component={Home} />
            <Route exact path="/Store" component={Store}/>
            <Route exact path="/OwnPage" component={OwnPage}/>
            <Route exact path="/Coats" component={Coats}/>
            <Route exact path="/One" component={Onepage}/>
            <Route exact path="/Two" component={Twopage}/>
            <Route exact path="/Seven" component={SevenPage}/>
            <Route exact path="/Jackets" component={Jackets}/>
        </Switch>
    )

}