import RecentActivities from "./recentActivities";
import RecommandedQuizzes from "./recommendedQuizzes";

type TabContentProps = {
    contentType: "recommended" | "recent";
};
const TabContent: React.FC<TabContentProps> = ({ contentType }) => {
    return (
        <div className="lg:col-span-3 p-6 rounded-lg ">
            {contentType === "recent" ? (
                <RecentActivities />
            ) : (
                <RecommandedQuizzes />
            )}
        </div>
    );
};

export default TabContent;
