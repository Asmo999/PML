
  import Step2Image from "../../src/images/stepSecond.svg";
  import Step3Image from "../../src/images/stepThird.svg";
  import Step4Image from "../../src/images/stepFourth.svg";
  import Step6Image from "../../src/images/stepSixth.svg";
  import Step7Image from "../../src/images/stepSeventh.svg";
  import Step9Image from "../../src/images/stepNineth.svg";
  const stepsVariantYes = [
      {
        id: 6,
        title: "Insert the hash",
        photoPosition: "after",
        inputType: "text",
        inputPlaceholder : "The hash code",
        imageSrc: Step6Image,
        confirm: "False"
      },  
      {
        id: 7,
        title: "Are NFT-s 100% pre-minted?",
        options: ["Yes,push it on market", "No,add custom features"],
        inputType: "radio",
        photoPosition: "after",
        imageSrc: Step7Image,
        confirm: "False"
      },
      {
        id: 8,
        title: "Choose the martket to push",
        inputType: "radio",
        options: ["Market Name", "Market Name","Market Name","Market Name","Market Name","Market Name"],
        confirm: "False"
      },
      {
        id: 9,
        title: "Confirmation to list the product",
        photoPosition: "after",
        inputPlaceholder: "Symbol",
        imageSrc: Step9Image,
        confirm: "True"
      } 
  ]
  export default stepsVariantYes