import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"

const DefaultLayout: React.FC = () => {
    return (
        <div className="min-h-screen bg-light-background dark:bg-dark-background text-light-textPrimary dark:text-dark-textPrimary">
            <header>
                <Navbar links={[]} isAuthenticated={true} />
            </header>
            <main className="pt-[72px]">
                <Outlet />
            </main>
        </div>
    );
}

export default DefaultLayout;
