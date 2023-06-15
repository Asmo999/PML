import Step1Image from "../../src/images/stepFirst.svg";
import Step2Image from "../../src/images/stepSecond.svg";
import Step3Image from "../../src/images/stepThird.svg";
import Step4Image from "../../src/images/stepFourth.svg";
import Step5Image from "../../src/images/stepFifth.svg";
const steps = [
  {
    id: 1,
    title: "Choose the chain to deploy",
    options: ["Binance", "Etherium", "Casper", "Solana", "Cronos"],
    photoPosition: "after",
    inputType: "radio",
    imageSrc: Step1Image,
  },
  {
    id: 2,
    title: "Choose smart contract standard",
    options: ["ERC721", "ERC1155"],
    inputType: "radio",
    photoPosition: "after",
    imageSrc: Step2Image,
  },
  {
    id: 3,
    title: "Insert smart contract name",
    photoPosition: "after",
    inputType: "text",
    inputPlaceholder: "Smart Contract Standart",
    imageSrc: Step3Image,
  },
  {
    id: 4,
    title: "Insert the abbreviation",
    photoPosition: "before",
    inputType: "text",
    inputPlaceholder: "Symbol",
    imageSrc: Step4Image,
  },
  {
    id: 5,
    title: "Has your collection already been uploaded?",
    options: ["Yes", "No"],
    photoPosition: "after",
    inputType: "radio",
    imageSrc: Step5Image,
  },
];

export default steps;
