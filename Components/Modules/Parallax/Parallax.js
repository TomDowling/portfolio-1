import PropTypes from "prop-types";
import { Parallax, Background } from "react-parallax";

const TheParallax = props => (
	<Parallax strength={300} className="highlight">
		<div className="container">{props.content}</div>
		<Background className="custom-bg">
			<img src={props.img} />
		</Background>
	</Parallax>
);

TheParallax.propTypes = {
	content: PropTypes.array,
	img: PropTypes.string
};

export default TheParallax;
