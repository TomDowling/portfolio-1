import MainMenu from "../Menus/MainMenu";

class Header extends React.Component {
	mobileMenu = () => {
		let menu = this.refs.menu;

		if (!menu.classList.contains("collapse")) {
			menu.classList.add("collapse");
		} else {
			menu.classList.remove("collapse");
		}
	};

	render() {
		return (
			<header>
				<nav className="navbar navbar-expand-lg navbar-light">
					<div className="container">
						<a className="navbar-brand" href="/">
							<img
								className="logo"
								src="./../static/images/logos.png"
							/>
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
							onClick={this.mobileMenu}
						>
							<span className="navbar-toggler-icon" />
						</button>

						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent"
							ref="menu"
						>
						<MainMenu />
						</div>
					</div>
				</nav>
			</header>
		);
	}
}

export default Header;
