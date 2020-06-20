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
import Icon28Users from '@vkontakte/icons/dist/28/users';
import Icon28Profile from '@vkontakte/icons/dist/28/profile'
import Icon28MessageOutline from '@vkontakte/icons/dist/28/message_outline'
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
                        text="Статьи"
                    ><Icon28NewsfeedOutline /></TabbarItem>
                    <TabbarItem
                        onClick={() => console.log('hey')}
                        data-story="notifications"
                        text="Найти друга"
                    ><Icon28Users /></TabbarItem>
                    <TabbarItem
                        onClick={() => console.log('hey')}
                        data-story="more"
                        text="Профиль"
                    ><Icon28Profile /></TabbarItem>
                </Tabbar>
            </Panel>
        </View>
    );
}

export default App;
