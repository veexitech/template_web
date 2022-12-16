import { FaTachometerAlt } from "react-icons/fa";
import StyleMenu from "../components/navBars/leftNavBar/Menu/stylesMenu";
import { IoMdHome } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { RxExit, RxGear } from "react-icons/rx";
import { HiUsers } from "react-icons/hi";

export const MENU = [
  {
    title: "Home",
    icon: <IoMdHome size={StyleMenu.size} color={StyleMenu.color} />,
    href: "",
  },
  {
    title: "Dashboard",
    icon: <FaTachometerAlt size={StyleMenu.size} color={StyleMenu.color} />,
    href: "",
  },
  {
    title: "Projetos",
    icon: <IoMdHome size={StyleMenu.size} color={StyleMenu.color} />,
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
    icon: <IoMdHome size={StyleMenu.size} color={StyleMenu.color} />,
    href: "",
  },
  {
    title: "Messages",
    icon: <IoMdHome size={StyleMenu.size} color={StyleMenu.color} />,
    href: "",
  },
];

export const MENUS_CONFIGS = [
  {
    title: "Configurações",
    icon: <RxGear size={StyleMenu.size} color={StyleMenu.color} />,
    href: "",
  },
  {
    title: "Ajuda",
    icon: <FaUserFriends size={StyleMenu.size} color={StyleMenu.color} />,
    href: "",
  },
];
