import React from "react";
import "./App.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/Chat";
import { useSelector } from "react-redux";
import { Login } from "./components/login/Login";
import { useAppSelector } from "./app/hooks";

function App() {
    const user = useAppSelector((state) => state.user);
    // const user = null;

    console.log(user);

    return (
        <div className="App">
            {user ? (
                <>
                    {/* sidebar */}
                    <Sidebar />

                    {/* chat */}
                    <Chat />
                </>
            ) : (
                <>
                    <Login />
                </>
            )}
        </div>
    );
}

export default App;
