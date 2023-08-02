import '/styles/global.scss'
import TopNav from "../components/TopNav/TopNav";
import MainNav from '../components/MainNav/MainNav';
import Footer from '../components/Footer/Footer';
import Enquiry from '../components/Enquiry/Enquiry';
import ProductDetail from '../components/ProductDetail2/ProductDetail';
import {BrowserRouter as Router} from 'react-router-dom';


export default function Home() {
  return (
    <div>
      <Router>
      <TopNav/>
      <MainNav/>
      <ProductDetail/>
      <Enquiry/>
      <Footer/>
      </Router>
    </div>
  )
}