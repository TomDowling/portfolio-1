import PropTypes from "prop-types";
import HighlightText from "./Text/HighlightText";

const Highlight = props => (
	<section className={props.class} id={props.id}>
		<img src={props.background} className="background-image" />
		<HighlightText h3={props.h3} content={props.content} />
	</section>
);

Highlight.propTypes = {
	id: PropTypes.string,
	background: PropTypes.string,
	content: PropTypes.array
};

export default Highlight;
