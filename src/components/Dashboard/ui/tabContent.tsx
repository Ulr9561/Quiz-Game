import RecentActivities from "./recentActivities";
import RecommandedQuizzes from "./recommendedQuizzes";

type TabContentProps = {
    contentType: "recommended" | "recent";
};
const TabContent: React.FC<TabContentProps> = ({ contentType }) => {
    return (
        <div className="bg-light-tertiary lg:col-span-3 dark:bg-dark-tertiary p-6 rounded-lg shadow">
            {contentType === "recent" ? (
                <RecentActivities />
            ) : (
                <RecommandedQuizzes />
            )}
        </div>
    );
};

export default TabContent;
