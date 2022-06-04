import React, { useEffect, useState } from "react";

/*  Hooks & State  */
import {
    useEffectOnce
} from "../src/Hooks";

/*  Components  */
import {
    HomepageBanner,
    PageContainer,
    Header,
    IntroSection,
    SkillsSection,
    CareerSection
} from "../src/Components";



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
            <SkillsSection />
            <CareerSection />
        </PageContainer>
    )
}