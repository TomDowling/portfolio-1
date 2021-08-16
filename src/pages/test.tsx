import { useRouter } from 'next/router';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import Header from '../components/layout/header/header';
import Banner from '../components/sections/banner';
import Footer from '../components/layout/footer/footer';

const Test = () => {
    const router = useRouter();
    
    return (
        <>
            <Main
                meta={
                    <Meta
                    title="Test page"
                    description="The Portfolio of Bournemouth Based Software Developer Tom Dowling"
                    />
                }
            >
            </Main>
            <Header />
            <Banner className="test" />
            <section className="section info" id="about">
                <div className="max-w-screen-lg mx-auto">
                    <h2>Test Page.</h2>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Test;    