import React from 'react';
import {
    View,
    Panel,
    PanelHeader,
    Button

} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Bottompanel from "../components/bottomPanel";
import '../styles/app.css'
import EventList from "../components/eventList";



function EventsListView () {
    return (
        <View activePanel="context">
            <Panel id="context">
                <PanelHeader>События</PanelHeader>
                <Button size='xl' className ='buttonAddEvent'>Добавить событие</Button>
                <EventList></EventList>
                <Bottompanel></Bottompanel>
            </Panel>
        </View>
    );
}

export default EventsListView;

