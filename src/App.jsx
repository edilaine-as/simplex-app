import { Heading } from "./components/Heading";
import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";
import { Select } from "./components/Select";
import { Button } from "./components/Button";

//Imagens
import Math from "./images/math.svg";

//Estilos
import "./styles/global.css";

import { useEffect, useState } from "react";

function App() {
  //objetivo
  const [obj, setObj] = useState("");
  //fo
  const [FO, setFO] = useState("");
  //número de restrições
  const [numRes, setNumRes] = useState("");

  const [restricoes, setRestricoes] = useState(false);
  const [handleComponent, setHandleComponent] = useState([]);

  const addRes = (e) => {
    if (e.key === "Tab") {
      setRestricoes(true);

      for (let x = 0; x < Number(numRes); x++) {

        handleComponent.push(<HandleComponentRes key={x} id={x} />);
      }
    }
  };

  const HandleComponentRes = (e) => {

      return (
        <div className="mt-3">
          <Text className="font-semibold mb-1">
            Restrição {e.id + 1}
          </Text>
          <TextInput.Root>
            <TextInput.Input
              id="res"
              onChange={(e) => handleChangeRes(e, index)}
            />
          </TextInput.Root>
        </div>
      );

  };

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <img src={Math} />
        <Heading size="lg" className="mt-4">
          Simplex App
        </Heading>
        <Text size="lg">Maximize lucros ou minimize gastos!</Text>
      </header>

      <form className="flex flex-col w-full max-w-sm mt-10">

        <Text className="font-semibold mb-1">Objetivo</Text>
        <Select onChange={(e) => setObj(e.target.value)} />

        <Text className="font-semibold mt-3 mb-1">Função Objetiva (FO)</Text>
        <TextInput.Root>
          <TextInput.Input onChange={(e) => setFO(e.target.value)} />
        </TextInput.Root>

        <Text className="font-semibold mt-3 mb-1">Número restrições</Text>
        <TextInput.Root>
          <TextInput.Input
            onChange={(e) => setNumRes(e.target.value)}
            onKeyDown={addRes}
          />
        </TextInput.Root>

        <div id="restricoes">{handleComponent}</div>

        <Button className="mt-6">Calcular</Button>
      </form>
    </div>
  );
}

export default App;
