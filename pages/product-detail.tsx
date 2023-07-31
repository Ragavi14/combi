import '/styles/global.scss'
import TopNav from "../components/TopNav/TopNav";
import MainNav from '../components/MainNav/MainNav';
import Footer from '../components/Footer/Footer';
import Enquiry from '../components/Enquiry/Enquiry';
import ProductDetail from '../components/ProductDetail/ProductDetail';


export default function Home() {
  return (
    <div>
      <TopNav/>
      <MainNav/>
      <ProductDetail/>
      <Enquiry/>
      <Footer/>
    </div>
  )
}