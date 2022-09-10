import React, {useState, useContext} from "react";
import { filterData, getFilterValues } from "../Utils/FilterData";
import sublinks from "../data";

const AppContext = React.createContext()
function AppProvider({children}){
    const [searchFilters, setSearchFilters] = useState(false);
    const [filters, setFilters] = useState(filterData);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [location, setLocation] = useState({});
    const [page, setPage] = useState({ page: "", links: [] });

    const openFilters = ()=>{
      setSearchFilters(true)
    }
    const closeFilters = () => {
      setSearchFilters(false);
    };
    
    
    const openSubmenu = (text, coordinates) => {
      // const page = sublinks.find((link) => link.page === text);
      // setPage(page);
      setLocation(coordinates);
      setIsSubmenuOpen(true);
    };
    const closeSubmenu = () => {
      setIsSubmenuOpen(false);
    };
    const openSidebar = () => {
      setIsSidebarOpen(true);
    };
    const closeSidebar = () => {
      setIsSidebarOpen(false);
    };


    return (
      <AppContext.Provider
        value={{
          searchFilters,
          setSearchFilters,
          filters,
          setFilters,
          openFilters,
          closeFilters,
          openSidebar,
          openSubmenu,
          closeSidebar,
          closeSubmenu,
          page,
          location,
          isSubmenuOpen,
          isSidebarOpen,
        }}
      >
        {children}
      </AppContext.Provider>
    );
}

export const useGeneralContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };