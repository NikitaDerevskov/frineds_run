import React from 'react'
import {
    Tabbar,
    TabbarItem,

} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28Users from '@vkontakte/icons/dist/28/users';
import Icon28Profile from '@vkontakte/icons/dist/28/profile'
import Icon28More from '@vkontakte/icons/dist/28/more'
import './styles/app.css'

export default function Bottompanel() {
return(
    <Tabbar>
        <TabbarItem
            onClick={() => console.log('hey')}
            data-story="feed"
            text="Статьи"
        ><Icon28NewsfeedOutline /></TabbarItem>
        <TabbarItem
            onClick={() => console.log('hey')}
            data-story="more"
            text="События"
        ><Icon28More /></TabbarItem>
        <TabbarItem
            onClick={() => console.log('hey')}
            data-story="notifications"
            text="Найти друга"
        ><Icon28Users /></TabbarItem>
        <TabbarItem
            onClick={() => console.log('hey')}
            data-story="more"
            text="Профиль"
        ><Icon28Profile /></TabbarItem>
    </Tabbar>
)
}
