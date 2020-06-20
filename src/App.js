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
import CreateProfileView from './views/createProfileView'
import EventsListView from './views/eventsListView'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import EventListView from "./views/eventsListView";

import bridge from '@vkontakte/vk-bridge';

// Отправляет событие нативному клиенту
bridge.send("VKWebAppInit", {});

function App () {
    return (
        <Router>
            <div>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/create-user">
                        <CreateProfileView />
                    </Route>
                    <Route path="/events">
                        <EventListView />
                    </Route>
                    <Route path="/">
                        <StartPageView />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
//             <Link to="/">Home</Link>
//             <Link to="/about">About</Link>
//             <Link to="/users">Users</Link>

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

export default App;
