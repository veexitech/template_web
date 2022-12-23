import { FaTachometerAlt } from "react-icons/fa";
import StyleMenu from "../components/navBars/leftNavBar/Menu/stylesMenu";
import { IoMdHome } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { RxExit, RxGear } from "react-icons/rx";
import { HiUsers } from "react-icons/hi";

export const MENU = (theme: any) => {
  return [
    {
      key: 1,
      title: "Home",
      icon: (
        <IoMdHome
          className={"menu-icons"}
          size={theme?.menu?.icon?.size}
          color={theme.menu.icon.color.default}
        />
      ),
      href: "",
    },
    {
      key: 2,
      title: "Dashboard",
      icon: (
        <FaTachometerAlt
          size={theme?.menu?.icon?.size}
          color={theme.menu.icon.color.default}
        />
      ),
      href: "",
    },
    {
      key: 3,
      title: "Projetos",
      icon: (
        <IoMdHome
          size={theme?.menu?.icon?.size}
          color={theme.menu.icon.color.default}
        />
      ),
      href: "",
      subMenu: [
        {
          key: 31,
          title: "FazFreestyle",
          href: "",
        },
        {
          key: 32,
          title: "Barbearia",
          href: "",
        },
      ],
    },
    {
      key: 4,
      title: "Tarefas",
      icon: (
        <IoMdHome
          size={theme?.menu?.icon?.size}
          color={theme.menu.icon.color.default}
        />
      ),
      href: "",
    },
    {
      key: 5,
      title: "Messages",
      icon: (
        <IoMdHome
          size={theme?.menu?.icon?.size}
          color={theme.menu.icon.color.default}
        />
      ),
      href: "",
    },
  ];
};

export const MENUS_CONFIGS = (theme: any) => {
  return [
    {
      key: 6,
      title: "Configurações",
      icon: (
        <RxGear
          size={theme?.menu?.icon?.size}
          color={theme.menu.icon.color.default}
        />
      ),
      href: "",
    },
    {
      key: 7,
      title: "Ajuda",
      icon: (
        <FaUserFriends
          size={theme?.menu?.icon?.size}
          color={theme.menu.icon.color.default}
        />
      ),
      href: "",
    },
  ];
};
