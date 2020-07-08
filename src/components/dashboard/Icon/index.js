import React from "react";

import MenuSVG from "~/public/icons/menu.svg";
import CloseSVG from "~/public/icons/close.svg";
import DashboardSVG from "~/public/icons/dashboard.svg";
import SettingSVG from "~/public/icons/settings.svg";
import LogoutSVG from "~/public/icons/logout.svg";

const icons = {
  menu: MenuSVG,
  close: CloseSVG,
  dashboard: DashboardSVG,
  settings: SettingSVG,
  logout: LogoutSVG,
};

function Icon({ icon, className }) {
  const IconComponent = icons[icon];
  return <IconComponent className={className} />;
}

export default Icon;
