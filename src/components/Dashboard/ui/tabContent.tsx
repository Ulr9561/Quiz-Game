type TabContentProps = {
    contentType: "recommended" | "recent";
};

const recentQuizzes = [
    {
        id: 1,
        title: "Histoire de France",
        score: 85,
        date: "2024-03-15",
        category: "Histoire",
    },
    {
        id: 2,
        title: "Géographie Mondiale",
        score: 92,
        date: "2024-03-14",
        category: "Géographie",
    },
    {
        id: 3,
        title: "Sciences",
        score: 78,
        date: "2024-03-13",
        category: "Sciences",
    },
];

const TabContent: React.FC<TabContentProps> = ({ contentType }) => {
    return (
        <div className="bg-light-tertiary lg:col-span-3 dark:bg-dark-tertiary p-6 rounded-lg shadow">
            {contentType === "recent" ? (
                <>
                    <h2 className="text-xl font-mono font-bold mb-6">
                        Derniers Quiz
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {recentQuizzes.map((quiz) => (
                            <div
                                key={quiz.id}
                                className="flex items-center justify-between p-4 bg-light-tertiary dark:bg-dark-background rounded-lg hover:bg-light-border dark:hover:bg-dark-border transition-colors cursor-pointer"
                            >
                                <div>
                                    <p className="font-medium">{quiz.title}</p>
                                    <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
                                        {quiz.category} • {quiz.date}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div
                                        className={`px-3 py-1 rounded-full ${
                                            quiz.score >= 90
                                                ? "bg-light-success/20 text-light-success"
                                                : quiz.score >= 75
                                                  ? "bg-yellow-500/20 text-yellow-600"
                                                  : "bg-light-error/20 text-light-error"
                                        }`}
                                    >
                                        {quiz.score}%
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <> </>
            )}
        </div>
    );
};

export default TabContent;
