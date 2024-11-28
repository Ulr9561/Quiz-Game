import Button from "../../components/Button";
import Input from "../../components/Forms/ui/input";
import Label from "../../components/Forms/ui/label";

const SignUp: React.FC = () => {
    return (
        <div className="w-full min-h-screen bg-light-background dark:bg-dark-background flex flex-col items-center justify-center">
            <div className="container flex flex-col items-center py-8">
                <div className="w-full max-w-md shadow-lg space-y-5 bg-light-tertiary dark:bg-dark-tertiary py-8 px-5">
                    <h1 className="text-2xl py-2 text-center font-bold text-light-primary dark:text-dark-primary">
                        Register
                    </h1>
                    <p className="text-light-textSecondary py-2 dark:text-dark-textSecondary">
                        Découvrez le QuizMaster et apprenez à jouer avec vos
                        amis.
                    </p>
                    <form className="flex flex-col gap-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label
                                    htmlFor="firstName"
                                    className="text-light-textPrimary dark:text-dark-textPrimary"
                                >
                                    Prénom*
                                </Label>
                                <Input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    required
                                    aria-required="true"
                                    className="bg-light-background dark:bg-dark-tertiary border-light-border dark:border-dark-border text-light-textPrimary dark:text-dark-textPrimary"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label
                                    htmlFor="lastName"
                                    className="text-light-textPrimary dark:text-dark-textPrimary"
                                >
                                    Nom*
                                </Label>
                                <Input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    required
                                    aria-required="true"
                                    className="bg-light-background dark:bg-dark-tertiary border-light-border dark:border-dark-border text-light-textPrimary dark:text-dark-textPrimary"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label
                                htmlFor="email"
                                className="text-light-textPrimary dark:text-dark-textPrimary"
                            >
                                Email*
                            </Label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                required
                                aria-required="true"
                                className="bg-light-background dark:bg-dark-tertiary border-light-border dark:border-dark-border text-light-textPrimary dark:text-dark-textPrimary"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label
                                htmlFor="password"
                                className="text-light-textPrimary dark:text-dark-textPrimary"
                            >
                                Password*
                            </Label>
                            <Input
                                type="password"
                                id="password"
                                name="password"
                                required
                                aria-required="true"
                                className="bg-light-background dark:bg-dark-tertiary border-light-border dark:border-dark-border text-light-textPrimary dark:text-dark-textPrimary"
                            />
                        </div>

                        <Button
                            className="bg-light-primary dark:bg-dark-primary mt-4"
                            size="medium"
                            variant="outlined"
                            color="primary"
                            disabled={false}
                        >
                            Register
                        </Button>
                    </form>

                    <div className="flex space-x-5">
                        <span className="text-dark-tertiary dark:text-light-tertiary">
                            Already have an account ?
                        </span>
                        <a
                            href="/login"
                            className=" underline-offset-4 text-dark-tertiary dark:text-light-tertiary no-underline hover:underline hover:text-blue-500 transition-colors duration-200"
                        >
                            Login here
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SignUp;
