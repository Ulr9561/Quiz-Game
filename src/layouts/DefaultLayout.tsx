import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectIsQuiz, setIsQuiz } from "../app/slices/navbar";
import { useEffect } from "react";

const DefaultLayout: React.FC = () => {
    const isQuiz = useAppSelector(selectIsQuiz);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (window.location.href.includes('/quiz/')) {
            dispatch(setIsQuiz(true));
        }
    }, [dispatch])
    return (
        <div className="min-h-screen bg-light-background dark:bg-dark-background text-light-textPrimary dark:text-dark-textPrimary">
            {/* <Toast
                message={"This a test message for testing purposes"}
                type={"info"}
                onClose={function (): void {
                    throw new Error("Function not implemented.");
                }}
                title={"Warning"}
            /> */}
            {!isQuiz ?  (
                <header>
                    <Navbar links={[]} isAuthenticated={true} />
                </header>
            ) : null}
            <main className={isQuiz ? "" : "pt-[72px]"}>
                <Outlet />
            </main>
        </div>
    );
}

export default DefaultLayout;
