import { FaTachometerAlt } from "react-icons/fa";
import StyleMenu from "../components/navBars/leftNavBar/Menu/stylesMenu";
import { IoMdHome } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { RxExit, RxGear } from "react-icons/rx";
import { HiUsers } from "react-icons/hi";

export const MENU: IMenu[] = [
  {
    key: 1,
    title: "Home",
    icon: IoMdHome,
    href: "/",
    path: "/",
    element: <div>Home</div>,
  },
  {
    key: 2,
    title: "Dashboard",
    icon: FaTachometerAlt,
    href: "/dashboard",
    path: "/dashboard",
    element: <div>DASHBOARD</div>,
  },
  {
    key: 3,
    title: "Projetos",
    icon: IoMdHome,
    href: "",
    path: "/projetos",
    element: <div>projetos</div>,
    subMenu: [
      {
        key: 31,
        title: "FazFreestyle",
        href: "/projetos/fazfreestyle",
        path: "/projetos/fazfreestyle",
        element: <div>PRJ FazFreestyle</div>,
      },
      {
        key: 32,
        title: "Barbearia",
        href: "/projetos/barbearia",
        path: "/projetos/barbearia",
        element: <div>PRJ Barbearias</div>,
      },
    ],
  },
  {
    key: 4,
    title: "Tarefas",
    icon: IoMdHome,
    href: "/Tarefas",
    path: "/Tarefas",
    element: <div>Tarefas</div>,
  },
  {
    key: 5,
    title: "Messages",
    icon: IoMdHome,
    href: "/messages",
    path: "/messages",
    element: <div>Mensagens</div>,
  },
];

export const MENUS_CONFIGS: IMenu[] = [
  {
    key: 6,
    title: "Configurações",
    icon: RxGear,
    href: "/configuracoes",
    path: "/configuracoes",
    element: <div>CONFIGURACOES</div>,
  },
  {
    key: 7,
    title: "Ajuda",
    icon: FaUserFriends,
    href: "/ajuda",
    path: "/ajuda",
    element: <div>AJUDA</div>,
  },
];
export default [...MENU, ...MENUS_CONFIGS];

export interface IMenu {
  key: number;
  title: string;
  icon: any;
  href?: string;
  path: string;
  element?: any;
  subMenu?: ISubMenu[];
}
interface ISubMenu {
  key: string;
  title: string;
  href: string;
  path: string;
  element: any;
}
