import Step1Image from "../images/stepFirst.svg";
import Step2Image from "../images/stepSecond.svg";
import Step3Image from "../images/stepThird.svg";
import Step4Image from "../images/stepFourth.svg";
import Step5Image from "../images/stepFifth.svg";
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
    title: "Enter your email address",
    photoPosition: "after",
    inputType: "text",
    inputPlaceholder: "Smart Contract Standart",
    imageSrc: Step3Image,
  },
  {
    id: 4,
    title: "Insert smart contract name",
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
    inputPlaceholder: "Symbol",
    imageSrc: Step5Image,
  },
];

export default steps;
