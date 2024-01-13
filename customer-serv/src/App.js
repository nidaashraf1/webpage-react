import Navbar from './components/Navbar'
import './App.css';
import"./assets/Sass/cust-service.scss";
import Customer from './pages/homepage/customer/Customer';
import Payment from './pages/homepage/payment/Payment';
import Overview from './pages/homepage/overview/Overview';
import Simpleprocess from './pages/homepage/simpleProcess/Simpleprocess';
import Work from './pages/homepage/work/Work';
import PricingPlan from './pages/homepage/pricingPlan/PricingPlan';
import ImageGallery from './pages/homepage/image-gallery/ImageGallery';
import Information from './pages/homepage/imformation/Information';
import Yourproject from './pages/homepage/yourProject/YourProject';
import ContactSec from './pages/homepage/contact-sec/ContactSec';
import Footer from './components/Footer';
function App() {
  return (
   <>
   <Navbar/>
   <Customer/>
   <Payment/>
   <Overview/>
   <Simpleprocess/>
   <Work/>
   <PricingPlan/>
   <ImageGallery/>
    <Information/>
   <Yourproject/>
   <ContactSec/>
   <Footer/> 
   </>
  );
}

export default App;

