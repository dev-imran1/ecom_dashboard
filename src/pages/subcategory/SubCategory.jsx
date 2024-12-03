import React, { useState } from "react";

const SubCategory = () => {
  const [subCategoryInput, setsubCategoryInput] = useState({
    subCategoryName: "",
    slug: "",
    category: "",
  });

  //   handle sub category input fields
  const handleSubCategoryInput = (e) => {
    let subCategoryInputInfo = { ...subCategoryInput };
    subCategoryInputInfo[e.target.name] = e.target.value;
    setsubCategoryInput(subCategoryInputInfo);
  };

  //   handle create sub category
  const handleCreateSubCategory = (e) => {
    console.log(subCategoryInput);
    setsubCategoryInput({
      subCategoryName: "",
      slug: "",
      category:"",
    });
    e.preventDefault();
  };
  return (
    <main>
      <div>
        <h2>Create Sub Category</h2>
      </div>
      <section className="bg-white mt-6 p-5 rounded">
        <form action="">
          <div className="flex items-center justify-between">
            <div className="flex flex-col space-y-3">
              <label
                htmlFor=""
                className="text-primary text-base font-medium font-inter"
              >
                Category Name
              </label>
              <input
                type="text"
                placeholder="Enter Category Name"
                name="subCategoryName"
                value={subCategoryInput.subCategoryName}
                onChange={handleSubCategoryInput}
                className="w-full outline-none border border-borderColor p-3 rounded-lg"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label
                htmlFor=""
                className="text-primary text-base font-medium font-inter"
              >
                Slug
              </label>
              <input
                type="text"
                placeholder="Enter Slug"
                name="slug"
                value={subCategoryInput.slug}
                onChange={handleSubCategoryInput}
                className="w-full outline-none border border-borderColor p-3 rounded-lg"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label
                htmlFor=""
                className="text-primary text-base font-medium font-inter"
              >
                Select Category
              </label>
              <select
                id=""
                className="w-full outline-none border border-borderColor p-3 rounded-lg"
                name="category"
                onChange={handleSubCategoryInput}
                value={subCategoryInput.category}
              >
                <option value="Category-1">Category-1</option>
                <option value="Category-2">Category-2</option>
              </select>
            </div>
            <div className="bg-black px-3 py-2 text-white rounded-lg">
              <button onClick={handleCreateSubCategory}>
                Create Sub Category
              </button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default SubCategory;
