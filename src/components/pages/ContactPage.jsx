import React, { useState } from "react";
import { toast } from "react-toastify";

function ContactPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = (event) => {
    event.preventDefault();

    if (!firstName || !lastName || !email || !message) {
      toast.error("Please fill out all the information!");
      return;
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");

    toast.success("We'll get back to you shortly!");
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form className="contact-form" onSubmit={submit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactPage;
