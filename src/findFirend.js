import React from 'react';
import {
    View,
    Panel,
    PanelHeader,
    Card,

} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Bottompanel from "./bottompanel";
import './styles/app.css'



function App () {
    return (
        <View activePanel="main">
            <Panel id="main">
                <PanelHeader>
                    Найти друга
                </PanelHeader>
                <Card size="l">
                    <div style={{ height: 400 }} />
                </Card>
                <p className="findFriendText">
                    <strong >Имя и Фамилия - Город</strong>
                </p>
                <p className="findFriendText">
                    <br/>Краткая информация о друге
                </p>
                <Bottompanel></Bottompanel>
            </Panel>
        </View>
    );
}

export default App;
