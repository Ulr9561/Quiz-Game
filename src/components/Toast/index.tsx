import {
    faTimes,
    faCheckCircle,
    faInfoCircle,
    faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Button from "../Button";

type ToastProps = {
    title: string;
    message: string;
    type: "success" | "error" | "warning" | "info";
    onClose: () => void;
};

const Toast: React.FC<ToastProps> = ({ title, message, type, onClose }) => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                return Math.min(oldProgress + 1, 100);
            });
        }, 30);

        return () => {
            clearInterval(timer);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => onClose(), 5000);

        return () => clearTimeout(timer);
    }, [onClose]);

    const typeStyles = {
        success: "text-light-success dark:text-dark-success",
        error: "text-light-error dark:bg-dark-error",
        warning: "text-yellow-900 dark:text-yellow-600",
        info: "text-light-primary dark:text-dark-primary",
    };

    const progressStyles = {
        success: "bg-light-success",
        error: "bg-light-error",
        warning: "bg-yellow-600",
        info: "bg-light-primary",
    };

    const icons = {
        success: faCheckCircle,
        error: faExclamationTriangle,
        warning: faExclamationTriangle,
        info: faInfoCircle,
    };

    return (
        <div
            className={`fixed hidden font-mono top-20 right-4 z-50 bg-light-tertiary dark:bg-dark-tertiary w-80 max-w-xs shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 ease-in-out ${typeStyles[type]}`}
            role="alert"
        >
            <div className="flex p-4 space-x-3 items-start">
                <FontAwesomeIcon icon={icons[type]} className="w-5 h-5 mt-1" />
                <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-1">{title}</h4>
                    <p className="text-sm">{message}</p>
                </div>
                <Button
                    variant="outlined"
                    onClick={onClose}
                    className="text-gray-400 absolute top-1 right-2 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                    aria-label="Close"
                >
                    <FontAwesomeIcon icon={faTimes} className="w-4 h-4" />
                </Button>
            </div>
            <div className="h-1 bg-gray-700">
                <div
                    className={`h-full ${progressStyles[type]} transition-all duration-300 ease-out`}
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
};

export default Toast;
