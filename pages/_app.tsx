import type { AppProps } from "next/app";
import "../src/Styles/main.scss";



export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}