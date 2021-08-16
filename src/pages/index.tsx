import { useRouter } from 'next/router';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import Header from '../components/layout/header/header';
import Banner from '../components/sections/banner';
import Footer from '../components/layout/footer/footer';

const Index = () => {
    const router = useRouter();
    
    return (
        <>
            <Main
                meta={
                    <Meta
                    title="Tom Dowling Portfolio"
                    description="The Portfolio of Bournemouth Based Software Developer Tom Dowling"
                    />
                }
            >
            </Main>
            <Header />
            <Banner className="homepage" text="Hi. I'm Tom Dowling" />
            <section className="section info" id="about">
                <div className="max-w-screen-lg mx-auto">
                    <h2>About Me</h2>
                    <p>My name is Tom Dowling and I'm a Bournemouth based Software Developer. I have a history in web development but been working on software solutions more recently. I have been in the world of Development since leaving Sixth form early to start an apprenticeship in Web Development.</p>
                    <br />
                    <p>I am proficient in HTML and CSS / Less / Sass, with a strong understand of Javascript, but with an ever growing ability. I have a strong interest in React and React Native and enjoy working with these frameworks in my freetime. I am currently working on my understanding of Typescript to have a stronger skillset if required. This portfolio uses React and Typescript.</p>
                    <br />
                    <p>Even though React is the framework I mostly use on projects, I am open to new framework and have spent some time researching Vue to learn about its use-cases and if I could sometimes use it instead of React as the better option.</p>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Index;    