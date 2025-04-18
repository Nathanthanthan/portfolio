import { JSX, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { agile, bootstrap, communication, css, cycleV, gestionProjet, html, java, javaScript, sql } from "../assets/images";

type CompLookup = {
  html: JSX.Element;
  javaScript: JSX.Element;
  css: JSX.Element;
  bootstrap: JSX.Element;
  sql: JSX.Element;
  java: JSX.Element;
  cycleV: JSX.Element;
  agile: JSX.Element;
  communication: JSX.Element;
  gestionProjet: JSX.Element;
};

const contentLookup: CompLookup = {
  html: (
    <>
      <h2>
        HTML
      </h2>

      <section className="flex flex-col gap-2">
        <h3>
          Définition
        </h3>

        <p>
          Le HTML, ou <b>H</b>yper<b>T</b>ext <b>M</b>arkup <b>L</b>anguage, est le langage conçu pour être le squelette des pages web. Il est constitué de balises ou “tags” qui représentent des éléments à afficher sur la page. Ces balises s'utilisent comme des blocs de construction que l'on peut emboîter les uns dans les autres pour les hiérarchiser ou pour créer un élément plus complexe à partir de plusieurs autres éléments.
        </p>

        <br />

        <p>
          Le HTML est omniprésent et est un incontournable pour tous les développeurs web ; il faut au moins être capable de s'en servir si l'on souhaite créer un site internet.

          <br />

          Cependant, prendre le temps de s'intéresser à ses subtilités apporte de nombreux avantages à ceux qui souhaitent le maîtriser, surtout dans un cadre professionnel où certains standards d'accessibilité doivent être respectés et où l'optimisation pour les moteurs de recherche peut être un grand plus.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Éléments de preuve
        </h3>

        <p>
          Le premier projet sur lequel j'ai pu développer mes compétences en HTML a été “Lotus”. Pour mener à bien ce projet, il m'a été demandé de créer plusieurs pages web, la plupart contenant des éléments permettant à l'utilisateur d'interagir avec la page, notamment des formulaires.

          <br />

          Ce projet m'a permis d'apprendre les bases de l'utilisation du HTML, car après avoir conceptualisé les différentes pages du site avec mes camarades suite à une réunion avec notre commanditaire, il m'a fallu réfléchir à la meilleure façon d'utiliser et d'imbriquer différents éléments pour obtenir le résultat attendu.

          <br />

          J'ai notamment été amené à créer un formulaire de contact regroupant plusieurs éléments tels que des champs de texte, des boutons et des cases à cocher.
        </p>

        <br />

        <p>
          Un autre projet qui m'a permis d'approfondir mes connaissances en HTML a été “Les envoyés de la donnée”. Ce projet consistait principalement en du portage d'un site déjà existant du HTML/JavaScript vers du PHP (qui utilise également HTML). Ce fut un exercice très intéressant, car procéder à ce changement de technologie impliquait d'identifier des morceaux de codes pouvant être refactorisés en utilisant les fonctionnalités du PHP. Un exemple de ce cas de figure serait la barre de navigation dont le code était présent sur chacune des pages sur lesquelles elle apparaissait. Dans le but de la rendre plus propre et adaptable, j'ai isolé cette barre de navigation pour en faire un bloc de code pouvant être appelé n'importe où dans les différentes pages du site web. Pour cela, j'ai dû repenser puis retravailler la structure HTML déjà présente dans et autour de cette barre de navigation, de façon à ce qu'elle puisse facilement être intégrée aux endroits où elle devait être sans avoir à répéter du code.

          <br />

          Similairement, j'ai repris l'agencement HTML d'une page, car celui-ci n'avait pas été fait en tenant compte de la responsivité. Pour cela, il m'a fallu revoir l'agencement des différents éléments pour les placer dans des blocs prévus pour être stylisés avec du CSS, de façon à ce que ceux-ci s'adaptent à la taille de l'écran sur lequel la page est affichée et changent la disposition et l'alignement des éléments qu'ils contiennent.
        </p>

        <br />

        <p>
          Le dernier projet qui m'a aidé à consolider mes compétences en HTML a été “Link & Trade”. La raison pour laquelle je souhaite mentionner ma principale réalisation durant ce projet est qu'il m'a permis de découvrir une nouvelle façon de coder avec du HTML. En effet, ce projet a été réalisé en Angular, une technologie qui permet de créer une application web ne tenant que sur une seule page, avec ses différents éléments pouvant apparaître et disparaître sur celle-ci en guise de navigation. Cette façon de programmer pousse encore plus loin l'exemple de la barre de navigation mentionné précédemment, car tous les éléments affichés à l'écran sont maintenant des blocs de code HTML pouvant être intégrés à différents endroits dans l'application. Cela revient essentiellement à créer des blocs de constructions à partir d'ensembles d'éléments HTML, ce qui implique donc de réfléchir à l'avance à la façon dont ceux-ci pourront être utilisés dans l'application et donc d'apporter une attention particulière à l'agencement du HTML qu'ils contiennent.

          <br />

          De plus, c'est sur ce projet que l'on m'a demandé de réaliser un chat permettant à deux utilisateurs de communiquer entre eux. J'ai donc dû planifier méticuleusement la façon dont tous les éléments de ce chat devaient s'emboîter entre eux pour obtenir un affichage propre et cohérent, en plus de m'intéresser plus en détail des attributs HTML à utiliser pour transformer un champ de texte en un élément permettant plusieurs actions en fonction des touches pressées par l'utilisateur. C'est aussi ce qui m'a fait me pencher sur l'accessibilité, le fait de pouvoir naviguer et utiliser une application ou un site web malgré un handicap. J'ai donc cherché et intégré des façons de rendre le chat utilisable uniquement avec le clavier, en me renseignant sur les bonnes pratiques à avoir en HTML pour s'assurer que tout le monde puisse utiliser notre application web.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Autocritique
        </h3>

        <p>
          Il m'a fallu plusieurs projets au cours de plusieurs années pour réellement maîtriser le HTML.

          <br />

          Il a été difficile pour moi au début de comprendre la façon dont la structure HTML d'une page influait sur sa stylisation avec du CSS. En effet, intégrer les bases du HTML n'est pas suffisant en tant que développeur web, car il faut aussi être capable de le structurer de manière à éviter d'écrire du code répétitif, difficilement maintenable ou auquel il est compliqué d'associer du CSS. C'est en intégrant des notions telles que la responsivité et l'accessibilité que j'ai pu comprendre de plus en plus ce concept et comment l'employer efficacement pour créer des mise en pages simples à remodeler et à maintenir.

          <br />

          Je pense aujourd'hui avoir un niveau solide en HTML. Après avoir travaillé avec à maintes reprises dans des dizaines de cas de figure différents, il est devenu pour moi une seconde nature de disposer différents éléments sur une page de façon ergonomique.

          <br />

          Je recommande fortement à tous ceux voulant améliorer leurs compétences en développement web de s'intéresser à la responsivité qu'il est parfois simple d'oublier et surtout à l'accessibilité, car cette dernière permet réellement d'en apprendre plus sur les bonnes manières d'agencer et d'utiliser les nombreux éléments proposés par le HTML.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          À l'avenir
        </h3>

        <p>
          Je souhaite continuer à travailler en tant que développeur web et acquérir de plus en plus de compétences en HTML. Je compte continuer de porter mon intérêt sur différentes façons de faire dans le but d'enrichir mon arsenal quand je réfléchis à la façon de réaliser une page web.

          <br />

          J'ai déjà commencé ce processus en travaillant sur la librairie de composants de mon entreprise, Holis, ce qui m'a appris à créer des composants extrêmement modulables en les séparant en sous-composants pouvant ensuite être agencés selon les besoins des différentes applications dans lesquelles ces composants sont utilisés.
        </p>
      </section>

      <section className="flex flex-wrap items-center gap-8">
        <Link
          to="../réalisations/lotus"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          Lotus
        </Link>

        <Link
          to="../réalisations/ledld"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          Les envoyés de la donnée
        </Link>

        <Link
          to="../réalisations/lnt"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          Link & Trade
        </Link>
      </section>
    </>
  ),
  javaScript: (
    <>
      <h2>
        JavaScript
      </h2>

      <section className="flex flex-col gap-2">
        <h3>
          Définition
        </h3>

        <p>
          JavaScript est un langage de programmation utilisé pour rendre les sites internet interactif et dynamique. Le JavaScript permet d'implémenter des comportements dans une page web qui sont hors de la portée de simple HTML et CSS, tels que des pop-ups, des formulaires qui réagissent instantanément aux actions de l'utilisateur ou bien du contenu qui se met à jour sans avoir à recharger la page.
        </p>

        <br />

        <p>
          Le JavaScript, bien que techniquement optionnel pour la création d'un site web, reste un outil indispensable pour tout développeur web de par sa versatilité. En effet, celui-ci permet d'ajouter de nombreuses fonctionnalités à un site web, mais il peut aussi être utilisé avec des frameworks tels que Node.js pour du développement back-end, ce qui en fait un langage full-stack.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Éléments de preuve
        </h3>

        <p>
          Tout comme le HTML, le JavaScript fait partie des premières technologies dont j'ai appris à me servir durant mon cursus à Intech.

          <br />

          C'est avec le projet “Lotus” que j'ai commencé à me familiariser avec ce langage de programmation. Comme mentionné précédemment, il m'a été demandé de créer des pages contenant des formulaires pour mener à bien ce projet.

          <br />

          J'ai donc dû apprendre à me servir de JavaScript pour faire de la validation de formulaire. Dans ce cas précis, il s'agissait de s'assurer que tous les champs nécessaires ont été remplis avant d'envoyer le formulaire. Il m'a donc fallu utiliser JavaScript pour gérer les événements de changement d'une valeur dans le formulaire, ainsi que de l'envoi du formulaire.

          <br />

          De plus, l'un des formulaires que j'ai dû réaliser utilisait de la logique conditionnelle. Il m'a donc fallu utiliser JavaScript pour faire apparaître ou disparaître certains champs en fonction des options que l'utilisateur choisissait dans le formulaire.
        </p>

        <br />

        <p>
          Le deuxième projet qui m'a permis de monter en compétences JavaScript a été “Link & Trade”. Celui-ci m'a bien plus poussé à approfondir mes compétences en JavaScript de par l'utilisation du framework Angular, combiné au fait que les fonctionnalités demandées par nos commanditaires étaient plus nombreuses et poussées que pour le projet précédent.

          <br />

          La première chose que j'aimerais mentionner est le fait que l'utilisation d'Angular pour ce projet m'a demandé de me familiariser avec TypeScript. Bien que cela ne fût pas la tâche la plus ardue, cela m'a tout de même forcé à revoir la façon dont j'utilisais JavaScript, car j'avais développé certaines mauvaises habitudes sans m'en rendre compte.

          <br />

          Pour ce qui est des fonctionnalités, le chat en direct est celle sur laquelle j'ai passé le plus de temps. C'est au travers de la création de ce chat que j'ai appris à envoyer des requêtes GET, POST, PUT et DELETE avec JavaScript, pour récupérer, envoyer, modifier et supprimer des messages.

          <br />

          J'ai également pu en apprendre plus sur la manipulation du DOM avec JavaScript en changeant l'affichage du chat lorsque les messages contenus dans celui-ci changeaient, ainsi qu'en ajoutant un bouton pour retourner au début ou à la fin de la conversation.

          <br />

          Cela a aussi été une occasion pour moi d'en apprendre plus sur le traitement des événements d'un champ de texte, car il m'a fallu faire en sorte qu'appuyer sur la touche “Enter” envoie le message en cours d'écriture, mais seulement s'il y a bien du texte dans le champ et si la touche “Shift” n'est pas enfoncé (auquel cas un retour à la ligne serait fait à la place).
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Autocritique
        </h3>

        <p>
          Le JavaScript est selon moi un langage à double tranchant, car celui-ci est très permissif, ce qui facilite le fait de se familiariser avec tout en augmentant les chances de développer de mauvaises habitudes en apprenant à l'utiliser. C'est une chose dont j'ai moi-même fait l'expérience, l'ayant utilisé sommairement durant mon premier projet avant de revoir et d'approfondir mes connaissances au cours de mon second projet avec JavaScript.

          <br />

          La chose qui m'a le plus aidé à réellement maîtriser JavaScript a été l'utilisation de TypeScript et Angular, qui sont venus apporter plus de structure à ce langage, me forçant à me débarrasser de mes mauvaises habitudes. Cela a également éveillé ma curiosité sur les bonnes pratiques à employer avec ce langage, curiosité qui me pousse encore aujourd'hui à découvrir de nouvelles choses sur JavaScript.

          <br />

          Bien qu'étant toujours loin d'être un expert, il est aujourd'hui bien plus facile pour moi de programmer une fonctionnalité en JavaScript de façon fluide et efficace. Ma familiarité avec le langage est bien plus poussée qu'auparavant et il ne m'arrive que très rarement de me demander “Comment vais-je implémenter ça ?”.

          <br />

          J'encourage vivement tout développeur web à se renseigner le plus possible sur le fonctionnement de JavaScript, car sa maîtrise permet d'agrandir le champ des possibilités pour la création d'un site web, ainsi que la réduction des temps de chargements pour une application web devant traiter de larges quantités de données.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          À l'avenir
        </h3>

        <p>
          Comme mentionné précédemment, je continue toujours et encore à m'intéresser aux subtilités de JavaScript. Il est pour moi très enrichissant d'en apprendre plus sur ce langage que j'utilise désormais quotidiennement, et je compte continuer de m'instruire sur les bonnes pratiques et techniques d'optimisations qu'il est possible d'utiliser jusqu'à atteindre le niveau d'expert.
        </p>
      </section>

      <section className="flex flex-wrap items-center gap-8">
        <Link
          to="../réalisations/lotus"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          Lotus
        </Link>

        <Link
          to="../réalisations/lnt"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          Link & Trade
        </Link>
      </section>
    </>
  ),
  css: (
    <>
      <h2>
        CSS
      </h2>

      <section className="flex flex-col gap-2">
        <h3>
          Définition
        </h3>

        <p>
          Le CSS (<b>C</b>ascading <b>S</b>tyle <b>S</b>heets) est un langage utilisé pour contrôler l'apparence visuel d'un site web ainsi que la disposition des éléments qui le compose. Tandis que le HTML permet de structurer le contenu d'un site, le CSS sert à rendre ce contenu plus attrayant et facile à parcourir.
        </p>

        <br />

        <p>
          Le CSS permet également de modifier la disposition des éléments d'un site web en fonction de la taille de l'écran sur lequel celui-ci est affiché. Ce comportement (appelé “responsive”) est ce qui rend possible de consulter le même site sur ordinateur et sur téléphone, il s'agit donc d'un outil vital pour tout développeur web.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Éléments de preuve
        </h3>

        <p>
          C'est sur mon tout premier projet, le projet “Lotus”, que j'ai pratiqué pour la première fois l'utilisation de ce langage. Ce fut une parfaite introduction au CSS, car ce projet reposait presque entièrement sur l'utilisation de HTML et CSS. En effet, le but principal du projet “Lotus” était de créer un site avec peu de fonctionnalités, en se concentrant surtout sur l'affichage d'éléments de présentation.

          <br />

          J'ai donc appris les bases de l'utilisation du CSS en stylisant les différentes pages du site web selon la charte graphique que nous avions établie. La notion la plus importante que j'ai utilisée a été comment disposer les différents éléments d'une page ; il m'a fallu apprendre à centrer, décaler et aligner des éléments de toute sorte de façon différente.

          <br />

          Pour cela, je me suis concentré sur la création de classes réutilisables sur toutes les pages du site web pour standardiser leur affichage. Il a ainsi été plus facile de modifier la disposition des différents éléments d'une page pour le responsive de celle-ci.
        </p>

        <br />

        <p>
          Le deuxième projet sur lequel j'ai pu progresser en CSS a été “Les envoyés de la donnée”. Ce projet étant principalement un travail de portage d'un site existant en simple HTML/CSS vers du PHP, cela a été une opportunité pour moi d'expérimenter avec des styles plus poussés pour des éléments précis (les styles plus “généraux” tels que la disposition des éléments étant déjà faits).

          <br />

          Ainsi, j'ai appris à styliser des boutons pour les rendre plus attrayants, à faire apparaître et disparaître du texte avec une animation, et à transformer un menu horizontal prenant toute la largeur de l'écran sur ordinateur en un menu burger dépliable sur téléphone.

          <br />

          Toutes ces expériences m'ont permis de mieux apprendre à me servir de certains aspects indispensables du CSS, tels que la disposition d'éléments en utilisant l'attribut “display: flex”, le contrôle de ce qui est affiché avec “overflow: hidden” et la maîtrise de la taille d'un élément.
        </p>

        <br />

        <p>
          Enfin, le projet “Link & Trade” m'a permis de faire la synthèse des deux aspects principaux de l'utilisation du CSS apportés par les projets précédents.

          <br />

          Le concept de composants apporté par Angular m'a demandé de créer des styles à la fois poussés et réutilisables dans différents contextes. La culmination de cela étant l'affichage du chat en direct, qui m'a demandé de créer des styles pour l'affichage des conversations en cours, des messages de l'envoyeur et du receveur ainsi que de la barre d'outils du chat. L'affichage de la plupart de ces composants devait tenir compte de la taille de leur contenu, du contexte actuel ainsi que de la taille de l'écran.

          <br />

          Un autre aspect intéressant de ce projet a été le fait que l'application finale avait pour but d'être principalement utilisée sur téléphone. C'est ce contexte qui m'a permis d'appliquer un concept très important (bien que parfois débattu) du responsive : le design “mobile first”. Le “mobile first” (ou “mobile d'abord”) est une philosophie de travail en HTML/CSS qui consiste à d'abord créer les différents affichages d'un site ou d'une application web en vue smartphone, avant d'ensuite modifier l'agencement des éléments pour les plus grands écrans. Je trouve personnellement cette façon de faire très efficace, et ce projet a été pour moi une introduction parfaite à cette façon de faire.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Autocritique
        </h3>

        <p>
          Mon parcours avec le CSS a été plutôt rocailleux. Ce n'est que durant le troisième projet passé à l'utiliser que j'ai réellement commencé à me sentir confortable en l'utilisant. Même si je finissais toujours par accomplir ce que j'avais en tête, il m'arrivait souvent de me retrouver dans des situations où quelque chose n'allait pas sans que je n'arrive à trouver pourquoi.

          <br />

          Cependant, j'ai toujours apprécié utiliser ce langage. C'est cette passion qui m'a, au fil des projets, poussé à m'améliorer et à en apprendre plus sur les bonnes pratiques et les “astuces” à utiliser en CSS. De plus, le CSS étant étroitement lié au HTML, ma montée en compétences dans l'un m'aidait également à mieux comprendre l'autre. Au fil du temps, cela a grandement amélioré ma capacité à reproduire un affichage voulu avec ces outils.

          <br />

          Il va sans dire que le CSS est un indispensable pour tous ceux qui souhaitent s'améliorer en développement web. Ce langage propose de nombreuses façons de faire de nombreuses choses, ce qui permet de laisser cours à sa créativité lorsqu'on le maîtrise.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          À l'avenir
        </h3>

        <p>
          Aujourd'hui, il m'arrive bien plus rarement de rester bloqué sur un problème en CSS. Cependant, les possibilités offertes par le CSS sont très nombreuses, je suis donc loin d'avoir maîtrisé ce langage !

          <br />

          Je compte continuer de m'intéresser à tout ce que le CSS propose, même aux choses les plus “niches”. Mon objectif à l'avenir est d'étendre encore plus mon champ des possibles pour ne pas me limiter à la création d'affichages simples, ainsi que de plus me renseigner sur les problèmes de compatibilité et comment les contourner.
        </p>
      </section>

      <section className="flex flex-wrap items-center gap-8">
        <Link
          to="../réalisations/lotus"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          Lotus
        </Link>

        <Link
          to="../réalisations/ledld"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          Les envoyés de la donnée
        </Link>

        <Link
          to="../réalisations/lnt"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          Link & Trade
        </Link>
      </section>
    </>
  ),
  bootstrap: (
    <>
      <h2>
        Bootstrap
      </h2>

      <section className="flex flex-col gap-2">
        <h3>
          Définition
        </h3>

        <p>
          Bootstrap est un framework CSS conçu pour rendre le développement web plus simple, rapide et cohérent. Il permet de limiter, voire d'éliminer totalement le besoin de créer certains affichages communs dans un site ou une application web (tels que des boutons, des champs de texte, etc.).
        </p>

        <br />

        <p>
          En proposant des composants prêts à l'utilisation, Bootstrap permet de gagner beaucoup de temps lors du développement d'un site ou d'une application web. Se reposer sur cet outil permet d'élaguer le processus de création d'une page et ainsi de se concentrer uniquement sur les fonctionnalités à implémenter, ce qui peut constituer un atout majeur si l'on sait s'en servir savamment.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Éléments de preuve
        </h3>

        <p>
          J'ai été introduit à Bootstrap pour la première fois lors de mon travail sur le projet “Les envoyés de la donnée”. Pour ce projet, il m'a été demandé d'ajouter une partie “administration” à un site déjà existant, qui permettait de mettre à jour le contenu du site. Dans ce but, j'ai utilisé Bootstrap pour rapidement créer l'affichage de cette partie admin de façon à pouvoir me concentrer sur l'implémentation de ses fonctionnalités.

          <br />

          J'ai donc appris à utiliser les différents composants proposés par Bootstrap, tels que les boutons à couleur prédéfinie, les cartes ainsi que les formulaires. Cela m'a permis de rapidement confectionner un affichage de liste d'articles responsive, en utilisant les cartes avec un bouton d'édition et de suppression.

          <br />

          J'ai également employé les “classes utilitaires” fournies par Bootstrap, pour éliminer le besoin de créer des classes générales ne servant qu'à positionner les éléments d'une certaine façon. Ainsi, il a été facile pour moi de disposer et d'espacer les cartes d'article pour un résultat attrayant et responsive.
        </p>

        <br />

        <p>
          Le second projet durant lequel j'ai tiré parti des avantages de Bootstrap a été “Link & Trade”. Ce projet utilisant Angular, les composants proposés par Bootstrap ont été d'une grande aide. En effet, avoir des composants basiques déjà prêts à l'emploi m'a permis de directement me concentrer sur l'implémentation de composants plus avancés et spécifiques aux besoins de l'application.

          <br />

          Cependant, contrairement au projet précédent, celui-ci avait comme requis de suivre la charte graphique que nous avions établie. J'ai donc dû m'intéresser aux fonctionnalités plus poussées de Bootstrap, notamment la customisation du thème de couleur. Ainsi, j'ai appris à me servir des variables SCSS pour customiser le thème de couleur Bootstrap de notre application.

          <br />

          Cette application ayant requis plus de fonctionnalités, j'ai également pu utiliser pour la première fois certains composants avancés proposés par Bootstrap, tels que des dropdowns, modals et tooltips.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Autocritique
        </h3>

        <p>
          Dans l'ensemble, travailler avec Bootstrap a été une expérience assez plaisante. Malgré le fait qu'il m'est arrivé de me heurter à des problèmes en l'utilisant, cet outil m'a tout de même permis de gagner du temps sur mes projets. Au début, il était difficile pour moi de comprendre certains aspects du framework, notamment le système de grilles. Cependant, j'ai rapidement fini par comprendre quand et de quelle façon l'utiliser après un peu d'expérimentation.

          <br />

          Selon moi, Bootstrap est un outil très pratique qui permet de grandement accélérer le développement web si l'on fait attention de ne pas trop se reposer dessus. Bootstrap est très efficace pour construire des affichages simples, mais il vaut toujours mieux s'en remettre à soi-même pour toute page ou composant comportant plus de complexité. Ainsi, bien que n'étant pas indispensable au développement web, je pense que Bootstrap est un outil qui a le potentiel de grandement améliorer l'expérience d'un développeur.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          À l'avenir
        </h3>

        <p>
          Dans le cadre de mon alternance à Holis, je me sers quotidiennement de deux outils similaires à ce que propose Bootstrap : shadcn et tailwind. Ces outils sont devenus presque indispensables pour moi, je ne compte donc pas m'en séparer dans le futur. Ils ne sont cependant pas sans failles ! Par exemple, la flexibilité qu'offre tailwind pour styliser ses composants peut engendrer un manque de cohésion dans une application web, surtout si celle-ci comprend beaucoup de contenu !

          <br />

          Ma philosophie pour l'utilisation de ces outils dans mes projets personnels est donc de m'en servir pour accélérer le début de la phase de développement et de conception de l'UI avant de structurer le tout plus tard pour m'assurer que le tout reste cohérent est modulable.
        </p>
      </section>

      <section className="flex flex-wrap items-center gap-8">
        <Link
          to="../réalisations/ledld"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          Les envoyés de la donnée
        </Link>

        <Link
          to="../réalisations/lnt"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          Link & Trade
        </Link>
      </section>
    </>
  ),
  sql: (
    <>
      <h2>
        SQL
      </h2>

      <section className="flex flex-col gap-2">
        <h3>
          Définition
        </h3>

        <p>
          Le SQL (<b>S</b>tructured <b>Q</b>uery <b>L</b>anguage) est un langage utilisé pour manipuler et organiser les bases de données relationnelles. Il permet notamment de créer, organiser, récupérer, mettre à jour et supprimer des entrées dans une base de données par le biais de commandes.

          <br />

          Ces commandes sont très versatiles, et peuvent rapidement monter en complexité pour obtenir un résultat correspondant à une attente précise.
        </p>

        <br />

        <p>
          SQL est un langage standardisé qui peut être utilisé avec de nombreux systèmes de base de données, tels que MySQL, PostgreSQL, ou Oracle. De ce fait, il est très couramment utilisé dans le domaine du développement web pour les sites et applications web faisant usage d'une base de données.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Éléments de preuve
        </h3>

        <p>
          J'ai pour la première fois eu l'occasion d'utiliser SQL en travaillant sur le projet “Simpl-e”. Ce fut une très bonne façon de m'initier à l'utilisation de ce langage, car ce projet ne demandait pas de créer des relations complexes entre les différents modèles que nous avons mis en place.

          <br />

          L'une des premières choses que j'ai mises en place pour ce projet a été la gestion des utilisateurs. Pour accomplir cela, j'ai dû intégrer différentes requêtes SQL dans le code de l'application pour créer un nouvel utilisateur, vérifier qu'il a été validé par un administrateur pour qu'il puisse se connecter, envoyer une demande de connexion à la partie serveur de l'application, mettre à jour ses informations (changer le nom, mettre à jour l'adresse email, réinitialiser le mot de passe, etc.) et le supprimer.

          <br />

          J'ai également relevé le défi d'implémenter des requêtes SQL permettant d'envoyer et de recevoir des images au serveur, dans le but de pouvoir associer un logo à un modèle “projet” créé en base de données.
        </p>

        <br />

        <p>
          Le deuxième projet durant lequel j'ai fait l'utilisation de SQL a été “Link & Trade”. Mon implication dans la partie SQL de ce projet a été moindre comparée au projet précédent. Cependant, j'ai tout de même travaillé sur la création de certains modèles de données, notamment ceux des utilisateurs, conversations et messages, pour intégrer la fonctionnalité de chat en direct qui a été la partie la plus importante de mon travail dans ce projet.

          <br />

          Pour cela, il m'a fallu réfléchir aux relations entre ces trois modèles de données. La décision finale a été d'assigner un utilisateur et une conversation à chaque message, ainsi qu'un utilisateur à chaque conversation. De cette façon, il était possible de récupérer une liste de toutes les conversations d'un utilisateur, en sachant également avec qui la conversation se faisait et quel utilisateur avait envoyé quel message.

          <br />

          Il m'a donc fallu mettre en place les requêtes SQL pour récupérer toutes les conversations d'un utilisateur et pour récupérer tous les messages d'une conversation pour l'affichage du chat en direct. Enfin, pour que le chat soit fonctionnel, j'ai implémenté les requêtes pour créer, mettre à jour et supprimer un message.

          <br />

          Un autre aspect intéressant de la gestion des données avec SQL est les changements en “cascade”. C'est un concept que j'ai exploité pour ces modèles de données, pour que, lors de la suppression d'une conversation, tous les messages qu'elle contient soit supprimés également.
        </p>

        <br />

        <p>
          Le dernier projet qui m'a demandé d'utiliser SQL a été “Blueprint”. Ce projet a été de loin le plus complexe en termes de relation entre les différents modèles de données. En effet, ce dernier comprenait de nombreux modèles interconnectés les uns avec les autres, et il nous a fallu beaucoup de temps pour arriver à définir une structure correcte.

          <br />

          Cependant, les requêtes utilisées dans l'application étaient du même niveau que celles de mon premier projet avec SQL, “Simpl-e”. J'ai donc une fois de plus mis en place les requêtes pour créer, récupérer, mettre à jour et supprimer des utilisateurs. J'ai également fait de même avec les modèles “projet” et “formulaire”, utilisés dans l'application pour assigner des utilisateurs et des formulaires à remplir pour des projets.

          <br />

          Enfin, tout comme lors du projet précédent, j'ai appliqué le concept de changements en “cascade” pour supprimer automatiquement les formulaires associés à un projet complété.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Autocritique
        </h3>

        <p>
          Travailler avec SQL reste encore pour moi un certain défi. Bien que ce langage soit relativement simple d'utilisation, il m'est souvent arrivé de me perdre dans la création des relations des modèles d'une base de données et de leurs relations. De plus, l'utilisation de requêtes SQL n'a rarement représenté une partie importante de la réalisation de l'un de mes projets, aussi bien personnels que professionnels. De ce fait, je me retrouve souvent à devoir réapprendre certaines bases de l'utilisation de ce langage lorsque je l'utilise. Cela peut donc constituer une perte de temps durant le développement d'un site ou d'une application web, il est donc dans mon intérêt de mieux intégrer les bases du travail avec SQL, même si je ne me suis pour l'instant jamais retrouvé paralysé par un problème que j'ai rencontré.

          <br />

          Le SQL est un des langages les plus populaires pour la gestion de bases de données, qui sont essentielles au fonctionnement de certains sites et applications web. De plus, le fait que le SQL soit utilisé dans de nombreux systèmes de base de données augmente les chances d'y être confronté en travaillant en entreprise. Il s'agit donc d'un outil dont la maîtrise peut être un atout formidable pour un développeur web.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          À l'avenir
        </h3>

        <p>
          Pour remédier à mon manque d'affinité avec SQL, j'aimerais ranimer ma passion pour ce langage en m'intéressant de plus près à ce qu'il propose. Il m'arrive déjà, dans le cadre de mon alternance chez Holis, de travailler avec des requêtes SQL complexes, ce qui m'aide grandement à me familiariser avec ce langage. Pour continuer dans cette direction, je compte me lancer dans des projets personnels qui me pousseraient à utiliser SQL, me donnant ainsi l'opportunité de réfléchir à la façon de structurer mes données et de créer des requêtes plus poussées pour les manipuler.
        </p>
      </section>

      <section className="flex flex-wrap items-center gap-8">
        <Link
          to="../réalisations/simplE"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          Simpl-E
        </Link>

        <Link
          to="../réalisations/lnt"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          Link & Trade
        </Link>

        <Link
          to="../réalisations/blueprint"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          Blueprint
        </Link>
      </section>
    </>
  ),
  java: (
    <>
      <h2>
        Java
      </h2>

      <section className="flex flex-col gap-2">
        <h3>
          Définition
        </h3>

        <p>
          Java est un langage de programmation orienté objet, qui est aussi versatile que répandu. Il peut être utilisé pour créer des applications mobiles, des serveurs web et bien plus encore.

          <br />

          La fonctionnalité phare de Java, qui joue un rôle important dans sa popularité, est sa portabilité. Java utilise la “JVM” (Java Virtual Machine), une machine virtuelle qui peut traduire du code Java dans un format que n'importe quel appareil peut interpréter. La JVM permet donc d'écrire un programme qui fonctionnera aussi bien sur Windows que Linux ou macOS sans avoir à réécrire quoi que ce soit pour l'adapter.
        </p>

        <br />

        <p>
          Cette incroyable portabilité, combinée avec la versatilité de ce langage, est ce qui en fait un outil très répandu. Ainsi, bien que n'étant pas indispensable au développement web, il est tout de même intéressant de savoir s'en servir, car il constitue une option solide pour créer le backend d'une application web.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Éléments de preuve
        </h3>

        <p>
          Mon premier projet avec Java a été “Link & Trade”. La raison pour l'utilisation de Java durant ce projet était la mise en place du backend de notre application web. Durant ce projet, j'ai contribué à la création de ce backend en implémentant les différents composants requis pour certains modèles de notre base de données. J'ai donc appris à écrire des controllers et des services avec Java, ce qui m'a fait découvrir certains design patterns comme les factories et les singletons.

          <br />

          J'ai également pu me servir de Java pour des tâches moins spécifiques que notre backend devait réaliser, telle que la validation d'adresse email, ce qui m'a permis de me familiariser avec les bases du langage.

          <br />

          Un autre aspect important du backend de ce projet était la sécurité. Durant tout mon travail sur cette partie de l'application, il m'a fallu tenir compte des mesures de sécurité que nous avions mises en place, telle que l'utilisation d'un token pour tester la validité d'une requête avant de l'exécuter.

          <br />

          Enfin, l'utilisation de Java pour la création de notre backend impliquait d'autoriser les requêtes “cross-origin”, de façon à ce qu'il puisse communiquer avec notre frontend. Ce processus fût plus ardu que ce à quoi je m'attendais initialement, mais cela m'a permis d'en apprendre plus sur la façon de gérer les requêtes HTTP en Java.
        </p>

        <br />

        <p>
          Le second projet ayant fait usage de Java a été “Blueprint”. Cette fois-ci, Java était l'outil principal utilisé pour la réalisation du projet, ce fut donc une merveilleuse occasion de me plonger pleinement dans son fonctionnement.

          <br />

          Tout d'abord, comme pour le projet précédent, j'ai passé du temps sur la réalisation de la partie backend de l'application. J'ai donc une nouvelle fois créé des controllers et services pour les différents modèles de notre base de données.

          <br />

          Après cela, j'ai pu me concentrer sur le frontend de l'application, ce qui m'a permis d'apprendre à utiliser Java pour manipuler les éléments affichés par l'application en fonction du contexte. Notamment la gestion de formulaire pour vérifier que les informations renseignées par l'utilisateur étaient bien valides, et le notifier si ce n'était pas le cas. J'ai également réalisé l'affichage d'une section “planning” permettant à un utilisateur de visualiser son emploi du temps, avec un système de créneaux colorés.

          <br />

          Pour réaliser tout cela, j'ai dû créer et manipuler des objets, qu'ils viennent du backend de notre application ou bien qu'ils aient été conçus spécifiquement pour gérer certains aspects du frontend. Par exemple, le formulaire de création d'un créneau m'a demandé de créer un nouvel objet “créneau” et de le modifier avec les informations renseignées par l'utilisateur. Gérer les différentes propriétés de cet objet m'a permis d'en apprendre plus sur le fonctionnement de Java, notamment sur l'utilisation des objets “Date” qui peuvent parfois porter à confusion.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Autocritique
        </h3>

        <p>
          Java est un langage facile à prendre en main et simple d'utilisation, il m'est rarement arrivé de rencontrer des problèmes en l'utilisant au cours de ces deux projets. Cependant, je me suis principalement servi de Java pour travailler sur le backend de ces applications, le frontend ne requérant pas l'utilisation de ce langage, ou ne l'utilisant que pour des tâches relativement simples.

          <br />

          Je pense donc que j'aurais pu approfondir mes compétences en développant des fonctionnalités plus poussées, qui m'auraient forcées à en apprendre sur l'implémentation de comportements complexes.

          <br />

          Cependant, la redondance d'avoir travaillé plusieurs fois sur le backend d'applications en Java m'a permis de solidifier mes connaissances dans ce domaine. Je suis donc confiant d'être capable d'utiliser ce langage à cet escient dans le futur.

          <br />

          Java est un outil très puissant et simple à prendre en main, ce qui en fait un bon candidat à la réalisation du backend d'une application web. De ce fait, bien qu'il existe des alternatives, je recommande à tout développeur web de prendre le temps de s'en intéresser.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          À l'avenir
        </h3>

        <p>
          Je n'ai pas eu de nouvelles occasions de travailler avec Java depuis ces deux projets. Cependant, j'aimerais un jour l'utiliser à nouveau pour réaliser des projets plus complexes, dans le but d'en apprendre plus sur ce langage et ainsi élargir mes horizons en tant que développeur.

          <br />

          Bien que je l'ai considéré pour sa portabilité, je n'ai pour l'instant pas encore de plan d'utiliser Java dans un de mes projets personnels, mais je garde toujours en tête les nombreux avantages apportés par son utilisation pour le futur !
        </p>
      </section>

      <section className="flex flex-wrap items-center gap-8">
        <Link
          to="../réalisations/lnt"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          Link & Trade
        </Link>

        <Link
          to="../réalisations/blueprint"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          Blueprint
        </Link>
      </section>
    </>
  ),
  cycleV: (
    <>
      <h2>
        Cycle en V
      </h2>

      <section className="flex flex-col gap-2">
        <h3>
          Définition
        </h3>

        <p>
          Le cycle en V est un processus de développement de logiciel se caractérisant par une façon structurée et séquentielle de travailler. Dans le cycle en V, le développement d'un logiciel est découpé en phases qui ont toutes une phase de test associée.

          <br />

          Ainsi, suivre le cycle en V assure la stabilité et la qualité du projet, car des changements ont peu de chances d'être introduits et les tests fréquents assurent le bon fonctionnement de chaque partie du logiciel.
        </p>

        <br />

        <p>
          Dans le domaine du développement web, le cycle en V est plutôt adapté aux projets qui ne requièrent pas de fonctionnalités ou d'affichages complexes, car il est alors simple de définir des besoins clairs et précis sur lesquels baser son processus de développement.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Éléments de preuve
        </h3>

        <p>
          J'ai utilisé le modèle du cycle en V pour la première fois durant mon premier projet à Intech, le projet “Lotus”. Pour mener ce projet à bien, nous avions, au cours d'une réunion avec notre commanditaire, défini les besoins auxquels le site devait répondre. Une fois cette étape passée, j'ai participé à la création de la charte graphique à utiliser pour la réalisation du site.

          <br />

          Je me suis ensuite servi de cette charte graphique pour ébaucher une maquette du site avec le reste de mon équipe, ce qui nous a permis de donner une idée à notre commanditaire du design du site final. La création de cette maquette m'a permis de développer mon sens de l'organisation, car réfléchir aux différents éléments du site web m'a permis de me faire une idée du temps requis pour les réaliser et ainsi de commencer à planifier leur développement.

          <br />

          Utiliser le modèle du cycle en V durant le développement du site m'a fait comprendre l'importance de tester rigoureusement les différents composants d'un projet. En effet, il m'est arrivé plusieurs fois de trouver des bugs et autres comportements inattendus en travaillant sur l'implémentation des différents formulaires du site. Par exemple, l'un des formulaires du site présentait la particularité d'avoir certains champs qui changeaient en fonction de si une option était cochée ou non. Durant mes tests, je me suis rendu compte que lors du changement de cette option, la valeur des champs qui disparaissaient n'était pas remise à zéro, ce qui causait au formulaire d'envoyer des informations supplémentaires qui n'étaient pas censées faire partie du résultat. Ainsi, j'ai pu corriger ce comportement le plus tôt possible pour éviter toute répercussion sur le code qui y a plus tard été associé.
        </p>

        <br />

        <p>
          Le second projet auquel j'ai participé qui s'est déroulé en suivant le modèle du cycle en V a été “Les envoyés de la donnée”. Celui-ci s'est déroulé, dans les grandes lignes, d'une façon similaire au projet précédent. Cependant, la différence principale a été l'importance accordée à l'aspect fonctionnel du site web. En effet, le projet “Lotus” se focalisait sur la création d'un site web esthétique, mais peu fonctionnel, tandis que l'objectif de celui-ci était purement d'ajouter des fonctionnalités à un site déjà existant, en ne repassant que brièvement sur l'affichage.

          <br />

          Cela s'est reflété durant la phase de planification et de définition des requis pour mener à bien le projet. Il a fallu apporter beaucoup plus d'attention à la description des fonctionnalités à réaliser, car il fallait être sûr qu'elles répondent aux attentes de notre commanditaire. Cela a directement impacté la planification du projet, qui a elle aussi demandé plus de minutie pour s'assurer que la distribution du travail était équitable et que le projet serait complété dans les temps. Pour parvenir à ça, j'ai dû apprendre à réaliser un diagramme de Gantt, pour mieux visualiser la répartition des tâches au cours du temps.

          <br />

          Cet exercice m'a fait prendre conscience de l'efficacité d'un diagramme de Gantt pour se forcer à réfléchir à la complexité de chaque tâche d'un projet.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Autocritique
        </h3>

        <p>
          L'utilisation du modèle du cycle en V m'a grandement aidé pour incorporer des aspects très importants du processus de développement d'un site ou d'une application web. Notamment la définition de besoins et la planification du développement de fonctionnalités.

          <br />

          Cependant, selon moi, la compétence la plus importante que j'ai développée en participant à ces deux projets utilisant le cycle en V est l'incorporation de tests rigoureux et réguliers à ma routine de travail. Tester régulièrement son code est très important en tant que programmeur, car cela permet de s'assurer que celui-ci est implémenté avec ses potentiels usages futurs en tête.

          <br />

          C'est cet aspect “test continu” du cycle en V que j'ai le plus apprécié, car il a rendu très facile l'assertion des priorités au cours d'un projet.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          À l'avenir
        </h3>

        <p>
          Depuis ces deux projets, je n'ai pas eu d'autres occasions de travailler en utilisant le cycle en V. En effet, tous les autres projets auxquels j'ai participé depuis utilisaient la méthode agile, y compris dans le cadre de mon alternance chez Holis. J'ai cependant pu transférer toutes les compétences que j'ai acquises en utilisant le cycle en V dans cette nouvelle façon de faire. Travailler avec le cycle en V m'a permis d'obtenir des compétences et de développer des habitudes qui me sont toujours bénéfiques aujourd'hui, même sans directement employer ce modèle. Ainsi, même si je ne me retrouve pas à utiliser de nouveau le cycle en V à l'avenir, je profiterai toujours des bénéfices qu'il m'a apportés.
        </p>
      </section>

      <section className="flex flex-wrap items-center gap-8">
        <Link
          to="../réalisations/lotus"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          Lotus
        </Link>

        <Link
          to="../réalisations/ledld"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          Les envoyés de la donnée
        </Link>
      </section>
    </>
  ),
  agile: (
    <>
      <h2>
        Méthode agile
      </h2>

      <section className="flex flex-col gap-2">
        <h3>
          Définition
        </h3>

        <p>
          Tout comme le cycle en V, la méthode agile est un processus de développement de logiciel. Sa caractéristique principale est son approche qui se concentre sur la flexibilité et la collaboration avec le commanditaire. Contrairement au modèle du cycle en V, qui suit un procédure étape par étape, la méthode agile est faite pour s'adapter aux changements qui pourraient être fait en cours de route. Cette flexibilité est rendue possible par le fait de diviser le développement d'un logiciel en “sprints”, des cycles courts durant lesquels un certain nombre de fonctionnalités prédéfinies sont réalisées. Combiné à des réunions fréquentes entre développeurs et avec le commanditaire, cela permet de s'assurer que ce qui a été fait et ce qu'il reste à faire correspond toujours aux attentes du commanditaire.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Éléments de preuve
        </h3>

        <p>
          J'ai pour la première fois travaillé avec la méthode agile durant le projet “Simpl-e”. Pour entamer le projet, nous avons tout d'abord eu une réunion avec notre commanditaire pour définir ses besoins. Durant cette réunion, j'ai dû relever les éléments qui constituaient des points importants au fonctionnement de l'éventuelle application, tout en posant des questions à notre commanditaire pour m'assurer qu'il n'y ait pas de zones d'ombre.

          <br />

          Suite à cette première réunion, j'ai travaillé sur le “product backlog” de l'application, un ensemble de toutes les fonctionnalités que nous devions implémenter, représentées par des “user stories”. Il m'a donc fallu apprendre à rédiger des user stories, en me mettant à la place de l'utilisateur final pour exprimer les attentes auxquelles répond chaque fonctionnalité.

          <br />

          Une fois le projet lancé, les nombreuses réunions que nous avons eues avec notre commanditaire nous ont permis d'éclaircir certains aspects de la logique complexe que nous avons dû implémenter, mettant ainsi en avant l'importance d'une communication fréquente.
        </p>

        <br />

        <p>
          Durant mon deuxième projet avec la méthode agile, “Link & Trade”, j'ai dû aiguiser d'autant plus ma compétence à dégager des objectifs clairs des besoins d'un commanditaire. Nos commanditaires pour ce projet ayant été des lycéens, il m'a fallu vulgariser d'autant plus tout sujet technique abordé au cours de nos réunions. C'est ainsi que nous avons pu parler de leurs attentes et convenir de ce qui faisait partie ou non du cadre du projet.

          <br />

          Il m'a également fallu être force de proposition, car des subtilités sur l'implémentation de certaines fonctionnalités se présentaient parfois à nous. J'ai donc profité des réunions que nous menions tous les deux sprints pour leur faire part de ses pistes d'amélioration éventuelles. Ainsi, nous avons par exemple proposé l'idée d'ajouter un système de modération, géré par les professeurs du lycée, ainsi qu'un système de catégories et de sous-catégories pour faciliter la recherche de produits spécifiques.

          <br />

          Un autre aspect de la méthode agile dont j'ai fait l'expérience durant ce projet a été l'entraide qui s'instaure naturellement lorsque l'on travaille dans ces conditions. En effet, les courtes réunions quotidiennes que nous faisions entre développeurs nous permettaient de signaler toute difficulté rencontrée aux autres. Il était alors commun d'aider un camarade à débugger une partie de l'application ou de travailler en peer programming pour étendre ses connaissances en se reposant sur les points forts des uns et des autres. J'en ai notamment fait l'expérience en faisant des séances de peer programming avec un membre de mon équipe s'occupant principalement du backend de l'application. Durant ces séances, j'ai pu apprendre de la façon dont il travaillait sur notre API et ai également eu l'occasion de lui en apprendre plus sur les subtilités d'Angular, HTML et CSS.
        </p>

        <br />

        <p>
          Le troisième et dernier projet sur lequel j'ai travaillé avec la méthode agile a été “Blueprint”. Au commencement du projet, nous avons fait face à des difficultés quant à la définition des besoins du commanditaire. La raison derrière cela était notre manque de familiarité avec le domaine professionnel de notre commanditaire, l'installation de panneaux photovoltaïques. J'ai donc tiré parti de nos premières réunions ensemble pour me renseigner le plus possible sur le contexte dans lequel il comptait utiliser l'application, en plus d'assister à une pose de panneaux solaires pour en savoir plus sur les conditions de travail des techniciens. Cela nous a permis de définir un product backlog que nous avons ensuite fait valider auprès de notre commanditaire, pour bien nous assurer qu'il capturait bel et bien ses attentes.

          <br />

          Au cours des réunions suivantes, il m'est arrivé d'émettre des propositions sur la philosophie du design de l'application en tenant compte des différents cas de figure pendant lesquels celle-ci allait être utilisée. Nous avons notamment défini qu'il était important pour l'application de fonctionner avec le moins d'intéractions possibles avec l'écran, car les techniciens travaillent avec des gants, rendant ainsi son utilisation délicate.

          <br />

          Les avantages de la fréquence de communication encouragée par la méthode agile se sont aussi fait ressentir plus tard dans le projet, où nous avions eu des doutes sur la structure de notre base de données. Pour remettre le projet sur le droit chemin, nous avons contacté notre commanditaire pour qu'il puisse répondre à nos questions, ce qui nous a aidé à repenser le système de gestion des données de l'application que nous avions établi.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Autocritique
        </h3>

        <p>
          Travailler avec la méthode agile m'a beaucoup appris, notamment sur l'importance de la communication. Il s'agit d'un point sur lequel j'ai souvent eu des blocages, aussi bien dans le monde professionnel que dans ma vie personnelle. Bien que cela me soit arrivé au cours de certains projets, j'aurais aimé être plus souvent capable d'être force de proposition, de partager mon opinion et de présenter des axes d'amélioration sur certains aspects des logiciels que j'ai développés. Me retrouver plusieurs fois dans le contexte d'un projet mené avec la méthode agile m'a ouvert des voies vers le fait d'acquérir de réelles compétences en communication. J'ai pu apprendre par l'exemple et la pratique comment interagir avec les parties prenantes d'un projet, ce qui a pour moi été une incroyable opportunité.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          À l'avenir
        </h3>

        <p>
          Après ces projets, j'ai continué d'utiliser la méthode agile pour travailler sur différents projets dans le cadre de mon alternance chez Holis. Selon moi, la méthode agile est le modèle le plus efficace pour travailler en équipe, je ne compte donc pas m'arrêter un jour de l'utiliser. Je continue encore à ce jour à développer peu à peu mes compétences en communication par le biais de la méthode agile, et j'espère un jour pouvoir surmonter mes difficultés dans ce domaine.
        </p>
      </section>

      <section className="flex flex-wrap items-center gap-8">
        <Link
          to="../réalisations/simplE"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          Simpl-E
        </Link>

        <Link
          to="../réalisations/lnt"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          Link & Trade
        </Link>

        <Link
          to="../réalisations/blueprint"
          className="px-3 py-1 rounded bg-light-sand text-charcoal-sand"
        >
          Blueprint
        </Link>
      </section>
    </>
  ),
  communication: (
    <>
      <h2>
        Communication
      </h2>

      <section className="flex flex-col gap-2">
        <h3>
          Définition
        </h3>

        <p>
          La communication est au cœur de la création d'un projet. Elle permet de coordonner tous les différents éléments qui le composent pour s'assurer que tout soit en ordre.

          <br />

          Faire de la communication est également crucial à la réussite d'un projet. Être capable de relayer clairement et efficacement les informations importantes sur la venue d'un événement ou le développement d'un projet peut s'avérer être la différence qui fait tout le succès de ces derniers. Il existe d'innombrables moyens de faire de la communication, et être familier avec certains d'entre eux est un grand atout dans le monde professionnel.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Éléments de preuve
        </h3>

        <p>
          Il m'a été demandé pour la première fois de faire de la communication sur un événement lors du projet “Organic”. L'objectif était de faire de la communication sur les réseaux sociaux, pour promouvoir l'ouverture du pôle restauration de l'établissement de nos commanditaires. Pour mener ce projet à bien, j'ai dû tout d'abord réfléchir aux différents types de publications à poster tout au long de la campagne de communication. Parmi elles, il y avait entre autres des vrai ou faux, des “fun facts” sur les fruits et légumes, ainsi qu'un compte à rebours avant l'inauguration. J'ai ensuite réparti ces différents types de publications dans un calendrier éditorial, qui nous a servis pour nous organiser. Celui-ci listait toutes les dates auxquelles nous devions mettre en ligne une nouvelle publication, ainsi que le type de publication dont il s'agissait.

          <br />

          En tant que chef de projet, il était également mon devoir de m'occuper de la communication avec les différentes parties prenantes du projet par email. J'ai ainsi été amené à organiser nos différentes réunions et à en rédiger les comptes-rendus.
        </p>

        <br />

        <p>
          Le second projet pour lequel j'ai dû mener une campagne de communication a été “CleanCamino”. Parmi les différents projets dont j'ai fait partie durant mon cursus à Intech, celui-ci se démarque de par le fait que nous étions nos propres commanditaires. Notre but était d'organiser un court voyage en Espagne durant lequel nous avons nettoyé plages et chemins au long d'une grande randonné.

          <br />

          Cependant, cela ne représentait qu'une moitié du projet. En effet, l'aspect secondaire de ce projet était une levée de dons pour des associations caritatives. J'ai donc une nouvelle fois participé à la gestion de notre communication virale en proposant des idées et des designs de publications. J'ai ainsi créé plusieurs versions de templates à utiliser pour différents types de publications, similaires à celles du projet “Organic”.

          <br />

          Pour mener ce projet à bien, j'ai également dû renforcer mes compétences en communication directe avec un client. En effet, pour obtenir le budget nécessaire à la réalisation de notre projet, j'ai dû participer à plusieurs ventes de crêpes, cookies et boissons durant lesquelles j'ai eu l'occasion de communiquer avec plusieurs clients d'affilés.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Autocritique
        </h3>

        <p>
          La communication virale est un domaine que je n'avais jusque-là jamais abordé, il fût donc pour moi très enrichissant de m'y adonner durant ces deux projets. Selon moi, un aspect des publications que nous avons postées durant ces deux projets que j'aurais pu améliorer est l'interactivité. En effet, il aurait été plus efficace de cultiver de l'engagement en interagissant avec les utilisateurs des différentes plateformes que nous avons utilisées de façon plus directe.

          <br />

          J'ai également beaucoup appris de mon expérience en tant que chef de projet. La communication, surtout par email, n'a jamais été mon fort. Il m'arrivait souvent de prendre beaucoup de temps à écrire un simple email pour organiser une réunion. Heureusement, me retrouver dans cette situation m'a permis d'évoluer et de mieux gérer cet aspect si important de la réalisation d'un projet.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          À l'avenir
        </h3>

        <p>
          Dans le cadre de mon alternance chez Holis, il m'arrive quotidiennement de communiquer avec les parties prenantes des projets sur lesquels je travaille. Je me sens donc de plus en plus à l'aise dans ce domaine, et je compte bien continuer de fournir des efforts pour surmonter mes difficultés.

          <br />

          Pour ce qui est de la communication virale, je n'ai pour l'instant pas eu d'occasions de m'y adonner à nouveau. Cependant, si l'occasion venait à se présenter dans le futur, je tirerais parti de ma passion pour les projets dans lesquels je suis investi pour communiquer d'une façon plus engageante.
        </p>
      </section>
    </>
  ),
  gestionProjet: (
    <>
      <h2>
        Gestion de projet
      </h2>

      <section className="flex flex-col gap-2">
        <h3>
          Définition
        </h3>

        <p>
          Réaliser un projet demande du savoir-faire dans nombre de domaines différents. Cependant, il est facile d'oublier que gérer un projet est une compétence en elle-même !

          <br />

          La gestion de projet représente l'ensemble des étapes nécessaires et des paramètres à prendre en compte pour s'assurer qu'un projet sera mené à bien. Cela implique de la planification, de la répartition des ressources, et l'utilisation de différents outils et méthodes pour structurer et organiser les différents aspects d'un projet.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Éléments de preuve
        </h3>

        <p>
          Ma première expérience importante en gestion de projet a été le projet “Organic”. Ce projet ayant été centré sur un événement en particulier (l'inauguration du pôle restauration de l'établissement de nos commanditaires) ainsi que sur la campagne de communication continue qui le précédait, il était primordial de planifier correctement le déroulement du projet.

          <br />

          Dans ce but, j'ai créé un diagramme de Gantt répertoriant toutes les tâches nécessaires à la réalisation du projet, ce qui nous a permis de nous répartir équitablement le travail tout au long du projet.

          <br />

          Pour mieux faire cette répartition, j'ai dû établir un SWOT avec le reste de l'équipe. Cela m'a appris à jauger tous les différents paramètres pouvant être pris en compte pour un projet donné, pour pouvoir ensuite mieux s'organiser.

          <br />

          De plus, en tant que chef de projet, j'étais en charge d'organiser les réunions entre l'équipe projet et nos commanditaires. Ainsi, j'ai communiqué avec nos commanditaires à de multiples occasions en rédigeant des emails pour convenir de créneaux pour ces réunions. Je me suis également occupé d'écrire un rapport pour chacune de ces réunions, pour m'assurer que tout ce qui en découlait serait pris en compte.
        </p>

        <br />

        <p>
          La seconde fois où j'ai été amené à gérer un projet était lors du projet “CleanCamino”. Ce dernier fut un exercice bien plus poussé dans ce domaine que tout ce dont j'avais fait l'expérience jusque là, car nous étions les seuls en charge du projet et des différents aspects qui le composaient.

          <br />

          En raison de cela, il a été crucial de définir des objectifs SMART (Spécifiques, Mesurables, Atteignables, Réalistes et Temporellement définis) clairs et solides pour tracer les contours de notre projet.

          <br />

          En me basant sur ces objectifs, j'ai aidé à détailler les différentes étapes de la réalisation du projet, avant de les recenser dans un diagramme de Gantt. En plus de cela, il m'a fallu aider à la gestion de notre budget. J'ai donc dû estimer le coût de toutes les dépenses nécessaires pour mener à bien le projet, telles que la location d'une chambre d'hôtel, le coût du trajet, de la nourriture, du matériel de nettoyage, etc.

          <br />

          J'ai ensuite pu me baser sur ce budget prévisionnel pour réfléchir à différents moyens de lever assez de fonds pour réaliser notre projet, tels que la mise en place d'une cagnotte en ligne ainsi que la vente de gâteaux, crêpes et cookies.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Autocritique
        </h3>

        <p>
          La gestion de projet a été pour moi quelque chose avec lequel il a été dur de me familiariser. Mon manque de compétences en termes de communication et de planification s'est souvent fait ressentir au cours de ces projets. Cependant, j'ai su être capable d'apprendre en faisant et ainsi de corriger mes erreurs pour mener ces projets à bien.

          <br />

          Je pense cependant que je manque encore à ce jour d'expérience dans ce domaine, et qu'il me serait bénéfique d'affûter toutes ces compétences.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          À l'avenir
        </h3>

        <p>
          Depuis ces deux projets, je n'ai pas été de nouveau confronté au défi de gérer des projets de cette ampleur. Il m'arrive cependant d'appliquer certaines notions que j'ai acquises dans ce domaine pour planifier mes projets personnels, et je compte continuer dans cette direction à l'avenir, car la gestion de projet représente un ensemble de compétences qui peuvent s'avérer vitales dans la vie de tous les jours.
        </p>
      </section>
    </>
  ),
};

export function Competences() {
  const { comp } = useParams();

  const [selected, setSelected] = useState<keyof CompLookup>();

  useEffect(() => {
    if (comp === undefined || contentLookup[comp as keyof CompLookup] === undefined) return;

    setSelected(comp as keyof CompLookup);
  }, [comp]);

  return (
    <div className="flex flex-col items-center gap-8 py-8">
      <h1>
        Mes compétences
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

      <section className="flex flex-col items-center gap-8 w-full max-w-3xl">
        <h2>
          Techniques
        </h2>

        <button
          className={
            "relative flex items-center gap-4 w-full max-w-2xl p-3 border-2 border-light-sand rounded-xl"
            + " bg-charcoal-sand shadow-2xl cursor-pointer"
          }
          onClick={() => setSelected("html")}
        >
          <div className="flex justify-center items-center w-1/5 h-24">
            <img
              src={html}
              className="h-full"
            />
          </div>

          <b className="text-lg text-left">
            HTML
          </b>
        </button>

        <button
          className={
            "relative flex items-center gap-4 w-full max-w-2xl p-3 border-2 border-light-sand rounded-xl"
            + " bg-charcoal-sand shadow-2xl cursor-pointer"
          }
          onClick={() => setSelected("javaScript")}
        >
          <div className="flex justify-center items-center w-1/5 h-24">
            <img
              src={javaScript}
              className="h-full"
            />
          </div>

          <b className="text-lg text-left">
            JavaScript
          </b>
        </button>

        <button
          className={
            "relative flex items-center gap-4 w-full max-w-2xl p-3 border-2 border-light-sand rounded-xl"
            + " bg-charcoal-sand shadow-2xl cursor-pointer"
          }
          onClick={() => setSelected("css")}
        >
          <div className="flex justify-center items-center w-1/5 h-24">
            <img
              src={css}
              className="h-full"
            />
          </div>

          <b className="text-lg text-left">
            CSS
          </b>
        </button>

        <button
          className={
            "relative flex items-center gap-4 w-full max-w-2xl p-3 border-2 border-light-sand rounded-xl"
            + " bg-charcoal-sand shadow-2xl cursor-pointer"
          }
          onClick={() => setSelected("bootstrap")}
        >
          <div className="flex justify-center items-center w-1/5 h-24">
            <img
              src={bootstrap}
              className="h-full"
            />
          </div>

          <b className="text-lg text-left">
            Bootstrap
          </b>
        </button>

        <button
          className={
            "relative flex items-center gap-4 w-full max-w-2xl p-3 border-2 border-light-sand rounded-xl"
            + " bg-charcoal-sand shadow-2xl cursor-pointer"
          }
          onClick={() => setSelected("sql")}
        >
          <div className="flex justify-center items-center w-1/5 h-24">
            <img
              src={sql}
              className="h-full"
            />
          </div>

          <b className="text-lg text-left">
            SQL
          </b>
        </button>

        <button
          className={
            "relative flex items-center gap-4 w-full max-w-2xl p-3 border-2 border-light-sand rounded-xl"
            + " bg-charcoal-sand shadow-2xl cursor-pointer"
          }
          onClick={() => setSelected("java")}
        >
          <div className="flex justify-center items-center w-1/5 h-24">
            <img
              src={java}
              className="h-full"
            />
          </div>

          <b className="text-lg text-left">
            Java
          </b>
        </button>

        <h2>
          Humaines
        </h2>

        <button
          className={
            "relative flex items-center gap-4 w-full max-w-2xl p-3 border-2 border-light-sand rounded-xl"
            + " bg-charcoal-sand shadow-2xl cursor-pointer"
          }
          onClick={() => setSelected("cycleV")}
        >
          <div className="flex justify-center items-center w-1/5 h-24">
            <img
              src={cycleV}
              className="h-full"
            />
          </div>

          <b className="text-lg text-left">
            Cycle en V
          </b>
        </button>

        <button
          className={
            "relative flex items-center gap-4 w-full max-w-2xl p-3 border-2 border-light-sand rounded-xl"
            + " bg-charcoal-sand shadow-2xl cursor-pointer"
          }
          onClick={() => setSelected("agile")}
        >
          <div className="flex justify-center items-center w-1/5 h-24">
            <img
              src={agile}
              className="h-full"
            />
          </div>

          <b className="text-lg text-left">
            Méthode agile
          </b>
        </button>

        <button
          className={
            "relative flex items-center gap-4 w-full max-w-2xl p-3 border-2 border-light-sand rounded-xl"
            + " bg-charcoal-sand shadow-2xl cursor-pointer"
          }
          onClick={() => setSelected("communication")}
        >
          <div className="flex justify-center items-center w-1/5 h-24">
            <img
              src={communication}
              className="h-full"
            />
          </div>

          <b className="text-lg text-left">
            Communication
          </b>
        </button>

        <button
          className={
            "relative flex items-center gap-4 w-full max-w-2xl p-3 border-2 border-light-sand rounded-xl"
            + " bg-charcoal-sand shadow-2xl cursor-pointer"
          }
          onClick={() => setSelected("gestionProjet")}
        >
          <div className="flex justify-center items-center w-1/5 h-24">
            <img
              src={gestionProjet}
              className="h-full"
            />
          </div>

          <b className="text-lg text-left">
            Gestion de projet
          </b>
        </button>
      </section>
    </div>
  );
}
