import { FC, ReactElement } from "react";
import "./style.css";

export type MainLayoutProps = {
  fistChild: ReactElement;
  secondChild: ReactElement;
};

const MainLayout: FC<MainLayoutProps> = ({ fistChild, secondChild }) => {
  return (
    <div className="layout_wrapper">
      <div className="active_area">{fistChild}</div>
      <div className="active_area">{secondChild}</div>
    </div>
  );
};

export default MainLayout;
