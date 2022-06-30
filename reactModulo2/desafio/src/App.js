import "./App.css"

import { CurrentDate } from "./components/CurrentData/CurrentDate";
import { HellowWord } from "./components/HellowWord/HellowWord";

export function App() {

  return (

    <div className="container" >

      <div className="container-text">
        <HellowWord text="hellow word: " fontWeight="bold"></HellowWord>
        <CurrentDate />
      </div>

      <div className="container-text">
        <HellowWord text="hellow word: " fontStyle="italic"></HellowWord>
        <CurrentDate />
      </div>

      <div className="container-text">
        <HellowWord text="hellow word: " textDecoration="line-through"></HellowWord>
        <CurrentDate />
      </div>

      <div className="container-text">
        <HellowWord text="hellow word: " textDecoration="underline"></HellowWord>
        <CurrentDate />
      </div>

      <div className="container-text">
        <HellowWord text="hellow word: " textDecoration="overline"></HellowWord>
        <CurrentDate />
      </div>

      <div className="container-text">
        <HellowWord text="hellow word: " fontVariant="small-caps"></HellowWord>
        <CurrentDate /></div>


      <div className="container-text">
        <HellowWord text="hellow word: " textTransform="uppercase"></HellowWord>
        <CurrentDate /></div>


      <div className="container-text">
        <HellowWord text="hellow word: " textTransform="lowercase"></HellowWord>
        <CurrentDate /></div>

      <div className="container-text">
        <HellowWord text="hellow word: " letterSpacing="2rem"></HellowWord>
        <CurrentDate /></div>

      <div className="container-text">
        <HellowWord text="hellow word: " textDecoration="underline" fontWeight="bold" textTransform="lowercase" letterSpacing=".9rem"></HellowWord>
        <CurrentDate /></div>

    </div>
  );

}

