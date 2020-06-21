import React from 'react';
import {
    View,
    Panel,
    PanelHeader,
    Button,
    Div,
    Cell,
    Switch,
    Group,
    UsersStack,
    Separator, Header, CardGrid
} from '@vkontakte/vkui';
import {Link} from "react-router-dom";
import '@vkontakte/vkui/dist/vkui.css';
import Bottompanel from "../components/bottomPanel";
import '../styles/app.css'
import EventList from "../components/eventList";
import logo from "../imgs/logo512.png";
import logo1 from "../components/userIcon.jpg"
import logo2 from "../components/friendico.jpg"


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
                <Separator />
                <Group>
                    <Group header={<Header mode="secondary"></Header>}>
                        <Cell asideContent={<Button>Пойти</Button>}>
                            Забег по набережной пруда
                        </Cell>
                    </Group>
                    <UsersStack
                        photos={[
                            logo
                        ]}
                        size="m"
                    >Влад пойдет на это мероприятие</UsersStack>
                </Group>
                <Separator />
                <Bottompanel/>
            </Panel>
        </View>
    );
}

export default EventsListView;

