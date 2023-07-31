import '/styles/global.scss'
import TopNav from "../components/TopNav/TopNav";
import MainNav from '../components/MainNav/MainNav';
import Footer from '../components/Footer/Footer';
import Enquiry from '../components/Enquiry/Enquiry';
import ProductList from '../components/ProductList/ProductList';


export default function Home() {
  return (
    <div>
      <TopNav/>
      <MainNav/>
      <ProductList/>
      <Enquiry/>
      <Footer/>
    </div>
  )
}