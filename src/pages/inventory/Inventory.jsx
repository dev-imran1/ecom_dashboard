import React, { useState } from "react";

const Inventory = () => {
  const [inventoryInput, setInventoryInput] = useState({
    product: "",
    productVariation: "",
    purchasePrice: "",
    sellingPrice: "",
    discountPrice: "",
    quantity: "",
  });

  // handle inventory input fields
  const handleInventoryInput = (e) => {
    let inventoryInputInfo = { ...inventoryInput };
    inventoryInputInfo[e.target.name] = e.target.value;
    setInventoryInput(inventoryInputInfo);
  };

  //   handle create inventory
  const handleCreateInventory = (e) => {
    console.log(inventoryInput);
    setInventoryInput({
      product: "",
      productVariation: "",
      purchasePrice: "",
      sellingPrice: "",
      quantity: "",
      discountPrice: "",
      discountBy: "",
    });
    e.preventDefault();
  };
  return (
    <main className="py-10 px-6">
      <div>
        <h2>Create Inventory</h2>
      </div>
      <section className="bg-white mt-6 p-5 rounded">
        <form action="">
          <div className="flex items-center justify-between flex-wrap gap-y-4 gap-x-1">
            <div className="flex flex-col space-y-3 w-[45%]">
              <label
                htmlFor=""
                className="text-primary text-base font-medium font-inter"
              >
                Select Product
              </label>
              <select
                id=""
                className="w-full outline-none border border-borderColor p-3 rounded-lg"
                name="product"
                value={inventoryInput.product}
                onChange={handleInventoryInput}
              >
                <option value="">Select Product</option>
                <option value="Product-1">Product-1</option>
                <option value="Product-2">Product-2</option>
              </select>
            </div>
            <div className="flex flex-col space-y-3 w-[45%]">
              <label
                htmlFor=""
                className="text-primary text-base font-medium font-inter"
              >
                Select Variation
              </label>
              <select
                id=""
                className="w-full outline-none border border-borderColor p-3 rounded-lg"
                name="productVariation"
                value={inventoryInput.productVariation}
                onChange={handleInventoryInput}
              >
                <option value="">Variation</option>
                <option value="Variation-1">Variation-1</option>
                <option value="Variation-2">Variation-2</option>
              </select>
            </div>
            <div className="flex flex-col space-y-3 w-[45%]">
              <label
                htmlFor=""
                className="text-primary text-base font-medium font-inter"
              >
                Purchase Price
              </label>
              <input
                type="text"
                placeholder="Enter Purchase Price"
                name="purchasePrice"
                value={inventoryInput.purchasePrice}
                onChange={handleInventoryInput}
                className="w-full outline-none border border-borderColor p-3 rounded-lg"
              />
            </div>
            <div className="flex flex-col space-y-3 w-[45%]">
              <label
                htmlFor=""
                className="text-primary text-base font-medium font-inter"
              >
                Selling Price
              </label>
              <input
                type="text"
                placeholder="Enter Selling Price"
                name="sellingPrice"
                value={inventoryInput.sellingPrice}
                onChange={handleInventoryInput}
                className="w-full outline-none border border-borderColor p-3 rounded-lg"
              />
            </div>
            <div className="flex flex-col space-y-3 w-[45%]">
              <label
                htmlFor=""
                className="text-primary text-base font-medium font-inter"
              >
                Quantity
              </label>
              <input
                type="text"
                placeholder="Enter Quantity"
                name="quantity"
                value={inventoryInput.quantity}
                onChange={handleInventoryInput}
                className="w-full outline-none border border-borderColor p-3 rounded-lg"
              />
            </div>
            <div className="flex flex-col space-y-3 w-[45%]">
              <label
                htmlFor=""
                className="text-primary text-base font-medium font-inter"
              >
                Discount Price
              </label>
              <input
                type="text"
                placeholder="Enter Discount"
                name="discountPrice"
                value={inventoryInput.discountPrice}
                onChange={handleInventoryInput}
                className="w-full outline-none border border-borderColor p-3 rounded-lg"
              />
            </div>
            <div className="flex flex-col space-y-3 w-[45%]">
              <label
                htmlFor=""
                className="text-primary text-base font-medium font-inter"
              >
                Discount By
              </label>
              <select
                id=""
                className="w-full outline-none border border-borderColor p-3 rounded-lg"
                name="discountBy"
                value={inventoryInput.discountBy}
                onChange={handleInventoryInput}
              >
                <option value="">Discount By</option>
                <option value="ammount">ammount</option>
                <option value="percentage">percentage</option>
              </select>
            </div>

            <div className="bg-black px-3 py-2 text-white rounded-lg">
              <button onClick={handleCreateInventory}>Create Inventory</button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Inventory;
