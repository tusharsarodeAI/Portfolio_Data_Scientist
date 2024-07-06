import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  // Connection to EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_kocq1hv', 'template_xaeaj5o', form.current,  'IJJTci-ikJdTMGiCF')
      .then(
        () => {
          toast.success('Message Sent Successfull', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
        },
        (error) => {
          alert('FAILED...', error.text);
        }
      );
  };

  const [data, setData] = useState({
    name: '',
    phoneNo: '',
    email: '',
    msg: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateForm = () => {
    return checkPhone();
  };

  const checkPhone = () => {
    const phone = data.phoneNo;
    const phoneInputElement = document.querySelector('input[name="user_phoneNo"]');
    const phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phone.match(phoneNum)) {
      return true;
    } else {
      if (phoneInputElement) {
        phoneInputElement.classList.add('error');
      }
      return false;
    }
  };

  return (
    <>
      <div className="my-3">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={(e) => { if (validateForm()) sendEmail(e); }} ref={form}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Phone No
                </label>
                <input
                  type="text" // Changed to text for better phone number validation
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phoneNo"
                  value={data.phoneNo}
                  onChange={handleChange}
                  placeholder="Mobile No"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  name="msg"
                  value={data.msg}
                  onChange={handleChange}
                  rows="3"
                ></textarea>
              </div>

              <div className="col-12">
                <button className="btn btn-primary" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
      
    </>
  );
};

export default Contact;
