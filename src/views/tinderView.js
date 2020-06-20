import React from 'react';
import {
    View,
    Panel,
    PanelHeader,

} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Bottompanel from "../components/bottomPanel";
import '../styles/app.css'
import UserCard from "../components/userCard";


function TinderView () {
    return (
        <View activePanel="main">
            <Panel id="main">
                <PanelHeader>
                    Найти друга
                </PanelHeader>
                <UserCard></UserCard>
                <Bottompanel></Bottompanel>
            </Panel>
        </View>
    );
}

export default TinderView;
