import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { NavLinkProps } from "../types";

const GuestLayout: React.FC = () => {
    const links: NavLinkProps[] = [
        { href: "/", children: "Home", isActive: true },
        { href: "/", children: "Topic", isActive: false },
        { href: "/", children: "Store", isActive: false },
    ];
    return (
        <div className="min-h-screen font-mono">
            <header>
                <Navbar links={links} isAuthenticated={false} />
            </header>
            <main>
                <Outlet />
            </main>
            <footer className="bg-light-background dark:bg-dark-background border-t border-light-border dark:border-dark-border">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <h3 className="font-bold mb-4">QuizUp</h3>
                            <p className="text-light-textSecondary dark:text-dark-textSecondary">
                                La meilleure application de quiz pour tester vos
                                connaissances
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4 text-light-textPrimary dark:text-dark-textPrimary">
                                Liens rapides
                            </h3>
                            <ul className="space-y-2 text-light-textSecondary dark:text-dark-textSecondary">
                                <li>Fonctionnalités</li>
                                <li>Modes de jeu</li>
                                <li>Communauté</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4 text-light-textPrimary dark:text-dark-textPrimary">
                                Support
                            </h3>
                            <ul className="space-y-2 text-light-textSecondary dark:text-dark-textSecondary">
                                <li>Centre d'aide</li>
                                <li>Nous contacter</li>
                                <li>Politique de confidentialité</li>
                                <li>Conditions d'utilisation</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4 text-light-textPrimary dark:text-dark-textPrimary">
                                Suivez-nous
                            </h3>
                            <div className="flex space-x-4 text-light-textSecondary dark:text-dark-textSecondary">
                                <FontAwesomeIcon
                                    icon={faFacebookF}
                                    className="text-2xl hover:text-light-primary dark:hover:text-dark-primary cursor-pointer"
                                />
                                <FontAwesomeIcon
                                    icon={faTwitter}
                                    className="text-2xl hover:text-light-primary dark:hover:text-dark-primary cursor-pointer"
                                />
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    className="text-2xl hover:text-light-primary dark:hover:text-dark-primary cursor-pointer"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="text-center pt-8 border-t border-light-border dark:border-dark-border text-light-textSecondary dark:text-dark-textSecondary">
                        © 2024 QuizUp. Tous droits réservés.
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default GuestLayout;
