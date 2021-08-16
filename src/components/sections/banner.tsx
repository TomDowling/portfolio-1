import ReactTypingEffect from 'react-typing-effect';

type IMainProps = {
    className?: string;
    text?: string;
    backgroundImage?: string;
};

let setText = (props: IMainProps) => {
    if(props.text === undefined) return;
    
    if(props.text.length > 1) {
        return (
            <ReactTypingEffect
                text={[props.text]}
                eraseDelay={100000}
                className="custom-text"
                typingDelay={1000}
            />
        )
    }

    return
}

const Banner = (props: IMainProps) => {
    // TODO: Background Image currently doesn't work
    let styles = {
        backgroundImage: props.backgroundImage
    }

    return (
        <section className={props.className + " section banner flex justify-center items-center"} style={styles}>
            <div className="text">
                {setText(props)}
            </div>
        </section>
    );
};

export default Banner;