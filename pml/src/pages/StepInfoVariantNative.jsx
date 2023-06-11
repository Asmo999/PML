import Step1Image from "../../src/images/stepFirst.svg";
import Step2Image from "../../src/images/stepSecond.svg";
import Step3Image from "../../src/images/stepThird.svg";
import Step8Image from "../../src/images/stepSeventh.svg";
import Step9Image from "../../src/images/stepNineth.svg";
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
      title: "Transaction Royalty amount",
      photoPosition: "after",
      inputType: "Number",
      inputPlaceholder: "%",
      imageSrc: Step3Image,
    },
    {
      id: 12,
      title: "Token Price",
      inputType: "tokenPTV",
      inputPlaceholderNumber: "Price",
      inputPlaceholder: "Type",
      inputCheck: "Text"
    },
    {
      id: 13,
      title: "Confirmation to list the product",
      photoPosition: "after",
      inputPlaceholder: "Symbol",
      imageSrc: Step9Image,
      confirm: "True"
    } 
]
export default stepsVariantNative