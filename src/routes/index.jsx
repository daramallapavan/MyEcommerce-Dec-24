import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgetPassword from "../pages/ForgetPassword";
import ForgetPasswordOtp from "../pages/ForgetPasswordOtp";
import ChangePasswoed from "../pages/ChangePasswoed";
import RegistrationVerifyOtp from "../pages/RegistrationVerifyOto";
import Dashboard from "../components/dashboard";
import Product from "../components/Product";
import Profile from "../components/Profile";
import AddProduct from "../components/AddProduct";
import Category from "../components/Category";
import ProductView from "../pages/ProductView";
import Cart from "../pages/Cart";
import DeliveryAddress from "../pages/DeliveryAddress";
import Orders from "../pages/Orders";
import OrderView from "../pages/OrderView";
import OrderSummary from "../pages/OrderSummary";
import SelectAddress from "../pages/SelectAddress";
import Payment from "../pages/Payment";
import CartClone from "../pages/CartClone";



const router=createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <Home/>
            },{
                path:"login",
                element: <Login/>
            },{

                path: "deliveryaddress",
                element: <DeliveryAddress/>
            }
            ,
            {
                path:"register",
                element: <Register/>
            }
            ,{
                path:"forget-password",
                element: <ForgetPassword/>
            },
            {
                path: "orderSummary",
                element: <OrderSummary/>
            },
            {

                path: "selectAddress",
                element: <SelectAddress/>
            },
            {
                path: "payment",
                element: <Payment/>

            },
            {
                path: "cartClone",
                element: <CartClone/>
            },
            {
                path:"forget-password-verify-otp",
                element: <ForgetPasswordOtp/>
            },
            {
                path:"registration-verify-otp/:email",
                element: <RegistrationVerifyOtp/>
            },
            {
                path: "productView",
                element: <ProductView/>
            },
            {

                path:"orderView",
                element: <OrderView/>
            },
            {

                path: "orders",
                element: <Orders/>
            },
            {
                path: "cart",
                element: <Cart/>
            },

            {
                
                    path:"change-password",
                    element: <ChangePasswoed/>
                
            },{
                path: "dashboard",
                element: <Dashboard/>,
                children: [
                    {
                        path:"product",
                        element: <Product/>
                    },
                    {
                        path:'profile',
                        element: <Profile/>
                    },
                    {
                        path: 'addProduct',
                        element: <AddProduct/>
                    },
                    {
                        path: 'category',
                        element: <Category/>
                    }
                ]
            }
        ]
    },
  
    
])

export default router;