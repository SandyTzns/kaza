import "./Test.css";
//import leaf from "./assets/leaf.png";

export default function Test() {
  function handleClick() {
    alert("You clicked me!");
  }

  return (<button onClick={handleClick}>Click me</button>);
}
