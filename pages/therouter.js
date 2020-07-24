import React from 'react';
import Head from 'next/head';
import Container from '../components/container';
import Router from 'next/router';

const TheRouter = () => {
    return (
        <div>
            {/*Head es el titulo de la pagina en el browser */}
            <Head>
                <title>Next Project - Daily</title>
            </Head>
            <Container>
                <h1>Router</h1>
                <p>Click here to see the router in action</p>
                <button onClick={() => Router.push('/index')}>Index</button>
            </Container>
        </div>

    )
}

export default TheRouter;
