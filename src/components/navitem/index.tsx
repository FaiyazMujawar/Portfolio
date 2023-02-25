import { useDispatch, useSelector } from 'react-redux';
import { NavbarItems } from '../navbar';
import { getNavIcon } from './util';
import { setNavItem } from '../../store/NavbarSlice';
import './styles.css';
import { Tooltip } from 'antd';

interface NavItemProps {
  item: NavbarItems;
  name: string;
  tooltipPosition: 'top' | 'bottom' | 'right' | 'left';
}

function NavItem({ item, name, tooltipPosition }: NavItemProps) {
  const dispatch = useDispatch();

  const selectedNavItem = useSelector(
    (state: any) => state.navbar.currentNavItem
  );

  function isSelected() {
    return selectedNavItem === item;
  }

  function setSelected() {
    dispatch(setNavItem({ navItem: item, navItemName: name }));
  }

  const navIcon = getNavIcon(item, 'var(--body)', 'icon', '22px');

  return (
    <Tooltip title={name} placement={tooltipPosition} arrow>
      <div
        className={`nav-item ${isSelected() ? 'selected' : ''}`}
        onClick={setSelected}
      >
        {navIcon}
        {isSelected() && (
          <div className='fw-semibold nav-item-name'>{name}</div>
        )}
      </div>
    </Tooltip>
  );
}

export default NavItem;
