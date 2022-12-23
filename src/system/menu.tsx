import { FaTachometerAlt } from "react-icons/fa";
import StyleMenu from "../components/navBars/leftNavBar/Menu/stylesMenu";
import { IoMdHome } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { RxExit, RxGear } from "react-icons/rx";
import { HiUsers } from "react-icons/hi";

export const MENU = [
  {
    key: 1,
    title: "Home",
    icon: IoMdHome,
    href: "",
  },
  {
    key: 2,
    title: "Dashboard",
    icon: FaTachometerAlt,
    href: "",
  },
  {
    key: 3,
    title: "Projetos",
    icon: IoMdHome,
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
    icon: IoMdHome,
    href: "",
  },
  {
    key: 5,
    title: "Messages",
    icon: IoMdHome,
    href: "",
  },
];

export const MENUS_CONFIGS = [
  {
    key: 6,
    title: "Configurações",
    icon: RxGear,
    href: "",
  },
  {
    key: 7,
    title: "Ajuda",
    icon: FaUserFriends,
    href: "",
  },
];
