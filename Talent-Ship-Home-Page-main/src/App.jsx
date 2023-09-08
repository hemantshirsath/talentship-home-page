import "./App.css";
import CustomCursor from "./Components/CustomCursor/CustomCursor";
import AboutUs from "./Sections/AboutUs/AboutUs";
import Banner from "./Sections/Banner/Banner";
import ContactForm from "./Sections/ContactForm/ContactForm";
import ContactInfo from "./Sections/ContactInfo/ContactInfo";
import Extra1 from "./Sections/Extra/Extra1";
import Footer from "./Sections/Footer/Footer";
import SharedNavbar from "./Sections/Navbar/SharedNavbar";
import Banner2 from "./Sections/Banner2/Banner2";
import Partners from "./Sections/Partners/Partners";

function App() {
  return (
    <>
      <div>
        <CustomCursor></CustomCursor>
        <SharedNavbar></SharedNavbar>
        <Banner></Banner>
        <AboutUs></AboutUs>
        <Extra1></Extra1>
        <Banner2></Banner2>
        <Partners></Partners>
        <ContactForm></ContactForm>
        <ContactInfo></ContactInfo>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
