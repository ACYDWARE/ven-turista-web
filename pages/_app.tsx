import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../fonts/inter.css"
import Layout from "@/app/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}
