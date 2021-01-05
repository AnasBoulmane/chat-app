import React, { useContext } from "react";
import { RootContext } from "contexts/RootContext";
import { Login } from "containers/Login";
import { All } from "containers/All";

function App () {
  const { user } = useContext(RootContext);
  return (
    <>
      {!user && <Login />}
      {user && <All />}
    </>
  );
}

export default App;
