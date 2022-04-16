import '../styles/globals.css'
import '../util/hexStyles.css'
import { TwitterProvider } from "../context/TwitterContext"

function MyApp({ Component, pageProps }) {
  return (
    <TwitterProvider>
    <Component {...pageProps} />
    </TwitterProvider>
  )


}

export default MyApp
