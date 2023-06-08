import Step1Image from "../../src/images/stepFirst.svg";
import Step2Image from "../../src/images/stepSecond.svg";
import Step3Image from "../../src/images/stepThird.svg";
import Step8Image from "../../src/images/stepSeventh.svg";
import Step9Image from "../../src/images/stepPayment.svg";
// import Step10Image from "../../src/images/stepTen.svg";
const stepsVariantNative = [
    {
      id: 10,
      title: "Transaction royalty",
      options: ["Without royalty", "Royalty enabled"],
      photoPosition: "before",
      inputType: "radio",
      // imageSrc: Step10Image,
    },
    {
      id: 11,
      title: "Token Price",
      inputType: "file",
      inputPlaceholderNumber: "Value",
      inputPlaceholder: "Type",
      inputCheck: "Text"
    },
    {
      id: 12,
      title: "Are NFT-s 100% pre-minted?",
      options: ["Yes,push it on the market", "No,add custom features"],
      photoPosition: "after",
      inputType: "radio",
      inputPlaceholder: "Smart Contract Standart",
      imageSrc: Step9Image,
    },
]
export default stepsVariantNative