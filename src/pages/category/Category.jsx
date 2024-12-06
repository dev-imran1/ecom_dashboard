import React, { useEffect, useState } from "react";
import {
  useCreateCategoryMutation,
  useGetCategoryQuery,
} from "../../redux/apiSlice";

const Category = () => {
  const [categoryInput, setCategoryInput] = useState({
    name: "",
    slug: "",
  });

  // Category creation mutation hook
  const [createCategory, { isSuccess, isLoading, isError, error }] =
    useCreateCategoryMutation();

  // Fetch category data query hook
  const { data: isData, isLoading: isLoad } = useGetCategoryQuery();

  useEffect(() => {
    console.log("useEffect",isData,isLoad);
  }, [isData, isLoad]);

  // Handle category input
  const handleCategoryInput = (e) => {
    setCategoryInput({
      ...categoryInput,
      [e.target.name]: e.target.value,
    });
  };

  // Handle create category
  const handleCreateCategory = (e) => {
    e.preventDefault();
    if (categoryInput.name && categoryInput.slug) {
      createCategory(categoryInput);
      setCategoryInput({ name: "", slug: "" });
    }
  };

  return (
    <main>
      <div>
        <h2>Create Category</h2>
      </div>
      <section className="bg-white mt-6 p-5 rounded">
        <form onSubmit={handleCreateCategory}>
          <div className="flex items-center justify-between">
            {/* Category Name Input */}
            <div className="flex flex-col space-y-3">
              <label
                htmlFor="name"
                className="text-primary text-base font-medium font-inter"
              >
                Category Name
              </label>
              <input
                type="text"
                placeholder="Enter Category Name"
                name="name"
                value={categoryInput.name}
                onChange={handleCategoryInput}
                className="w-full outline-none border border-borderColor p-3 rounded-lg"
              />
            </div>

            {/* Slug Input */}
            <div className="flex flex-col space-y-3">
              <label
                htmlFor="slug"
                className="text-primary text-base font-medium font-inter"
              >
                Slug
              </label>
              <input
                type="text"
                placeholder="Enter Slug"
                name="slug"
                value={categoryInput.slug}
                onChange={handleCategoryInput}
                className="w-full outline-none border border-borderColor p-3 rounded-lg"
              />
            </div>

            {/* Submit Button */}
            <div className="bg-black px-3 py-2 text-white rounded-lg">
              <button type="submit" disabled={isLoading}>
                {isLoading ? "Creating..." : "Create Category"}
              </button>
            </div>
          </div>
        </form>
      </section>

      {/* Category Data Display */}
      {isLoad ? (
        <p>Loading...</p>
      ) : (
        isData?.data?.length > 0 ? (
          isData.data.map((item, index) => (
            <p key={index}>{item.name}</p> // Adjusted to render `item.name`
          ))
        ) : (
          <p>No data available</p>
        )
      )}
    </main>
  );
};

export default Category;
