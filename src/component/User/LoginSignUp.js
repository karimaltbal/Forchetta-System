import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../layout/Loader/Loader";

import { loginAction, clearError } from "../../redux/actions/userActions";
import { useAlert } from "react-alert";



import "./LoginSignUp.css";





const LoginSignUp = () => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const { error, loading, user } = useSelector((state) => state.userLogin);

    const loginSubmit = (e) => {
        e.preventDefault();

        const logindata = { email, password };
        dispatch(loginAction(logindata));
    };


    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearError());
        }

        if (user) { 
            navigate("/admin/dashboard", { replace: true });
            alert.success("Done log_in")
        }
    }, [dispatch, error, alert, user, navigate]);


    return (
        <Fragment>
            {loading? (
                <Loader />
            ):(
                <div className="LoginSignUpContainer">
                    <div className="LoginSignUpBox">
                    <h4 className="text-center">Log-In</h4>
                    <form className="loginForm" onSubmit={loginSubmit}>
                        <div className="loginEmail">

                            <input
                                type="email"
                                placeholder="Email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="loginPassword">

                            <input
                                type="password"
                                placeholder="Password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <input type="submit" value="Login" className="loginBtn" />
                    </form>
                    </div>
                </div>
            )}
        </Fragment>
    )
};

export default LoginSignUp;
