import building from "../src/assets/building.svg";
import construction from "../src/assets/construction.svg";
import design from "../src/assets/design.svg";
import document from "../src/assets/document.svg";
import paint from "../src/assets/paint.svg";
import support from "../src/assets/support.svg";

import { IoDocumentTextSharp } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";

// Usando placeholders temporários para imagens de equipe
const client1 = "https://ui-avatars.com/api/?name=Juacy&background=1E88E5&color=fff&size=200&bold=true";
const client2 = "https://ui-avatars.com/api/?name=Drew+James&background=1E88E5&color=fff&size=200&bold=true";
const client3 = "https://ui-avatars.com/api/?name=Sam+Peterson&background=1E88E5&color=fff&size=200&bold=true";

export const allservices = [
  {
    icon: building,
    title: "Blindagem Trabalhista",
    about:
      "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: construction,
    title: "LEGALIZAÇÃO DE EMPRESA",
    about:
      "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: design,
    title: "ABERTURA DE EMPRESA",
    about:
      "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: document,
    title: "DOCUMENTATION",
    about:
      "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: paint,
    title: "INTERIOR DESIGN",
    about:
      "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: support,
    title: "DEPARTAMENTO PESSOAL",
    about:
      "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const planning = [
  {
    icon: IoDocumentTextSharp,
    title: "Blindagem Trabalhista",
    about:
      "Mapeamos riscos, revisamos contratos e rotinas de RH e implantamos compliance para reduzir passivos e evitar ações trabalhistas.",
  },
  {
    icon: MdOutlineDesignServices,
    title: "Contabilidade Fiscal e Comercial",
    about:
      "Escrituração completa, apuração de tributos e relatórios gerenciais para decisões seguras, com monitoramento.",
  },
  {
    icon: FaRegBuilding,
    title: "Legalização de Empresas",
    about:
      "Abrimos, regularizamos e atualizamos sua empresa em órgãos municipais, estaduais e federais, com CNAE, alvarás. Sem burocracia.",
  },
  {
    icon: FaSitemap,
    title: "Departamento Pessoal",
    about:
      "Folha, admissões/demissões, eSocial, férias e benefícios com conformidade legal, prazos em dia e atendimento humanizado aos colaboradores.",
  },
];

export const clients = [
  {
    image: client1,
    name: "Juacy",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
    post: "Responsável 1",
  },
  {
    image: client2,
    name: "Drew James",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
    post: "Responsável 2",
  },
  {
    image: client3,
    name: "Sam Peterson",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
    post: "Builder",
  },
];
