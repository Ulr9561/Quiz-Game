import Input from "../Forms/ui/input";
import Label from "../Forms/ui/label";
import categories from "../../utils/categories.json";
import { useEffect, useState } from "react";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const CategoriesSidebar: React.FC = () => {
    const [category, setCategory] = useState("");
    const [level, setLevel] = useState("");
    const [expand, setExpand] = useState(false);
    const dCategories = expand ? categories : categories.slice(0, 5);


    useEffect(() => {
        console.log(category, level);
    }, [category, level])
    return (
        <div className="w-1/4 flex-col h-full space-y-8 py-9">
            <h1 className="py-2">Filtrer par</h1>
            <div className="flex flex-col gap-4">
                <span className="font-bold text-lg">Thème</span>
                {dCategories.map((category) => (
                    <div
                        key={category.category}
                        className="flex items-center space-x-2"
                    >
                        <Input
                            type="checkbox"
                            value={category.category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="size-7"
                        />
                        <Label className="text-base">{category.category}</Label>
                    </div>
                ))}
                <Button
                    size="small"
                    onClick={() => setExpand((prev) => !prev)}
                    className="h-2 justify-start px-0 underline space-x-1 transition-all duration-200"
                    variant="outlined"
                >
                    <span>{expand ? "Réduire" : "Voir plus"}</span>
                    <FontAwesomeIcon
                        icon={!expand ? faChevronDown : faChevronUp}
                        className="size-3"
                    />
                </Button>
            </div>

            <div className="flex flex-col gap-4">
                <span className="font-bold text-lg">Niveau</span>
                {["Beginner", "Intermediate", "Advanced"].map(
                    (level, index) => (
                        <div
                            key={index}
                            className="flex items-center space-x-2"
                        >
                            <Input
                                type="checkbox"
                                value={level}
                                onChange={(e) => setLevel(e.target.value)}
                                className="size-7"
                            />
                            <Label className="text-base">{level}</Label>
                        </div>
                    ),
                )}
            </div>
        </div>
    );
};

export default CategoriesSidebar;
