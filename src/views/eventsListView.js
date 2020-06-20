import React from 'react';
import {
    View,
    Panel,
    PanelHeader,
    Button,
    Div,
    Cell,
    Switch

} from '@vkontakte/vkui';
import {Link} from "react-router-dom";
import '@vkontakte/vkui/dist/vkui.css';
import Bottompanel from "../components/bottomPanel";
import '../styles/app.css'
import EventList from "../components/eventList";



function EventsListView () {
    return (
        <View activePanel="context">
            <Panel id="context">
                <PanelHeader>События</PanelHeader>
                <Div className ='buttonAddEvent'>
                    <Link to="/createEvent">
                    <Button size='xl' >Создать событие</Button>
                    </Link>
                    <Cell asideContent={<Switch />}>
                        Показывать только
                        <br/>мои события
                    </Cell>
                </Div>

                <EventList/>
                <Bottompanel/>
            </Panel>
        </View>
    );
}

export default EventsListView;

