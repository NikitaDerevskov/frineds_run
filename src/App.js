import React from 'react';

import '@vkontakte/vkui/dist/vkui.css';
import './styles/app.css'
import StartPageView from './views/startPageView'
import CreateProfileView from './views/createProfileView'
import ProfileView from './views/profileView'
import EventsListView from "./views/eventsListView";
import TinderView from "./views/tinderView"
import ArticleView from "./views/articlesView"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import bridge from '@vkontakte/vk-bridge';

// Отправляет событие нативному клиенту
bridge.send("VKWebAppInit", {});

function App () {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/profile">
                        <ProfileView />
                    </Route>
                    <Route path="/articles">
                        <ArticleView />
                    </Route>
                    <Route path="/find">
                        <TinderView />
                    </Route>
                    <Route path="/create-user">
                        <CreateProfileView />
                    </Route>
                    <Route path="/events">
                        <EventsListView />
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
