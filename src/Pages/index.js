import React, { useEffect, useState } from 'react';

/*  Components  */
import {
    HomepageBanner,
    PageContainer,
    Header,
} from "../Components";



export default function Home() {
    const [user, setUser] = useState();

    const getUser = async () => {
        const response = await fetch("/api/user");
        const data = await response.json();
        console.log('data', data)
        setUser(data)
    }

    useEffect(() => {
        getUser();
    }, [])

    const pageMeta = {
        title: "Home",
        description: "Home Desc"
    }

    return (
        <PageContainer pageMeta={pageMeta}>
            <Header />
            <HomepageBanner />

            {user && (
                <h1>{ user.name }</h1>
            )}
        </PageContainer>
    )
}