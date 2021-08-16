import Link from 'next/link';
import Image from 'next/image';
import github from '../../../../public/github.svg';
import linkedin from '../../../../public/linkedin.svg';
import email from '../../../../public/email.svg';

type IMainProps = {
    className?: string;
};

const Footer = (props: IMainProps) => {
    let currentYear = new Date().getFullYear()

    return (
        <footer className="footer" id="footer">
            <div className="max-w-screen-lg mx-auto flex items-center justify-center flex-col">
                <div className="flex social-icons mb-2">
                    <Link href="https://github.com/tomdowling">
                        <a className="no-hover inline-flex" target="_blank">
                            <Image className="icon" src={github} alt="GitHub Logo" width="40" height="40" />
                        </a>
                    </Link>
                    <Link href="https://www.linkedin.com/in/dowling-tom/">
                        <a className="no-hover inline-flex" target="_blank">
                            <Image className="icon" src={linkedin} alt="LinkedIn Logo" width="40" height="40" />
                        </a>
                    </Link>
                    <Link href="mailto:tom@digital-space.io">
                        <a className="no-hover inline-flex" target="_blank">
                            <Image className="icon" src={email} alt="Email Logo" width="40" height="40" />
                        </a>
                    </Link>
                </div>
            <h3>Copyright &copy; {currentYear} Tom Dowling</h3>
            </div>
        </footer>
    );
};

export default Footer;