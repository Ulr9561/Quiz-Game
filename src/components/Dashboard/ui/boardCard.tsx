import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BoardCardProps } from "..";



const BoardCard: React.FC<BoardCardProps> = ({title, icon, value, color}) => {
    return (
        <div className="bg-white dark:bg-dark-tertiary p-6 rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-light-textSecondary dark:text-dark-textSecondary">
                    {title}
                </h3>
                <FontAwesomeIcon
                    icon={icon}
                    className={`w-5 h-5 ${color}`}
                />
            </div>
            <p className="text-2xl font-bold font-mono">{value}</p>
        </div>
    );
}

export default BoardCard;
