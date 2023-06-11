import Step1Image from "../../src/images/stepFirst.svg";
import Step2Image from "../../src/images/stepSecond.svg";
import Step3Image from "../../src/images/stepThird.svg";
import Step8Image from "../../src/images/stepSeventh.svg";
import Step9Image from "../../src/images/stepNineth.svg";
// import Step10Image from "../../src/images/stepTen.svg";
import step10Custom from "../../src/images/stepTenthCustom.svg";
import Step12Image from "../../src/images/stepTwelfth.svg";
import Step11Image from "../../src/images/stepEleventh.svg";


const stepsVariantCustom = [
    {
      id: 10,
      title: "Insert valid token address",
      photoPosition: "before",
      inputPlaceholder: "Token address",
      inputType: "text",
      imageSrc: step10Custom,
    },
    {
      id: 11,
      title: "Transaction royalty",
      options: ["Without royalty", "Royalty enabled"],
      photoPosition: "before",
      inputType: "radio",
      imageSrc: Step11Image,
    },
    {
      id: 12,
      title: "Transaction Royalty amount",
      photoPosition: "after",
      inputType: "Number",
      inputPlaceholder: "%",
      imageSrc: Step12Image,
    },
    {
      id: 13,
      title: "Token Price",
      inputType: "tokenPTV",
      inputPlaceholderNumber: "Price",
      inputPlaceholder: "Type",
      inputCheck: "Text"
    },
    {
      id: 14,
      title: "Confirmation to list the product",
      photoPosition: "after",
      inputPlaceholder: "Symbol",
      imageSrc: Step9Image,
      confirm: "True"
    } 
]
export default stepsVariantCustom