import "./footer.css";
import { IMAGES } from "../../assets/images";

const Footer = () => {
  return (
   <footer className="foot">
      <h1>Luxury without labels.</h1>
       
      <img src={IMAGES.logo} alt="logo" className="logo" />

      <p>Unbranded luxury-grade essentials from the same manufacturers as your favorite brands. No logos, no markups.</p>


      <div className="section1">
         <p>The capstone of luxury, with each piece representing the pinnacle of fine materials, master craftsmanship, and timeless design.</p>
         <img src={IMAGES.girl} alt="girl" className="girl" />
      </div>
      <div className="section2">
        <p>Our commitment to quality.</p>
        <p className="p2">It all starts with our goal of making luxury-level products accessible to all. Whether it’s sourcing Grade A cashmere from Mongolia or devoting hundreds of hours of wear-testing to develop the perfect leather sneakers — we won’t sell it until we love it.</p>
        <img src={IMAGES.image} alt="image" className="image" />
      </div>
   </footer>
    
  );
};

export default Footer;