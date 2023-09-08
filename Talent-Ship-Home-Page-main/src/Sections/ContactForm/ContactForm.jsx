import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div>
      <div className="contact-form text-white">
        <div className="container">
          <div className="row">
            <div className="col col-12 col-md-6 py-5 contact-col-size">
              <div className="d-flex align-items-start flex-column contact-col-1-size p-4 p-md-0">
                <div>
                <h1 className="contact-form-heading display-4 fw-normal my-5">What to Have a Free Session ?</h1>
                <p className="h4 fw-light me-5">Reach out to us. We can make grow your business faster than ever.</p>
                </div>
                <div className="mt-auto">
                  <p className="contact-form-info-name">ADDRESS</p>
                  <p className="mb-4">Uttar Pradesh, India</p>
                  <p className="contact-form-info-name">EMAIL</p>
                  <p className="mb-4">TSGF@gmail.com</p>
                  <p className="contact-form-info-name">WHATSAPP</p>
                  <p>+91-23445670</p>
                </div>
              </div>
            </div>
            <div className="col col-12 col-md-6 bg-black contact-col-size p-5">
              <div className="">
              <div>
              <h1 className="contact-form-heading display-4 fw-normal my-5">Contact Us</h1>
                <form action="" className="contact-form-input">
                  <p>Name</p>
                  <input type="text" placeholder="Your Name" required />
                  <p>Email</p>
                  <input type="email" placeholder="Your Email" required />
                  <p>Phone</p>
                  <input type="number" placeholder="Your Phone" required />
                  <p>Message</p>
                  <input type="text" placeholder="Your Message" />
                </form>
                <button className="button-outline mt-4" > Submit</button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
