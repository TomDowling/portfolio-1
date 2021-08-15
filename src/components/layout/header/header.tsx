import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../../public/logo.png';

type IMainProps = {
    className: string;
};

const CustomHeader = (props: IMainProps) => {
    return (
        <header className={props.className} id="header">
            <div className="max-w-screen-lg mx-auto flex justify-between items-center">
                <Link href="/">
                    <a className="no-hover inline-flex">
                        <Image className="logo" src={logo} alt="Tom Dowling Logo" width="60" height="60" />
                    </a>
                </Link>

                <ul className="flex flex-wrap text-xl">
                    <li className="mr-6">
                        <Link href="#about">
                            <a>
                                About
                            </a>
                        </Link>
                    </li>
                    <li className="mr-6">
                        <Link href="#contact">
                            <a>
                                Contact
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default CustomHeader;