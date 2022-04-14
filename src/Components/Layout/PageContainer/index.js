import Head from "next/head";



export function PageContainer(props) {
    const { pageMeta, children } = props;

    return (
        <div className={`page-container ${pageMeta?.title.toLowerCase()}`}>
            <Head>
                <title>{pageMeta?.title || ""} | Tom Dowling</title>
                <meta name="description" content={pageMeta?.description || ""} />

                {/* Google Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&family=Source+Sans+Pro:wght@300;400;600;700&display=swap" rel="stylesheet" />
            </Head>

            <>
                <div id="top" />
                { children }
            </>
        </div>
    );
}