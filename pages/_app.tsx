import type { AppProps } from 'next/app'
import Image from 'next/image'
import LinkNew from '../components/LinkNew'
import '../styles/reset.css'

function ImageDiv() {
  return (
    <>
      <div className="div-header">
        <LinkNew link="/">
          <Image src="/images/logo.svg" alt="logo" width="36px" height="53px" />
        </LinkNew>
      </div>
      <style jsx>{`
        .div-header {
          display: flex;
          justify-content: center;
          margin: 10px 0;
        }
      `}</style>
    </>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <ImageDiv />
      </header>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
