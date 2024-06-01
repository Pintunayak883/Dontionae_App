import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSandMessage = (e) => {
    e.preventDefault();
    try {
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="contact">
        <div className="container">
          <div className="banner">
            <form onSubmit={handleSandMessage}>
              <h2>CONTACT US</h2>
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Your Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <textarea
                rows={10}
                type="text"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button className="btn">Seand Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
