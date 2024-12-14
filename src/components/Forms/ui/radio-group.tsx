import React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "../../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const RadioGroup = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
    <RadioGroupPrimitive.Root
        className={cn("flex flex-col gap-2", className)}
        {...props}
        ref={ref}
    />
));

RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => (
    <RadioGroupPrimitive.Item
        ref={ref}
        className={cn(
            "flex items-center justify-center aspect-square h-6 w-6 rounded-full border border-light-border dark:border-dark-border",
            "text-light-primary dark:text-dark-primary",
            "ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-light-primary dark:focus-visible:ring-dark-primary",
            "disabled:cursor-not-allowed disabled:opacity-50",
            className,
        )}
        {...props}
    >
        {" "}
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
            <FontAwesomeIcon
                icon={faCircle}
                className="h-2.5 w-2.5 fill-current text-current"
            />
        </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
));
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
export { RadioGroup, RadioGroupItem };
