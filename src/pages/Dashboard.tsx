import { userStats } from "../utils/data";
import BoardCard from "../components/Dashboard/ui/boardCard";
import { useState } from "react";
import Button from "../components/Button";
import GameModeSelector from "../components/Dashboard/ui/gameMode";
import TabContent from "../components/Dashboard/ui/tabContent";

const Dashboard: React.FC = () => {
    const [activeTab, setActiveTab] = useState("recommended");

    return (
        <div className="min-h-screen font-mono p-8 bg-light-background dark:bg-dark-background">
            <div className="flex flex-col md:flex-row justify-between gap-2 items-start mb-10">
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
        </div>
    );
};

export default Dashboard;
