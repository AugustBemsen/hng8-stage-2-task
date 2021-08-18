import GlobalStyle from "./assets/GlobalStyles";
import Body from "./components/Body/Body";

function App() {
  const myName = "Daniel";
  console.log(myName);
  return (
    <>
      <GlobalStyle />
      <Body />
    </>
  );
}

export default App;
