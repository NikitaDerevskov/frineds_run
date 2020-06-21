import React from 'react';
import {
    View,
    Panel,
    PanelHeader, Header, Cell, Button, Group,

} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Bottompanel from "../components/bottomPanel";
import '../styles/app.css'
import UserCard from "../components/userCard";


function TinderView () {
    return (
        <View activePanel="main">
            <Panel id="main">
                <PanelHeader>
                    Найти друга
                </PanelHeader>
                <UserCard/>
                <Group header={<Header mode="secondary"></Header>}>
                    <Cell asideContent={<Button>Отклонить</Button>}>
                        <Button>Добавить</Button>
                    </Cell>
                </Group>
                <Bottompanel/>
            </Panel>
        </View>
    );
}

export default TinderView;
