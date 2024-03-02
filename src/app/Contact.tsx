"use client";
import { useEffect, useState } from "react";

interface Errors {
  name: string;
  email: string;
  message: string;
}

const Contact = (): JSX.Element => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorInit, setErrorInit] = useState([false, false, false]);
  const [errors, setErrors] = useState<Errors>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Sending");

    let data = {
      name,
      email,
      message,
    };

    fetch("/api", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        alert("Thanks for your message!. I'll get back soon!");
        setName("");
        setEmail("");
        setMessage("");
        setErrors({
          name: "",
          email: "",
          message: "",
        });
        setErrorInit([false, false, false]);
      }
    });
  };

  useEffect(() => {
    let nameError = "";
    let emailError = "";
    let messageError = "";

    if (!name.trim()) {
      nameError = "Name is required";
    } else {
      nameError = "";
    }

    if (!email.trim()) {
      emailError = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailError = "Email is invalid";
    }

    if (!message.trim()) {
      messageError = "Message is required";
    } else {
      messageError = "";
    }

    setErrors({
      name: nameError,
      email: emailError,
      message: messageError,
    });
  }, [name, email, message]);

  const isDisabled = (): boolean => {
    return (
      errors.name.length !== 0 ||
      errors.email.length !== 0 ||
      errors.message.length !== 0
    );
  };

  return (
    <div
      id="contact"
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        borderTop: "10px solid rgb(206, 198, 88)",
      }}
    >
      <p
        style={{ color: "rgb(206, 198, 88)" }}
        className="m-6 text-3xl font-bold first-line:uppercase first-line:tracking-widest"
      >
        Reach me out
      </p>
      <form
        style={{
          width: "70vw",
          maxWidth: 1000,
        }}
      >
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            {/* <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Name
            </label> */}
            <input
              value={name}
              onChange={(e) => {
                setErrorInit([true, errorInit[1], errorInit[2]]);
                setName(e.target.value);
              }}
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-white-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-gray-500 dark:focus:border-gray-500"
              placeholder="Enter your Name"
              required
            />
            <span style={{ color: "#ff0000", paddingLeft: 10 }}>
              {errorInit[0] && errors.name}
            </span>
          </div>
          <div>
            {/* <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email address
            </label> */}
            <input
              value={email}
              onChange={(e) => {
                setErrorInit([errorInit[0], true, errorInit[2]]);
                setEmail(e.target.value);
              }}
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-white-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-gray-500 dark:focus:border-gray-500"
              placeholder="Enter your Email"
              required
            />
            <span style={{ color: "#ff0000", paddingLeft: 10 }}>
              {errorInit[1] && errors.email}
            </span>
          </div>
        </div>
        <div>
          {/* <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your message
          </label> */}
          <textarea
            id="message"
            value={message}
            onChange={(e) => {
              setErrorInit([errorInit[0], errorInit[1], true]);
              setMessage(e.target.value);
            }}
            rows={4}
            className="block p-2.5 w-full text-sm text-white-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-gray-500 dark:focus:border-gray-500"
            placeholder="Write your thoughts here..."
          ></textarea>
          <span style={{ color: "#ff0000", paddingLeft: 10 }}>
            {errorInit[2] && errors.message}
          </span>
        </div>
        <br />
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={isDisabled()}
          style={{ backgroundColor: isDisabled() ? "gray" : "blue" }}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
