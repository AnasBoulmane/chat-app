import React, { useState, useContext } from "react";
import { InputGroup } from "stories/InputGroup";
import { Button } from "stories/Button";
import { isPhoneNumber } from "helpers/isPhoneNumber";
import { Modal } from "stories/Modal";
import { LoginRow } from "stories/Modal.style";
import { RootContext } from "contexts/RootContext";

export const Login = () => {
  const { setUser } = useContext(RootContext);
  const [phone, setPhone] = useState("+212 690 344426");
  const [password, setPassword] = useState("313156465489");

  const onChangeHoF = (setter: (val: string) => void) => (event: any) => setter(event.target.value);

  const onLogin = () => {
    if (!isPhoneNumber(phone) || password.length <= 7) return;
    console.log({ phone, password });
    setUser(phone);
  };

  return (
    <Modal>
      <div className="_2fuxX">
        WhatsApp clone est ouvert sur un autre ordinateur ou navigateur. Cliquez sur "Utiliser ici" pour utiliser
        WhatsApp dans cette fenêtre.
      </div>

      <LoginRow>
        <InputGroup label="Phone" placeholder="+1 833 275-1737" onBlur={onChangeHoF(setPhone)} />
        <InputGroup label="Password" type="password" placeholder="password" onBlur={onChangeHoF(setPassword)} />
      </LoginRow>

      <div className="_2SGGH">
        <Button text="Create Account" onClick={onLogin} />
        <Button text="Login" primary={true} onClick={onLogin} />
      </div>
    </Modal>
  );
};
