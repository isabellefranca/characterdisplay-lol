import { useState } from "react";
import "./App.css";
import Personagem from "./Personagem";

export default function App() {
  const [selectedCharacter, setSelectedCharacter] = useState({
    id: "vi",
    name: "Vi",
    image: './src/images/Vi_12.jpg',
    description:
      "Antiga criminosa das ruas violentas de Zaun, Vi é uma mulher temível, impulsiva e explosiva que tem muito pouco respeito por autoridades.",
  });

  const handleCharacterSelect = (id) => {
    const selected = personagens.find((personagem) => personagem.id === id);
    setSelectedCharacter(selected);

    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const personagens = [
    {
      id: "vi",
      name: "Vi",
      image: './src/images/Vi_12.jpg',
      description:
        "Antiga criminosa das ruas violentas de Zaun, Vi é uma mulher temível, impulsiva e explosiva que tem muito pouco respeito por autoridades.",
    },
    {
      id: "caitlyn",
      name: "Caitlyn",
      image: './src/images/Caitlyn_30.jpg',
      description:
        "Conhecida como sua melhor pacificadora, Caitlyn também é a melhor escolha de Piltover para livrar a cidade de seus elementos criminosos elusivos.",
    },
    {
      id: "diana",
      name: "Diana",
      image: './src/images/Diana_47.jpg',
      description:
        "Empunhando sua espada lunar crescente, Diana luta como uma guerreira dos lunai, um credo quase extinto nas terras ao redor do Monte Targon",
    },
    {
      id: "leona",
      name: "Leona",
      image: './src/images/Leona_50.jpg',
      description:
        "Impregnada pelas chamas do sol, Leona é uma guerreira sagrada de Solari que defende o Monte Targon com sua Lâmina Zênite e a Proteção da Aurora.",
    },
    {
      id: "neeko",
      name: "Neeko",
      image: './src/images/Neeko_0.jpg',
      description:
        "Nativa de uma tribo vastaya há muito esquecida, Neeko consegue se misturar em qualquer multidão, assumindo a aparência dos outros e até mesmo absorvendo parte de seu estado emocional para identificar de imediato quem é amigo ou inimigo.",
    },
  ];

  return (
    <>
      <div className="app-container bg-gray-800 min-h-screen">
        <header className="bg-gray-900 p-4 text-center">
          <img className="logo mx-auto w-36" src="./src/images/logo.png" alt="logo-lol" />
        </header>

        <main className="selecao-de-personagem flex flex-col md-flex-row justify-around p-4 items-center">
          <section className="personagem-selecionado w-full md:w-1/2 mt-8 md:mt-4">
            <img className="personagem-grande w-full rounded mb-4" src={selectedCharacter.image} alt="" />

            <div className="informacoes bg-gray-700 p-4 shadow rounded">
              <h2 className="nome-personagem folt-bold mb-2 text-gray-100" id="nome-personagem">{selectedCharacter.name}</h2>
              <p className="descricao-personagem text-gray-100">{selectedCharacter.description}</p>
            </div>
          </section>

          <section className="personagens w-full md:w-1/3">
            <h1 className="titulo text-xl font-bold mt-4 mb-4 text-gray-100 text-center">Selecione um personagem</h1>
            <ul className="lista-de-personagens grid grid-cols-3 gap-4">
              {personagens.map((personagem) => (
                <Personagem
                  key={personagem.id}
                  id={personagem.id}
                  name={personagem.name}
                  image={personagem.image}
                  description={personagem.description}
                  onSelect={handleCharacterSelect}
                />
              ))}
            </ul>
          </section>
        </main>
      </div>
    </>
  );
}