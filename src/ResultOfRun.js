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
import Icon28Notifications from '@vkontakte/icons/dist/28/notifications';
import Icon28SearchOutline from '@vkontakte/icons/dist/28/search_outline';
import Icon28MessageOutline from '@vkontakte/icons/dist/28/messages_outline'
import Icon28More from '@vkontakte/icons/dist/28/more'


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
                        <strong >Результаты бега:</strong>
                    </p>
                    <p className="resultText">
                        <ul>
                            <li>+228 очков к рейтингу</li>
                            <li>+228 очков к рейтингу</li>
                            <li>+228 очков к рейтингу</li>
                        </ul>
                    </p>
                </Div>
                <Button size="xl" className="startButton">Продолжить</Button>
                <Tabbar>
                    <TabbarItem
                        onClick={() => console.log('hey')}
                        data-story="feed"
                        text="Новости"
                    ><Icon28NewsfeedOutline /></TabbarItem>
                    <TabbarItem
                        onClick={() => console.log('hey')}
                        data-story="discover"
                        text="Поиск"
                    ><Icon28SearchOutline /></TabbarItem>
                    <TabbarItem
                        onClick={() => console.log('hey')}
                        data-story="messages"
                        label="12"
                        text="Сообщения"
                    ><Icon28MessageOutline /></TabbarItem>
                    <TabbarItem
                        onClick={() => console.log('hey')}
                        data-story="notifications"
                        text="Уведомлен."
                    ><Icon28Notifications /></TabbarItem>
                    <TabbarItem
                        onClick={() => console.log('hey')}
                        data-story="more"
                        text="Ещё"
                    ><Icon28More /></TabbarItem>
                </Tabbar>
            </Panel>
        </View>
    );
}

export default App;
