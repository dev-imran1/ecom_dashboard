import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";

const MainLayout = () => {

  const [isOpen, setIsOpen] = useState(true);

  const navigate = useNavigate()
  useEffect(()=>{
    if (!Cookies.get("accessToken")) {
      navigate("/login")
    }
  },[])
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
