import Modal from 'react-responsive-modal';
import Link from "next/link";

export default class MyModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            title: this.props.title,
            img: this.props.img,
            imgAlt: this.props.imgAlt,
            summary: this.props.summary,
            link: this.props.link,
            date: this.props.date,
            tags: this.props.tags,
            key: this.props.title
        };
    }
    
    onOpenModal = () => {
        this.setState({ open: true });
    };
    
    onCloseModal = () => {
        this.setState({ open: false });
    };
    
    render() {
        const { open, title, img, imgAlt, summary, link, date, tags, key } = this.state;
        return (
            <div className="portfolio-modal col-md-4">
                <div onClick={this.onOpenModal}>
                    <img src={img} alt={imgAlt} className="img-thumbnail" />
                    <h3 className="title">{title}</h3>
                    <i className="fas fa-plus"></i>
                </div>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <div className="portfolio-modal open">
                        <h3 className="title">{title}</h3>
                        <img src={img} alt={imgAlt} className="img-thumbnail" />
                        <p>{summary}</p>
                        <p><span className="label">Website: </span><span className="bold">{link}</span></p>
                        <p><span className="label">Release Date: </span><span className="bold">{date}</span></p>
                        <p><span className="label">Service/s: </span><span className="bold">{tags}</span></p>
                    </div>
                </Modal>
            </div>
            );
        }
    }