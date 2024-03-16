import React, { FC, useContext } from "react";
import "./Posts.scss";
import closeIcon from "@/assets/img/icons/close.svg";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";

interface MarkerProps {
  name: string;
  removeItem: () => void;
}

const Marker: FC<MarkerProps> = ({ name, removeItem }) => {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="posts__marker subtitle-second">
      {name}
      <button className="posts__markerRemove" aria-label="remove marker" onClick={removeItem}>
        <img
          src={closeIcon}
          className={`posts__markerIcon posts__markerIcon_${theme}`}
          alt="remove marker icon"
          width="7"
          height="7"
          aria-hidden="true"
        />
      </button>
    </div>
  );
};

export default Marker;
