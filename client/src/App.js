import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { setContext } from '@apollo/client/link/context';
import Home from "./pages/Home"

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
                        <Route path='/' element={<Home />} />
                    </Routes>
                </Router>
            </ApolloProvider>
        </div>
    )
}