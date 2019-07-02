import PropTypes from "prop-types";

const BannerText = props => (
	<div className="banner-text text-center">
		<h1>{props.h1}</h1>
		<h3>{props.h3}</h3>
		<div  className="content">
			{props.content}
		</div>
	</div>
);

BannerText.propTypes = {
	h1: PropTypes.string,
	h3: PropTypes.string,
	content: PropTypes.string
};

export default BannerText;
