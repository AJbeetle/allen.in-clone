import {ReactNode} from "react";
type Variant = "primary" | "secondary";
const Card = (props : {
    variant : Variant,
    image?:String,
    link?:String,
    headIcon?:ReactNode,
    extra?: String
}) => {

}