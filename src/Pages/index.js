import React from 'react';

/*  Components  */
import {
    HomepageBanner,
    PageContainer,
    Header,
} from "../Components";



export default function Home() {

    const pageMeta = {
        title: "Home",
        description: "Home Desc"
    }

    return (
        <PageContainer pageMeta={pageMeta}>
            <Header />
            <HomepageBanner />
        </PageContainer>
    )
}