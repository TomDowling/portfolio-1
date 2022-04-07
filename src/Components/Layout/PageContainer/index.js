import Head from "next/head";



export default function PageContainer(props) {
    const { pageMeta, children } = props;

    return (
        <div>
            <Head>
                <title>{pageMeta?.title || ""} | Tom Dowling</title>
                <meta name="description" content={pageMeta?.description || ""} />
            </Head>

            { children }
        </div>
    );
}