import React from "react"

function Contact() {
  return (
    <div className="contact">
      <h1>Let's talk.</h1>
      <form>
        <label>
          Full name
          <input type="text" name="name" />
        </label>
        <label>
          Email
          <input type="text" name="email" />
        </label>
        <label>
          Subject
          <input type="text" name="subject" />
        </label>
        <textarea />
      </form>
    </div>
  )
}

export default Contact
