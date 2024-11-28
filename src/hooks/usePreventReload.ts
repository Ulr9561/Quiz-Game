import { useEffect } from "react"

const usePreventReload = (onUnloadCallback: () => void) => {
    useEffect(() => {
        const handleBeforeUnload = (event: BeforeUnloadEvent) => {
            event.preventDefault();
            onUnloadCallback();
        };
        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [onUnloadCallback]);
};

export default usePreventReload;

