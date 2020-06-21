import React from 'react';
import {
    View,
    Panel,
    PanelHeader,
    PanelHeaderBack, Group, Header, Cell, Button, UsersStack,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import '../styles/app.css'
import {Link} from "react-router-dom";
import EventList from "../components/eventList";
import logo from "../imgs/logo512.png";



function HistoryOfEvents () {
    return (
        <View activePanel="main">
            <Panel id="main">
                <PanelHeader left={
                    <Link to="events">
                        <PanelHeaderBack />
                    </Link>
                }>
                    История событий
                </PanelHeader>
                <Group>
                    <Group header={<Header mode="secondary"></Header>}>
                        <Cell asideContent={<Button>Посмотреть</Button>}>
                            Забег по набережной пруда
                        </Cell>
                    </Group>

                </Group>
            </Panel>
        </View>
    );
}

export default HistoryOfEvents;
