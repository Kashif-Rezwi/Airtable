import { Route, Routes } from "react-router-dom"
import { ContactUs } from "../Pages/ContactUs"
import { Home } from "../Pages/Home"
import { LandingPage } from "../Pages/LandingPage"
import { SignIn } from "../Pages/SignIn"
import { SignUp } from "../Pages/SignUp"
import { PrivateRoute } from "./PrivateRoute"

export const AllRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/contact-sales" element={<ContactUs/>}></Route>
            <Route path="/sign-up" element={<SignUp/>}></Route>
            <Route path="/sign-in" element={<SignIn/>}></Route>
            <Route path="/home" element={<PrivateRoute><LandingPage/></PrivateRoute>}></Route>
        </Routes>
    )
}