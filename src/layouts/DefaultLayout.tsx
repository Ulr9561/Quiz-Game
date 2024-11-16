import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"
import { useAppSelector } from "../app/hooks";
import { selectIsQuiz } from "../app/slices/navbar";

const DefaultLayout: React.FC = () => {
    const isQuiz = useAppSelector(selectIsQuiz);

    return (
        <div className="min-h-screen bg-light-background dark:bg-dark-background text-light-textPrimary dark:text-dark-textPrimary">
            {/* <Toast
                message={"This a test message for testing purposes"}
                type={"warning"}
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
            <main className={isQuiz ? "pt-[72px]" : " pt-7"}>
                <Outlet />
            </main>
        </div>
    );
}

export default DefaultLayout;
