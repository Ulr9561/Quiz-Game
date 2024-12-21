import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar from "../assets/avatar.jpg";
import {
    faEdit,
    faImage,
    faTrophy,
    faCheckCircle,
    faCog,
    faShield,
    faUnlock,
    faComment,
    faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Button from "../components/Button";
import Badge from "../components/Badge";

const Profile: React.FC = () => {
    const [editMode, setEditMode] = useState(false);

    const dailyQuests = [
        {
            id: 1,
            title: "Répondre à 10 questions",
            progress: 7,
            goal: 10,
            rewards: {
                xp: 50,
                goldenCoins: 5,
            },
            completed: false,
        },
        {
            id: 2,
            title: "Gagner 500 XP",
            progress: 500,
            goal: 500,
            rewards: {
                xp: 50,
                goldenCoins: 5,
            },
            completed: true,
        },
        {
            id: 3,
            title: "Jouer 3 quiz",
            progress: 2,
            goal: 3,
            rewards: {
                xp: 50,
                goldenCoins: 5,
            },
            completed: false,
        },
    ];

    const friends = [
        {
            id: 1,
            name: "Marie Dupont",
            username: "@mariz_quiz_star",
            avatar,
            status: "online",
        },
        {
            id: 2,
            name: "Jean Martin",
            username: "@jean_quiz_hero",
            avatar,
            status: "online",
        },
        {
            id: 3,
            name: "Clara Bernard",
            username: "@clara_genius",
            avatar,
            status: "busy",
        },
        {
            id: 4,
            name: "Paul Roux",
            username: "@paul_player",
            avatar,
            status: "offline",
        },
        {
            id: 5,
            name: "Alice Dubois",
            username: "@alice_pro",
            avatar,
            status: "online",
        },
    ];

    return (
        <div className="font-grotesk container mx-auto py-5 bg-light-background px-8 dark:bg-dark-background">
            {/* Section Profil */}
            <section
                id="profile"
                className="flex justify-between items-center mb-6"
            >
                <div className="flex items-center space-x-6">
                    <div className="relative">
                        <img
                            src={avatar}
                            alt="user-avatar"
                            className="w-24 h-24 rounded-full border-4 border-blue-500 border-solid object-cover"
                        />
                        <Button className="absolute bottom-0 outline-none border-none right-0 bg-blue-500 text-white rounded-full p-1">
                            <FontAwesomeIcon icon={faImage} />
                        </Button>
                    </div>
                    <div>
                        {!editMode ? (
                            <div className="flex flex-col space-y-1">
                                <h1 className="text-2xl font-bold text-gray-800">
                                    Jean Dupont -{" "}
                                    <span className="font-bold text-light-error dark:text-dark-error">
                                        Niveau 42
                                    </span>
                                </h1>
                                <p className="text-gray-600">
                                    @jean_quiz_master •{" "}
                                    <span className="font-bold text-light-secondary dark:text-dark-secondary">
                                        350 XP
                                    </span>
                                </p>
                                <p>
                                    Rang #{156} •{" "}
                                    <span className="font-bold text-orange-400 dark:text-orange-600">
                                        Top 100
                                    </span>
                                </p>
                                <p>
                                    Membre depuis 2018 •{" "}
                                    <span className="font-bold text-gray-500 dark:text-gray-400">
                                        12 jours
                                    </span>
                                </p>
                                <p className="text-sm text-gray-500 mt-1">
                                    Passionné de quiz et d'apprentissage
                                </p>
                            </div>
                        ) : (
                            <div>
                                {/* Mode édition (à implémenter selon les besoins) */}
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex space-x-2">
                    <Button
                        onClick={() => setEditMode(!editMode)}
                        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 flex items-center"
                    >
                        {editMode ? "Save" : "Edit"}
                        <FontAwesomeIcon icon={faEdit} className="ml-2" />
                    </Button>
                </div>
            </section>

            {/* Section Daily Quests */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <FontAwesomeIcon
                        icon={faTrophy}
                        className="mr-2 text-yellow-500"
                    />{" "}
                    Daily Quests
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {dailyQuests.map((quest) => (
                        <div
                            key={quest.id}
                            className={`p-4 border rounded-lg ${
                                quest.completed
                                    ? "bg-light-secondary dark:bg-dark-secondary"
                                    : "bg-light-tertiary dark:bg-dark-tertiary"
                            } flex flex-col justify-between shadow-sm`}
                        >
                            <div className="mb-3">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-md font-semibold">
                                        {quest.title}
                                    </h3>
                                    {quest.completed && (
                                        <FontAwesomeIcon
                                            icon={faCheckCircle}
                                            className="text-green-500"
                                        />
                                    )}
                                </div>

                                <p className="text-sm text-gray-500">
                                    {quest.completed
                                        ? "Quête terminée ! 🎉"
                                        : `Progression : ${quest.progress} / ${quest.goal}`}
                                </p>
                            </div>
                            <div className="mt-auto">
                                <p className="font-bold text-green-600">
                                    +{quest.rewards.xp} XP
                                </p>
                                <p className="text-sm text-gray-600">
                                    +{quest.rewards.goldenCoins} Coins
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Account Settings */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <FontAwesomeIcon
                        icon={faCog}
                        className="mr-2 text-gray-500"
                    />{" "}
                    Account Settings
                </h2>
                <div className="rounded-lg">
                    <div className="flex justify-between items-center mb-3 bg-light-tertiary dark:bg-dark-tertiary shadow-md p-4">
                        <div className="flex items-center">
                            <FontAwesomeIcon
                                icon={faShield}
                                className="mr-2 w-5 h-5 text-blue-500"
                            />
                            <span>Two-Factor Authentication</span>
                        </div>
                        <Button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                            Enable
                        </Button>
                    </div>
                    <div className="flex justify-between items-center bg-light-tertiary dark:bg-dark-tertiary shadow-md p-5">
                        <div className="flex items-center">
                            <FontAwesomeIcon
                                icon={faUnlock}
                                className="mr-2 text-gray-500"
                            />
                            <span>Last Password Change</span>
                        </div>
                        <span>{new Date().toDateString()}</span>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <FontAwesomeIcon
                        icon={faComment}
                        className="mr-2 text-green-500"
                    />{" "}
                    Friends
                </h2>
                <div className="space-y-3">
                    {friends.map((friend) => (
                        <div
                            key={friend.id}
                            className="flex items-center justify-between p-3 bg-light-tertiary dark:bg-dark-tertiary shadow-md rounded-lg"
                        >
                            <div className="flex items-center space-x-3">
                                <div className="relative">
                                    <img
                                        src={friend.avatar}
                                        alt={`${friend.name} avatar`}
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <Badge
                                        size="small"
                                        color={
                                            friend.status === "online"
                                                ? "green"
                                                : friend.status === "busy"
                                                  ? "yellow"
                                                  : "gray"
                                        }
                                        position="bottom-right"
                                        isPill
                                    />
                                </div>

                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-gray-100">
                                        {friend.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {friend.username}
                                    </p>
                                </div>
                            </div>

                            <Button color="secondary" className="py-2">
                                <FontAwesomeIcon
                                    icon={faMessage}
                                    className="mr-2 text-dark-background dark:text-light-background"
                                />
                                <span>Send Message</span>
                            </Button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Profile;
