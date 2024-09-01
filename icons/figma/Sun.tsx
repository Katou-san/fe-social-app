import { PropsType_Icon_Fig } from "@/icons/figma/PropsType";
import * as React from "react";
import Svg, { G, Path, Defs, Ellipse } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export const SunIcon_Fig = ({ color = '#fff', w = 24 }: PropsType_Icon_Fig, props: any) => (
    <Svg
        width={w}
        height={w}
        viewBox="0 0 37 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Ellipse cx={18.5301} cy={18} rx={6.10843} ry={6} fill={color} />
        <Path
            d="M18.5302 7.5V4.5"
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
        />
        <Path
            d="M18.5302 31.5V28.5"
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
        />
        <Path
            d="M26.089 10.5749L28.2487 8.45361"
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
        />
        <Path
            d="M8.81172 27.5466L10.9714 25.4253"
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
        />
        <Path
            d="M29.2199 18L32.2741 18"
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
        />
        <Path
            d="M4.78618 18L7.84039 18"
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
        />
        <Path
            d="M26.089 25.4251L28.2487 27.5464"
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
        />
        <Path
            d="M8.81172 8.45339L10.9714 10.5747"
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
        />
    </Svg>
);

