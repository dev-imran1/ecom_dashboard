import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="w-full h-[100vh] flex items-center justify-center">
      <section className="space-y-6">
        <h2 className="text-primary text-5xl font-bold font-inter">
          Oops... Page Not Found
        </h2>
        <p className="text-text text-base font-inter font-normal w-[450px] mx-auto text-center">
          Please return tot he site's homepage, It looks like nothing was found
          at this location
        </p>
        <div className="flex items-center justify-center">
          <Link to="/">
            <button className="bg-black text-white px-5 py-4 rounded-lg hover:bg-primary text-base font-normal font-inter">
              Back To Home
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
