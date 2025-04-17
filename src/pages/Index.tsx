import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router";
import { bac, presentation } from "../assets/images/index";

export function Index() {
  return (
    <div className="flex flex-col justify-center items-center h-full gap-12">
      <div className="flex flex-col items-center gap-12">
        <h1>Bienvenue</h1>

        <div className="flex items-center gap-9 max-w-4xl p-5 border-2 border-light-sand rounded-2xl bg-charcoal-sand shadow-2xl">
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
                id="linkWithIcon"
                href="https://holis-consulting.com/"
                rel="noopener noreferrer"
                className="inline-flex items-center border-b-2 leading-4"
              >
                Holis&nbsp;

                <FaArrowUpRightFromSquare size={14} />
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="flex gap-16">
        <Link
          to="realisations"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          Mes réalisations
        </Link>

        <Link
          to="competences"
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

      <div className="flex flex-col items-center gap-6">
        <h2>Mon parcours</h2>

        <div className="flex gap-4">
          <img
            src={bac}
            className="h-24"
          />

          <div className="flex flex-col">
            <b className="text-lg">
              BAC S - SVT
            </b>

            <span>
              2020
            </span>

            <span>
              Obtention du Baccalauréat scientifique au lycée Saint-Exupéry de Parentis-en-Born
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
