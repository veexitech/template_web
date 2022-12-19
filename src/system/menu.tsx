import { FaTachometerAlt } from "react-icons/fa";
import StyleMenu from "../components/navBars/leftNavBar/Menu/stylesMenu";
import { IoMdHome } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { RxExit, RxGear } from "react-icons/rx";
import { HiUsers } from "react-icons/hi";

export const MENU = (theme: any) => {
  return [
    {
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
          title: "FazFreestyle",
          href: "",
        },
        {
          title: "Barbearia",
          href: "",
        },
      ],
    },
    {
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
  console.log("##### -> theme", theme);
  return [
    {
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
