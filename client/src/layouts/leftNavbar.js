import { Fragment, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const LeftNavbar = () => {
    return (
        <Fragment>
            <div>
                <nav>
                    <ol>
                        <li>
                            <Link to="dashboard">Информация</Link>
                        </li>
                        <li>
                            <Link to="messenger">Чаты</Link>
                        </li>
                    </ol>
                </nav>
            </div>

            <Outlet />
        </Fragment>
    );
}

export default LeftNavbar;