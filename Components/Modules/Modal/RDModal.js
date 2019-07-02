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
          <h3 className="title">RD Graphic Design</h3>
        </div>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h3 className="title">Reece Dickinson Graphic Design</h3>
          <img src="https://raw.githubusercontent.com/RidhoBeteer/SIA-Design/master/screenshot/1.JPG" alt="Site Screenshot" className="img-thumbnail" />
          <p>Reece Dickinson is a client who needed a site to show of his own work. We created this flat HTML website for him to show off his work and to start his own freelance adventure. Then later we moved it to a CMS to help with content management.</p>
          <p><span className="label">Website: </span><Link><a href="https://reecedickinson.co.uk/" target="_blank">RD Graphic Design</a></Link></p>
          <p><span className="label">Release Date: </span><span className="bold">May 2018</span></p>
          <p><span className="label">Service/s: </span><span className="bold">Web Designs, SEO, Hosting</span></p>
        </Modal>
      </div>
    );
  }
}