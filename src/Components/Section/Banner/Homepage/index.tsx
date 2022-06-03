import ReactTypingEffect from "react-typing-effect";
import Typed from 'react-typed';



export function HomepageBanner() {
    return (
        <section className="custom-component cat-section homepage-banner">
            <div className="content">
                <h1>Hello, I'm</h1>

                <h1>
                    <Typed
                        strings={["Tomo", "Tom Ipsum"]}
                        typeSpeed={50}
                        backSpeed={100}
                        backDelay={200}
                        smartBackspace
                        />
                </h1>
            </div>
        </section>
    )
}