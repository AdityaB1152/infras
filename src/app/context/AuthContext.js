"use client";

import { useRouter } from "next/router";

const { createContext, useState } = require("react");

 
const AuthContext = createContext();

const AuthProvider = (props) => {
    const [user , setUser] = useState(null);
    const [error , setError] = useState(null);
    

   

    const registerUser = async ({name,email,password}) => {
        try{
            const { data } = await axios.post(
                `${process.env.API_URL}/api/auth/register`,
                {
                    name,
                    email,
                    password
                }
            )
            if(data?.user){

            }
        }
        catch(error){

        }
    }

    return (
    <AuthContext.Provider
    value={{user,
        error,
        setUser,
        registerUser
    }}> 
        {props.children}
    </AuthContext.Provider>
    );
};

export {AuthProvider , AuthContext};