import React from "react";
import IcomoonReact from "react-icomoon";
import iconSet from "../../assets/icons.json";

type IconProps = {
  icon: string;
  size?: number;
  color?: string;
  width?: number;
  height?: number;
};
export const Icon: React.FC<IconProps> = ({
  icon,
  color,
  size,
  width,
  height,
}) => {
  return (
    <IcomoonReact
      icon={icon}
      size={size}
      iconSet={iconSet}
      color={color}
      width={width}
      height={height}
    />
  );
};
