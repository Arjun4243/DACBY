import { createContext,useState } from "react";

export const StoreContextCreated = createContext();

export const StoreContextProvider = ({children}) => {

    const [registerShow,setRegisterShow] = useState(false);
    const [switchLoginShow,setSwitchLoginShow] = useState("Register");

    const contextValue={
        registerShow,
        setRegisterShow,

        switchLoginShow,
        setSwitchLoginShow
    }

    return(
        <StoreContextCreated.Provider value={contextValue}>
            {children}
        </StoreContextCreated.Provider>
    )
}   