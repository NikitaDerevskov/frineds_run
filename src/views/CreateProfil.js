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
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28Notifications from '@vkontakte/icons/dist/28/notifications';
import Icon28SearchOutline from '@vkontakte/icons/dist/28/search_outline';
import Icon28MessageOutline from '@vkontakte/icons/dist/28/messages_outline'
import Icon28More from '@vkontakte/icons/dist/28/more'
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
                <Button size="xl" className="startButton">Сохранить</Button>
                <Tabbar>
                    <TabbarItem
                        onClick={() => console.log('hey')}
                        data-story="feed"
                        text="Новости"
                    ><Icon28NewsfeedOutline /></TabbarItem>
                    <TabbarItem
                        onClick={() => console.log('hey')}
                        data-story="discover"
                        text="Поиск"
                    ><Icon28SearchOutline /></TabbarItem>
                    <TabbarItem
                        onClick={() => console.log('hey')}
                        data-story="messages"
                        label="12"
                        text="Сообщения"
                    ><Icon28MessageOutline /></TabbarItem>
                    <TabbarItem
                        onClick={() => console.log('hey')}
                        data-story="notifications"
                        text="Уведомлен."
                    ><Icon28Notifications /></TabbarItem>
                    <TabbarItem
                        onClick={() => console.log('hey')}
                        data-story="more"
                        text="Ещё"
                    ><Icon28More /></TabbarItem>
                </Tabbar>
            </Panel>
        </View>
    );
}

export default App;
