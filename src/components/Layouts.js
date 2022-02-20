import * as React from 'react'
import 'normalize.css'
import '../assets/css/main.css'
import Footer from './Footer'
import NavBar from './NavBar'


const Layout = ({pageTitle, children}) => {
    return(
        <div>
            <NavBar/>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout