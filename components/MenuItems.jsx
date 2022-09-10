import React,{useState, useRef, useEffect} from 'react'
import Dropdown from './Dropdown';
import Link from 'next/link';

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (
        dropdown &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setDropdown(false);
      }
    };
    document.addEventListener('mouseover', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mouseover', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [dropdown]);

  const onMouseOver = () => {
    window.innerWidth > 830 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 830 && setDropdown(false);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };
  return (
    <li
      className="menu-items capitalize"
      ref={ref}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
       {items.url && items.submenu ? (
        <>
          <button
          
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
            <div >
              <Link href={items.url}>{items.title}</Link>
            </div>
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button
          
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}{' '}
            {depthLevel > 0 &&
              <span>&raquo;</span>
            }
          </button>
     <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <div >

        <Link href={items.url}>
          {items.title}
          </Link>
          </div>
      )}
    </li>
  );
};

export default MenuItems;




// const MenuItems = ({ items, depthLevel }) => {
//   const [dropdown, setDropdown] = useState(false);
//    let ref = useRef();
//    useEffect(() => {
//  const handler = (event) => {
//   if (dropdown && ref.current && !ref.current.contains(event.target)) {
//    setDropdown(false);
//   }
//  };
//  document.addEventListener("mousedown", handler);
//  document.addEventListener("touchstart", handler);
//   return () => {
//   // Cleanup the event listener
//   document.removeEventListener("mousedown", handler);
//   document.removeEventListener("touchstart", handler);
//  };
// }, [dropdown]);
// const onMouseEnter = () => {
//  window.innerWidth > 960 && setDropdown(true);
// };

// const onMouseLeave = () => {
//  window.innerWidth > 960 && setDropdown(false);
// };

//   return (
//     <li className="menu-items"  ref={ref}  onMouseEnter={onMouseEnter}
//    onMouseLeave={onMouseLeave}>
//       {items.submenu ? (
//         <>
//           <button type="button" 
//           className={dropdown ? "true" : "false"}
//       onClick={() => setDropdown((prev) => !prev)}>
//             {items.title}{' '}
//             {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
//           </button>
//           <Dropdown submenus={items.submenu}   depthLevel={depthLevel} />
//         </>
//       ) : (
//         <a href={items.url}>{items.title}</a>
//       )}
//     </li>
//   );
// };

// export default MenuItems;