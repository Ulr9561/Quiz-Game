import { useEffect } from "react"

const usePreventReload = (onunload: () => void) => {
    useEffect(() => {
        const handleBeforeUnload = (event: BeforeUnloadEvent) => {
            event.preventDefault();
            onunload();
        };
        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [onunload]);
};

const usePreventBack = (onback: () => void) => {
    useEffect(() => {
        const handlePopState = () => {
           
            onback();
            window.history.pushState(null, "", window.location.href);
        };

        window.history.pushState(null, "", window.location.href);

        window.addEventListener("popstate", handlePopState);

        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, [onback]);
};

export {usePreventReload, usePreventBack};

