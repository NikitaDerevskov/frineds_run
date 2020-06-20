import React from 'react';
import {
    View,
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Button,
    Div, Card

} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './styles/app.css'



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
                        <strong >Статистика:</strong>
                    </p>
                    <p className="resultText">
                        <ul>
                            <li>Время бега</li>
                            <li>Калории примерно</li>
                            <li>Скорость бега</li>
                        </ul>
                    </p>
                </Div>
                <Button size="xl" className="startButton">Продолжить</Button>
            </Panel>
        </View>
    );
}

export default App;
