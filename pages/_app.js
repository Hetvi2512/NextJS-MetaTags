import {useEffect} from 'react'
import "antd/dist/antd.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/scss/helper.scss'
import '../styles/scss/app.scss'
import '../styles/globals.css'
import '../styles/NavBar.css'
import '../styles/StyleSection.css'
import '../styles/Ticker.css'
import '../styles/ArticleLayout.css'
import "react-modern-drawer/dist/index.css";

import '../styles/scss/helper.scss'

import './app.css'
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log("Documet loaded")
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap.js') : null
}, [])
  return <Component {...pageProps} />
}

export default MyApp
