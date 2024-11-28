import React from "react";
import { cn } from "../../../utils";
import * as LabelPrimitive from "@radix-ui/react-label";

const Label = React.forwardRef<
    React.ElementRef<typeof LabelPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
    <LabelPrimitive.Root
        ref={ref}
        className={cn(
            "text-sm font-semibold leading-none font-grotesk",
            "text-light-textPrimary dark:text-dark-textPrimary",
            "peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            className,
        )}
        {...props}
    />
));

Label.displayName = "Label";

export default Label;
