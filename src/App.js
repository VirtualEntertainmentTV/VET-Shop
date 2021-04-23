import Header from "./Header";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect } from "react";
import { Data } from "./Data";
import { useState } from "react";
import Card from "./Card";

function App() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    alanBtn({
      key:
        "db2727cc3f74cf36c8723828d42d44832e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command }) => {
        if (command === "firstCommand") {
          alert("firstcommand");
        }
        if (command === "shoe") {
          filter("shoe");
        }
        if (command === "shirt") {
          filter("shirt");
        }
        if (command === "skirt") {
          filter("skirt");
        }
        if (command === "pant") {
          filter("pant");
        }
        if (command === "sandal") {
          filter("sandal");
        }
        if (command === "short") {
          filter("short");
        }
      },
    });
    filter("");
  }, []);

  const filter = (names) => {   

    const filtered = Data.filter((item) => item.name.includes(names));

    console.log(filtered);
    setCategory(filtered);
  };

  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {category.map((item) => (
          <Card
            image={item.image}
            name={item.name}
            rating={item.rating}
            actualPrice={item.actualPrice}
            offerPrice={item.offerPrice}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
