import React from 'react';
import {
    View,
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Button,

} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './styles/app.css'
import Score from "../components/score";


function ScoreView () {
    return (
        <View activePanel="main">
            <Panel id="main">
                <PanelHeader left={<PanelHeaderBack onClick={() => console.log('hey')} />}>
                    Результаты
                </PanelHeader>
                <Score></Score>
                <Button size="xl" className="startButton">Продолжить</Button>
            </Panel>
        </View>
    );
}

export default ScoreView;
