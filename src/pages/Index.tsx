import { useContext, useEffect, useRef, useState } from "react";
import { FaArrowDown, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router";
import { bac, esiea, holis, presentation } from "../assets/images/index";
import { MainRefCurrentContext } from "../Layout";

export function Index() {
  const parcoursRef = useRef<HTMLHeadingElement>(null);
  const mainRefCurrent = useContext(MainRefCurrentContext);
  const navRef = useRef<HTMLDivElement>(null);

  const [initialNavTop, setInitialNavTop] = useState<number>(0);
  const [isNavStuck, setIsNavStuck] = useState<boolean>(false);

  useEffect(() => {
    if (!mainRefCurrent) return;

    mainRefCurrent.addEventListener(
      "scroll",
      (e) => {
        if (!navRef.current) return;

        if ((e.target as HTMLDivElement).scrollTop <= initialNavTop) {
          navRef.current.classList = "";
          setIsNavStuck(false);
        } else {
          navRef.current.classList = "fixed inset-x-0 top-0 z-10 flex justify-center gap-16 py-3 border-b-2"
            + " border-light-sand bg-charcoal-sand";
          setIsNavStuck(true);
        }
      },
    );

    return () => mainRefCurrent.removeEventListener("scroll", () => { });
  }, [mainRefCurrent, navRef, initialNavTop]);

  useEffect(() => {
    if (navRef.current) setInitialNavTop(navRef.current.offsetTop);
  }, [navRef]);

  return (
    <div className="relative flex flex-col items-center size-full">
      <section className="flex flex-col justify-center items-center gap-12 min-h-screen">
        <h1>
          Bienvenue
        </h1>

        <div
          className={
            "flex items-center gap-9 max-w-4xl p-5 border-2 border-light-sand rounded-2xl bg-charcoal-sand shadow-2xl"
          }
        >
          <div className="flex justify-center items-center shrink-0 size-56 border-4 border-koi-orange rounded-full">
            <img className="size-52 rounded-full object-cover" src={presentation} />
          </div>

          <div className="flex flex-col gap-3 text-xl">
            <b className="text-2xl pb-4">
              Je suis Nathan PETRON
            </b>

            <span className="flex flex-col">
              Étudiant en 5ème année à l'ESIEA

              <span className="text-xs">
                (Programme "Expert en Ingénierie du développement d'applications" - Titre RNCP 35419)
              </span>
            </span>

            <span>
              Développeur web
            </span>

            <span>
              Alternant chez&nbsp;

              <a
                href="https://holis-consulting.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border-b-2 leading-4"
              >
                Holis&nbsp;

                <FaArrowUpRightFromSquare size={14} />
              </a>
            </span>
          </div>
        </div>

        <nav
          ref={navRef}
          style={{
            transitionProperty: "padding, background-color",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDuration: "150ms",
          }}
        >
          <div className="relative flex gap-16 justify-center items-center w-full">
            <div
              className={
                "absolute left-4 flex items-center gap-2 -z-10"
                + ` ${isNavStuck ? "opacity-100 transition-opacity" : "opacity-0"}`
              }
            >
              <div className="flex justify-center items-center size-12 border-2 border-koi-orange rounded-full">
                <img
                  src={presentation}
                  className="size-10 rounded-full object-cover"
                />
              </div>

              <b>
                Nathan PETRON
              </b>
            </div>

            <Link
              to="réalisations"
              className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
            >
              Mes réalisations
            </Link>

            <Link
              to="compétences"
              className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
            >
              Mes compétences
            </Link>

            <Link
              to="contact"
              className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
            >
              Contact
            </Link>
          </div>
        </nav>
      </section>

      <button
        className="absolute bottom-12 pt-2"
        onClick={() => {
          if (!mainRefCurrent || !parcoursRef.current) return;

          mainRefCurrent.scroll({
            top: parcoursRef.current.getBoundingClientRect().top + window.pageYOffset - 70,
            behavior: "smooth",
          });
        }}
      >
        <div className="h-8 p-1.5 rounded-full border-2 border-light-sand animate-bounce">
          <FaArrowDown className="size-full" />
        </div>
      </button>

      <div className="flex flex-col items-center gap-16 w-full">
        <section className="w-full max-w-3xl">
          <h2
            ref={parcoursRef}
            className="w-full text-center mb-8"
          >
            Mon parcours
          </h2>

          <div className="flex flex-col w-full">
            <div
              className={
                "relative flex items-center gap-4 max-w-2xl p-3 border-2 border-light-sand rounded-xl bg-charcoal-sand"
                + " shadow-2xl"
              }
            >
              <span className="absolute top-0 -translate-y-1/2 left-8 bg-light-sand text-charcoal-sand px-2 rounded">
                2020
              </span>

              <a
                href="https://www.lpo-saint-exupery-parentis-en-born.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 max-w-1/4"
              >
                <img
                  src={bac}
                  className="max-h-24"
                />
              </a>

              <div className="flex flex-col gap-2">
                <b className="text-lg">
                  BAC S - SVT
                </b>

                <span className="text-sm">
                  Obtention du Baccalauréat scientifique au lycée Saint-Exupéry de Parentis-en-Born
                </span>
              </div>
            </div>

            <div className="self-center h-16 w-1 bg-light-sand" />

            <div
              className={
                "relative self-end flex items-center gap-4 max-w-2xl p-3 border-2 border-light-sand rounded-xl"
                + " bg-charcoal-sand shadow-2xl"
              }
            >
              <span className="absolute top-0 -translate-y-1/2 left-8 bg-light-sand text-charcoal-sand px-2 rounded">
                Septembre 2020 - Août 2025
              </span>

              <a
                href="https://www.esiea.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 max-w-1/4"
              >
                <img
                  src={esiea}
                  className="max-h-24"
                />
              </a>

              <div className="flex flex-col gap-2">
                <b className="text-lg">
                  Master en ingénierie du logiciel
                </b>

                <span className="text-sm">
                  Étude à l'ESIEA dans le programme "Expert en Ingénierie du développement d'applications"
                </span>
              </div>
            </div>

            <div className="self-center h-16 w-1 bg-light-sand" />

            <div
              className={
                "relative flex items-center gap-4 max-w-2xl p-3 border-2 border-light-sand rounded-xl bg-charcoal-sand"
                + " shadow-2xl"
              }
            >
              <span className="absolute top-0 -translate-y-1/2 left-8 bg-light-sand text-charcoal-sand px-2 rounded">
                Mars 2023 - Août 2023
              </span>

              <a
                href="https://holis-consulting.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 max-w-1/4"
              >
                <img
                  src={holis}
                  className="max-h-24"
                />
              </a>

              <div className="flex flex-col gap-2">
                <b className="text-lg">
                  Stage - Développement web
                </b>

                <span className="text-sm">
                  Stage chez Holis, utilisation de React et Angular
                </span>
              </div>
            </div>

            <div className="self-center h-16 w-1 bg-light-sand" />

            <div
              className={
                "relative self-end flex items-center gap-4 max-w-2xl p-3 border-2 border-light-sand rounded-xl"
                + " bg-charcoal-sand shadow-2xl"
              }
            >
              <span className="absolute top-0 -translate-y-1/2 left-8 bg-light-sand text-charcoal-sand px-2 rounded">
                Septembre 2023 - Août 2025
              </span>

              <a
                href="https://holis-consulting.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 max-w-1/4"
              >
                <img
                  src={holis}
                  className="max-h-24"
                />
              </a>

              <div className="flex flex-col gap-2">
                <b className="text-lg">
                  Alternance - Développement web
                </b>

                <span className="text-sm">
                  Alternance chez Holis en tant que développeur junior, utilisation de React et Angular
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-8 max-w-[55ch] pb-8">
          <h2 className="w-full text-center">
            Présentation générale
          </h2>

          <p>
            Étant alternant chez Holis en tant que développeur principalement orienté front-end,
            je suis poussé à rendre mes réalisations aussi flexibles et simples d'utilisation que possible.
            Cet objectif de rendre le travail de mes collègues et clients plus facile est pour moi une grande source de
            motivation, m'encourageant à rechercher de nouvelles compétences pour améliorer continuellement la qualité de
            mon travail.
          </p>

          <section className="flex flex-col gap-2">
            <h3>
              Mes valeurs
            </h3>

            <p>
              L'<b>amabilité</b> est la valeur qui a le plus d'importance à mes yeux. Dans ma vie professionnelle, elle me
              permet de maintenir de bonnes relations avec mes collègues et ainsi de pouvoir facilement communiquer avec eux.
              Étant souvent amené à travailler sur une librairie utilisée dans plusieurs projets sur lesquels mes collègues
              travaillent, il m'est très important de communiquer avec eux sur les choses à améliorer, à retirer ou à ajouter
              en fonction de leurs besoins. Dans ce but, être aimable est un atout qui permet une communication fluide et
              efficace tout en maintenant une ambiance de travail plaisante.
            </p>

            <br />

            <p>
              L'<b>adaptabilité</b> est une valeur qui m'est vitale pour évoluer dans mon travail.
              Il n'est pas rare pour moi de travailler sur plusieurs projets différents dans un court laps de temps,
              voire parfois simultanément. Ces projets ont tous des philosophies, organisations, façons de formater le code
              et cas d'utilisation différents. Il est donc essentiel que je sois capable de comprendre la façon de
              travailler de mes collègues et de communiquer avec eux pour pouvoir m'y adapter.
              Un exemple de mise en pratique de cette valeur d'adaptabilité est lorsque l'on me demande de retravailler
              l'affichage d'une application en utilisant de nouveaux composants. Dans cette situation,
              il me faut être attentif à la façon dont les choses sont faites avant d'y apporter des changements,
              tout en posant des questions à mes collègues travaillant sur cette application pour savoir comment
              correctement intégrer les nouveaux composants dans cette structure déjà existante.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h3>
              Projet professionel
            </h3>

            <p>
              N'étant pas certain de la profession vers laquelle m'orienter lorsque j'étais au lycée,
              j'ai fait le choix de me tourner vers un BAC S SVT de façon à m'assurer d'avoir plusieurs choix de carrière
              possible. C'est finalement ma passion pour l'informatique qui a guidé mon choix, notamment avec des exercices
              demandant l'utilisation de pseudo code, ce qui m'a introduit à la programmation qui est rapidement devenue
              l'un de mes centres d'intérêt.
            </p>

            <br />

            <p>
              J'ai donc rejoint le groupe ESIEA en intégrant Intech, où je me suis rapidement rendu compte que le
              développement web était ce vers quoi je voulais me tourner. C'est ce qui m'a mené à mon alternance chez
              Holis, où je peux pleinement exercer ma passion.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h3>
              Qualités humaines
            </h3>

            <p>
              L'<b>altruisme</b> est une de mes qualités qui rejoint directement ma valeur d'amabilité au travail.
              Il est naturel pour moi de penser aux autres et de faire mon possible pour leur faciliter les choses,
              tout en étant à l'écoute de leurs retours pour toujours fournir un travail d'une qualité grandissante.
              Il m'est par exemple déjà arrivé de spontanément proposer à un collègue de lui fournir un composant qui
              répondait à l'un des besoins de l'application sur laquelle il travaillait.
            </p>

            <br />

            <p>
              Cela me pousse également à <b>être force de proposition</b>. Lorsque que je réfléchis à la façon dont je
              devrais réaliser une tâche, prendre les autres en compte me mène à avoir des idées sur comment améliorer le
              résultat final et à en discuter avec mes collègues. Ainsi, il m'arrive souvent de proposer des modifications
              d'affichage ou d'utilisation aux composants sur lesquels je travaille en expliquant mon point de vue à mon
              collègue s'occupant de réaliser les maquettes graphiques des applications. Cela a plusieurs fois permis
              d'améliorer certains aspects de nos applications en termes d'accessibilité et d'adaptabilité aux différentes
              tailles d'écran.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h3>
              Mes centres d'intérêt
            </h3>

            <p>
              Je possède une grande passion pour les jeux vidéos, notamment quand il s'agit de rechercher tout ce qu'il est
              possible de faire dans un jeu en particulier. Je suis naturellement curieux et j'aime expérimenter pour
              chercher leurs limites. C'est cette même curiosité qui me pousse à rechercher toutes les possibilités pour la
              réalisation d'une tâche dans mon travail. Il m'arrive parfois de continuer mes recherches sur une tâche déjà
              accomplie simplement pour savoir s'il existe une alternative plus efficace.
            </p>

            <br />

            <p>
              Ma seconde passion est le worldbuilding, la construction d'univers imaginaires. C'est un exercice qui demande
              de la créativité et qui me permet de réunir d'autres de mes passions ensemble pour construire quelque chose de
              nouveau. Cela me permet de travailler ma capacité à trouver des concepts originaux et à aborder des sujets
              sous plusieurs angles différents.
            </p>
          </section>
        </section>
      </div>
    </div>
  );
}
