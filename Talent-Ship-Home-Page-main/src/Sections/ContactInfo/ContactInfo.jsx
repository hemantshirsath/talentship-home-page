import "./ContactInfo.css";
import img1 from "../../assets/social-1.jpg";
import img2 from "../../assets/social-2.png";
import img3 from "../../assets/social-3.png";
import img4 from "../../assets/social-4.png";

const ContactInfo = () => {
  return (
    <div className="text-center d-flex align-items-center justify-content-center">
      <div className="about-us">
        <h1 className="about-us-title">Contact With Us</h1>
        <div className="row">
          <div className="mt-5 mt-lg-1 col col-12 col-sm-6 col-lg-3  ">
            <div className="contact-social-info">
            <img src={img1} alt="" className="contact-social-img" />
            <p className="text-center"><span className="fw-bold text-primary">Facebook page :</span> <br /> @TalentShip Global Advisory forum</p>
            </div>
          </div>
          <div className="mt-5 mt-lg-1 col col-12 col-sm-6 col-lg-3">
            <div className="contact-social-info">
            <img src={img2} alt="" className="contact-social-img" />
            <p className="text-center"><span className="fw-bold text-danger">Instagram page :</span> <br /> @TalentShip Global Advisory forum</p>
            </div>
          </div>
          <div className="mt-5 mt-lg-1 col col-12 col-sm-6 col-lg-3 ">
            <div className="contact-social-info">
            <img src={img3} alt="" className="contact-social-img" />
            <p className="text-center"><span className="fw-bold text-info">Linkedin page :</span> <br /> @TalentShip Global Advisory forum</p>
            </div>
          </div>
          <div className="mt-5 mt-lg-1 col col-12 col-sm-6 col-lg-3 ">
            <div className="contact-social-info">
            <img src={img4} alt="" className="contact-social-img" />
            <p className="text-center my-1">
              <span className="fw-bold text-success">WhatsApp :</span> +12323435
            </p>
            <p className="text-center">
              <span className="fw-bold text-success">WhatsApp :</span> +24324523
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
