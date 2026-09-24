import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <Reveal as="p" className="kicker">
            GET IN TOUCH
          </Reveal>
          <Reveal as="h2" className="section-title">
            Unlock <span className="script">Priority Access</span>
          </Reveal>
          <Reveal as="p" className="section-lede">
            Register now for early pricing, floor plans and construction updates
            on the Jasper model at Summer Heaven.
          </Reveal>
          <Reveal as="ul" className="contact-details">
            <li>
              <span className="cd-label">Location</span>
              <span>800 Elizabeth Street, Wallaceburg, ON N8A 3A3</span>
            </li>
            <li>
              <span className="cd-label">Email</span>
              <span>
                <a href="mailto:info@summerheaven.ca">info@summerheaven.ca</a>
              </span>
            </li>
            <li>
              <span className="cd-label">Phone</span>
              <span>
                <a href="tel:+14165682000">+1 (416) 568-2000</a>
              </span>
            </li>
            <li>
              <span className="cd-label">Web</span>
              <span>
                <a href="https://summerheaven.ca">summerheaven.ca</a>
              </span>
            </li>
          </Reveal>
          <Reveal as="div" className="open-house-note">
            <span className="n-dot" />
            <div>
              <h5>Open Houses</h5>
              <p>
                We host open houses regularly — call or email us to confirm the
                next date and book your visit.
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal as="div">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
