import { faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "../../Forms/ui/input";
import Button from "../../Button";

type SearchBarProps = {
    isMobile?: boolean;
    isOpen?: boolean;
    onClose?: () => void;
};

const SearchBar: React.FC<SearchBarProps> = ({
    isMobile = false,
    isOpen = true,
    onClose = () => {},
}) => {
    return isOpen && (
        <div
            className={`
      ${isMobile ? "absolute top-0 left-0 w-full h-[72px] px-4 bg-light-background dark:bg-dark-background flex items-center" : "max-w-md w-full"}
      transition-all duration-300 ease-in-out
    `}
        >
            <div className="relative w-full">
                <Input
                    type="text"
                    placeholder="Rechercher un quiz..."
                    className="w-full px-4 py-2 bg-white dark:bg-dark-tertiary rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary"
                    autoFocus={isMobile}
                />
                <FontAwesomeIcon
                    icon={faSearch}
                    className="absolute left-3 top-2.5 w-5 h-5 text-light-textSecondary dark:text-dark-textSecondary"
                />
                {isMobile && (
                    <Button
                        size="small"
                        onClick={onClose}
                        variant="outlined"
                        className="absolute h-10 w-10 right-3 top-0 text-light-textSecondary dark:text-dark-textSecondary"
                    >
                        <FontAwesomeIcon icon={faClose} className="w-5 h-5" />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default SearchBar;
