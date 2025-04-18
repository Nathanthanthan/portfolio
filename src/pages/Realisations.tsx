import { JSX, useState } from "react";
import { bluePrint, ledld, lnt, lotus, simplE } from "../assets/images";

type RealLookup = {
  lotus: JSX.Element;
  ledld: JSX.Element;
  simplE: JSX.Element;
  lnt: JSX.Element;
  bluePrint: JSX.Element;
};

const contentLookup: RealLookup = {
  lotus: (
    <>
      <h2>
        Lotus
      </h2>

      <section className="flex flex-col gap-2">
        <h3>
          Introduction
        </h3>

        <p>
          Le projet “Lotus” a été commandité par Victoria Peruarena, pour créer le squelette d'un site de référencement de dermo-facialistes, des spécialistes en massages visage anti-âge. Le site devait être similaire en structure à DoctoLib, sans y implémenter le plus gros des fonctionnalités, car l'objectif du projet n'était que la création de l'interface utilisateur.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Objectifs
        </h3>

        <p>
          Les objectifs de ce projet en tant qu'étudiant étaient de gagner en compétence en gestion de projet et de mettre en pratique les connaissances techniques acquises en cours.

          <br />

          Pour valider mon semestre, il me fallait créer un site web en utilisant HTML, CSS et JavaScript pour répondre aux attentes de ma commanditaire.

          <br />

          Afin de mener ce projet à bien, ce site web devait avoir une interface ergonomique qui pourrait ensuite être utilisée par une autre équipe d'un semestre supérieur pour y implémenter les différentes fonctionnalités plus avancées, telles que la connexion à une base de données.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Déroulement du projet
        </h3>

        <p>
          Avec le reste de mon équipe, j'ai interagi à plusieurs reprises avec Madame Peruarena au cours de ce projet. Une première fois pour discuter de ses besoins et attentes et ainsi établir un plan d'action, puis au cours de réunions régulières pour lui faire suivre l'avancement du projet.

          <br />

          Cette première interaction avec ma commanditaire m'a permis de fixer des objectifs avec le reste de mon équipe et de nous les répartir en fonction de nos forces et faiblesses établies dans un SWOT. J'ai ensuite, avec l'aide des autres membres de mon équipe, utilisé ces objectifs comme base pour établir un planning sous la forme d'un diagramme de Gantt, dans le but d'organiser et de répartir les tâches nécessaires à la réalisation du projet dans le temps.
        </p>

        <br />

        <p>
          Durant la phase de programmation de ce projet, je me suis chargé de créer la page de prise de rendez-vous. Pour cela, j'ai dû utiliser la charte graphique établie pour le site pour styliser les différents éléments qui composent cette page.

          <br />

          La première chose dont je me suis occupé sur cette page était la création d'un menu dropdown avec une option de recherche pour sélectionner un/une dermo-facialiste. Pour implémenter cet élément, j'ai dû utiliser une combinaison de CSS et de JavaScript pour faire en sorte que les choix du menu dropdown s'affichent lorsque sa barre de recherche est sélectionnée. Ensuite, il ne me restait plus qu'à faire en sorte que les choix présentés par le dropdown changent en fonction de la recherche.

          <br />

          En parallèle à cela, j'ai implémenté sur cette page un formulaire permettant de prendre un rendez-vous. Ce formulaire a cependant une particularité. En effet, l'utilisateur a le choix entre prendre un rendez-vous en présentiel ou en visio-conférence et les informations à remplir changent en fonction du choix de l'utilisateur. J'ai donc dû utiliser JavaScript pour changer l'affichage du formulaire en fonction du choix de l'utilisateur, en prenant soin de réinitialiser tous les champs à chaque changement d'affichage pour éviter d'envoyer des valeurs erronées. Néanmoins, cette subtilité ne s'arrête pas là, car l'option “rendez-vous en présentiel” présente elle aussi un choix qui modifie les champs à remplir dans le formulaire. Ainsi, j'ai dû implémenter la même logique en JavaScript pour cet autre choix, faisant apparaître ou disparaître certains champs en fonction de si le rendez-vous est en cabinet ou à domicile.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Fin du projet
        </h3>

        <p>
          Lors de la remise du projet, le site était dans un état proche de la complétion. Celui-ci n'était pas complètement fonctionnel et n'était donc pas totalement prêt à être directement connecté à une base de données. Cependant, mon équipe et moi avons réussi à terminer l'affichage de toutes les différentes pages du site.

          <br />

          Suite à sa remise, le projet Lotus a été transféré à une autre équipe d'un semestre supérieur pour le retravailler en PHP et ainsi y apporter les fonctionnalités désirées par ma commanditaire.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Conclusion
        </h3>

        <p>
          J'ai beaucoup appris de ce tout premier projet en tant qu'étudiant. Il m'a aidé à construire des fondations solides pour la communication avec un client, la gestion de projet, ainsi que pour les technologies HTML, CSS et JS que j'ai utilisées pour le mener à bien.

          <br />

          J'ai grandement apprécié le fait de travailler dans une équipe et de communiquer entre nous et avec notre commanditaire pour le bien du projet, ainsi que de conceptualiser puis de réaliser une interface graphique en me basant sur les demandes de Madame Peruarena.

          <br />

          Je suis également très reconnaissant de notre commanditaire Madame Peruarena qui a continué de nous soutenir au travers des complications que nous avons rencontrées durant notre semestre.
        </p>
      </section>
    </>
  ),
  ledld: (
    <>
      <h2>
        Les envoyés de la donnée
      </h2>

      <section className="flex flex-col gap-2">
        <h3>
          Introduction
        </h3>

        <p>
          Le projet “Les envoyés de la donnée” consistait en une reprise d'un projet existant : la création d'un site web pour la paroisse de Bayonne.

          <br />

          Quand mon équipe et moi avons repris ce projet, l'affichage du site web était déjà complété. Cependant, mon commanditaire Nicolas Larroquet souhaitait être capable de modifier lui-même le contenu affiché sur le site, tel que les articles ou les images de ce dernier.

          <br />

          Ainsi, il m'a été demandé avec le reste de mon équipe de lier une base de données au site pour stocker son contenu et de créer une section “admin” depuis laquelle les modifications pourraient être apportées. Pour cela, il fallait reprendre le projet avec PHP et Bootstrap et utiliser SQL pour la base de données.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Objectifs
        </h3>

        <p>
          Les objectifs principaux de ce projet en tant qu'étudiant étaient de gagner en compétences techniques, non seulement en utilisant les technologies que vues en cours, mais aussi en me mettant dans une situation où il me fallait me familiariser avec un projet déjà existant.

          <br />

          Pour réussir à valider ce semestre, je devais améliorer certains aspects du site existant en utilisant PHP en plus d'y ajouter plus de fonctionnalités sous la forme d'un panel d'administration. Pour cela, je devais collaborer avec mon équipe pour créer et structurer une base de données avec SQL avant de la lier au site web.

          <br />

          Pour atteindre ces objectifs, il me fallait communiquer avec mon commanditaire pour définir quelles sections du site devaient être dynamisées, afin d'ensuite créer une base de données pensée pour organiser ces différents types de contenu, avant de mettre en place la partie administration qui permettrait d'y apporter des modifications.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Déroulement du projet
        </h3>

        <p>
          Pour débuter ce projet, j'ai tout d'abord établi un SWOT avec le reste de mon équipe, ce qui nous a aidés à nous faire une vue d'ensemble du contexte dans lequel nous allions travailler. Suite à ça, j'ai participé à ma première réunion avec mon commanditaire, pour définir les besoins auxquels les changements à apporter au site devaient répondre.

          <br />

          Pour finir cette phase de préparation, j'ai aidé à la rédaction des objectifs SMART du projet en me basant sur la conversation que nous avons eu avec notre commanditaire, pour ensuite établir un planning sous la forme d'un diagramme de Gantt pour répartir les différentes tâches à réaliser entre tous les membres de l'équipe.
        </p>

        <br />

        <p>
          La première tâche que j'ai effectuée en travaillant sur ce projet était la mise en place de l'affichage de la partie admin de l'application.

          <br />

          Ainsi, j'ai utilisé Bootstrap avec du HTML et un peu de CSS pur pour créer une page “panneau de contrôle” servant d'annexe à la partie admin. Celle-ci contenait plusieurs cartes, chacune représentant un aspect du site pouvant être géré.

          <br />

          Il m'a ensuite fallu créer l'affichage de l'une de ces sections d'édition du site vers lesquelles les cartes du panneau de contrôle redirigeaient. Cet affichage était composé d'une liste de fines cartes représentant les différents articles disponibles sur le site web. J'ai dû rendre possible depuis cet écran la suppression et l'ajout d'un nouvel article, ainsi que la redirection vers la page d'édition lors d'un clic sur leur bouton respectif.
        </p>

        <br />

        <p>
          Hors de la partie admin, il m'a également été demandé de revoir l'affichage d'une des pages du site web. Le nouvel affichage consistait en un bloc de texte, qui était le contenu principal de la page, suivi d'une série de boutons sur lesquels l'utilisateur pouvait cliquer pour dévoiler le texte qui leur correspondait.

          <br />

          Pour réaliser cet affichage, il m'a fallu apprendre à maîtriser l'attribut “overflow” en CSS ainsi que toutes celles qui y sont liées, de façon à faire en sorte que le texte apparaisse avec une animation de “déroulement” fluide et qui ne cause pas de problèmes d'affichage.

          <br />

          J'ai également appris à me servir de l'attribut CSS “flex-wrap” pour disposer les boutons d'une façon s'adaptant à la taille de l'écran.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Fin du projet
        </h3>

        <p>

        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Conclusion
        </h3>

        <p>

        </p>
      </section>
    </>
  ),
  simplE: (
    <>
      <h2>

      </h2>

      <section className="flex flex-col gap-2">
        <h3>
          Introduction
        </h3>

        <p>

        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Objectifs
        </h3>

        <p>

        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Déroulement du projet
        </h3>

        <p>

        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Fin du projet
        </h3>

        <p>

        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Conclusion
        </h3>

        <p>

        </p>
      </section>
    </>
  ),
  lnt: (
    <>
      <h2>

      </h2>

      <section className="flex flex-col gap-2">
        <h3>
          Introduction
        </h3>

        <p>

        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Objectifs
        </h3>

        <p>

        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Déroulement du projet
        </h3>

        <p>

        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Fin du projet
        </h3>

        <p>

        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Conclusion
        </h3>

        <p>

        </p>
      </section>
    </>
  ),
  bluePrint: (
    <>
      <h2>

      </h2>

      <section className="flex flex-col gap-2">
        <h3>
          Introduction
        </h3>

        <p>

        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Objectifs
        </h3>

        <p>

        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Déroulement du projet
        </h3>

        <p>

        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Fin du projet
        </h3>

        <p>

        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Conclusion
        </h3>

        <p>

        </p>
      </section>
    </>
  ),
};

export function Realisations() {
  const [selected, setSelected] = useState<keyof RealLookup>();

  return (
    <div className="flex flex-col items-center gap-8 py-8">
      <h1>
        Mes réalisations
      </h1>

      <div
        className={
          "fixed inset-0 z-10 flex justify-center items-center bg-black/50 transition-all"
          + ` ${selected !== undefined ? "opacity-100" : "pointer-events-none opacity-0"}`
        }
        onClick={() => setSelected(undefined)}
      >
        <div
          className={
            "bg-charcoal-sand border-2 border-light-sand rounded-2xl overflow-hidden transition-all"
            + ` ${selected !== undefined ? "w-6/12 h-11/12 p-8" : "size-0 p-0"}`
          }
        >
          {selected !== undefined && (
            <div className="flex justify-center size-full overflow-auto">
              <div className="flex flex-col gap-8 max-w-[55ch]">
                {contentLookup[selected]}
              </div>
            </div>
          )}
        </div>
      </div>

      <section className="flex flex-col gap-8 max-w-3xl">
        <button
          className={
            "relative flex items-center gap-4 max-w-2xl p-3 border-2 border-light-sand rounded-xl bg-charcoal-sand"
            + " shadow-2xl cursor-pointer"
          }
          onClick={() => setSelected("lotus")}
        >
          <div className="flex justify-center items-center w-1/5 h-24">
            <img
              src={lotus}
              className="h-full"
            />
          </div>

          <div className="flex flex-col items-start text-left gap-2">
            <b className="text-lg">
              Lotus
            </b>

            <span className="text-sm">
              Création d'un site avec HTML, CSS et JavaScript
            </span>
          </div>
        </button>

        <button
          className={
            "relative flex items-center gap-4 max-w-2xl p-3 border-2 border-light-sand rounded-xl bg-charcoal-sand"
            + " shadow-2xl cursor-pointer"
          }
          onClick={() => setSelected("ledld")}
        >
          <div className="flex justify-center items-center w-1/5 h-24">
            <img
              src={ledld}
              className="h-full"
            />
          </div>

          <div className="flex flex-col items-start text-left gap-2">
            <b className="text-lg">
              Les envoyés de la donnée
            </b>

            <span className="text-sm">
              Amélioration d'un site existant en PHP, avec connexion à une base de données
            </span>
          </div>
        </button>

        <button
          className={
            "relative flex items-center gap-4 max-w-2xl p-3 border-2 border-light-sand rounded-xl bg-charcoal-sand"
            + " shadow-2xl cursor-pointer"
          }
          onClick={() => setSelected("simplE")}
        >
          <div className="flex justify-center items-center w-1/5 h-24">
            <img
              src={simplE}
              className="h-full"
            />
          </div>

          <div className="flex flex-col items-start text-left gap-2">
            <b className="text-lg">
              Simpl-E
            </b>

            <span className="text-sm">
              Création d'une application Windows en C# avec WPF
            </span>
          </div>
        </button>

        <button
          className={
            "relative flex items-center gap-4 max-w-2xl p-3 border-2 border-light-sand rounded-xl bg-charcoal-sand"
            + " shadow-2xl cursor-pointer"
          }
          onClick={() => setSelected("lnt")}
        >
          <div className="flex justify-center items-center w-1/5 h-24">
            <img
              src={lnt}
              className="h-full"
            />
          </div>

          <div className="flex flex-col items-start text-left gap-2">
            <b className="text-lg">
              Link & Trade
            </b>

            <span className="text-sm">
              Création d'une application web avec Angular
            </span>
          </div>
        </button>

        <button
          className={
            "relative flex items-center gap-4 max-w-2xl p-3 border-2 border-light-sand rounded-xl bg-charcoal-sand"
            + " shadow-2xl cursor-pointer"
          }
          onClick={() => setSelected("bluePrint")}
        >
          <div className="flex justify-center items-center w-1/5 h-24">
            <img
              src={bluePrint}
              className="h-full"
            />
          </div>

          <div className="flex flex-col items-start text-left gap-2">
            <b className="text-lg">
              Blueprint
            </b>

            <span className="text-sm">
              Création d'une application Android en Java
            </span>
          </div>
        </button>
      </section>
    </div>
  );
}
