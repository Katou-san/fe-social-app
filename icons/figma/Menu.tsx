import { PropsType_Icon_Fig } from "@/icons/figma/PropsType";
import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export const MenuIcon_Fig = ({ color = '#fff', w = 24 }: PropsType_Icon_Fig, props: any) => (
    <Svg
        width={w}
        height={w}
        viewBox="0 0 36 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G filter="url(#filter0_d_159_3083)">
            <Path
                d="M7.5 7.875C6.87868 7.875 6.375 8.37868 6.375 9C6.375 9.62132 6.87868 10.125 7.5 10.125H28.5C29.1213 10.125 29.625 9.62132 29.625 9C29.625 8.37868 29.1213 7.875 28.5 7.875H7.5Z"
                fill={color}
            />
            <Path
                d="M7.5 16.875C6.87868 16.875 6.375 17.3787 6.375 18C6.375 18.6213 6.87868 19.125 7.5 19.125H16.5C17.1213 19.125 17.625 18.6213 17.625 18C17.625 17.3787 17.1213 16.875 16.5 16.875H7.5Z"
                fill={color}
            />
            <Path
                d="M7.5 25.875C6.87868 25.875 6.375 26.3787 6.375 27C6.375 27.6213 6.87868 28.125 7.5 28.125H28.5C29.1213 28.125 29.625 27.6213 29.625 27C29.625 26.3787 29.1213 25.875 28.5 25.875H7.5Z"
                fill={color}
            />
        </G>
        <Defs></Defs>
    </Svg>
);

