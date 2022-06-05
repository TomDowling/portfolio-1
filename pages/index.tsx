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
    CareerSection,
    ContactSection
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
        title: "Portfolio",
        description: "I am Tom Dowling (aka Tomo) a frontend developer who specialises in React. Based in Bournemouth I work with everything related to the frontend from HTML to node."
    }

    return (
        <PageContainer pageMeta={pageMeta}>
            <Header />
            <HomepageBanner />
            <IntroSection />
            <SkillsSection />
            <CareerSection />
            <ContactSection />
        </PageContainer>
    )
}