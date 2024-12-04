import React from "react";

var validator = require("email-validator");

const Cta = () => {
  let handleContact = (e) => {
    e.preventDefault();

    let contactName = document.getElementById("fullName");
    let contactEmail = document.getElementById("email");
    let contactPhone = document.getElementById("selectWhere");
    let contactReason = document.getElementById("reason");

    if (!contactPhone.value.match("[0-9]{10}")) {
      alert("Please enter a valid phone number");
    } else if (!validator.validate(contactEmail.value)) {
      alert("Please enter a valid email");
    } else {
      if (
        contactName.value !== "" &&
        contactEmail.value !== "" &&
        contactPhone.value !== "" &&
        contactReason.value !== ""
      ) {
        console.log("Name: ", contactName.value);
        console.log("Email: ", contactEmail.value);
        console.log("Phone: ", contactPhone.value);
        console.log("Reason: ", contactReason.value);

        contactName.value = "";
        contactEmail.value = "";
        contactPhone.value = "";
        contactReason.value = "Consultation";

        alert("🙏 Thanks for contacting us.\n We will revert back asap.");
      } else {
        alert(
          "We appreciate your efforts.\n Kindly fill the complete contact form.\n Please don't leave any box blank."
        );
      }
    }
  };
  return (
    <section className="section-cta" id="cta">
      <div className="container">
        <div className="cta">
          <div className="cta-text-box">
            <h2 className="heading-secondary">Book An Appointment!</h2>
            <p className="cta-text">
              Take the first step towards a healthier you.
              <br />
              Schedule your appointment today.
            </p>
            <form
              action="https://formsubmit.co/entclinicdwarka@gmail.com"
              method="POST"
              className="cta-form"
              name="sign-up"
            >
              <div>
                <label htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Abc Xyz"
                  name="name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="me@example.com"
                  name="email"
                  required
                />
              </div>
              <div>
                <label htmlFor="selectWhere">Contact Phone</label>
                <input
                  id="selectWhere"
                  type="tel"
                  name="phone"
                  placeholder="+91-**********"
                  required
                ></input>
              </div>

              <div>
                <label htmlFor="reason">Reason to contact</label>
                <select id="reason" type="text" name="reason" required>
                  <option value="Consultation">Consultation</option>
                  <option value="Enquiry">Enquiry</option>
                  <option value="Other">Other</option>
                </select>
                {/* <input
                  id="reason"
                  type="text"
                  name="reason"
                  placeholder="Consultation/ Enquiry/Other"
                  required
                /> */}
              </div>

              <p className="cta-footer-text">
                *We usually respond within 24 hours.
                <br />
                **In emergency &nbsp; 📱
                <span>
                  <ion-icon className="tel-icon" name="call" />
                </span>
                <strong>&nbsp; +91-8800047117</strong>.
              </p>
              <button
                type="submit"
                className="btn btn-cta btn--form "
                onClick={handleContact}
              >
                Submit
              </button>
            </form>
          </div>
          <div
            className="cta-img-box"
            role="img"
            aria-label="reception area of clinic"
          />
        </div>
      </div>
    </section>
  );
};

export default Cta;
