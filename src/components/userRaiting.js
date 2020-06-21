import React from 'react'
import {Avatar, PanelHeaderButton, PanelHeaderContent} from "@vkontakte/vkui";
import Icon28MessageOutline from '@vkontakte/icons/dist/28/message_outline'
import logo from '../imgs/logo512.png'
export default function UserRaiting() {
    return (
        <PanelHeaderContent className="raiting"
            before={<Avatar size={72} src={logo}
                            right={<PanelHeaderButton><Icon28MessageOutline /></PanelHeaderButton>}
            />}>
            Влад Анесов
        </PanelHeaderContent>
    )

}