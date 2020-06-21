// import React from 'react';
// import ArticlesList from '../components/articlesList.js';
// import ArticleItem from '../components/articleItem.js';
import React from 'react';
import {
    View,
    Panel,
    PanelHeader, PromoBanner,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Bottompanel from "../components/bottomPanel";
import '../styles/app.css'
const promoBannerProps = {
    title: 'Статья о пользе бега',
    trackingLink: 'https://vk.com',
    ctaText: 'Открыть',
    advertisingLabel: ' ',
    iconLink: 'https://sun9-7.userapi.com/c846420/v846420985/1526c3/ISX7VF8NjZk.jpg',
    description: '',
    statistics: [
        { url: '', type: 'playbackStarted' },
        { url: '', type: 'click' }
    ]
};
const promoBannerProps1 = {
    title: 'Как правильно бегать',
    trackingLink: 'https://vk.com',
    ctaText: 'Открыть',
    advertisingLabel: ' ',
    iconLink: 'https://sun9-7.userapi.com/q9qBUh4kGND1pTUytY4LwljtRLWoCXaIzN7C2A/52lM85R5kus.jpg',
    description: '',
    statistics: [
        { url: '', type: 'playbackStarted' },
        { url: '', type: 'click' }
    ]
};
const promoBannerProps2 = {
    title: 'Начинай день с пользой',
    trackingLink: 'https://vk.com',
    ctaText: 'Открыть',
    advertisingLabel: ' ',
    iconLink: 'https://sun9-59.userapi.com/7J6qHkTa_P8VKRTO5gkh6MizcCEefz04Y0gDmA/y6dSjdtPU4U.jpg',
    description: '',
    statistics: [
        { url: '', type: 'playbackStarted' },
        { url: '', type: 'click' }
    ]
};


function ArticleView () {
    return (
        <View activePanel="main">
            <Panel id="main">
                <PanelHeader>
                    Статьи
                </PanelHeader>
                <PromoBanner bannerData={promoBannerProps} />
                <PromoBanner bannerData={promoBannerProps1} />
                <PromoBanner bannerData={promoBannerProps2} />
                <Bottompanel/>
            </Panel>
        </View>
    );
}

export default ArticleView;

