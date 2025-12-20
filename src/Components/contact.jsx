import '../App.css'
import '../Css/contact.css'
import emailjs from "@emailjs/browser";
import { useRef, useState } from 'react';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(null);

    emailjs
      .sendForm(
        SERVICE_ID, 
        TEMPLATE_ID, 
        formRef.current, 
        PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <div className="portfolio-bg">
      <section className="contact-section">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-text">
          Have an idea, opportunity, or question? Drop a message.
        </p>

        <div className="contact-grid">
            <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-field">
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    name="from_name"
                    placeholder="Your name"
                    required
                />
                </div>

                <div className="contact-field">
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="reply_to"
                    placeholder="you@example.com"
                    required
                />
                </div>

                <div className="contact-field">
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Tell me about your project or question..."
                    required
                />
                </div>

                <button type="submit" className="contact-submit">
                Send Message
                </button>

                {status === "success" && (
                <p className="contact-status success">
                    Thanks! Your message has been sent.
                </p>
                )}
                {status === "error" && (
                <p className="contact-status error">
                    Something went wrong. Please try again.
                </p>
                )}
                </form>
                <div className="contact-direct">
                    <h3>Or reach me at</h3>
                    <ul>
                        <li>
                            Email:{" "}
                            <a href="poushalibhattacharyya02@gmail.com">poushalibhattacharyya02@gmail.com</a>
                        </li>
                        <li>
                            LinkedIn:{" "}
                        <a
                        href="www.linkedin.com/in/poushali020106"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        poushali020106
                        </a>
                        </li>
                        <li>
                            GitHub:{" "}
                        <a
                        href="https://github.com/Poushali-02"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Poushali-02
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
    )
}

export default Contact;