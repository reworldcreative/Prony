import React, { FC } from "react";
import "./Workspaces.scss";
import Breadcrumbs from "@/components/widgets/Breadcrumbs/Breadcrumbs";

const Workspaces: FC = () => {
  return (
    <div>
      <Breadcrumbs
        currentTitle={["Workspaces"]}
        currentLink={["/client"]}
        defaultLink="/client"
        defaultTitle="Client"
      />
    </div>
  );
};

export default Workspaces;
