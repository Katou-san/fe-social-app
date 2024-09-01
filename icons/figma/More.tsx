import { PropsType_Icon_Fig } from "@/icons/figma/PropsType";
import * as React from "react";
import Svg, { Path } from "react-native-svg";
const MoreIcon_Fig = ({ color = '#fff', w = 24 }: PropsType_Icon_Fig, props: any) => (
    <Svg
        width={w}
        height={w}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 1.25C10.4812 1.25 9.25 2.48122 9.25 4C9.25 5.51878 10.4812 6.75 12 6.75C13.5188 6.75 14.75 5.51878 14.75 4C14.75 2.48122 13.5188 1.25 12 1.25ZM10.75 4C10.75 3.30964 11.3096 2.75 12 2.75C12.6904 2.75 13.25 3.30964 13.25 4C13.25 4.69036 12.6904 5.25 12 5.25C11.3096 5.25 10.75 4.69036 10.75 4Z"
            fill={color}
        />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 9.25C10.4812 9.25 9.25 10.4812 9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25ZM10.75 12C10.75 11.3096 11.3096 10.75 12 10.75C12.6904 10.75 13.25 11.3096 13.25 12C13.25 12.6904 12.6904 13.25 12 13.25C11.3096 13.25 10.75 12.6904 10.75 12Z"
            fill={color}
        />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 17.25C10.4812 17.25 9.25 18.4812 9.25 20C9.25 21.5188 10.4812 22.75 12 22.75C13.5188 22.75 14.75 21.5188 14.75 20C14.75 18.4812 13.5188 17.25 12 17.25ZM10.75 20C10.75 19.3096 11.3096 18.75 12 18.75C12.6904 18.75 13.25 19.3096 13.25 20C13.25 20.6904 12.6904 21.25 12 21.25C11.3096 21.25 10.75 20.6904 10.75 20Z"
            fill={color}
        />
    </Svg>
);
export default MoreIcon_Fig;
