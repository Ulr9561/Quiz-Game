import { Link } from "react-router-dom";
import { NavLinkProps } from "../../types";
import { cn } from "../../utils";

const NavLink: React.FC<NavLinkProps & { onClick?: () => void}> = ({ href, children, className, isActive = false, onClick}) => {
    return (
        <Link
            onClick={onClick}
            to={href}
            className={cn(
                "ml-4 font-grotesk font-bold transition-colors duration-200 no-underline text-xl",
                isActive && "text-light-primary dark:text-dark-primary",
                "text-light-textPrimary dark:text-dark-textPrimary hover:text-light-primary dark:hover:text-dark-primary",
                className
            )}

        >
            {children}
        </Link>
    );
}

export default NavLink;
