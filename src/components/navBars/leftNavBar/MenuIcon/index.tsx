import React from "react";
import { useTheme } from "styled-components";

interface IMenuIcon {
  Icon: any;
}

const MenuIcon: React.FC<IMenuIcon> = (props) => {
  const { Icon } = props;
  const theme = useTheme();

  return (
    <Icon
      size={theme?.menu?.icon?.size}
      color={theme.menu.icon.color.default}
    />
  );
};

export default MenuIcon;
