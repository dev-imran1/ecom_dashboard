import React, { useState } from "react";

const Product = () => {
  const [productInput, setProductInput] = useState({
    title: "",
    slug: "",
    category: "",
    subCategory: "",
    thumbnail: "",
    gallery: "",
  });

  //   handle product input fields
  const handleProductInput = (e) => {
    let productInputInfo = { ...productInput };
    productInputInfo[e.target.name] = e.target.value;
    setProductInput(productInputInfo);
  };

  // handle create product
  const handleCreateProduct = (e) => {
    console.log(productInput);
    setProductInput({
      title: "",
      slug: "",
      category: "",
      subCategory: "",
    });
    e.preventDefault();
  };
  return (
    <main className="py-10 px-6">
      <div>
        <h2>Create Product</h2>
      </div>
      <section className="bg-white mt-6 p-5 rounded">
        <form action="">
          <div className="flex items-center justify-between flex-wrap gap-y-4 gap-x-1">
            <div className="flex flex-col space-y-3 w-[45%]">
              <label
                htmlFor=""
                className="text-primary text-base font-medium font-inter"
              >
                Title
              </label>
              <input
                type="text"
                placeholder="Enter Category Name"
                name="title"
                value={productInput.title}
                onChange={handleProductInput}
                className="w-full outline-none border border-borderColor p-3 rounded-lg"
              />
            </div>
            <div className="flex flex-col space-y-3 w-[45%]">
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
                value={productInput.slug}
                onChange={handleProductInput}
                className="w-full outline-none border border-borderColor p-3 rounded-lg"
              />
            </div>
            <div className="flex flex-col space-y-3 w-[45%]">
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
                value={productInput.category}
                onChange={handleProductInput}
              >
                <option value="">Select Category</option>
                <option value="Category-1">Category-1</option>
                <option value="Category-2">Category-2</option>
              </select>
            </div>
            <div className="flex flex-col space-y-3 w-[45%]">
              <label
                htmlFor=""
                className="text-primary text-base font-medium font-inter"
              >
                Select Sub Category
              </label>
              <select
                id=""
                className="w-full outline-none border border-borderColor p-3 rounded-lg"
                name="subCategory"
                value={productInput.subCategory}
                onChange={handleProductInput}
              >
                <option value="">Select Sub Category</option>
                <option value="Category-1">Sub Category-1</option>
                <option value="Category-2">Sub Category-2</option>
              </select>
            </div>
            <div className="flex flex-col space-y-3 w-[45%]">
              <label
                htmlFor=""
                className="text-primary text-base font-medium font-inter"
              >
                Thumbnail
              </label>
              <input
                type="file"
                placeholder="Enter thumbnail"
                name="thumbnail"
                value={productInput.thumbnail}
                onChange={handleProductInput}
                className="w-full outline-none border border-borderColor p-3 rounded-lg"
              />
            </div>
            <div className="flex flex-col space-y-3 w-[45%]">
              <label
                htmlFor=""
                className="text-primary text-base font-medium font-inter"
              >
                Gallery
              </label>
              <input
                type="file"
                multiple
                placeholder="Enter gallery images"
                name="gallery"
                value={productInput.gallery}
                onChange={handleProductInput}
                className="w-full outline-none border border-borderColor p-3 rounded-lg"
              />
            </div>
            <div className="bg-black px-3 py-2 text-white rounded-lg">
              <button onClick={handleCreateProduct}>Create Product</button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Product;
