import React from 'react';
import {
    View,
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Button,
    PanelHeaderContent,
    Avatar,
    Card,
    PanelHeaderButton,
    Group,
    Div

} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import '../styles/app.css'
import UserRaiting from "../components/userRaiting";
import {Link} from "react-router-dom";


function RaitingView () {
    return (
        <View activePanel="main">
            <Panel id="main">
                <PanelHeader left={
                    <Link to="events">
                        <PanelHeaderBack />
                    </Link>
                }>
                    Рейтинг
                </PanelHeader>
                <UserRaiting/>
                <UserRaiting/>
                <UserRaiting/>
                <UserRaiting/>
                <UserRaiting/>
                <UserRaiting/>
            </Panel>
        </View>
    );
}

export default RaitingView;
