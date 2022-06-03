import React, { useEffect, useState } from "react";

/*  Hooks & State  */
import {
    useEffectOnce
} from "../Hooks";

/*  Components  */
import {
    HomepageBanner,
    PageContainer,
    Header,
    IntroSection,
} from "../Components";



export default function Home() {
    const [user, setUser] = useState();

    const getUser = async () => {
        const response = await fetch("/api/user");
        const data = await response.json();
        setUser(data)
    }

    useEffectOnce(() => {
        getUser();
    })

    const pageMeta = {
        title: "Home",
        description: "Home Desc"
    }

    return (
        <PageContainer pageMeta={pageMeta}>
            <Header />
            <HomepageBanner />
            <IntroSection />

            <p>Skills</p>
            <p>Training_Skills</p>
            <p>Experience_Timeline</p>

            {/* {user && (
                <h1>{ user.name }</h1>
            )} */}
        </PageContainer>
    )
}