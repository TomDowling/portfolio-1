import { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
    meta: ReactNode;
    children: ReactNode;
};

function headerScroll() {
    const [headerSticky, setheaderSticky] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            if(window.pageYOffset > 5) {
                document.getElementById("header").classList.add("scroll");
            }

            if(window.pageYOffset < 5) {
                document.getElementById("header").classList.remove("scroll");
            }
        }
    }, []);
}

const Main = (props: IMainProps) => (
    <div className="antialiased w-full text-gray-700" onScroll={headerScroll()}>
        {props.meta}

        <div id="top"></div>
    </div>
);

export { Main };