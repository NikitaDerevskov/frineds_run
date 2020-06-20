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
import '../styles/app.css'
import {Link} from "react-router-dom";

export default function Bottompanel() {
    return(
        <Tabbar>
            <Link to="articles">
            <TabbarItem
                onClick={() => console.log('hey')}
                data-story="articles"
                text="Статьи"
            ><Icon28NewsfeedOutline /></TabbarItem>
            </Link>
            <Link to="events">
            <TabbarItem
                onClick={() => console.log('hey')}
                data-story="more"
                text="События"
            ><Icon28More /></TabbarItem>
            </Link>
            <Link to="/find">
            <TabbarItem
                onClick={() => console.log('hey')}
                data-story="notifications"
                text="Найти друга"
            ><Icon28Users /></TabbarItem>
            </Link>
            <Link to="/profile">
                <TabbarItem
                    onClick={() => console.log('they')}
                    data-story="more"
                    text="Профиль"
                ><Icon28Profile /></TabbarItem>
            </Link>
        </Tabbar>
    )
}
