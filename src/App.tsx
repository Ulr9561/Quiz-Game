import {
    faBrain,
    faGamepad,
    faImage,
    faPlay,
    faTrophy,
    faUserCircle,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./components/Button";
import { FeatureCardProps } from "./types";
import FeatureCard from "./components/Feature";
import {
    faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons/faApple";

function App() {
    const features: FeatureCardProps[] = [
        {
            icon: faGamepad,
            title: "Mode Solo",
            description: "Testez vos connaissances à votre rythme",
        },
        {
            icon: faUsers,
            title: "Multijoueur",
            description: "Affrontez des joueurs en temps réel",
        },
        {
            icon: faBrain,
            title: "Quiz Scénarisé",
            description: "Vivez une aventure unique",
        },
    ];
    return (
        <div className="font-mono bg-light-background dark:bg-dark-background text-light-textPrimary dark:text-dark-textPrimary">
            <section
                className="relative flex py-44 items-center justify-center px-4 overflow-hidden"
                style={{
                    backgroundImage:
                        'url("https://cdn.usegalileo.ai/sdxl10/6daf70ba-f00d-4562-935c-1f2950e3d925.png")',
                }}
            >
                <div className="absolute inset-0 bg-light-gradient dark:bg-dark-gradient" />
                <div className="container mx-auto relative z-10">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Testez vos connaissances et défiez le monde !
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-light-textSecondary dark:text-dark-textPrimary">
                            Une expérience de quiz interactive avec des défis
                            quotidiens, des classements en temps réel, et des
                            récompenses exclusives.
                        </p>
                        <div className="flex gap-4 mb-8">
                            <Button className="bg-light-primary dark:bg-dark-primary text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
                                <FontAwesomeIcon icon={faPlay} />
                                Jouer maintenant
                            </Button>
                            <Button className="bg-light-tertiary dark:bg-dark-tertiary px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
                                Découvrir
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="features"
                className="py-20 bg-light-tertiary dark:bg-dark-tertiary"
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                        Choisissez votre manière de jouer
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature) => (
                            <div className="bg-light-background dark:bg-dark-background p-8 rounded-xl shadow-lg hover:transform hover:scale-105 transition-transform duration-300">
                                <div className="text-4xl text-light-primary dark:text-dark-primary mb-4">
                                    <FontAwesomeIcon icon={feature.icon} />
                                </div>
                                <h3 className="text-xl font-bold mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-light-textSecondary dark:text-dark-textSecondary">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                        Fonctionnalités innovantes pour une expérience enrichie
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard
                            icon={faImage}
                            title="Quiz multimédias"
                            description="Images, vidéos et audio pour des questions captivantes"
                        />
                        <FeatureCard
                            icon={faTrophy}
                            title="Classements"
                            description="Compétitions hebdomadaires et récompenses exclusives"
                        />
                        <FeatureCard
                            icon={faUserCircle}
                            title="Personnalisation"
                            description="Profils détaillés et avatars personnalisables"
                        />
                        <FeatureCard
                            icon={faBrain}
                            title="IA intelligente"
                            description="Difficulté adaptative et recommandations personnalisées"
                        />
                    </div>
                </div>
            </section>

            {/* <section className="py-20 bg-light-tertiary dark:bg-dark-tertiary">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                        Une expérience sociale pour connecter les passionnés de
                        quiz
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-light-background dark:bg-dark-background p-6 rounded-xl shadow-lg"
                            >
                                <p className="mb-4 italic">
                                    {testimonial.comment}
                                </p>
                                <div className="flex items-center gap-3">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <span className="font-semibold">
                                        {testimonial.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            <section className="py-20 bg-light-tertiary dark:bg-dark-tertiary">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                        Prêt à jouer ? Téléchargez l'application aujourd'hui !
                    </h2>
                    <div className="flex justify-center gap-4 mb-8">
                        <Button className="bg-black text-white px-8 py-3 rounded-lg flex items-center gap-2">
                            <FontAwesomeIcon icon={faApple} />
                            App Store
                        </Button>
                        <Button className="bg-black text-white px-8 py-3 rounded-lg flex items-center gap-2">
                            <FontAwesomeIcon icon={faGooglePlay} />
                            Google Play
                        </Button>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default App;
