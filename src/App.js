import React from 'react';
import {
    View,
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Tabbar,
    TabbarItem,
    CardGrid,
    Card,
    Div,
    Group,
    Button
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import  "./styles/app.css"
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
                    FriendsRun
                </PanelHeader>

                <Div >

                    <Group>
                        <img src={window.location.origin + '/start_image.png'} />
                        <strong>Привет дорогой друг!</strong>
                        <br /><br /> Это приложение поможет тебе сохранять себя в форме, а также найти новых друзей.
                    </Group>
                </Div>
                <Button size="xl">Продолжить</Button>
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