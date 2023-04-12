import axios from "axios";
import { useEffect, useState } from "react";
import { CardProps } from "./model";
import Card from "./components/Card";

function App() {
  const [value, setValue] = useState<CardProps[]>([]);

  async function getData() {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setValue(response.data);
    } catch {
      console.log("error");
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-wrap justify-around bg-emerald-600">
      {value.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
}

export default App;
