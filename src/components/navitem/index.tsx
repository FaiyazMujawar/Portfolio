import { useDispatch, useSelector } from 'react-redux';
import { NavbarItems } from '../navbar';
import { getNavIcon } from './util';
import { setNavItem } from '../../store/NavbarSlice';
import './styles.css';

interface NavItemProps {
  item: NavbarItems;
  name: string;
}

function NavItem({ item, name }: NavItemProps) {
  const dispatch = useDispatch();

  const selectedNavItem = useSelector(
    (state: any) => state.navbar.currentNavItem
  );

  function isSelected(selectedItem: NavbarItems, currentItem: NavbarItems) {
    return selectedItem === currentItem;
  }

  function setSelected() {
    dispatch(setNavItem({ navItem: item, navItemName: name }));
  }

  const selected = isSelected(item, selectedNavItem);

  return (
    <div
      className={`nav-item rounded ${selected ? 'selected' : ''}`}
      onClick={setSelected}
    >
      {getNavIcon(item, selected ? '#e84c56' : '#6c757d', 'icon pe-2')}
      {isSelected(item, selectedNavItem) && <div>{name}</div>}
    </div>
  );
}

export default NavItem;
