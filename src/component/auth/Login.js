import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const notify = () =>
    toast.error("Invalid Username or Password", {
      position: "top-right",
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  const logged = () =>
    toast.success("Login Successfully", {
      position: "top-right",
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(username);
      console.log(password);
      const response = await axios.get(
        // `http://localhost:8080/patient/login?username=${username}&password=${password}`,
        `http://localhost:8080/login?username=${username}&password=${password}`,
        {},
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        console.log("Login successful");
        console.log(response.data);
        logged();

        if (
          response.data.role === "Doctor" ||
          response.data.role === "doctor"
        ) {
          localStorage.setItem("username", response.data.username);
          localStorage.setItem("firstName", response.data.firstName);
          localStorage.setItem("lastName", response.data.lastName);
          localStorage.setItem("email", response.data.email);
          localStorage.setItem("mobile", response.data.mobile);
          localStorage.setItem("role", response.data.role);
          localStorage.setItem("age", response.data.age);
          localStorage.setItem("gender", response.data.gender);
          localStorage.setItem("address", response.data.address);
          localStorage.setItem("specialization", response.data.specialization);
          localStorage.setItem("licenseNumber", response.data.licenseNumber);
          localStorage.setItem("isLoggedIn", "true");
          window.location.href = "/doctor";
        } else if (
          response.data.role === "admin" ||
          response.data.role === "Admin"
        ) {
          localStorage.setItem("username", response.data.username);
          localStorage.setItem("role", response.data.role);
          localStorage.setItem("isLoggedIn", "true");
          window.location.href = "/admin";
        } else {
          localStorage.setItem("username", response.data.username);
          localStorage.setItem("patientName", response.data.patientName);
          localStorage.setItem("email", response.data.email);
          localStorage.setItem("mobile", response.data.mobileNo);
          localStorage.setItem("role", response.data.role);
          localStorage.setItem("age", response.data.age);
          localStorage.setItem("gender", response.data.gender);
          localStorage.setItem("address", response.data.address);
          localStorage.setItem("isLoggedIn", "true");
          window.location.href = "/patient";
        }
      } else {
        console.error("Login failed");
        notify();
      }
    } catch (error) {
      if (
        (error.response && error.response.status === 401) ||
        error.response.status === 405
      ) {
        notify();
      }
      console.error("Error during login:", error.message);
    }
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Enter username
              </label>
              <div className="mt-2">
                <input
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="/av"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
          <ToastContainer />

          <p className="mt-10 text-center text-sm text-gray-500">
            Not have account?{" "}
            <a
              href="/"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
