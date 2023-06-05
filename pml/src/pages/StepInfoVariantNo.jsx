import Step1Image from "../../src/images/stepFirst.svg";
import Step2Image from "../../src/images/stepSecond.svg";
import Step3Image from "../../src/images/stepThird.svg";
import Step8Image from "../../src/images/stepSeventh.svg";
import Step9Image from "../../src/images/stepPayment.svg";
const stepsVariantNo = [
    {
      id: 6,
      title: "NFT name and quantity",
      inputType: "file",
      inputPlaceholderNumber: "Quantity",
      inputPlaceholder: "Name",
      inputCheck: "Photo"
    },
    {
      id: 7,
      title: "Insert Type and Value",
      inputType: "file",
      inputPlaceholderNumber: "Value",
      inputPlaceholder: "Type",
      inputCheck: "Text"
    },
    {
      id: 8,
      title: "Are NFT-s 100% pre-minted?",
      options: ["Yes,push it on the market", "No,add custom features"],
      photoPosition: "after",
      inputType: "radio",
      inputPlaceholder: "Smart Contract Standart",
      imageSrc: Step8Image,
    },
    {
      id: 9,
      title: "Insert smart contract name",
      photoPosition: "before",
      inputType: "text",
      inputPlaceholder: "Symbol",
      imageSrc: Step9Image,
    } 
]
export default stepsVariantNo