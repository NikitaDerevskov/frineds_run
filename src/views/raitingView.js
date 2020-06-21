import React from 'react';
import {
    View,
    Panel,
    PanelHeader,
    PanelHeaderBack, Avatar, PanelHeaderButton, PanelHeaderContent,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import '../styles/app.css'
import UserRaiting from "../components/userRaiting";
import {Link} from "react-router-dom";
import logo from "../imgs/logo512.png";
import logo1 from "../components/userIcon.jpg"
import logo2 from "../components/friendico.jpg"
import Icon28MessageOutline from '@vkontakte/icons/dist/28/message_outline'
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
                <PanelHeaderContent className="raiting"
                                    before={<Avatar size={72} src={logo1}
                                                    right={<PanelHeaderButton><Icon28MessageOutline /></PanelHeaderButton>}
                                    />}>
                    Иван Пономарев
                </PanelHeaderContent>
                <PanelHeaderContent className="raiting"
                                    before={<Avatar size={72} src={logo}
                                                    right={<PanelHeaderButton><Icon28MessageOutline /></PanelHeaderButton>}
                                    />}>
                    Влад Анесов
                </PanelHeaderContent>
                <PanelHeaderContent className="raiting"
                                    before={<Avatar size={72} src={logo2}
                                                    right={<PanelHeaderButton><Icon28MessageOutline /></PanelHeaderButton>}
                                    />}>
                    Штин Михаил
                </PanelHeaderContent>
            </Panel>
        </View>
    );
}

export default RaitingView;
