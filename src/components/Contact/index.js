import React from "react";

import Container from "../Container";

function Contact() {
  return (
    <div className="contact" id="contact">
      <Container>
        <h1>Let's talk.</h1>
        <form>
          <label htmlFor="name">Full name</label>
          <input id="name" type="text" name="name" required />
          <label htmlFor="email">Email</label>
          <input id="email" type="text" name="email" required />
          <label htmlFor="subject">Subject</label>
          <input id="subject" type="text" name="subject" required />
          <label htmlFor="message">Message</label>
          <textarea id="message" required />
          <input type="submit" value="Send" />
        </form>
      </Container>
    </div>
  );
}

export default Contact;
