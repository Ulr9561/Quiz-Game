import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from "react";

export type NavLinkProps = {
    href: string;
    children: ReactNode;
    className?: string;
    isActive?: boolean;
}

export interface FeatureCardProps {
    icon: IconDefinition;
    title: string;
    description: string;
}
