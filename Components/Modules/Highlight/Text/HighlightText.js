import PropTypes from "prop-types";

const HighlightText = props => (
	<div className="container">
		<h3>{props.h3}</h3>
		<div className="content">{props.content}</div>
	</div>
);

HighlightText.propTypes = {
	h3: PropTypes.string,
	content: PropTypes.array
};

export default HighlightText;
