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
import Icon28MessageOutline from '@vkontakte/icons/dist/28/message_outline'
import '../styles/app.css'
import Bottompanel from "../components/bottomPanel";
import {Link} from "react-router-dom";

function ProfileView () {
    return (
        <View activePanel="main">
            <Panel id="main">
                <PanelHeader left={<PanelHeaderBack onClick={() => console.log('hey')} />}>
                    Профиль
                </PanelHeader>
                <Div classname = "buttonAddEvent">
                <PanelHeaderContent
                    status="Вы занимаете 13 место из 37"
                    before={<Avatar size={72} src={"logo512.png"}
                                    right={<PanelHeaderButton><Icon28MessageOutline /></PanelHeaderButton>}
                    />}>
                    Влад Анесов
                </PanelHeaderContent>
                </Div>
                <Div className="buttonAddEvent">
                    <Link to="/editProfile">
                    <Button size="xl" className ="profileButton">Редактировать профиль</Button>
                    </Link>
                    <Button size="xl" className ="profileButton">Общий рейтинг</Button>
                    <Button size="xl" className ="profileButton">История событий</Button>
                </Div>
                <Div className="profileText">
                    <strong >Информация о пользователе:</strong>
                </Div>
                <Group>
                    <Div className = "buttonAddEvent">
                    Рост
                    <br/>Вес
                    <br/>Интересы
                    </Div>
                </Group>
                <Div className="profileText">
                    <strong>Результаты предыдущих дней: </strong>
                </Div>
                {/*TODO НИКИТА РАБОТАТЬ, СДЕЛАЙ РЕЗУЛЬТАТЫ ПРОШЛЫХ ДНЕЙ СТОЛБЦЕВАЯ ДИАГРАММА*/}
                <Card size="l">
                    <div style={{ height: 96 }} />
                </Card>
                <Bottompanel></Bottompanel>
            </Panel>
        </View>
    );
}

export default ProfileView;
