import React from 'react';

import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Flex,
  Image,
  Tabs, TabList, TabPanels, Tab, TabPanel
} from '@chakra-ui/react';
import Rubrique from './Rubrique';

import "../style.css";
const Alternance = () => {
  return (
    
      <Box textColor={"black"} textAlign="center" fontSize="xl" backgroundColor={"#FFFFF0"} width={"100%"} minHeight={"100vh"} pt={20} pb={20}>
        <Rubrique srcImage={"/image/image-removebg-preview.png"} color={"#667AFF"} title={"Experiences professionnelles"} />
        <Flex flexDir={"column"}>
          <Text fontSize={"3xl"} fontFamily={"Playwrite"} fontWeight={'bold'} textColor={"#667AFF"}>STAGE PICTURIDE</Text>
          <Flex flexDir={"column"} py={20} alignItems={"center"}>
            <Flex width={"80%"} pl={10}>
              <Image width={72} src='/image/picturide.png'></Image>
              <Flex flexDir={"column"} justifyContent={"center"} alignItems={"flex-start"} pl={10}>
                <Text textAlign="justify"> Picturide est une entreprise spécialisée dans la mise en relation de coachs de sports nautiques
et d’amateurs passionnés. Grâce &u développement d'une plateforme en ligne, Picturide a pour objectif de
faciliter et de structurer les échanges entre les deux parties, permettant aux amateurs de
bénéficier de conseils personnalisés pour améliorer leur pratique.</Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex flexDir={"column"} py={10} alignItems={"center"}>
            <Flex width={"80%"} pl={10} pb={10}>
              <Flex flexDir={"column"} justifyContent={"center"} alignItems={"flex-start"} pl={10}>
                <Text fontWeight={'medium'} fontSize={"2xl"} pb={10} textColor={"#667AFF"}> Mes missions chez Picturide:</Text>
                <Text marginLeft={20}> - Etude des besion du coté client et du coté coach</Text>
                <Text marginLeft={20}> - Réalisation de maquettes fonctionnelles et graphique</Text>
                <Text marginLeft={20}> - Analyse et comparaison entre différents outils technique afin de choisir celui qui correspondrait au mieux à nos besoins</Text>
                <Text marginLeft={20}> - Développement de la page d'acceuil</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        
        <Flex flexDir={"column"} pt={20}>
          <Text fontSize={"3xl"} fontFamily={"Playwrite"} fontWeight={'bold'} textColor={"#667AFF"}>ALTERNANCE CAPSYS</Text>
          <Flex flexDir={"column"} py={20} alignItems={"center"}>
            <Flex width={"80%"} pl={10}>
              <Image width={72} src='/image/capsys.png'></Image>
              <Flex flexDir={"column"} justifyContent={"center"} alignItems={"flex-start"} pl={10}>
                <Text textAlign="justify"> Capsys est une entreprise spécialisée dans l’intégration de PGI (logiciel de gestion d’entreprise) fondée en 2007 par Stéphane Montes. Basée dans le Parc Technologique de Saint Priest, son capital est de 12 000€ et elle a réalisé un chiffre d’affaires de 5 millions d’euros en 2024. Capsys propose à ses clients le paramétrage et la maintenance du logiciel Open-prod, mais aussi le développement de nouveaux modules pour ajouter de nouvelles fonctionnalités ou modifier des fonctionnalités du standard.</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Tabs variant="enclosed" width="80%" mx="auto">
        <TabList>
            <Tab flex="1">Réaliser</Tab>
            <Tab flex="1">Optimiser</Tab>
            <Tab flex="1">Collaborer</Tab>
            <Tab flex="1">Administrer</Tab>
            <Tab flex="1">Gérer</Tab>
            <Tab flex="1">Autres</Tab>
        </TabList>
        <TabPanels minHeight="520px">
            <TabPanel>
            <Text textAlign="justify">Travailler sur un ERP aussi structuré qu’Open-Prod m’a confronté à des besoins fonctionnels concrets, exprimés directement par les utilisateurs finaux. Cela m’a appris à analyser précisément une demande, à identifier les contraintes métier et à mettre en place des solutions tout en respectant l’architecture existante. Chaque développement devait s’intégrer proprement sans impacter les fonctionnalités déjà en place, ce qui m’a sensibilisé à l’importance de la compatibilité ascendante et de la non-régression.
Le développement des modules m’a amené à manipuler des structures de données complexes et à implémenter des logiques métiers spécifiques, souvent en lien avec des processus industriels ou logistiques. J’ai ainsi renforcé ma capacité à concevoir des algorithmes robustes, à optimiser leur performance, et à prendre en compte la maintenabilité du code dans mes choix d’implémentation. Par exemple, lors du traitement de données massives (commandes, produits, nomenclatures), j’ai dû veiller à ce que les boucles et conditions soient les plus efficaces possible.	
J’ai appris à porter une attention particulière à la qualité du code produit, aussi bien en termes de lisibilité que de structure. Mon tuteur m’a sensibilisée aux bonnes pratiques de développement : respect des conventions, commentaires pertinents, nommage explicite, modularité du code, etc. La documentation était aussi un aspect important : j’ai documenté certaines méthodes afin de faciliter leur compréhension et leur reprise par d’autres développeurs. 	
Open-Prod reposant sur un socle technique basé sur Python et PostgreSQL, j’ai appris à identifier et à me servir des bibliothèques adaptées aux solutions que je devais mettre en place, mais aussi à identifier les méthodes du standard que je pouvais réutiliser et que je devais surcharger pour apporter les modifications souhaitées. J’ai parfois dû composer avec des contraintes liées au framework. Cette contrainte m’a poussée à faire des choix techniques et à trouver des solutions alternatives pour réponde au mieux aux besoins spécifiés.
</Text>
            </TabPanel>
            <TabPanel>
            <Text textAlign="justify">Tout au long de l’année j’ai été amenée à travailler sur des développements où la performance et la fiabilité étaient essentielles. Dans un logiciel comme Open-Prod, chaque fonctionnalité touche directement des processus de production et de gestion critiques. Il était donc indispensable de proposer des solutions optimisées, à la fois en termes de rapidité, de précision et de consommation de ressources.
Les demandes des clients concernaient souvent des situations métiers complexes (gestion des stocks, production, suivi logistique). J’ai appris à m’approprié le sujet en schématisant les structures de données et le l’enchainement des fonctionnalités.  Cette étape de modélisation était essentielle pour simplifier des problématiques parfois abstraites, car elle concernait des aspect métiers très spécifique, et pouvoir les traiter efficacement dans le code.	
Dans mes développements, j’ai dû faire appel à des algorithmes classiques comme parcours de listes, recherches, tris, agrégations de données, et choisir les structures de données appropriées (dictionnaires, listes, modèle permanent ou modèle temporaire etc). Par exemple, dans certains modules, j’ai optimisé l’accès aux données en utilisant des dictionnaires Python plutôt que des listes, afin de réduire le temps de recherche. J’ai appris à privilégier les fonction mapped() et filtered() plutôt que des boucles python qui peuvent être moins optimiser. J’ai également appris à utiliser la fonction write() sur les objets plutôt que de manipuler les records individuellement et permet de faire une seul requête SQL au lieu de N. J’ai optimiser certaines boucles python en évitant de mettre des .search() ou .browse() à l’intérieur car ces fonction peuvent vite consommer des ressources et ralentir le temps d’exécution. Cette expérience m’a permis de comprendre l’impact direct des choix algorithmiques sur les performances globales d’une application.	
Ensuite pour répondre aux missions correctement, j’ai appris à utiliser des méthodes de raisonnement structurées : </Text>
<Text textAlign="justify" marginLeft={20}>•	Découper et reformuler un problème,</Text>
<Text textAlign="justify" marginLeft={20}>•	Identifier les cas particuliers et exceptions,</Text>
<Text textAlign="justify" marginLeft={20}>•	Tester plusieurs hypothèses avant de choisir une solution.</Text>
<Text textAlign="justify">
Cette approche m’a aidée à traiter des demandes clients parfois ambiguës, en progressant étape par étape vers une solution la plus robuste et optimisée possible.
Lors des revues de codes avec mon tuteur j’ai pu obtenir et apporter un regard critique sur le code que j’avais construit et j’ai également dû justifier les choix techniques que j’avais pu faire.
</Text>
            </TabPanel>
            <TabPanel>
            <Text textAlign="justify">L’alternance m’a permis de comprendre qu’au-delà des compétences techniques, la réussite d’un projet dépend aussi beaucoup de la collaboration entre les différents acteurs impliqués. J’ai ainsi acquis et développé des aptitudes essentielles pour travailler efficacement au sein d’une équipe pluridisciplinaire.	
Au sein de Capsys, j’ai été amenée à collaborer avec d’autres développeurs, et des consultants fonctionnels. Chaque profil a des objectifs et des contraintes spécifiques (techniques, organisationnelles, métiers), j’ai alors appris à vulgariser mes contraintes en fonction de la personne à qui je m’adressais, mais aussi à écouter les retours sur le travail que j’avais livré et à adapter et proposer des solutions pour répondre aux problèmes auxquels on me faisait part.	
Mes missions ne se sont pas limitées uniquement au pas au développement. J’ai eu l’occasion de rédiger des documentations techniques pour pouvoir partager et explique certaines fonctionnalités que j’ai développé plus facilement et permettre à d’autres personnes de comprendre et reprendre le développement des fonctionnalités plus aisément.
Cette expérience m’a également permis de progresser en communication professionnelle. Je devais régulièrement rendre compte de mon avancement à mon tuteur et j’ai appris à ne pas hésiter à demander de l’aide quand j’en avais besoin, ou encore commenté clairement mon code pour qu’il soit plus lisible par les autres développeurs. J’ai également pu collaborer avec l’autre alternant en partageant les méthodes dont nous avons pu nous servir dans le code et les différentes fonctionnalités que nous avons développer ou exploiter, afin de s’entraider et d’avoir un aperçu de ce que l’autre faisait.	
A travers cette expérience j’ai donc pu comprendre l’importance de la communication au sein d’une entreprise et entre l’entreprise et les clients. En effet je même si je n’étais pas directement en lien avec les clients j’ai pu observer à travers les consultants fonctionnels à quel point il était important d’avoir une bonne relation et communication avec les clients pour porter à bien un projet. J’étais d’ailleurs directement impacter lorsque la communication ne s’effectuais en devant reprendre à plusieurs reprises certains développements car le client n’avait pas communiqué clairement l’ensemble de ses besoins
.</Text>
            </TabPanel>
            <TabPanel>
            <Text textAlign="justify">Lors de chaque développement je devais veiller à respecter les bonnes pratiques d’architectures mise en place par l’éditeur et aux conventions de nommage qui ont été convenues au sein de l’entreprise. Pour cela j’avais accès à un document rédigé par l’éditeur qui recensait toutes les bonnes pratiques. J’ai alors compris que les normes garantissent à la fois la pérennité, la maintenabilité et la sécurité de l’ensemble de l’application. Aussi je devais veiller à ce que les fonctionnalités que je développais et que j’intégrais à l’ERP ne dégradent pas son fonctionnement et ses performances. Une rupture de fonctionnement au sein de l’ERP pouvait perturber l’activité de nos clients. J’ai alors appris à tester soigneusement les développements avant mise en production, à anticiper les risques de régression et à mettre en place des solutions correctives rapidement en cas d’incident.</Text>
            </TabPanel>
            <TabPanel>
                <Text textAlign="justify">
                    Open-Prod étant un ERP centré sur la gestion de données (commandes, stocks, production, logistique, suivi clients, etc.), mon alternance m’a permis de développer des compétences solides autour de la manipulation, de la cohérence et de l’exploitation des données. J’ai compris que la donnée est au cœur du pilotage d’une organisation, et qu’elle doit être fiable, et exploitable.	
J’ai à optimiser les requêtes pour ne pas surcharger le système, et structurer les modèles avec les données essentielles afin d’éviter de le surcharger avec des données inutiles. Cela permet de réduire l’impact énergétique du stockage mais aussi de garantir une exploitation plus rapide et plus efficace des données.	
Les fonctionnalités que je développais générais ou modifiais des données je devais alors voire plus loin que ma fonctionnalité afin de faire en sorte que les données restent cohérentes au sein de l’ensemble de l’ERP.

                </Text>
            </TabPanel>
            <TabPanel>
                <Text textAlign="justify">
                    Grace a cette alternance j’ai également pu être confronter à toutes les contraintes logistiques auxquelles doivent faire face une entreprise avec des procédés industriels comme la gestion des achats/ventes/stocks/productions. 
Je me suis construit un regard plus aiguisé sur toute la logique des flux de travail et j’ai également acquis des notions plus comptables avec la gestion des comptes clients et fournisseurs, ainsi que les notions de taxes qui varies entre les pays et les types de produits et de plus valus en faisant des calcule de prix selon des contraintes métiers.
J’ai aussi acquis du vocabulaire technique en anglais, étant donné que l’ensemble des variables que je créais devait être en anglais j’ai intégré du nouveau vocabulaire notamment grâce au projet pour Barrisol (l’entreprise qui fabrique des plafonds tendus).
                </Text>
            </TabPanel>
        </TabPanels>
        </Tabs>
      </Box>
  );
}

export default Alternance;