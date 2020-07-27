// import React from 'react';
// import Modal from '../components/modal.js';
// import Modal from '../components/modalItem.js';

import React from 'react';
import {
    View,
    Panel,
    PanelHeader,
    Button,
    Div,

} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import logo from '../start_image.png';
import '../styles/app.css'
import {
    Link
} from "react-router-dom";



function StartPageView () {
    return (
        <View activePanel="main">
            <Panel id="main">
                <PanelHeader>
                    <p>
                        FriendsRun
                    </p>
                </PanelHeader>
                <div className="rectangle">
                <p className="startText">
                    <strong >Привет, дорогой друг!</strong>
                </p>
                    <p className="startText">
                        <strong >Зачем тебе это приложение ?</strong>
                    </p>
                <p>
                    Смысл не только в том, чтобы помочь тебе держать себя в форме, — в нём ты сможешь найти тех, кто мог бы к тебе присоединиться.
                </p>
                </div>
                <Div className = "image">
                    <img src={logo} alt="logo" />

                </Div>
                <Link to="/create-user">
                    <Div className = "buttonAddEvent">
                <Button size="xl" >Продолжить</Button>
                    </Div>
                </Link>
            </Panel>
        </View>
    );
}

export default StartPageView;
