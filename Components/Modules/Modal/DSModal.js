import Modal from 'react-responsive-modal';
import Link from "next/link";

export default class MyModal extends React.Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    let { title } = this.props
    return (
      <div class="portfolio-modal">
        <div onClick={this.onOpenModal}>
          <img src="https://raw.githubusercontent.com/RidhoBeteer/SIA-Design/master/screenshot/1.JPG" alt="Site Screenshot" className="img-thumbnail" />
          <h3 className="title">Digital Space</h3>
        </div>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h3 className="title">Digital Space</h3>
          <img src="https://raw.githubusercontent.com/RidhoBeteer/SIA-Design/master/screenshot/1.JPG" alt="Site Screenshot" className="img-thumbnail" />
          <p>This is my own site that I use when I do freelancing work.</p>
          <p><span className="label">Website: </span><Link><a href="https://digital-space.io" target="_blank">Digital-Space</a></Link></p>
          <p><span className="label">Release Date: </span><span className="bold">July 2018</span></p>
          <p><span className="label">Service/s: </span><span className="bold">Web Design, Hosting</span></p>
        </Modal>
      </div>
    );
  }
}