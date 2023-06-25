import { useState } from "react";
import { useNavigate } from "react-router-dom";
import constants from "../globalVars";

const Register = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(constants.BACKADR + "/register", {
            method: 'POST',
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({login, password})
        }).then(res => { 
            if (res.ok) {
                return res.json();
            }
        }).then((data) => {
            navigate("/login", {replace: true});
        }).catch((error) => {
            console.log(error.name);
        });
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <input 
                type="text" 
                value={ login }
                onChange={ (e) => setLogin(e.target.value) }
                required
                />
                <input 
                type="password" 
                value={ password }
                onChange={ (e) => setPassword(e.target.value) }
                required
                />
                <button>Далее</button>
            </form>
        </div>
    );
}

export default Register;