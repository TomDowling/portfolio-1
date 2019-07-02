import PropTypes from "prop-types";
import BannerText from "./BannerText";

const Banner = props => (
	<section className="banner">
		<img src={props.image} alt="Alt Text" />
		<BannerText
			h1={props.h1}
			h3={props.h3}
			content={props.content}
		/>
	</section>
);

Banner.propTypes = {
	image: PropTypes.string,
	h1: PropTypes.string,
	h3: PropTypes.string,
	content: PropTypes.string
};

export default Banner;
