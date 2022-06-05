/**
 * @description this file hold the data about advantage of Egymarket site
 */
// icons
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SecurityIcon from "@mui/icons-material/Security";
// colrs from theme
import { colors } from "../themes/theme";
export const advantages = [
  {
    id: 1,
    advantageTitle: "Free Shipping",
    advantageText: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    icon: <LocalShippingIcon sx={{ fontSize: 50, color: colors.mid_gray }} />,
  },
  {
    id: 2,
    advantageTitle: "24/7 Customer Support",
    advantageText: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    icon: <HeadphonesIcon sx={{ fontSize: 50, color: colors.mid_gray }} />,
  },
  {
    id: 3,
    advantageTitle: "Secure online payment",
    advantageText: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    icon: <SecurityIcon sx={{ fontSize: 50, color: colors.mid_gray }} />,
  },
  {
    id: 4,
    advantageTitle: "Moneyback guarantee",
    advantageText: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    icon: (
      <SettingsBackupRestoreIcon
        sx={{ fontSize: 50, color: colors.mid_gray }}
      />
    ),
  },
];
