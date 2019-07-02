const encode = data => {
	return Object.keys(data)
		.map(
			key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
		)
		.join("&")
}

class Contact extends React.Component {
	constructor(props) {
		super(props)
		this.state = {name: "", email: "", type: "Member", message: ""}
	}

	handleSubmit = e => {
		fetch("/", {
			method: "POST",
			headers: {"Content-Type": "application/x-www-form-urlencoded"},
			body: encode({"form-name": "contact", ...this.state})
		})
			.then(() => alert("Thank you for the message!"))
			.catch(error => alert(error))

		e.preventDefault()
	}

	handleChange = e => this.setState({[e.target.name]: e.target.value})

	render() {
		const {name, email, type, message} = this.state
		return (
			<form onSubmit={this.handleSubmit} id="contact">
				<h3 class="text-center mb-0">Contact us</h3>
				<p>Have a question? Interested in opportunities?</p>
				<div className="form-group">
					<input
						className="form-control"
						type="text"
						name="name"
						placeholder="Name"
						value={name}
						onChange={this.handleChange}
					/>
				</div>
				<div className="form-group">
					<input
						className="form-control"
						type="email"
						name="email"
						placeholder="Email"
						value={email}
						onChange={this.handleChange}
					/>
				</div>
				<div className="form-group d-none">
					<input
						className="form-control"
						type="text"
						name="type"
						placeholder="Email"
						value={type}
					/>
				</div>
				<div className="form-group">
					<textarea
						className="form-control"
						rows="5"
						name="message"
						placeholder="Message"
						value={message}
						onChange={this.handleChange}
					/>
				</div>
				<div className="form-group">
					<button className="btn btn-secondary" type="submit">
						Send
					</button>
				</div>
			</form>
		)
	}
}

export default Contact
