import React from 'react';
import {
    View,
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Button,

} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import '../styles/app.css'
import Score from "../components/score";
import YandexMap from "../components/yandexMap"

function EventView () {
    return (
        <View activePanel="main">
            <Panel id="main">
                <PanelHeader left={<PanelHeaderBack onClick={() => console.log('hey')} />}>
                    Создать событие
                </PanelHeader>
                <YandexMap />
                <Button size="xl" className="startButton">Продолжить</Button>
            </Panel>
        </View>
    );
}

export default EventView;
