import {
    faChevronRight,
    faCog,
    faDashboard,
    faUser,
    IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../Button";
import { forwardRef, useRef, useState } from "react";
import Avatar from "../../../assets/avatar.jpg";
import NavLink from "../../Link";

type MenuItemProps = {
    name: string;
    href: string;
    icon: IconDefinition;
};

const menuItems = [
    {
        name: "Profile",
        href: "/",
        icon: faUser,
    },
    {
        name: "Categories",
        href: "/categories",
        icon: faDashboard,
    },
    {
        name: "Settings",
        href: "/",
        icon: faCog,
    },
];
const Menu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
        if (!menuRef.current?.contains(e.relatedTarget as Node)) {
            setIsOpen(false);
        }
    };
    return (
        <div className="relative" onBlur={handleBlur}>
            <Button
                color="primary"
                onClick={() => setIsOpen(!isOpen)}
                variant="outlined"
                className="relative p-2 dark:bg-dark-tertiary bg-light-tertiary rounded-full transition-colors"
            >
                <img src={Avatar} className="w-12 h-12 rounded-full" />
            </Button>
            {isOpen && <MenuList ref={menuRef}/>}
        </div>
    );
};

const MenuList = forwardRef<HTMLDivElement, object>(({ ...props }, ref) => {
    return (
        <div
            ref={ref}
            className="absolute gap-3 bg-light-tertiary dark:bg-dark-tertiary w-56 rounded-lg px-4 py-2 top-20 right-3 flex flex-col space-y-2"
            {...props}
        >
            {menuItems.map((item) => (
                <MenuItem
                    key={item.name}
                    name={item.name}
                    href={item.href}
                    icon={item.icon}
                />
            ))}
        </div>
    );
});

const MenuItem: React.FC<MenuItemProps> = ({ name, href, icon }) => {
    return (
        <NavLink
            className="flex font-mono justify-between items-center text-light-textPrimary group dark:text-dark-textPrimary text-[17px]"
            href={href}
        >
            <div className="flex flex-row justify-center items-center space-x-2">
                <FontAwesomeIcon icon={icon} />
                <p className="text-md">{name}</p>
            </div>
            <div>
                <FontAwesomeIcon
                    icon={faChevronRight}
                    className="group-hover:translate-x-1 transition-transform"
                />
            </div>
        </NavLink>
    );
};

export default Menu;
