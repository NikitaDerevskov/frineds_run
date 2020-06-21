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
                    FriendsRun
                </PanelHeader>
                <Div className = "image">
                    <img src={logo} alt="logo" />
                    <p>
                        <strong >Привет, дорогой друг!</strong>
                    </p>
                    <p className="startText">
                        <br/>Это приложение поможет тебе держать себя в форме, а также находить новых друзей.
                    </p>
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
