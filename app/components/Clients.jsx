'use client';

import Link from "next/link";
import { useState, createContext, useContext } from "react";

const Context = createContext({ user: {} });



export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    return <Context.Provider value={{ user, setUser }}>
        {children}
    </Context.Provider>
}

export const LogoutBtn = () => {
    const logoutHandler = () => {
        alert("logout");
    };

    const { user } = useContext(Context);
    console.log(user)
    return (
        <>
            {
                user.id ? (
                    <button onClick={logoutHandler}>logout</button>
                ) : (
                    <Link href={"/login"}>login</Link>
                )
            }
        </>
    );
};