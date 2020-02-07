import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './sidebar.css';
import { Link } from "gatsby"

const SidebarItem = ({ label, path, items, depthStep = 10, depth = 0, ...rest }) => {
  const listItem = (
    <ListItem
      button
      dense
      {...rest}>
      <ListItemText style={{ paddingLeft: depth*depthStep }}>
        <span>{label}</span>
      </ListItemText>
    </ListItem>
  )

  return (
    <>
      <Link to={path} className="text-link">
        {listItem}
      </Link>
      {Array.isArray(items) ? (
        <List disablePadding dense>
          {items.map((subItem) => (
            <SidebarItem
              key={subItem.name}
              depth={depth + 1}
              depthStep={depthStep}
              {...subItem}
            />
          ))}
        </List>
      ) : null}
    </>
  )
}

const Sidebar = ({ items, depthStep, depth }) => {
  return (
    <div className="sidebar">
      <List disablePadding dense>
        {items.map((sidebarItem, index) => (
          <SidebarItem
            key={`${sidebarItem.name}${index}`}
            depthStep={depthStep}
            depth={depth}
            {...sidebarItem}
          />
        ))}
      </List>
    </div>
  )
}

export default Sidebar;
