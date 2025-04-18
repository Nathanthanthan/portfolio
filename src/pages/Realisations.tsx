import { JSX, useEffect, useState } from "react";
import { bluePrint, ledld, lnt, lotus, simplE } from "../assets/images";
import { Link, useParams } from "react-router";

type RealLookup = {
  lotus: JSX.Element;
  ledld: JSX.Element;
  simplE: JSX.Element;
  lnt: JSX.Element;
  blueprint: JSX.Element;
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

      <div className="flex flex-wrap items-center gap-8">
        <Link
          to="../compétences/html"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          HTML
        </Link>

        <Link
          to="../compétences/javaScript"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          JavaScript
        </Link>

        <Link
          to="../compétences/css"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          CSS
        </Link>

        <Link
          to="../compétences/cycleV"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          Cycle en V
        </Link>
      </div>
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
          Pour la remise du projet, mon équipe et moi avons pu fournir une version complète du site mis à jour, avec la partie admin ajoutée. Cette remise a marqué la fin de ce projet, qui n'a pas eu de nouveau suivi après cela.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Conclusion
        </h3>

        <p>
          Ce projet m'a appris à me plonger dans une codebase existante pour y apporter des modifications et optimisations. L'utilisation de PHP et de Bootstrap m'a permis d'approfondir mes connaissances en HTML et CSS, notamment au niveau de la responsivité.

          <br />

          De plus, implémenter une base de données pour la gestion des articles sur le site m'a introduit à de nombreux éléments très importants dans le domaine du développement web. Grâce à cet aspect du projet, j'ai pu acquérir des bases solides dans l'utilisation de SQL ainsi que dans la conception de modèles de données.

          <br />

          Cette solidification de compétences déjà acquises combinée à l'apprentissage de nouveaux concepts a fait de ce projet une aventure formatrice, qui m'a permis de gagner en assurance et de mieux intégrer les principes fondamentaux du développement web.
        </p>
      </section>

      <div className="flex flex-wrap items-center gap-8">
        <Link
          to="../compétences/html"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          HTML
        </Link>

        <Link
          to="../compétences/css"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          CSS
        </Link>

        <Link
          to="../compétences/bootstrap"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          Bootstrap
        </Link>

        <Link
          to="../compétences/cycleV"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          Cycle en V
        </Link>
      </div>
    </>
  ),
  simplE: (
    <>
      <h2>
        Simpl-E
      </h2>

      <section className="flex flex-col gap-2">
        <h3>
          Introduction
        </h3>

        <p>
          Le projet “Simpl-e”, commandité par Thierry Fabris dans le but de faciliter le processus de facturation de ses clients, est le troisième projet sur lequel j'ai travaillé durant mon cursus à Intech. Celui-ci consistait en la réalisation d'une application .NET, réalisée en C# avec Visual Studio et WPF, permettant d'automatiser la création de factures au format PDF en extrayant des données de fichiers Excel fournis par les clients d'ETXE Logistika.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Objectifs
        </h3>

        <p>
          En tant qu'étudiant, l'un des objectifs principaux de ce projet était une montée en compétences dans l'utilisation d'outils ne reposant pas sur les technologies web. En effet, jusque-là, tous mes projets informatiques précédents utilisaient du HTML et du CSS pour l'affichage, avec du JavaScript ou du PHP pour la logique.

          <br />

          Pour valider mon semestre, il me fallait aiguiser et utiliser mes compétences en création d'algorithmes pour créer un outil qui permette de faciliter et d'accélérer le travail de notre commanditaire.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Déroulement du projet
        </h3>

        <p>
          Pour entamer ce projet, j'ai tout d'abord créé un modèle logique de données avec mon équipe. Celui-ci recensait les différentes tables que l'application devait comprendre ainsi que leurs relations. Cette première étape m'a permis de me faire une idée générale de la façon dont les différentes fonctionnalités de l'application devaient interagir entre elles.
        </p>

        <br />

        <p>
          J'ai ensuite mis en place la partie authentification de l'application, en créant un formulaire de création d'utilisateur et de connexion en utilisant WPF.

          <br />

          De ces deux formulaires, celui permettant de créer un nouvel utilisateur fut de loin le plus complexe. En effet, pour cette application, un utilisateur ne représentait pas seulement une personne, mais aussi une entreprise. Ainsi, j'ai ajouté des champs pour renseigner le nom de l'entreprise, son adresse, sa zone d'activité, son code postal, un numéro de téléphone, ou encore un logo.

          <br />

          Certains de ces champs demandaient également une fonctionnalité supplémentaire, telle qu'une validation par regex pour l'adresse email et le numéro de téléphone ou une option pour afficher le mot de passe.

          <br />

          Pour rendre ce long formulaire plus digeste, je l'ai séparé en deux pages différentes. Ce fut un bon exercice pour intégrer les notions de navigation entre deux pages et la conservation d'informations entre celles-ci avec .NET et WPF.
        </p>

        <br />

        <p>
          Je me suis également occupé de la mise en place de l'onglet “Transporteurs” de l'application : un tableau recensant les informations de différents transporteurs, avec la possibilité de rechercher, ajouter, modifier et supprimer ceux-ci.

          <br />

          Enfin, ma dernière tâche pour ce projet a été de créer une prévisualisation de facture dans l'onglet “Factures” de l'application. Cette dernière m'a servi de test final pour les compétences que j'ai acquises au cours de ce projet. Pour remplir cette tâche, il m'a fallu utiliser tous les outils proposés par WPF dont je m'étais servi jusque-là, dans le but de faire une recréation à l'échelle de ce à quoi ressemblera la facture au format PDF une fois générée. J'ai donc dû prendre en compte certains aspects tels que la taille de tous les éléments de texte ainsi que du logo, qui ne devaient pas dépasser du cadre, en plus d'implémenter le calcul des valeurs qui apparaîtront dans la facture finale.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Fin du projet
        </h3>

        <p>
          Pour la remise du projet, mon équipe et moi avons pu fournir à notre commanditaire une solution qui répondait à la plupart de ses besoins, lui permettant ainsi de fluidifier son travail.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Conclusion
        </h3>

        <p>
          Ce projet fut très intéressant en tant qu'étudiant, car celui-ci n'utilisait pas les technologies HTML/CSS, ce qui m'a demandé de sortir de ma zone de confort. De plus, il m'a également introduit à la programmation orientée objet, ce qui m'a permis d'intégrer de nombreuses notions très importantes en programmation en les mettant en pratique.
        </p>
      </section>

      <div className="flex flex-wrap items-center gap-8">
        <Link
          to="../compétences/sql"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          SQL
        </Link>

        <Link
          to="../compétences/agile"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          Méthode agile
        </Link>
      </div>
    </>
  ),
  lnt: (
    <>
      <h2>
        Link & Trade
      </h2>

      <section className="flex flex-col gap-2">
        <h3>
          Introduction
        </h3>

        <p>
          Le projet “Link & Trade”, commandité par Camille Rivals, professeure au lycée Borda de Dax, dans le cadre du “projet chef d'œuvre” d'un groupe d'élèves en Bac pro commerce-vente. L'objectif du projet était de créer une plateforme type Vinted sur laquelle les élèves du lycée peuvent poster des annonces pour vendre les vêtements qu'ils ne portent plus. Cette plateforme devait être développée sous la forme d'une application web en utilisant Angular pour le front-end et Java avec Hibernate pour le backend.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Objectifs
        </h3>

        <p>
          L'objectif principal de ce projet était de participer à la réussite du “projet chef d'œuvre” de mes commanditaires, le groupe de quatre lycéens de la classe de Camille Rivals.

          <br />

          En tant qu'étudiant, il me fallait augmenter mes compétences en développement web ainsi qu'en utilisation de frameworks, tels qu'Angular et Bootstrap.

          <br />

          Deux points principaux étaient vitaux à la validation de ce projet : l'implémentation d'un chat en direct, et le fait que l'application soit entièrement utilisable sur smartphone.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Déroulement du projet
        </h3>

        <p>
          Pour débuter ce projet, j'ai tout d'abord participé à la création d'un modèle logique de données qui m'a permis de planifier la façon dont le backend de l'application serait mis en place.
        </p>

        <br />

        <p>
          Suite à ça, je me suis occupé d'implémenter la page de connexion et de création de compte de l'application. Pour la page de création de compte, j'ai décidé de mettre en place un système de validation de formulaire qui ne se déclenche que lorsque l'utilisateur tente d'envoyer le formulaire. Si les informations fournies dans le formulaire ne sont pas valides, celui-ci montre un message d'erreur et les informations ne sont pas envoyées vers l'API.
        </p>

        <br />

        <p>
          J'ai ensuite entamé la partie du projet qui m'a pris le plus clair de mon temps : l'implémentation front-end du chat en direct. Pour celui-ci, j'ai dû créer deux variations de l'affichage d'un message, une où le message est envoyé et l'autre où le message est reçu. Ainsi, la couleur et l'alignement du message changent en fonction de qui l'a envoyé.
          De plus, j'ai fait en sorte que, lors de la récupération des messages, seuls les 20 derniers ne soient chargés. Cela a permis de limiter la taille des informations envoyées par l'API ainsi que le temps de chargement des conversations comportant un grand nombre de messages.
          J'ai également mis en place un bouton permettant de remonter/descendre dans la conversation. Celui-ci change de comportement en fonction de la position de scroll du chat, faisant remonter la conversation jusqu'au prochain lot de 20 messages lorsque le chat est entièrement descendu ou le faisant redescendre jusqu'en bas dans le cas contraire.
          Pour rendre l'écriture de message plus confortable, j'ai fait en sorte que la taille de la textarea dans laquelle l'utilisateur rédige son message s'adapte au nombre de lignes qu'elle contient. Celle-ci s'agrandit à chaque nouvelle ligne jusqu'à atteindre une hauteur faisant 33% de la longueur de l'écran, après quoi il devient possible de faire défiler son message.
          Durant le processus de création de ce chat, j'ai surveillé à ce que son affichage fonctionne aussi bien sur mobile que sur ordinateur. Par exemple, j'ai fait en sorte que la sidebar permettant de sélectionner une conversation devienne rétractable à partir d'une certaine largeur d'écran.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Fin du projet
        </h3>

        <p>
          Pour la remise de ce projet, mon équipe et moi avons pu fournir un produit fini et entièrement fonctionnel sur mobile et ordinateur.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Conclusion
        </h3>

        <p>
          Ce projet et l'importance que présentait la responsivité dans son développement furent pour moi une très bonne expérience de solidification de mes connaissances en HTML et CSS, en plus de me permettre de monter en compétences en utilisation d'Angular ainsi qu'en création d'API grâce à des séances de peer programming avec d'autres membres de mon équipe.
        </p>
      </section>

      <div className="flex flex-wrap items-center gap-8">
        <Link
          to="../compétences/html"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          HTML
        </Link>

        <Link
          to="../compétences/javaScript"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          JavaScript
        </Link>

        <Link
          to="../compétences/css"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          CSS
        </Link>

        <Link
          to="../compétences/bootstrap"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          Bootstrap
        </Link>

        <Link
          to="../compétences/sql"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          SQL
        </Link>

        <Link
          to="../compétences/java"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          Java
        </Link>

        <Link
          to="../compétences/agile"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          Méthode agile
        </Link>
      </div>
    </>
  ),
  blueprint: (
    <>
      <h2>
        Blueprint
      </h2>

      <section className="flex flex-col gap-2">
        <h3>
          Introduction
        </h3>

        <p>
          Le projet “Blueprint”, a été commandité par Christophe Graciet pour faciliter la gestion de son entreprise ATSE Photovoltaïque ainsi que le travail de ses techniciens. Le projet à réaliser était une application pour tablette, développée avec Java et Android Studio, permettant aux employés de l'entreprise de mieux s'organiser en numérisant les différents formulaires qu'ils remplissaient jusque-là sur papier. Cette application devait également comporter certaines fonctionnalités permettant de faciliter le travail des techniciens.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Objectifs
        </h3>

        <p>
          Pour valider ce projet, mon équipe et moi devions fournir une application fonctionnant sur tablette, qui permette aux techniciens de consulter leur emploi du temps, ainsi que de collecter des informations sur un chantier (telles que des croquis de la structure du bâtiment, des photos comportant des mesures, etc.) avant d'enregistrer celles-ci dans une base de données pour qu'elles puissent être consultées par d'autres techniciens assignés au même chantier.

          <br />

          Certains de ces chantiers se trouvant dans des zones blanches, il fallait également que l'application puisse sauvegarder localement les informations en cas de perte de réseau pour ensuite automatiquement les envoyer une fois la connexion rétablie.

          <br />

          Enfin, l'application devait comporter une partie “administration” dédiée à la gestion des comptes, permissions, emploi du temps, etc.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Déroulement du projet
        </h3>

        <p>
          Pour débuter ce projet, j'ai tout d'abord, avec le reste de mon équipe, participé à plusieurs réunions avec mon commanditaire pour me renseigner le plus possible sur ses besoins. Je me suis également rendu sur un chantier pour assister à une pose de panneaux solaires, où j'ai pris des notes sur la façon dont les techniciens opèrent et dans quelles conditions.

          <br />

          Suite à ça, j'ai participé à la création de notre product backlog en rédigeant quelques user stories.
        </p>

        <br />

        <p>
          Pour la partie développement, j'ai commencé à me familiariser avec Android Studio en créant des formulaires de connexion et d'inscription. Ceux-ci étaient relativement simples, n'étant composés que d'un champ adresse email et un champ mot de passe. Pour le formulaire d'inscription, j'ai implémenté un regex qui valide que l'adresse email renseignée est formatée correctement. J'ai également ajouté, pour les deux formulaires, la possibilité de révéler ce que l'utilisateur a entré dans le “champ mot de passe” avec un bouton. Une fois la partie “gestion de comptes” de l'API développée, j'ai pu y lier ces deux formulaires.

          <br />

          Après ça, je me suis occupé de reproduire le formulaire que les techniciens remplissaient lors de la récolte d'informations d'un chantier dans l'application. Pour faire en sorte que les techniciens gardent leurs repères, j'ai pris soin de placer les différents champs du formulaire aux mêmes positions que leur homologue dans la version papier. Cela m'a permis d'expérimenter avec l'implémentation de différents types de champs, tels que les champs nombre, date, dropdown et texte long. En effet, certaines informations doivent être remplies sous forme de nombre et requièrent ainsi le type de champ correspondant. J'ai également dû implémenter le champ “date” avec lequel il n'est pas possible d'interagir, car celui-ci se remplit automatiquement avec la date actuelle. De plus, mon commanditaire m'a fait part du fait que certains champs du formulaire ne sont remplis qu'avec certaines valeurs prédéfinies. Ainsi, au lieu de simplement implémenter ces champs comme de simples champs de texte, je les ai implémentés sous forme de dropdowns, liés à leur liste de valeurs qui peuvent être modifiées depuis une autre page de l'application. Enfin, j'ai ajouté à ce formulaire des boutons qui, une fois la fonctionnalité implémentée, permettent de prendre des photos et de les associer à la collecte d'informations de ce formulaire.

          <br />

          Je me suis ensuite servi de cet affichage comme base pour en créer une version “read only”, utilisée pour la consultation des informations d'un chantier. La page de consultation des informations est identique à celle de récolte d'informations, avec pour seule différence le fait que le contenu de la plupart des champs ne peut être modifié.

          <br />

          Enfin, j'ai travaillé sur la mise en place de l'espace “planning” de l'application. Ayant préalablement défini avec mon commanditaire que l'emploi du temps d'un technicien peut être défini par deux créneaux dans une journée, j'ai implémenté l'affichage de façon à montrer les deux créneaux du jour actuel, avec un libellé précisant la nature de l'activité (récolte d'informations, installation ou autre) ainsi que l'heure de début et de fin de chaque créneau. Cliquer sur un créneau redirige soit vers la page de récolte d'informations, soit vers celle de consultation des informations d'un chantier en fonction du type d'activité que représente le créneau. Pour finaliser cette fonctionnalité d'emploi du temps, j'ai dû ajouter à la partie administration de l'application la possibilité de créer un nouveau créneau. Un créneau est défini par le type d'activité qu'il représente, une fiche d'information si le type d'activité n'est pas une collecte d'informations, une heure de début et de fin, ainsi qu'une liste de techniciens assignés à l'activité.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Fin du projet
        </h3>

        <p>
          Lors de la remise du projet, bien que l'application soit majoritairement fonctionnelle, nous n'avons pas pu fournir une version complète de celle-ci. Certaines fonctionnalités définies dans notre product backlog étaient manquantes, telles que la mise en place d'un historique des modifications ou la sauvegarde d'informations en local.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Conclusion
        </h3>

        <p>
          Ce projet a été pour moi très formateur, tant sur l'utilisation de Java que sur la création d'interfaces simples d'utilisation avec Android Studio. Devoir tenir compte de certains paramètres tels que le fait que l'application soit utilisée sur chantier ou dans une zone blanche pour l'implémentation de la plupart des fonctionnalités posait un défi qui fût très enrichissant à relever.
        </p>
      </section>

      <div className="flex flex-wrap items-center gap-8">
        <Link
          to="../compétences/sql"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          SQL
        </Link>

        <Link
          to="../compétences/java"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          Java
        </Link>

        <Link
          to="../compétences/agile"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          Méthode agile
        </Link>
      </div>
    </>
  ),
};

export function Realisations() {
  const { real } = useParams();

  const [selected, setSelected] = useState<keyof RealLookup>();

  useEffect(() => {
    if (real === undefined || contentLookup[real as keyof RealLookup] === undefined) return;

    setSelected(real as keyof RealLookup);
  }, [real]);

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
          onClick={() => setSelected("blueprint")}
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
