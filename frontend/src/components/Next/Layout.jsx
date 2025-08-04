import About from "./About.jsx"
import Aloqa from "./Aloqa.jsx"
import Hamkor from "./Hamkor.jsx"
import Header from "./Header.jsx"
import MiniNavbar from "./MiniNavbar.jsx"
import Navbar from "./Navbar.jsx"
import News from "./News.jsx"
import Project from "./Project.jsx"
import Footer from "./Footer.jsx"
export default function Layout(){
    return(

    <>
            <MiniNavbar />
            <Navbar />
            <Header />
            <About />
            <Project />
            <News/>
            <Hamkor />
            <Aloqa />
            <Footer />
    </>
    )
}