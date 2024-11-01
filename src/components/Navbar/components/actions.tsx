import SearchBar from "./searchBar";
import { NotificationBell, NotificationProps } from "./notifications";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faSearch } from "@fortawesome/free-solid-svg-icons";
import Button from "../../Button";

type AuthenticatedActionsProps = {
    notifications: NotificationProps[];
    openNotifications: boolean;
    setOpenNotifications: (isOpen: boolean) => void;
};
const AuthenticatedActions: React.FC<AuthenticatedActionsProps> = ({
    notifications,
    openNotifications,
    setOpenNotifications,
}) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    return (
        <>
            <div className="hidden md:flex items-end justify-end flex-1 mx-4">
                <SearchBar />
            </div>

            <div className="flex items-center gap-2">
                <div className="block md:hidden">
                    <Button
                        color="primary"
                        variant="outlined"
                        onClick={() => setIsSearchOpen(true)}
                        className="p-2 dark:bg-dark-tertiary bg-light-tertiary rounded-full"
                    >
                        <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
                    </Button>
                </div>

                <NotificationBell
                    notifications={notifications}
                    isOpen={openNotifications}
                    onToggle={setOpenNotifications}
                />

                <Button
                    color="primary"
                    variant="outlined"
                    className="relative p-2 dark:bg-dark-tertiary bg-light-tertiary rounded-full transition-colors"
                >
                    <FontAwesomeIcon icon={faCog} className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 bg-light-error dark:bg-dark-error text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                        {notifications.length}
                    </span>
                </Button>
            </div>

            {/* Barre de recherche mobile overlay */}
            {isSearchOpen && (
                <SearchBar
                    isMobile
                    isOpen={isSearchOpen}
                    onClose={() => setIsSearchOpen(false)}
                />
            )}
        </>
    );
};
export default AuthenticatedActions;
