import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../Button";
import React, { forwardRef, useRef } from "react";

export type NotificationProps = {
    id: number;
    text: string;
    type: string;
    time: string;
};

const NotificationBell: React.FC<{
    notifications: NotificationProps[];
    isOpen: boolean;
    onToggle: (value: boolean) => void;
}> = ({ notifications, isOpen, onToggle }) => {
    const panelRef = useRef<HTMLDivElement>(null);

    const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
        if (!panelRef.current?.contains(e.relatedTarget as Node)) {
            onToggle(false);
        }
    };
    return (
        <div className="relative" onBlur={handleBlur}>
            <Button
                color="primary"
                variant="outlined"
                onClick={() => onToggle(!isOpen)}
                className="relative p-2 dark:bg-dark-tertiary bg-light-tertiary rounded-full transition-colors"
            >
                <FontAwesomeIcon icon={faBell} className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-light-error dark:bg-dark-error text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                    {notifications.length}
                </span>
            </Button>
            {isOpen && (
                <NotificationsPanel
                    ref={panelRef}
                    notifications={notifications}
                />
            )}
        </div>
    );
};

const NotificationsPanel = forwardRef<
    HTMLDivElement,
    { notifications: NotificationProps[] }
>(({ notifications }, ref) => (
    <div
        ref={ref}
        tabIndex={0}
        className="absolute font-mono right-0 mt-2 w-80 bg-white dark:bg-dark-tertiary rounded-lg shadow-lg z-50"
    >
        <div className="p-4">
            <h3 className="font-bold mb-4">Notifications</h3>
            <div className="space-y-3">
                {notifications.map((notif) => (
                    <NotificationItem key={notif.id} notification={notif} />
                ))}
            </div>
        </div>
    </div>
));

const NotificationItem: React.FC<{ notification: NotificationProps }> = ({
    notification,
}) => {
    return (
        <div className="flex items-start gap-3 p-3 bg-light-tertiary dark:bg-dark-background rounded hover:bg-light-border dark:hover:bg-dark-border transition-colors cursor-pointer">
            <FontAwesomeIcon
                icon={faBell}
                className="w-5 h-5 mt-1 flex-shrink-0"
            />
            <div>
                <p className="text-sm">{notification.text}</p>
                <span className="text-xs text-light-textSecondary dark:text-dark-textSecondary">
                    {notification.time}
                </span>
            </div>
        </div>
    );
};

export { NotificationBell, NotificationsPanel, NotificationItem };
