import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { setContext } from '@apollo/client/link/context';
import Home from "./pages/Home"
import Login from "./pages/Login";
import Register from "./pages/Register";

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

export default function App() {
    return (
        <div>
            <ApolloProvider client={client}>
                <Router>
                    <Routes>
                        <Route path='login' element={<Login />} />
                        <Route path='home' element={<Home />} />
                        <Route path='/' element={<Register />} />
                    </Routes>
                </Router>
            </ApolloProvider>
        </div>
    )
}