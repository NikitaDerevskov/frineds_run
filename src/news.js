import React from 'react';
import {
    View,
    Panel,
    PanelHeader,
    Card,
    CardGrid

} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Bottompanel from "./bottompanel";
import './styles/app.css'



function App () {
    return (
        <View activePanel="main">
            <Panel id="main">
                <PanelHeader>
                    Статьи
                </PanelHeader>
                <CardGrid>
                    <Card size="l">
                        <div style={{ height: 200 }} />
                    </Card>
                    <Card size="l">
                        <div style={{ height: 200 }} />
                    </Card>
                    <Card size="l">
                        <div style={{ height: 200 }} />
                    </Card>
                    <Card size="l">
                        <div style={{ height: 200 }} />
                    </Card>
                    <Card size="l">
                        <div style={{ height: 200 }} />
                    </Card>
                </CardGrid>
                <Bottompanel></Bottompanel>
            </Panel>
        </View>
    );
}

export default App;
