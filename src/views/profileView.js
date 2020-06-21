import React from 'react';
import {
    View,
    Panel,
    PanelHeader,
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
import logo from '../components/userIcon.jpg'

function ProfileView () {
    return (
        <View activePanel="main">
            <Panel id="main">
                <PanelHeader>
                    Профиль
                </PanelHeader>
                <Div className = "buttonAddEvent">
                <PanelHeaderContent
                    status="Вы занимаете 1 место из 3"
                    before={<Avatar size={72} src={logo}
                                    right={<PanelHeaderButton><Icon28MessageOutline /></PanelHeaderButton>}
                    />}>
                    Иван Пономарев
                </PanelHeaderContent>
                </Div>

                <Div className="profileText">
                    <strong >Информация о пользователе:</strong>
                </Div>
                <Group>
                    <Div className = "buttonAddEvent">
                    Рост: 178
                    <br/>Вес: 70
                    <br/>Интересы: люблю короткие дистанции
                        </Div>
                </Group>
                <Div className="buttonAddEvent">
                    <Link to="/editProfile">
                        <Button size="xl" className ="profileButton">Редактировать профиль</Button>
                    </Link>
                    <Link to="raiting">
                        <Button size="xl" className ="profileButton">Общий рейтинг</Button>
                    </Link>
                    <Link to="/history">
                        <Button size="xl" className ="profileButton">История событий</Button>
                    </Link>
                </Div>
                <Bottompanel></Bottompanel>
            </Panel>
        </View>
    );
}

export default ProfileView;
