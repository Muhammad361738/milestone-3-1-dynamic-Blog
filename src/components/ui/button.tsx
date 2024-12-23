import * as React from 'react';
import {cva , type VarientProps} from "class-variance-authority";
import {cn} from "../../lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
    {
        varients : {
            varient : {
                default : "bg-primary text-primary-forground shadow hover:bg-primary/90",
                destructive :"bg-destructive text-destructive-forground shadow-sm hover:bg-destructive/90",
                outline : "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-forground",
                secondary : "bg-secondary text-secondary-forground shadow-sm hover:bg-secondary/80 ",
                ghost: "hover:bg-accent hover:text-accent-forground",
                link: "text-primary underline-offset-4 hover:underline"
            },
            sie:{
                default: "h-9 px-4 py-2",
                sm :"h-8 rounded-md text-xs",
                lg: "h-10 rounded-md px-8",
                icon: "h-9 w-9"
            },
        },
        defaultVariants : {
            variant : "default",
            size : "default",
        }
    }
);

export interface ButtonProps
extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variants? : "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icons"
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement,ButtonProps> (
    ({className , variants = "default" , size = "default" ,asChild = false , ...props},ref) =>{
        const Comp = "button";
        return(
            <Comp
            className = {cn(buttonVariants({variants,size,className}))}
            ref = {ref}
            {...props}
            />
        )
    }
)
Button.displayName = "Button";
export {Button, buttonVariants}