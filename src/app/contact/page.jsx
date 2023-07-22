import React from 'react';
import ContactCard from "@/app/components/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "@/app/components/ContactForm";

const ContactPage = () => {
  return (
    <div>
      <ContactCard/>
      <section className={styles.contact_section}>
                    <h2>We did love to hear <span> from you </span></h2>

                    <ContactForm />
                </section>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231781.30249689624!2d66.97535187922456!3d24.8097337596222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ff89c73993d%3A0x91c53ba630675f8!2sPresidential%20Initiative%20for%20Artificial%20Intelligence%20and%20Computing%20(PIAIC)%20Headquarters!5e0!3m2!1sen!2s!4v1689296263833!5m2!1sen!2s"  width={100} height={450} style={{border: 0}}   loading="lazy" className={styles.mapping} referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default ContactPage