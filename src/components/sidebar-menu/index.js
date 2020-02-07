import React from 'react';
import {sidebarItems} from './sidebar-items';
import Sidebar from './sidebar';

const SidebarMenu = () => {
  const items = sidebarItems;
  return (
    <div>
      <Sidebar items={items} />
    </div>
  )
}

export default SidebarMenu;