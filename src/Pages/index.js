import React from 'react';

/*  Components  */
import PageContainer from "../Components/Layout/PageContainer";



export default function Home() {

    const pageMeta = {
        title: "Home",
        description: "Home Desc"
    }

    return (
        <PageContainer pageMeta={pageMeta}>
            <p>Home</p>
        </PageContainer>
    )
}