import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";


interface contextType {
    stateAside: boolean,
    set_Aside: (value: boolean) => void
}

const defaultContext = {
    stateAside: false,
    set_Aside: (value: boolean) => { }
};

const contextLayout = createContext<contextType>(defaultContext);

const ProviderLayout = ({ children }: { children: ReactNode }) => {
    const [stateAside, set_Aside] = useState(false)
    return (
        <contextLayout.Provider
            value={{
                stateAside,
                set_Aside: (value: boolean = !stateAside) => set_Aside(value)
            }}
        >
            {children}
        </contextLayout.Provider>
    );
};

const useLayout = () => {
    return useContext(contextLayout);
};
export { ProviderLayout, contextLayout, useLayout };
