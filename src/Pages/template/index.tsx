import React from 'react';

/*  Components  */
import {
    PageContainer
} from "../../Components";



export default function Template() {

    const pageMeta = {
        title: "Template",
        description: "Template Desc"
    }

    return (
        <PageContainer pageMeta={pageMeta}>
            <p>Template</p>
        </PageContainer>
    )
}