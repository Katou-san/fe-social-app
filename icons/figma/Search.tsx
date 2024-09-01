import { PropsType_Icon_Fig } from "@/icons/figma/PropsType";
import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: animate */
export const SearchIcon_Fig = ({ color = '#fff', w = 24 }: PropsType_Icon_Fig, props: any) => (
    <Svg
        id="Search"
        width={w}
        height={w}
        viewBox="0 0 33 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
            maxWidth: "100%",
            maxHeight: "100%",
        }}
        {...props}
    >
        <Circle
            cx={15.125}
            cy={15.125}
            r={9.625}
            stroke={color}
            strokeWidth={2}
        />
        <Path
            d="m27.5 27.5-4.125-4.125"
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
        />
    </Svg>
);