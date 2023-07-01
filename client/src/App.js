import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from "./pages/Home"
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

import 'bootstrap/dist/css/bootstrap.css';

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
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </Router>
        </ApolloProvider>
    )
}

export default App;