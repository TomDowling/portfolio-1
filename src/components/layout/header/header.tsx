import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <div className="max-w-screen-md mx-auto">
                <h1>Test</h1>

                <ul className="flex flex-wrap text-xl">
                    <li className="mr-6">
                        <Link href="#about">
                            <a className="text-gray-700 border-none hover:text-gray-900">
                                About
                            </a>
                        </Link>
                    </li>
                    <li className="mr-6">
                        <Link href="#contact">
                            <a className="text-gray-700 border-none hover:text-gray-900">
                                Contact
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;