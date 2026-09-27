import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import PromptHero from "./components/PromptHero/PromptHero";
import PromptInput from "./components/PromptInput/PromptInput";
import StarterCards from "./components/Startercards/Startercards";

import "./App.css";

export default function App() {
  const[Activetab , setActiveTab] = useState("home");
  const[inputValue, setinputValue] = useState("");

const Handelcardclick = (PromptText)=> {
  setinputValue(PromptText);

};

return (
  <div className="app-container">
    <Sidebar activeTab={Activetab}
    setActiveTab={setActiveTab} />
    <div className="main-content">
      <Header/>

      <main className="main-workspace" >
        <PromptHero userName="Ashutosh" />
        <PromptInput value={inputValue}
        onChange={setinputValue} />
        <StarterCards onSelectExample={Handelcardclick} />
      </main>
    </div>
  </div>
)
};