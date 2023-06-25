import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import  constants from "../globalVars";

const Login = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(constants.BACKADR + "/login", {
            method: 'POST',
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({login, password})
        }).then(res => { 
            if (res.ok) {
                return res.json();
            }
        }).then((data) => {
            const role_ = data.role;
            const logtime = Date.now();
            localStorage.setItem(constants.USEROLE, JSON.stringify({role: role_, logtime: logtime}));
            navigate("/projects", {replace: true});
        }).catch((error) => {
            console.log(error.name);
        });
    }

    return (
        <div>        
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
                    <button>Войти</button>
                </form>
            </div>
            <Link to="/login/register">Зарегитсрироваться</Link>
        </div>
    )
}

export default Login;