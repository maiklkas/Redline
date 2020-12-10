import React from 'react';
import './account.css'
import {OwnGreeting} from "./accountComponents/ownGreeting";
import {GreetingSection} from "./accountComponents/sectionGreeting";
import {Delivery} from "./accountComponents/delivery";
import {FavoriteGreeting} from "./accountComponents/favoriteGreeting";

export const OwnPage = () => (
    <div>
        <OwnGreeting/>
        <GreetingSection/>
        <Delivery/>
        <FavoriteGreeting/>
    </div>
)