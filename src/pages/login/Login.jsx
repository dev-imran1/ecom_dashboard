import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setAuth } from "../../redux/authSlice";




const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    if (Cookies.get("accessToken")) {
      navigate("/")
    }
  },[])
  const [loginFields, setLoginFields] = useState({
    email: "",
    password: "",
  });


  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  // handle input fileds
  const handleLoginInput = (e) => {
    const loginInfo = { ...loginFields };
    loginInfo[e.target.name] = e.target.value;
    setLoginFields(loginInfo);
    e.preventDefault();
  };

  // handle sign up
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      let res = await axiosInstance.post("/users/login", loginFields);
      console.log(res.data.data)
      if (res.data.statusCode === 200 && res.data.data.userFounds.role === "admin") {
        Cookies.set('accessToken', res.data.data.accessToken, { expires: 1 })
        dispatch(setAuth(res.data.data))
        navigate('/')
      } else {
        alert("invalid access")
      }

      setLoginFields({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main>
      <section className="container">
        <section className="w-full h-[100vh] flex items-center justify-center">
          <section className="w-[560px] h-[560px] py-12 px-7 rounded">
            <section className="space-y-3 pb-5">
              <h1 className="">Login your account</h1>
              <p className="text-text font-inter font-normal text-base">
                Welcome back! Please enter Admin Panel details
              </p>
            </section>
            <section>
              <form action="">
                <div className="flex flex-col space-y-2 pb-6">
                  <label
                    htmlFor=""
                    className="text-primary font-inter font-normal text-base"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={loginFields?.email}
                    onChange={handleLoginInput}
                    className=""
                  />
                </div>
                <div className="flex flex-col space-y-2 pb-6">
                  <label
                    htmlFor=""
                    className="text-primary font-inter font-normal text-base"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={loginFields?.password}
                    onChange={handleLoginInput}
                    className=""
                  />
                </div>
                <div className="flex items-center justify-end text-base text-primary font-inter font-normal">
                  <Link to="/">Forgot Pasword?</Link>
                </div>
                <div className="py-3">
                  <button
                    onClick={handleSignUp}
                    className="text-center w-full bg-black text-white"
                  >
                    Log In
                  </button>
                </div>
              </form>
              <div>
                <p className="text-center text-text font-inter font-normal text-base">
                  Not registered?{" "}
                  <Link to="/signup" className="text-primary">
                    Create an Account
                  </Link>
                </p>
              </div>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Login;
