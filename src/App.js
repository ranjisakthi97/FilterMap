import "./styles.css";
import { useState } from "react";

export default function App() {
  const arrColor = ["red", "blue", "orange", "green"];
  const [Colors, setColors] = useState(["red", "blue", "orange", "green"]);
  const [index, setIndex] = useState(0);
  const [addColor, setAddColor] = useState("");
  console.log(Colors);
  var arrLength = arrColor.length - 1;
  return (
    <div>
      <button
        type="button"
        onClick={() => setIndex(index === arrLength ? 0 : index + 1)}
      >
        Click on change color
      </button>
      <div
        style={{
          backgroundColor: arrColor[index],
          height: "50px",
          width: "150px",
          "margin-top": "10px"
        }}
      ></div>
      <input onChange={(event) => setAddColor(event.target.value)} />
      {addColor}
      <button onClick={() => setColors([...Colors, addColor])}>
        click here to add
      </button>
      {Colors.map((cl, ind) => (
        <div style={{ display: "flex" }}>
          <div
            style={{
              backgroundColor: cl,
              height: "30px",
              width: "100px",
              "margin-top": "10px"
            }}
          >
            {cl}
          </div>
          <button
            style={{ height: "30px", width: "100px", "margin-top": "10px" }}
            onClick={() =>
              setColors(Colors.filter((el, delIndex) => delIndex !== ind))
            }
          >
            Click to delete
          </button>
        </div>
      ))}
    </div>
  );
}
