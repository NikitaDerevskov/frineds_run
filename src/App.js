import React from 'react';
import {
    View,
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Tabbar,
    TabbarItem,
    Button,
    PanelHeaderContent,
    Avatar,
    Div,
    PanelHeaderButton,
    Group, Card

} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import logo from '../src/start_image.png';
import './styles/app.css'

import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28Users from '@vkontakte/icons/dist/28/users';
import Icon28Profile from '@vkontakte/icons/dist/28/profile'


function App () {
    return (
        <View activePanel="main">
            <Panel id="main">
                <PanelHeader left={<PanelHeaderBack onClick={() => console.log('hey')} />}>
                    Результаты
                </PanelHeader>
                <Div className = "image">
                    <Card size="l">
                        <div style={{ height: 400 }} />
                    </Card>
                    <p>
                        <strong >Статистика:</strong>
                    </p>
                    <p className="resultText">
                        <ul>
                            <li>Время бега</li>
                            <li>Калории примерно</li>
                            <li>Скорость бега</li>
                        </ul>
                    </p>
                </Div>
                <Button size="xl" className="saveButton">Продолжить</Button>
            </Panel>
        </View>
    );
}

export default App;
