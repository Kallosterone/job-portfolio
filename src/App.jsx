import Background from "./background/Background.jsx";
import Header from "./header/Header.jsx";
import Body from "./body/Body.jsx";

function App() {
  return(
    <>
      <Background image={`url("../././background2.jpg")`}></Background>
      <Header></Header>
      <Body></Body>
    </>
  );
}

export default App
