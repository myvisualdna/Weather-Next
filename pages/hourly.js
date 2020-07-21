import React from 'react';
import Head from 'next/head';
import Container from '../components/container';

const Hourly = () => {
    return (
        <div>
            {/*Head es el titulo de la pagina en el browser */}
            <Head>
                <title>Next Project - Hourly</title>
            </Head>
            <Container>
                <h1>Hourly</h1>
                <p>That's gonna happen today</p>
            </Container>
        </div>
    )
}

export default Hourly;
