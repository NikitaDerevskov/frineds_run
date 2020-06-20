// import React from 'react';
// import Modal from '../components/modal.js';
// import Modal from '../components/modalItem.js';

import React from 'react';
import {
    View,
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Button,
    Div,

} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import logo from '../start_image.png';
import '../styles/app.css'
import {
    Link
} from "react-router-dom";



function StartPageView (props) {
    return (
        <View activePanel="main">
            <Panel id="main">
                <PanelHeader left={<PanelHeaderBack onClick={() => console.log('hey')} />}>
                    FriendsRun
                </PanelHeader>
                <Div className = "image">
                    <img src={logo} alt="logo" />
                    <p>
                        <strong >Привет дорогой друг!</strong>
                    </p>
                    <p className="startText">
                        <br/>Это приложение поможет тебе держать себя в форме, а также находить новых друзей
                    </p>
                </Div>
                <Link to="/create-user">
                <Button size="xl" className="startButton">Продолжить</Button>
                </Link>
            </Panel>
        </View>
    );
}

export default StartPageView;
