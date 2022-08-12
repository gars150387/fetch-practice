import { useEffect, useState } from "react";
import { Format } from "./format"; //format file to render data fetched
import "./styles.css";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "427d7c672bmsh62cfbde15ce95cbp1d69d2jsn6dfa1b691600",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
  }
};

export default function App() {
  const [city, setCity] = useState("miami");
  const [inputValue, setInputValue] = useState("");

  const baseUrl = `https://weatherapi-com.p.rapidapi.com/search.json?q=${city}`;

  useEffect(() => {
    //useEffect to fetch the API once the city is changed
    fetch(baseUrl, options)
      .then((response) => response.json())
      .then((response) => (setInputValue(response), console.log(response)))
      .catch((err) => console.error(err));
  }, [city]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // const result = inputValue.map( (item)  => {
  //   return (
  //     <Format item={ item } />
  //   )
  // })

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input type="text" onChange={(event) => setCity(event.target.value)} />
      {console.log(city)}
      <button onClick={handleSubmit}>Search</button>
      <div>
        <div>{console.log(inputValue)}</div>
      </div>
    </div>
  );
}
