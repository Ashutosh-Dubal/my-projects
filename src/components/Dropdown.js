import MenuItems from './MenuItems';

const Dropdown = ({ submenus, dropdown, depthLevel, closeDropdown }) => {
  depthLevel = depthLevel + 1;
  
  const dropdownClass = depthLevel > 1 ? 'dropdown-submenu' : '';
  
  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? 'show' : ''}`}>
      {submenus.map((submenu, index) => (
        <MenuItems
          items={submenu}
          key={index}
          depthLevel={depthLevel}
          closeDropdown={() => closeDropdown(submenu)}
        />
      ))}
    </ul>
  );
};

export default Dropdown;