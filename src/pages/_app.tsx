import React from 'react';
import Header from '../components/Header';
import '../styles/App.css';
import '../styles/Header.css';

const MyApp: React.FC = ({ Component, pageProps }: any) => {
    return (
        <>
            <Header />
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;
