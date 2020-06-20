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
import {Link} from "react-router-dom";
import EventList from "../components/eventList";



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
                <EventList/>
            </Panel>
        </View>
    );
}

export default HistoryOfEvents;
