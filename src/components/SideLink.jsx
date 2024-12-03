import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const SideLink = ({ icon: Icon, path, title }) => {
  return (
    <section className="flex items-center justify-between mt-6 cursor-pointer py-2 ">
      <div>
        <div className="flex items-center text-lg font-medium font-inter gap-4 ">
          {/* lowered the width a bit and made them auto sort out using flexbox. no change in code*/}
          <Icon className="group-hover:text-white text-2xl opacity-60 " />
          <h3 className="">
            <Link to={path}>{title}</Link>
          </h3>
        </div>
      </div>
      <section>
        <IoIosArrowForward className="" />
      </section>
    </section>
  );
};

export default SideLink;
