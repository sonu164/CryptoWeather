import Navbar from "../Component/Navbar";
import { useState } from "react";

function App() {
  const MyNavbar = ["Weather", "Cryptocurrency", "News"];
  const [preNav, setNav] = useState(MyNavbar[0]);

  return (
    <>
      <>
        <Navbar preNav={preNav} setNav={setNav} MyNavbar={MyNavbar}></Navbar>
      </>
    </>
  );
}
export default App;
