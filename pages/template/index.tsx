import React from 'react';

/*  Components  */
import {
    PageContainer
} from "../../src/Components";



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