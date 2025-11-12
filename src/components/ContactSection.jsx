import React, { useState } from "react";
import "../styles/ContactSection.css";
import locationIcon from "../assets/location.png";
import phoneIcon from "../assets/phone.png";
import mailIcon from "../assets/mail.png";
import instagramIcon from "../assets/instagram.png";
import linkedinIcon from "../assets/linkedin.png";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);
  const [success, setSuccess] = useState(false);
  const [desktopChoiceOpen, setDesktopChoiceOpen] = useState(false);
  const [preparedURLs, setPreparedURLs] = useState(null);

  const validate = () => {
    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.number.trim()) newErrors.number = "Phone number is required";
    else if (!phoneRegex.test(formData.number))
      newErrors.number = "Enter a valid 10-digit phone number";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Enter a valid email address";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Prepare the encoded messages and both URIs
  const prepareWhatsAppLinks = () => {
    const { name, number, email, message } = formData;
    const plainText = `Hello Vatbae Team!\nName: ${name}\nPhone: ${number}\nEmail: ${email}\nMessage: ${message}`;
    const encodedText = encodeURIComponent(plainText);
    const phoneNumber = "919677780345";

    // App URI (whatsapp scheme) and Web URL
    const appUri = `whatsapp://send?phone=${phoneNumber}&text=${encodedText}`;
    const webUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedText}`;
    return { plainText, appUri, webUrl };
  };

  const handleWhatsAppSend = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const { plainText, appUri, webUrl } = prepareWhatsAppLinks();

    // Try to copy to clipboard (best-effort)
    try {
      await navigator.clipboard.writeText(plainText);
      setToast("📋 Message copied! Choose how you'd like to open WhatsApp.");
    } catch {
      setToast("Opening WhatsApp..."); // still continue even if copy fails
    }

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    // Save prepared links to state so modal buttons can use them
    setPreparedURLs({ appUri, webUrl });

    if (isMobile) {
      // On mobile directly attempt to open the WhatsApp app scheme first
      window.open(appUri, "_blank");
      setSuccess(true);
      setFormData({ name: "", number: "", email: "", message: "" });
      setTimeout(() => {
        setToast(null);
        setSuccess(false);
      }, 3500);
    } else {
      // On desktop, show choice modal (app vs web)
      setDesktopChoiceOpen(true);
      // Keep form populated until user picks (or they can cancel)
    }
  };

  // When user explicitly chooses "Open App" on desktop
  const openWhatsAppApp = () => {
    if (!preparedURLs) return;
    // Attempt app scheme
    window.open(preparedURLs.appUri, "_blank");
    closeDesktopChoiceAndReset();
  };

  // When user chooses "Open Web" on desktop
  const openWhatsAppWeb = () => {
    if (!preparedURLs) return;
    window.open(preparedURLs.webUrl, "_blank");
    closeDesktopChoiceAndReset();
  };

  const closeDesktopChoiceAndReset = () => {
    setDesktopChoiceOpen(false);
    setSuccess(true);
    setFormData({ name: "", number: "", email: "", message: "" });
    setTimeout(() => {
      setToast(null);
      setSuccess(false);
      setPreparedURLs(null);
    }, 3500);
  };

  return (
    <section className="contact-section">
      <div className="contact-wrapper">
        {/* LEFT SIDE */}
        <div className="contact-left">
          <div className="contact-heading">
            <p className="contact-subtitle">Contact Us</p>
            <h2 className="contact-title">Reach us at</h2>
          </div>

          <div className="contact-block top-border">
            <div className="info-item">
              <img src={locationIcon} alt="Location" className="icon" />
              <div>
                <h4>Address</h4>
                <p>
                  21/51, VOC Nagar 1st Street,
                  <br />
                  Valaankadu, Kumar Nagar, Tiruppur,
                  <br />
                  Tamil Nadu, India, 641603
                </p>
              </div>
            </div>
          </div>

          <div className="contact-block">
            <div className="contact-info">
              <div className="info-item">
                <img src={phoneIcon} alt="Phone" className="icon" />
                <div>
                  <h4>Contact Details</h4>
                  <p>+91 9677780345</p>
                </div>
              </div>

              <div className="info-item">
                <img src={mailIcon} alt="Mail" className="icon" />
                <div>
                  <h4>Email Us</h4>
                  <p>vatbae.studio@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="social-section">
            <h4>Social Media:</h4>
            <div className="social-icons">
              <a href="https://www.instagram.com/vatbae.studio" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a href="https://www.linkedin.com/in/vatbae-studio" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="contact-form" onSubmit={handleWhatsAppSend}>
          <div className="form-group">
            <label>
              Your Name <span className="required">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label>
              Your Number <span className="required">*</span>
            </label>
            <input
              type="text"
              name="number"
              placeholder="Enter your number"
              value={formData.number}
              onChange={handleChange}
            />
            {errors.number && <p className="error">{errors.number}</p>}
          </div>

          <div className="form-group">
            <label>
              Your Email <span className="required">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label>
              Message <span className="required">*</span>
            </label>
            <textarea
              name="message"
              placeholder="Write here..."
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <p className="error">{errors.message}</p>}
          </div>

          <button type="submit" className="send-btn">
            Send →
          </button>

          {success && <p className="success">✅ Message ready in WhatsApp!</p>}
        </form>
      </div>

      {/* Toast */}
      {toast && <div className="toast">{toast}</div>}

      {/* Desktop choice modal */}
      {desktopChoiceOpen && (
        <div className="desktop-choice-overlay" role="dialog" aria-modal="true">
          <div className="desktop-choice">
            <h4>Open WhatsApp</h4>
            <p>Choose how you'd like to continue:</p>
            <div className="desktop-choice-buttons">
              <button className="choice app" onClick={openWhatsAppApp}>
                Open WhatsApp App
              </button>
              <button className="choice web" onClick={openWhatsAppWeb}>
                Open WhatsApp Web
              </button>
              <button className="choice cancel" onClick={() => setDesktopChoiceOpen(false)}>
                Cancel
              </button>
            </div>
            <small className="choice-note">If the desktop app is installed, the app button will open it.</small>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;
