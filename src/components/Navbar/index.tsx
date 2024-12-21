import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavbarProps } from "../../types";
import Button from "../Button";
import NavLink from "../Link";
import ToggleDarkMode from "../Theme";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import AuthenticatedActions from "./components/actions";
import { useLocation } from "react-router-dom";


const UnauthenticatedActions: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row md:items-center md:space-x-2 md:space-y-0 space-y-2 md:justify-between">
            <Button
                variant="outlined"
                className="hover:bg-light-primary/80 rounded-full p-4 border-[1px] border-solid dark:hover:bg-dark-primary/80"
                size="small"
            >
                Sign Up
            </Button>
            <Button
                color="secondary"
                className="rounded-full p-4 border-1"
                size="small"
            >
                Login
            </Button>
        </div>
    );
};

const Navbar: React.FC<NavbarProps> = ({ isAuthenticated, links }) => {
    const [menu, setMenu] = useState<boolean>(false);
    const [openNotifications, setOpenNotifications] = useState<boolean>(false);
    const { pathname } = useLocation();
    const [notifications] = useState([
        {
            id: 1,
            text: "Nouveau quiz disponible: Sciences Avancées",
            type: "info",
            time: "5 min ago",
        },
        {
            id: 2,
            text: "Événement en direct dans 2 heures!",
            type: "event",
            time: "1 hour ago",
        },
        {
            id: 3,
            text: "Vous avez gagné un nouveau badge!",
            type: "achievement",
            time: "2 hours ago",
        },
    ]);
    const authenticatedLinks = [
        {
            href: "/categories",
            label: "Categories",
        },
        {
            href: "/dashboard",
            label: "Dashboard",
        },
        {
            href: "/",
            label: "Evenements",
        },
    ];
    return (
        <nav className="fixed top-0 left-0 right-0 h-[72px] z-50 bg-light-tertiary dark:bg-dark-tertiary border-b border-b-light-border dark:border-b-dark-border shadow-md">
            <div className="container h-full mx-auto px-4">
                <div className="flex items-center justify-between h-full">
                    <div className="flex items-center space-x-3">
                        <ToggleDarkMode />
                        <svg
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 text-light-primary dark:text-dark-primary"
                        >
                            <path
                                d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
                                fill="currentColor"
                            />
                        </svg>
                        <NavLink
                            href="/"
                            className="text-xl font-bold text-light-textPrimary dark:text-dark-textPrimary"
                        >
                            QuizUp
                        </NavLink>
                    </div>

                    {isAuthenticated && (
                        <div className="lg:flex flex-1 hidden justify-center items-center gap-8">
                            {authenticatedLinks.map((link) => (
                                <NavLink
                                    key={link.label}
                                    href={link.href}
                                    className={`${
                                        pathname === link.href
                                            ? "text-light-primary dark:text-dark-primary font-semibold"
                                            : "text-light-textPrimary dark:text-dark-textPrimary hover:text-light-primary"
                                    }`}
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                        </div>
                    )}
                    {isAuthenticated ? (
                        <div className="flex flex-1 items-center justify-end">
                            <AuthenticatedActions
                                notifications={notifications}
                                openNotifications={openNotifications}
                                setOpenNotifications={setOpenNotifications}
                            />
                        </div>
                    ) : (
                        <>
                            <div
                                className={`
                md:relative md:flex md:flex-row md:h-auto md:w-auto md:bg-transparent
                absolute top-[72px] left-0 right-0 md:top-0
                border-b border-light-border dark:border-dark-border bg-light-tertiary dark:bg-dark-tertiary md:shadow-none shadow-lg
                transition-all duration-300 ease-in-out
                ${menu ? "flex flex-col" : "hidden md:flex "}
              `}
                            >
                                <div className="container flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0 px-4 py-4 md:p-0">
                                    <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                                        {links.map((link, index) => (
                                            <NavLink
                                                key={index}
                                                {...link}
                                                className={`text-xl font-semibold p-2 md:p-0 rounded-lg transition-colors
                          ${
                              link.isActive
                                  ? "bg-light-primary/10 md:bg-transparent text-light-primary dark:text-dark-primary"
                                  : "text-light-textPrimary dark:text-dark-textPrimary hover:bg-light-primary/5 md:hover:bg-transparent md:hover:text-light-primary"
                          }
                        `}
                                            />
                                        ))}
                                    </div>
                                    <div className="md:ml-auto">
                                        <UnauthenticatedActions />
                                    </div>
                                </div>
                            </div>

                            <div className="md:hidden">
                                <Button
                                    color="primary"
                                    variant="outlined"
                                    onClick={() => setMenu(!menu)}
                                >
                                    <FontAwesomeIcon
                                        icon={menu ? faClose : faBars}
                                    />
                                </Button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
