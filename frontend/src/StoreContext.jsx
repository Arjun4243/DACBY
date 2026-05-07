import { createContext,useEffect,useState } from "react";

export const StoreContextCreated = createContext();

export const StoreContextProvider = ({children}) => {

    const [registerShow,setRegisterShow] = useState(false);

    const contextValue={
        registerShow,
        setRegisterShow
    }

    return(
        <StoreContextCreated.Provider value={contextValue}>
            {children}
        </StoreContextCreated.Provider>
    )
}   