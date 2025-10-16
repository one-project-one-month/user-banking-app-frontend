import {
  HelpingHand,
  History,
  Home,
  icons,
  ScanLine,
  Settings,
} from "lucide-react";

export const menu = [
  {
    name: "Home",
    link: "/",
    icon: Home,
  },
  {
    name: "Transfer",
    link: "/service",
    icon: HelpingHand,
  },
  {
    name: "Scan",
    link: "/scan",
    icon: ScanLine,
    isActive: false,
    children: [
      {
        name: "Scan to Pay",
        link: "/scan/scan-to-pay",
        icon: "",
      },
      {
        name: "QR to Pay",
        link: "/scan/qr-to-pay",
        icon: "",
      },
      {
        name: "QR to Recieve",
        link: "/scan/qr-to-recieve",
        icon: "",
      },
    ],
  },
  {
    name: "History",
    link: "/transactions",
    icon: History,
  },
  {
    name: "Settings",
    link: "/settings",
    icon: Settings,
  },
];

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
