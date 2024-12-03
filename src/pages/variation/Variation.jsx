import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Variation = () => {
  const [variationName, setVariationName] = useState("");

  // handle create variation
  const handleCreateVariation = (e) => {
    if (variationName === "") {
      alert("Please enter a product variation name");
    }

    setVariationName("");
    e.preventDefault();
  };
  return (
    <main className="bg-gray-200 mt-6 rounded-lg p-5">
      <section className="space-y-3">
        <h3 className="text-2xl text-primary font-semibold font-inter ">
          Product Dashboard
        </h3>
        <ul className="flex items-center gap-x-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "active"
                    : "text-primary text-base font-normal font-inter leading-[140%] capitalize"
                }  `
              }
            >
              Home
            </NavLink>
          </li>
          <li>/</li>
          <li>
            <NavLink
              to="/variations"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "active"
                    : "text-primary text-base font-normal font-inter leading-[140%] capitalize"
                } `
              }
            >
              Variation details
            </NavLink>
          </li>
        </ul>
      </section>
      <section className="bg-white mt-6 p-5 rounded">
        <form action="">
          <div className="flex items-center justify-between">
            <div className="flex flex-col space-y-3">
              <label
                htmlFor=""
                className="text-primary text-base font-medium font-inter"
              >
                Variation Name
              </label>
              <input
                type="text"
                placeholder="Enter Variation Name"
                name="productVariation"
                value={variationName}
                onChange={(e) => setVariationName(e.target.value)}
                className="w-full outline-none border border-borderColor p-3 rounded-lg"
              />
            </div>
            <div className="bg-black px-3 py-2 text-white rounded-lg">
              <button onClick={handleCreateVariation}>Create Variation</button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Variation;
