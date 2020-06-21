import React from 'react';
import {Button,Avatar,PromoBanner} from "@vkontakte/vkui";
import Icon24Play from "@vkontakte/icons/dist/24/play"
const promoBannerProps = {
    title: 'Заголовок',
    domain: 'vk.com',
    trackingLink: 'https://vk.com',
    ctaText: 'Перейти',
    advertisingLabel: 'Интересная статья',
    iconLink: 'https://sun9-7.userapi.com/c846420/v846420985/1526c3/ISX7VF8NjZk.jpg',
    description: 'Описание рекламы',

    statistics: [
        { url: '', type: 'playbackStarted' },
        { url: '', type: 'click' }
    ]
};
export default function Article() {
    return (
        <PromoBanner bannerData={promoBannerProps} />
    )
}