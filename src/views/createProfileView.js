import React from 'react';
import {
    View,
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Button,
    PanelHeaderContent,
    Avatar,
    PanelHeaderButton,
    Input,
    FormLayoutGroup,
    FormLayout, Group

} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Icon28MessageOutline from '@vkontakte/icons/dist/28/message_outline'
import '../styles/app.css'
import Textarea from "@vkontakte/vkui/dist/components/Textarea/Textarea";
import {Link} from "react-router-dom";
import logo from '../imgs/logo512.png'

function CreateProfileView () {
    return (
        <View activePanel="main">
            <Panel id="main">
                <PanelHeader left={<PanelHeaderBack onClick={() => console.log('hey')} />}>
                    Создать профиль
                </PanelHeader>
                <PanelHeaderContent
                    before={<Avatar size={72} src={logo}
                                    right={<PanelHeaderButton><Icon28MessageOutline /></PanelHeaderButton>}
                    />}>
                    Влад Анесов
                </PanelHeaderContent>
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
                <Link to="/">
                <Button size="xl" className="saveButton" onClick={() => console.log('hey')}>Сохранить</Button>
                </Link>
            </Panel>
        </View>
    );
}

export default CreateProfileView;
