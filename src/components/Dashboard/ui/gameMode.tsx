import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faUsers, faCalendar } from "@fortawesome/free-solid-svg-icons";
import Button from "../../Button";

const GameModeSelector = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMode, setSelectedMode] = useState<
        "solo" | "multiplayer" | "events" | null
    >(null);

    const gameModes = [
        {
            id: "solo",
            title: "Mode Solo",
            icon: faPlay,
            color: "bg-light-primary dark:bg-dark-primary",
        },
        {
            id: "multiplayer",
            title: "Multijoueur",
            icon: faUsers,
            color: "bg-light-secondary dark:bg-dark-secondary",
        },
        {
            id: "events",
            title: "Événements en Direct",
            icon: faCalendar,
            color: "bg-gradient-to-r from-purple-500 to-pink-500 dark:from-pink-800 dark:to-purple-800",
        },
    ];

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleSelectMode = (mode: "solo" | "multiplayer" | "events") => {
        setSelectedMode(mode);
        setIsModalOpen(false);
        console.log(`Mode sélectionné : ${selectedMode}`);
    };

    return (
        <>
            <Button
                className="group flex items-center justify-center gap-2 bg-light-primary dark:bg-dark-primary text-white py-4 rounded-lg hover:opacity-90 transition-transform transform hover:scale-105"
                onClick={handleOpenModal}
            >
                <FontAwesomeIcon
                    icon={faPlay}
                    className="w-5 h-5 group-hover:animate-pulse"
                />
                <span>Jouer</span>
            </Button>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-dark-background rounded-lg p-8 w-96 shadow-xl">
                        <h2 className="text-2xl font-bold mb-6 text-center text-light-textPrimary dark:text-dark-textPrimary">
                            Sélectionnez un Mode de Jeu
                        </h2>
                        <div className="space-y-4">
                            {gameModes.map((mode) => (
                                <Button
                                    key={mode.id}
                                    className={`w-full flex items-center justify-center gap-4 py-4 rounded-lg ${mode.color} text-white hover:opacity-90 transition-transform transform hover:scale-105`}
                                    onClick={() =>
                                        handleSelectMode(
                                            mode.id as
                                                | "solo"
                                                | "multiplayer"
                                                | "events",
                                        )
                                    }
                                >
                                    <FontAwesomeIcon
                                        icon={mode.icon}
                                        className="w-5 h-5"
                                    />
                                    <span>{mode.title}</span>
                                </Button>
                            ))}
                        </div>
                        <Button
                            variant="outlined"
                            color="tertiary"
                            className="mt-6 w-full"
                            onClick={() => setIsModalOpen(false)}
                        >
                            Annuler
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
};

export default GameModeSelector;
