import { NavLink } from "react-router-dom";


const Navigation = () => {


    return (

        <div className="navbar">
            <div>
                Header
            </div>
            <div>
                <span><NavLink to= "">Signup</NavLink></span>
                <span><NavLink to= "/profile">Profile</NavLink></span>
            </div>
        </div>

    )
}

export default Navigation;