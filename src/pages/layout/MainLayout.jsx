

import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useGetCategoryQuery, useGetUserQuery } from "../../redux/apiSlice";
import { setAuth } from "../../redux/authSlice";



const MainLayout = () => {

  const auth = useSelector((state) => state.authSlice)
  
  console.log("auth main",auth)
  const { data, isLoading, error } = useGetUserQuery(auth.id)
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate()
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("data",data?.data)
    if (!Cookies.get("accessToken")) {
      navigate("/login")
    }
    if (!isLoading && data) {
      dispatch(setAuth(data.data))
    }

  }, [data, isLoading, error])
  return (
    <>
      <main>
        <section className="container">
          <div className="flex gap-x-2">
            {isOpen && (
              <div>
                <Sidebar />
              </div>
            )}
            <div className="w-full">
              <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
              <Outlet />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MainLayout;
