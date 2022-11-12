import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"

export const PrivateRoute = ({children}) => {
    const {authState} = useContext(AuthContext)
    if(!authState){
        return <Navigate to={"/sign-in"}/>
    }
    return children
}