import React from "react";
import "./Login.scss";
import { Button } from "@mui/material";

export const Login = () => {
    return (
        <div className="login">
            <div className="loginLogo">
                <img src="./logo192.png" alt="" />
            </div>

            <Button>ログイン</Button>
        </div>
    );
};
