import { userStats } from "../utils/data";
import BoardCard from "../components/Dashboard/ui/boardCard";
import { useState } from "react";
import Button from "../components/Button";
import GameModeSelector from "../components/Dashboard/ui/gameMode";
import TabContent from "../components/Dashboard/ui/tabContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield } from "@fortawesome/free-solid-svg-icons";
import Avatar from "../assets/avatar.jpg";

const Dashboard: React.FC = () => {
    const [activeTab, setActiveTab] = useState("recommended");

    return (
        <div className="min-h-screen font-mono p-8 bg-light-background dark:bg-dark-background">
            <div className="flex flex-col md:flex-row justify-between items-start mb-10">
                <div>
                    <h1 className="text-4xl font-bold text-light-primary dark:text-dark-primary">
                        Tableau de Bord
                    </h1>
                    <p className="text-light-textSecondary dark:text-dark-textSecondary">
                        Niveau {"42"} • Rang #{156}
                    </p>
                </div>
                <div className="flex justify-center">
                    <GameModeSelector />
                </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                    <img
                        src={Avatar}
                        alt="Profile"
                        className="rounded-full w-32 h-32 object-cover border-4 border-light-primary dark:border-dark-primary"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-light-primary dark:bg-dark-primary text-white rounded-full px-3 py-1 text-sm">
                        Nv. 42
                    </div>
                </div>
                <h2 className="text-xl font-bold text-light-textPrimary dark:text-dark-textPrimary">
                    John Doe
                </h2>
                <div className="flex items-center gap-2">
                    <FontAwesomeIcon
                        icon={faShield}
                        className="w-5 h-5 text-light-primary dark:text-dark-primary"
                    />
                    <span className="text-light-textSecondary dark:text-dark-textSecondary">
                        12,450 points
                    </span>
                </div>
            </div>
            <div className="mb-12">
                <h2 className="text-2xl font-semibold text-light-textPrimary dark:text-dark-textPrimary mb-6">
                    Statistiques
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {userStats.map((stat) => (
                        <BoardCard
                            key={stat.title}
                            title={stat.title}
                            value={stat.value}
                            icon={stat.icon}
                            color={stat.color}
                        />
                    ))}
                </div>
            </div>

            <div className="mb-12">
                <div className="flex border-b font-mono border-light-border dark:border-dark-border">
                    <Button
                        color="tertiary"
                        variant="outlined"
                        onClick={() => setActiveTab("recent")}
                        className={`pb-4 px-4 font-medium ${
                            activeTab === "recent"
                                ? "text-light-primary dark:text-dark-primary border-b-2 border-light-primary dark:border-dark-primary"
                                : "text-light-textSecondary dark:text-dark-textSecondary"
                        } transition-colors font-mono`}
                    >
                        Activité Récente
                    </Button>
                    <Button
                        color="tertiary"
                        variant="outlined"
                        onClick={() => setActiveTab("recommended")}
                        className={`pb-4 px-4 font-medium ${
                            activeTab === "recommended"
                                ? "text-light-primary dark:text-dark-primary border-b-2 border-light-primary dark:border-dark-primary"
                                : "text-light-textSecondary dark:text-dark-textSecondary"
                        } transition-colors font-mono`}
                    >
                        Recommandés
                    </Button>
                </div>
                <div>
                    {activeTab === "recent" ? (
                        <TabContent contentType="recent" />
                    ) : (
                        <TabContent contentType="recommended" />
                    )}
                </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Événement spécial */}
                <div className="bg-gradient-to-r from-light-primary to-purple-500 dark:from-dark-primary/100 dark:to-purple-800 p-6 rounded-lg shadow-md text-white">
                    <h2 className="text-2xl font-bold mb-2">
                        Événement Spécial: Challenge du Week-end
                    </h2>
                    <p className="mb-4 text-sm text-white/80">
                        Participez à notre marathon de quiz ce week-end et
                        gagnez des récompenses exclusives!
                    </p>
                    <Button
                        className="bg-white text-light-primary dark:text-dark-primary hover:bg-opacity-90 transition-all px-4 py-2 rounded-full"
                        onClick={() => alert("Inscription réussie!")}
                    >
                        S'inscrire
                    </Button>
                </div>

                <div className="bg-light-background dark:bg-dark-tertiary p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-light-textPrimary dark:text-dark-textPrimary mb-4">
                        Progression vers le prochain niveau
                    </h2>
                    <div className="relative w-full h-6 bg-light-tertiary dark:bg-dark-background rounded-full overflow-hidden mb-3">
                        <div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary"
                            style={{ width: "75%" }}
                        ></div>
                    </div>
                    <div className="flex justify-between text-sm text-light-textSecondary dark:text-dark-textSecondary">
                        <span>Niveau {42}</span>
                        <span>1250 points restants</span>
                        <span>Niveau {43}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
