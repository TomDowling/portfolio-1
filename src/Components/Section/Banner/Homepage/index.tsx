import ReactTypingEffect from "react-typing-effect";
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
            </div>
        </section>
    )
}