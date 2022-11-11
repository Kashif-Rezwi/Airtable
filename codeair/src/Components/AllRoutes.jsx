import { Route, Routes } from "react-router-dom"
import { ContactUs } from "../Pages/ContactUs"
import { Home } from "../Pages/Home"

export const AllRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/contact-sales" element={<ContactUs/>}></Route>
        </Routes>
    )
}