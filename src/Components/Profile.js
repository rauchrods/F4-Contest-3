import { useNavigate } from "react-router-dom";


function Profile() {
    let user={};
      const navigate = useNavigate();
    if(localStorage.getItem("userinfo")){
        user = JSON.parse (localStorage.getItem("userinfo"));
    }

    function removeuser(){
        localStorage.removeItem("userinfo");
       navigate("/");
    }

    return (
        <div className="info">
            <h2>Profile</h2>
            <h2 id="fname">Full Name: {user.fname?  user.fname: "NA"}</h2>
            <h2 id="email">Email: {user.email?  user.email: "NA"}</h2>
            <h2 id="pass">Password: {user.password?  user.password: "NA"}</h2>
            <button id="log-out" onClick={removeuser}>Logout</button>
        </div>
    )
}

export default Profile;