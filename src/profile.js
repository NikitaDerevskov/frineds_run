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
    Card,
    PanelHeaderButton,
    Group, Div

} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28Notifications from '@vkontakte/icons/dist/28/notifications';
import Icon28SearchOutline from '@vkontakte/icons/dist/28/search_outline';
import Icon28MessageOutline from '@vkontakte/icons/dist/28/messages_outline'
import Icon28More from '@vkontakte/icons/dist/28/more'
import './styles/app.css'


function App () {
    return (
        <View activePanel="main">
            <Panel id="main">
                <PanelHeader left={<PanelHeaderBack onClick={() => console.log('hey')} />}>
                    Профиль
                </PanelHeader>
                <PanelHeaderContent
                    status="Вы занимаете 13 место из 37"
                    before={<Avatar size={72} src={"logo512.png"}
                                    right={<PanelHeaderButton><Icon28MessageOutline /></PanelHeaderButton>}
                    />}>
                    Влад Анесов

                </PanelHeaderContent>
                <Button size="xl" className ="profileButton">Редактировать профиль</Button>
                <Button size="xl" className ="profileButton">Общий рейтинг</Button>
                <Div className="profileText">
                    <strong >Информация о пользователе:</strong>
                </Div>
                <Group>
                    <ul>
                        <li>Рост:</li>
                        <li>Вес:</li>
                        <li>Интересы:</li>
                    </ul>
                </Group>
                <Div className="profileText">
                    <strong>Результаты предыдущих дней: </strong>
                </Div>
                {/*TODO НИКИТА РАБОТАТЬ, СДЕЛАЙ РЕЗУЛЬТАТЫ ПРОШЛЫХ ДНЕЙ СТОЛБЦЕВАЯ ДИАГРАММА*/}
                <Card size="l">
                    <div style={{ height: 96 }} />
                </Card>
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
