import React, { ReactNode } from "react";
import Head from "next/head";



/*
*   Interfaces
*/
interface IPageMeta {
    title?: string,
    description?: string
}

export interface IPageContainerProps {
    children: ReactNode,
    pageMeta: IPageMeta
}



/*
*   Component
*/
export function PageContainer(props) {
    const { pageMeta, children } = props;

    return (
        <div className={`page-container ${pageMeta?.title.toLowerCase()}`}>
            <Head>
                <title>{pageMeta?.title || ""} | Tom Dowling</title>
                <meta name="description" content={pageMeta?.description || ""} />
            </Head>

            <>
                <div id="top" />
                { children }
            </>
        </div>
    );
}