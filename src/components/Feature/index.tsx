import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FeatureCardProps } from "../../types";

const FeatureCard: React.FC<FeatureCardProps> = ({
    icon,
    title,
    description,
}) => {
    return (
        <article
            className="flex flex-col flex-grow space-x-4 font-grotesk border border-dark-border dark:border-light-border border-solid rounded-lg p-4 bg-light-tertiary dark:bg-dark-tertiary h-full"
            aria-labelledby="feature-title"
        >
            <div className="flex flex-col h-full">
                <FontAwesomeIcon
                    icon={icon}
                    className="text-light-primary dark:text-dark-primary mb-2 p-0"
                    width={24}
                    height={24}
                    aria-hidden="true"
                />
                <header className="mb-1">
                    <h1
                        id="feature-title"
                        className="text-lg font-bold text-start text-light-textPrimary dark:text-dark-textPrimary"
                    >
                        {title}
                    </h1>
                </header>
                <p className="text-light-textSecondary text-start dark:text-dark-textSecondary flex-grow">
                    {description}
                </p>
            </div>
        </article>
    );
};

export default FeatureCard;
