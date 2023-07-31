import '/styles/global.scss'
import TopNav from "../components/TopNav/TopNav";
import Banner from '../components/Banner/Banner';
import MainNav from '../components/MainNav/MainNav';
import Footer from '../components/Footer/Footer';
import Enquiry from '../components/Enquiry/Enquiry';
import HomeContent from '../components/HomeContent/HomeContent';

export default function Home() {
  return (
    <div>
      <TopNav/>
      <MainNav/>
      <Banner/>
      <HomeContent/>
      <Enquiry/>
      <Footer/>
    </div>
  )
}
