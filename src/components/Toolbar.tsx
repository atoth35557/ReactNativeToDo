import {
  StyleType,
  TopNavigationAction,
  TopNavigationActionElement,
  TopNavigationProps,
} from "@ui-kitten/components";
import React from "react";
import { useState } from "react";
import { ImageProps } from "react-native";
import { MoreVerticalIcon } from "../../assets/icons";

export interface IProps extends TopNavigationProps {
  menu?: React.ReactElement;
  backIcon?: (style: StyleType) => React.ReactElement<ImageProps>;
  menuIcon?: (style: StyleType) => React.ReactElement<ImageProps>;
  onBackPress?: () => void;
}
export const Toolbar = (props: IProps): TopNavigationActionElement => {
  const {
    menu,
    backIcon,
    menuIcon,
    onBackPress,
    ...topNavigationProps
  } = props;
  const [menuVisible, setMenuVisible] = useState(false);

  const onMenuSelect = (index: number) => {
    setMenuVisible(false);
  };

  const onMenuActionPress = () => {
    setMenuVisible(!menuVisible);
  };

  const renderMenuAnchorAction = (): TopNavigationActionElement => (
    <TopNavigationAction
      icon={props.menuIcon === null ? props.menuIcon : MoreVerticalIcon}
      onPress={onMenuActionPress}
    />
  );

  
  return <div></div>;
};
