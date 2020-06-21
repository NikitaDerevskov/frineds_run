import React from 'react';
import {
    View,
    Panel,
    PanelHeader,
    PanelHeaderBack,

} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import '../styles/app.css'
import YandexMap from "../components/yandexMap"
import {Link} from "react-router-dom";

function EventView () {
    return (
        <View activePanel="main">
            <Panel id="main">
                <PanelHeader left={
                    <Link to="events">
                        <PanelHeaderBack />
                    </Link>
                }>
                    Создать событие
                </PanelHeader>
                <YandexMap />

            </Panel>
        </View>
    );
}

export default EventView;
