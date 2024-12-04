import React from "react";

const Feedback = () => {
  const feedback = (e) => {
    e.preventDefault();
    const feedbackName = document.getElementById("feedbackName");
    const feedbackText = document.getElementById("feedbackText");
    if (feedbackName.value !== "" && feedbackText.value !== "") {
      console.log("Name: ", feedbackName.value);
      console.log("Feedback Text: ", feedbackText.value);

      feedbackName.value = "";
      feedbackText.value = "";

      alert("🙏 Thanks for your feedback.\n Regards - Dr. Rahul Kapahi.");
    } else {
      alert(
        "We appreciate your efforts.\n Kindly fill the complete feedback form.\n Please don't leave any box blank."
      );
    }
  };
  return (
    <div>
      <div className="feedback container">
        <h3 className="heading-tertiary">Please share your experience</h3>
        <form
          action="https://formsubmit.co/entclinicdwarka@gmail.com"
          method="POST"
          name="feedbackForm"
          onSubmit={feedback}
        >
          <div className="mb-5">
            <label
              htmlFor="feedbackName"
              className="form-label list-item"
              name="name"
            >
              Your Name
            </label>
            <input
              type="text"
              className="form-control py-3"
              id="feedbackName"
              name="name"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="feedbackText"
              className="form-label list-item"
              name="feedback"
            >
              We would love to hear your feedback
            </label>
            <input
              type="text"
              className="form-control py-3"
              id="feedbackText"
              name="feedback"
              required
            />
          </div>
          <button
            type="submit"
            id="feedbackBtn"
            className="btn btn-cta py-2 px-5"
            onClick={feedback}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
