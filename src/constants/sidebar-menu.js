import DashboardIcon from "../assets/icons/dashboard.svg";
import ShippingIcon from "../assets/icons/shipping.svg";
import ProductIcon from "../assets/icons/product.svg";
import UserIcon from "../assets/icons/user.svg";

const sidebar_menu = [
  {
    id: 1,
    icon: DashboardIcon,
    path: "/",
    title: "Dashboard",
  },
  {
    id: 2,
    icon: ProductIcon,
    path: "/admin/all-doctor",
    title: "All Doctors",
  },
  {
    id: 3,
    icon: ShippingIcon,
    path: "/admin/all-patient",
    title: "All Patients",
  },
  {
    id: 4,
    icon: UserIcon,
    path: "/admin/show-pending-request",
    title: "Show Pending Requests",
  },
];

export default sidebar_menu;
