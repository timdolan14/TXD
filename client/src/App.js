import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from "./pages/Home"
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import Contact from "./pages/Contact";
import SinglePost from "./pages/SinglePost/Singlepost";


import Footer from "./components/Footer";


const httpLink = createHttpLink({
    uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
        headers: {
            ...headers, authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    uri: `/graphql`,
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/:username" element={<Profile />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/post/:postId" element={<SinglePost />}
                    />
                </Routes>
                <Footer />
            </Router>
        </ApolloProvider>
    )
}

export default App;