import React from 'react';
import {
    View,
    Panel,
    PanelHeader,
    Button,
    PanelHeaderContent,
    Avatar,
    PanelHeaderButton,
    Input,
    FormLayoutGroup,
    FormLayout, Group, Div

} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Icon28MessageOutline from '@vkontakte/icons/dist/28/message_outline'
import '../styles/app.css'
import Textarea from "@vkontakte/vkui/dist/components/Textarea/Textarea";
import {Link} from "react-router-dom";
import logo from '../components/userIcon.jpg'


function CreateProfileView () {
    return (
        <View activePanel="main">
            <Panel id="main">
                <PanelHeader>
                    Создать профиль
                </PanelHeader>
                <Div className="buttonAddEvent">
                <PanelHeaderContent
                    before={<Avatar size={72} src={logo}
                                    right={<PanelHeaderButton><Icon28MessageOutline /></PanelHeaderButton>}
                    />}>
                    Пономарев Иван
                </PanelHeaderContent>
                </Div>
                <Group className = "createProfilInputGroup">
                    <FormLayout >
                        <FormLayoutGroup top="Рост" className = "createProfilInput">
                            <Input type="text" defaultValue="" />
                        </FormLayoutGroup>
                        <FormLayoutGroup top="Вес" className = "createProfilInput">
                            <Input type="text" defaultValue="" />
                        </FormLayoutGroup>
                        <Textarea top="Интересы" placeholder="" />
                    </FormLayout>
                </Group>
                <Link to="/events">
                    <Div className="buttonAddEvent">
                <Button size="xl"  onClick={() => console.log('hey')}>Сохранить</Button>
                    </Div>
                </Link>
            </Panel>
        </View>
    );
}

export default CreateProfileView;
