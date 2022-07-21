import React from 'react';
import Header from './Header';
import pwa from './assets/pwa.png'
import Calendar from './assets/Calendar.png'
import Dinner from './assets/DDscreenshot.png'
import Note from './assets/noteTaker.png'
import Move from './assets/profile.jpeg'
import Weather from './assets/weatherAPP.png'

export default function Project() {


    const iconClass={
        maxWidth: '50%',
    };

    return (
    <div>
    <img style= {iconClass} src={pwa}/>
    <img style= {iconClass} src={Calendar}/>
    <img style= {iconClass} src={Dinner}/>
    <img style= {iconClass} src={Note}/>
    <img style= {iconClass} src={Move}/>
    <img style= {iconClass} src={Weather}/>


        </div>
    );
}