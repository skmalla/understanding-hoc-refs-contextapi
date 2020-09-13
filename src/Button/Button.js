import React, { useRef, useEffect, useContext } from "react";
import AuthContext from "../authContext/authContext";
import Aux from "../hoc/Aux";

const Button = (props) => {
  const clickButtonRef = useRef(null);

  const authContext = useContext(AuthContext);

  useEffect(() => {
    clickButtonRef.current.click();
  }, []);

  return (
    <Aux>
      <button onClick={props.click} ref={clickButtonRef}>
        Click Here!
      </button>
      <br />
      <br />
      <button onClick={authContext.login}>Login</button>
    </Aux>
  );
};

export default Button;
