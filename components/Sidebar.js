import React,{useEffect} from "react";
// import sublinks from "../data";
import { useGeneralContext } from '../components/context'
import sublinks from '../data'
import { menuItems } from "../Utils/navData";

const Sidebar = () => {
  return (
    <div className="text-left py-8 capitalize  h-full">
      {menuItems.map((item, index) => {
        const { submenu, title, url } = item;
        return (
          <nav key={index} className="py-6 ">
            <a className="text-3xl font-bold  " href={url} >{title}</a>
            <div className="flex gap-4 w-5/6 flex-wrap justify-between">
              {submenu.map((link, index) => {
                const { title, url} = link;
                return (
                  <a
                    key={index}
                    href={url}
                    className=" pt-2  "
                  >
                   {title}
                  </a>
                );
              })}
            </div>
          </nav>
        );
      })}
    </div>
  );
};

export default Sidebar;