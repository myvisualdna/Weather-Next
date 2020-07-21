import React from 'react';
import Head from 'next/head';
import Container from '../components/container';



const Daily = () => {
    return (
        <div>
            {/*Head es el titulo de la pagina en el browser */}
            <Head>
                <title>Next Project - Daily</title>
            </Head>
            <Container>
                <h1>Daily</h1>
                <p>Lorem Ipsum</p>
            </Container>
        </div>

    )
}

export default Daily;
