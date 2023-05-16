import { useState, useEffect, useRef } from 'react';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  const closeDropdown = (hasSubmenu) => {
    if (!hasSubmenu && dropdown) {
      setDropdown(false);
    }
  };

  const navigateToParentPage = (url) => {
    window.location.href = url;
  };

  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() => closeDropdown(items.submenu)}
    >
      {items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => {
              if (items.url && depthLevel === 0) {
                navigateToParentPage(items.url);
              }
              setDropdown((prev) => !prev);
              closeDropdown(items.submenu);
            }}
          >
            {window.innerWidth < 960 && depthLevel === 0 ? (
              items.title
            ) : (
              <Link to={items.url}>{items.title}</Link>
            )}

            {depthLevel > 0 && window.innerWidth < 960 ? null : depthLevel > 0 && window.innerWidth > 960 ? (
              <span>&raquo;</span>
            ) : (
              <span className="arrow" />
            )}
          </button>
          {items.submenu && (
            <Dropdown
              depthLevel={depthLevel}
              submenus={items.submenu}
              dropdown={dropdown}
              closeDropdown={closeDropdown}
            >
              {items.submenu.map((submenu, index) => (
                <MenuItems
                  items={submenu}
                  key={index}
                  depthLevel={depthLevel}
                  closeDropdown={closeDropdown}
                />
              ))}
            </Dropdown>
          )}
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
            {depthLevel > 0 ? (
              <span>&raquo;</span>
            ) : (
              <span className="arrow" />
            )}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
            closeDropdown={closeDropdown}
          />
        </>
      ) : (
        <Link to={items.url}>{items.title}</Link>
      )}
    </li>
  );
};

export default MenuItems;