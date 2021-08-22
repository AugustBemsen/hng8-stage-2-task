import { useState } from "react";
import GlobalStyle from "./assets/GlobalStyles";
import Body from "./components/Body/Body";
import Loader from "./components/Loader/Loader";

function App() {
  const myName = "Daniel";
  console.log(myName);
  const [isLoading, setIsLoading] = useState(true);

  useState(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      <GlobalStyle />
      {isLoading ? <Loader /> : <Body />}
    </>
  );
}

export default App;
