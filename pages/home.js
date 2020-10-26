import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import styled from 'styled-components';

import withAnalytics from '~/hocs/withAnalytics';

// import withAnalytics from '../src/hocs/withAnalytics';

const Title = styled.h1`
color: #069;
font-size: 40px

`;

const Home = () => (
    <div>
        <Head>
            <title>Home</title>
        </Head>
        <img src="/static/panda.jpg" width="200" />
        <Title>Hello World</Title>
        <Link href="/users"><a>Usuários</a></Link>
    </div>
)

export default Home;