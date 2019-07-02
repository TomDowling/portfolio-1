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
		this.state = {name: "", email: "", message: ""}
	}

	handleSubmit = e => {
		fetch("/", {
			method: "POST",
			headers: {"Content-Type": "application/x-www-form-urlencoded"},
			body: encode({"form-name": "contact", ...this.state})
		})
			.then(() => alert("Thank you for the message! I will be in touch shortly."))
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
						type="text"
						name="name"
						placeholder="Name"
						value={name}
						onChange={this.handleChange}
					/>
				</div>
				<div className="form-group">
					<input
						type="email"
						name="email"
						placeholder="Email"
						value={email}
						onChange={this.handleChange}
					/>
				</div>
				<div className="form-group">
					<textarea
						rows="5"
						name="message"
						placeholder="Message"
						value={message}
						onChange={this.handleChange}
					/>
				</div>
				<div>
					<button type="submit">
						Send
					</button>
				</div>
			</form>
		)
	}
}

export default Contact
