import React, { useEffect, useRef } from "react";
import { BiUpArrow } from "react-icons/bi";
import { useGeneralContext } from '../components/context'

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGeneralContext();

  const container = useRef(null);
  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [page, location]);
  return (
    <aside
      className={`${
        isSubmenuOpen
          ? " absolute top-[4rem] left-[50%]  mt-6 translate-x-[-50%] block"
          : "hidden"
      } `}
      ref={container}
    >
      <BiUpArrow className="absolute text-white top-0 left-[50%]" size={27} />
      <section className="mt-8   shadow-xl  rounded-xl bg-white">
        <div className={`' flex py-12  px-4'`}>
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <nav key={index} className="py-8 ">
                <h4 className="text-3xl font-bold py-8 ">{page}</h4>
                <div className="flex gap-12 w-5/6 flex-wrap justify-between">
                  {links.map((link, index) => {
                    const { label, url, icon } = link;
                    return (
                      <a
                        key={index}
                        href={url}
                        className="inline flex items-center gap-4"
                      >
                        {icon} {label}
                      </a>
                    );
                  })}
                </div>
              </nav>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

export default Submenu;
