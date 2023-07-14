import ReactTypingEffect from "react-typing-effect";
import Link from 'next/link';
import Image from 'next/image';

/*  Assets  */
import github from "../../../../../public/assets/images/github.png"
import linkedin from "../../../../../public/assets/images/linkedin.png"

/*  3rd Party Modules  */
import Typed from 'react-typed';



export function HomepageBanner() {
    return (
        <section className="custom-component cat-section homepage-banner">
            <div className="content">
                <h1>Hello, I&apos;m</h1>

                <h1>
                    <Typed
                        strings={["Tom Dowling"]}
                        typeSpeed={50}
                        />
                </h1>
                <div className="logos">
                    <Link href="https://github.com/TomDowling/" className="github" target="_blank" />
                    <Link href="https://www.linkedin.com/in/dowling-tom/" className="linkedin" target="_blank" />
                </div>
            </div>
        </section>
    )
}