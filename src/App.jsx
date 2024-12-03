import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import MainLayout from "./pages/layout/MainLayout";
import Users from "./pages/users/Users";

import UserProfile from "./pages/profile/UserProfile";

import NotFound from "./pages/notfound/NotFound";
import Variation from "./pages/variation/Variation";
import Category from "./pages/category/Category";
import SubCategory from "./pages/subcategory/SubCategory";
import Product from "./pages/product/Product";
import Inventory from "./pages/inventory/Inventory";
import Cart from "./pages/cart/Cart";

// / All Routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<UserProfile />} />
      </Route>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/variations" element={<Variation />} />
        <Route path="/category/create" element={<Category />} />
        <Route path="/sub-category" element={<SubCategory />} />
        <Route path="/products" element={<Product />} />
        <Route path="/inventories" element={<Inventory />} />
        <Route path="/carts" element={<Cart />} />
      </Route>
      <Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
