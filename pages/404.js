import React from 'react';
import Head from 'next/head';
import Container from '../components/container';



const Error = () => {
    return (
        <div>
            {/*Head es el titulo de la pagina en el browser */}
            <Head>
                <title>Next Project - Daily</title>
            </Head>
            <Container>
                <h1>Custom 404</h1>
                <p>Error 404</p>
            </Container>
        </div>

    )
}

export default Error;