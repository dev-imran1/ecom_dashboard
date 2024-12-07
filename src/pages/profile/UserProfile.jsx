import React, { useEffect, useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useUpdateProfilePicMutation } from "../../redux/apiSlice";
// import { useUpdateProfilePicMutation } from "../../redux/apiSlice";

const UserProfile = () => {
  const [profilePic, setProfilePic] = useState(null);
  // const [updateProfilePic, { data, error, isLoading }] = useUpdateProfilePicMutation()
  const [updateProfile] = useUpdateProfilePicMutation();
  const [userProfileInput, setUserProfileInput] = useState({
    fullName: "",
    phoneNumber: "",
  });

  // useEffect(() => {
  //   console.log(data, error, isLoading)
  // }, [data, error, isLoading])

  // const handleProfileImage = (e) => {
  //   setProfileImage(e.target.files[0]);
  // };

  const handleUserProfileInput = (e) => {
    setUserProfileInput({
      ...userProfileInput,
      [e.target.name]: e.target.value,
    });
  };

  const submitUserProfileInput = (e) => {
    e.preventDefault();
    console.log(userProfileInput); // Logs the updated user profile information
  };

  const updateAvatar = async (e) => {
    const formData = new FormData()
    formData.append("profilePic", profilePic)
    try {
      await updateProfile(formData)
    } catch (error) {
      console.log(err)
    }
  }

  // Delivery information
  const [deliveryInfo, setDeliveryInfo] = useState({
    country: "",
    Street_village: "",
    city: "",
  });

  const handleDeliveryInfo = (e) => {
    setDeliveryInfo({
      ...deliveryInfo,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitDeliveryInfo = (e) => {
    e.preventDefault();
    console.log(deliveryInfo);
  };
  //   backBtn

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleBackBtn = () => {
    navigate("/"); // Call navigate function to go home
  };

  return (
    <>
      <section className="container py-4 bg-gray-100">
        <div className="flex justify-between border-b-2 border-blue-200 py-2 ">
          <div>
            <button
              onClick={handleBackBtn}
              className="px-4 py-1 bg-blue-200 rounded-md "
            >
              Back
            </button>
          </div>
          <div className="flex items-center gap-4">
            <IoSettingsOutline className="text-primary text-2xl" />
            <IoMdNotificationsOutline className="text-primary text-2xl" />
          </div>
        </div>
        {/* User profile update input field */}
        <div className="flex gap-4">
          <form onSubmit={submitUserProfileInput} action="submit">
            <h2 className="text-2xl font-bold capitalize py-4">
              User Information
            </h2>
            <div className="w-[18rem]">
              <div className="flex flex-col py-2">
                {/* User profile image */}
                <label className="pb-3" htmlFor="profileImage">
                  Profile Image
                </label>
                <input
                  type="file"
                  name="profileImage"
                  accept="image/*"
                  onChange={(e) => setProfilePic(e.target.files[0])}
                />
                <button type="button" onClick={updateAvatar} className="py-2 bg-blue-200 px-2 rounded-md mt-3 capitalize">Update Avatar</button>
              </div>
              <div className="flex flex-col py-2">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={userProfileInput.fullName}
                  onChange={handleUserProfileInput}
                  className="outline outline-1 rounded-sm px-1"
                />
              </div>
              <div className="flex flex-col py-2">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={userProfileInput.phoneNumber}
                  onChange={handleUserProfileInput}
                  className="outline outline-1 rounded-sm px-1"
                />
              </div>
              <div>
                <button className="py-2 bg-blue-200 px-2 rounded-md mt-3 capitalize">
                  Update Profile
                </button>
              </div>
            </div>
          </form>
          {/* User Credential updates */}
          <form onSubmit={onSubmitDeliveryInfo} action="submit">
            <div className="border-l-4 px-3">
              <h2 className="text-2xl font-bold capitalize py-4">
                Delivery Information
              </h2>
              <div>
                <div className="flex flex-col border-2 py-1 px-1 rounded-md border-gray-300 ">
                  <label htmlFor="country">Country/Region</label>
                  <input
                    name="country"
                    value={deliveryInfo.country}
                    onChange={handleDeliveryInfo}
                    className="bg-gray-100"
                    type="text"
                    placeholder="eg. Dhaka, Bangladesh"
                  />
                </div>
                <div className="flex gap-3 py-3">
                  <input
                    name="Street_village"
                    value={deliveryInfo.Street_village}
                    onChange={handleDeliveryInfo}
                    className="py-1 px-1 rounded-md "
                    type="text"
                    placeholder="Street/Village"
                  />
                  <input
                    name="city"
                    value={deliveryInfo.city}
                    onChange={handleDeliveryInfo}
                    className="py-1 px-1 rounded-md"
                    type="text"
                    placeholder="City"
                  />
                </div>
                <input
                  name="zipCode"
                  type="text"
                  placeholder="ZIP code"
                  className="py-1 px-1 rounded-md mt-3"
                />
                <div>
                  <button className="px-3 py-2 rounded-md capitalize bg-blue-200 mt-[3rem]">
                    Update Delivery Address
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
