import { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import { AppConfig } from '../utils/AppConfig';
import Header from '../components/layout/header/header';

type IMainProps = {
    meta: ReactNode;
    children: ReactNode;
};

function headerScroll() {
    const [headerSticky, setheaderSticky] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            if(window.pageYOffset > 1) {
                document.getElementById("header").classList.add("sticky");
            }

            if(window.pageYOffset< 1) {
                document.getElementById("header").classList.remove("sticky");
            }
        }
    }, []);
}

const Main = (props: IMainProps) => (
    <div className="antialiased w-full text-gray-700" onScroll={headerScroll()}>
        {props.meta}

        <Header className="sticky" />
        
        <div className="max-w-screen-lg mx-auto">
            <div className="border-b border-gray-300">
                <div className="pt-16 pb-8">
                    <div className="font-bold text-3xl text-gray-900 page-title">
                        {AppConfig.title}
                    </div>
                    <div className="text-xl">{AppConfig.description}</div>
                </div>
            </div>
            
            <div className="py-5 text-xl content">{props.children}</div>
        </div>
    </div>
);

export { Main };