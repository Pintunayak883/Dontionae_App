import React, { useState } from "react";

const Donate = () => {
  const [amount, setAmount] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);
  return (
    <>
      <div className="donate">
        <form action="">
          <div className="">
            <img src="/logo.png" alt="" />
          </div>
          <div className="">
            <label htmlFor="">Show your Love for Poor's</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter Donation Amount (USD)"
            />
          </div>

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
            type="text"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" disabled={disableBtn} className="btn">
            Donate {amount ? `${amount}$` : "0$"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Donate;
