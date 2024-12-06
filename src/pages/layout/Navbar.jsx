import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosArrowForward, IoMdNotificationsOutline } from "react-icons/io";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

const Navbar = ({ setIsOpen, isOpen }) => {

  const navigate = useNavigate()
  const auth = useSelector(state=>state.authSlice.user.userFounds)
  console.log(auth.displayName)
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // profile dropdown
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const toogleDropdown = () => {
    setIsOpenProfile(!isOpenProfile);
  };


  const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/api/v1",
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  const handelLogout = async () => {
    try {
      const res = await axiosInstance.post(
        "/users/logout",
        {},
        {
          headers: {
            Authorization: Cookies.get("accessToken"),
          },
        }
      );
      if (res.data.statusCode === 200) {
        Cookies.remove("accessToken"); // Optionally remove the token
        navigate("/login"); // Use navigate here
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <nav className="py-4 flex justify-between border-b-2">
      {" "}
      {/* adding border on the nav bottom for more visual */}
      <div onClick={toggleSidebar}>
        <HiOutlineBars3CenterLeft className="w-[35px] h-[35px] text-primary cursor-pointer" />
      </div>
      {/* auto mid space using flex */}
      <div className="flex items-center bg-gray-100 rounded-lg px-2">
        <section className="flex items-center gap-x-7 px-2">
          <div className="flex items-center w-[300px] h-[52px]">
            <input
              type="text"
              className="w-full outline-none px-2 bg-gray-100"
              placeholder="Search.."
            />
            <IoSearchOutline className="w-[30px] h-[30px] cursor-pointer opacity-40" />
          </div>
          <div className="cursor-pointer">
            <IoMdNotificationsOutline className="text-primary text-2xl" />
          </div>
        </section>
        <section className="flex items-center gap-x-3">
          {/*  userProfile start */}
          <div className="flex items-center gap-3" onClick={toogleDropdown}>
            <div>
              <img
                className="cursor-pointer h-[40px] w-[40px] rounded-full "
                src={auth.profilePic || "/randoProfileImg.jpeg"} //this image source will come from backend.
                alt="user profile image"
              />
            </div>
            <div className="relative inline-block">
              <button className="font-medium text-base hover:text-gray-900">
                {auth.displayName}
              </button>{" "}
              {/* the name will come from backend. test dummy. */}
              {isOpenProfile && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md">
                  <ul>
                    <li className="py-2 px-4 hover:bg-gray-100">
                      <Link to="/profile">see profile</Link>
                    </li>
                    <li className="py-2 px-4 hover:bg-gray-100">
                      <button onClick={() => handelLogout()}>Logout</button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
