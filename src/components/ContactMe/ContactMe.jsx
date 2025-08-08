import React, { useEffect } from "react";
import toast from "react-hot-toast";
import "aos/dist/aos.css";
import Aos from "aos";

const ContactMe = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const contactInfo = {
      name,
      email,
      message,
    };
    console.log(contactInfo);
    toast.success("Message Send Successfully");
    form.reset();

    useEffect(() => {
      Aos.init();
    }, []);
  };
  return (
    <div>
      <div className="w-11/12 mx-auto pt-16" id="contact">
        <h1
          className="text-5xl font-bold text-center my-10"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Contact Me
        </h1>
        <div className="card card-side bg-base-100 shadow-xl flex-col lg:flex-row pb-14">
          <div className="md:w-1/2 px-20 pt-10">
            <form onSubmit={handleFormSubmit}>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  name="name"
                  className=""
                  placeholder="Name"
                  required
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 my-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  name="email"
                  className="grow"
                  placeholder="Email"
                  required
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 my-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  name="message"
                  className="grow"
                  placeholder="Message"
                  required
                />
              </label>
              <button className="btn" type="submit">
                Send Message
              </button>
            </form>
          </div>
          <div className="card-body">
            <h2 className="card-title">Location: Dhanmondi,Dhaka,Bangladesh</h2>
            <p>ankonchy1@gmail.com</p>
            <p>Phone: 0232323232</p>
            <p>What&apos;s app: 0232323232</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
