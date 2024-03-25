import {
  AreaChart,
  Home,
  MessageSquareMore,
  NotebookPen,
  Settings2,
  ShoppingBasket,
  Truck,
} from "lucide-react";
import Link from "next/link";
import LogOutButton from "../logout/LogOut";

const dashboardMenu = [
  {
    id: 1,
    title: "Dashboard",
    icon: <Home />,
    link: "/dashboard",
  },
  {
    id: 2,
    title: "Posts",
    icon: <NotebookPen />,
    link: "/dashboard/posts",
  },
  {
    id: 2,
    title: "Orders",
    icon: <ShoppingBasket />,
    link: "/orders",
  },
  {
    id: 3,
    title: "Products",
    icon: <Truck />,
    link: "/products",
  },
  {
    id: 4,
    title: "Analytics",
    icon: <AreaChart />,
    link: "/analytics",
  },

  {
    id: 5,
    title: "Settings",
    icon: <Settings2 />,
    link: "/settings",
  },

  {
    id: 6,
    title: "Messages",
    icon: <MessageSquareMore />,
    link: "/messages",
  },
];
const Menubar = () => {
  return (
    <div className=" flex p-5 flex-col h-full justify-between">
      <div className=" flex gap-2 flex-col flex-1">
        {dashboardMenu.map((item) => (
          <Link
            className="flex gap-2 text-primary font-medium hover:text-red-2 hover:underline p-2 bg-gray-100 rounded items-center"
            href={item.link}
            key={item.id}
          >
            <span>{item.icon}</span>
            {item.title}
          </Link>
        ))}
      </div>
      <LogOutButton />
    </div>
  );
};

export default Menubar;
