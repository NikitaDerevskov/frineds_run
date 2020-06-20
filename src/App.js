import React from 'react';
import {
    View,
    Panel,
    PanelHeader,
    Card,
    CardGrid

} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Bottompanel from "./bottompanel";
import './styles/app.css'
import StartPageView from './views/startPageView'


function App () {
    return (<StartPageView />);
}

export default App;
