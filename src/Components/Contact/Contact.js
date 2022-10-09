import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [letterClass] = useState("text-animate");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_565msza",
        "template_yab4jzt",
        e.target,
        // U have to put your user ID here
        "5s-n7zU51w7AmJpM4"
      )
      .then(
        () => {
          alert("Massege successfuly sent");
          window.location.reload(false);
        },
        () => {
          alert("failed to send the message, please try again");
        }
      );
  };
  return (
    <>
      <div class="container col-xl-10 col-xxl-12 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
          <div class="col-lg-7 text-center text-lg-start">
            <h1 class="display-4 fw-bold lh-1 mb-3">Contact ME</h1>
            <p class="col-lg-10 fs-4">
              I am a passionate worker with good a experience, you can{" "}
              <em>CONTACT ME</em> and we can colaborate or work togther{" "}
              <em>
                OR WE CAN HAVE A CUP OF TEA <strong>: )</strong>
              </em>
            </p>
          </div>

          {/*  */}
          {/*  */}
          {/*  */}
          <div class="col-md-10 mx-auto col-lg-5">
            <form
              class="p-4 p-md-4 border rounded-5 bg-dark"
              onSubmit={sendEmail}
            >
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Name"
                  name="name"
                />
                <label for="floatingInput">Name</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  name="email"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Subject"
                  name="subject"
                />
                <label for="floatingPassword">Subject</label>
              </div>
              <div class="input-group">
                <textarea
                  class="form-control mb-3"
                  aria-label="With textarea"
                  name="message"
                ></textarea>
              </div>

              <input
                class="w-100 btn btn-lg btn-primary"
                type="submit"
                value="SEND"
              />

              <hr class="my-4" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
