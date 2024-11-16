import SearchBar from "./searchBar";
import { NotificationBell, NotificationProps } from "./notifications";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Button from "../../Button";
import Menu from "./menu";

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

                <Menu />
            </div>

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
