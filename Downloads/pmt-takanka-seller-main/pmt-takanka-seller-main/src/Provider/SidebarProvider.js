import { createContext, useEffect, useState } from "react";

export const SidebarContext = createContext()

export const SideBarProvider = ({ children }) => {
    const [width, setWidth] = useState(window.screen.width);
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
    }

    return (
        <>
            <SidebarContext.Provider value={{
                showSidebar: showSidebar,
                sidebar: sidebar
            }}>
                {children}
            </SidebarContext.Provider>
        </>
    )
}