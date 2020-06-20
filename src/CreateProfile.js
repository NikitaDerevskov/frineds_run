import React from 'react';
import {
    View,
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Tabbar,
    TabbarItem,
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
import './styles/app.css'
import Textarea from "@vkontakte/vkui/dist/components/Textarea/Textarea";


function App () {
    return (
        <View activePanel="main">
            <Panel id="main">
                <PanelHeader left={<PanelHeaderBack onClick={() => console.log('hey')} />}>
                    Создать профиль
                </PanelHeader>
                <PanelHeaderContent
                    before={<Avatar size={72} src={"logo512.png"}
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
                <Button size="xl" className="saveButton">Сохранить</Button>
            </Panel>
        </View>
    );
}

export default App;
