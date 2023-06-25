import { Fragment, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import constants from "../globalVars";


const useAuth = () => {
    const user = localStorage.getItem(constants.USEROLE);

    if (user) {
        return true;
    } else {
        return false;
    }
}

const MainHeader = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const logout = () => {
        fetch(constants.BACKADR + "/logout", {
            method: 'POST',
            credentials: "include"
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
        }).then((data) => {
            console.log(data);
            localStorage.removeItem(constants.USEROLE);
            navigate("/login", {replace: true});
        }).catch((error) => {
            console.log(error.name);
        });
    }

    return (
        <Fragment>
            <div>
                <div>
                    <ul>
                        <li>
                            { !auth && <Link to="/">Войти</Link> }
                            { auth && <a onClick={ logout }>Выйти</a> }
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default MainHeader;