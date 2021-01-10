import React, { useState, useContext } from "react";
import { isPhoneNumber } from "@shared/helpers";
import { RootContext } from "contexts/RootContext";
import { InputGroup } from "stories/InputGroup";
import { LoginRow } from "stories/Modal.style";
import { Button } from "stories/Button";
import { Modal } from "stories/Modal";

// TODO: remove mock data
import { conversations } from "stories/mock/Sidebar";

export const Login = () => {
  const { setUser, setConversations } = useContext(RootContext);
  const [phone, setPhone] = useState("+212 690 344426");
  const [password, setPassword] = useState("313156465489");

  const onChangeHoF = (setter: (val: string) => void) => (event: any) => setter(event.target.value);

  const onLogin = () => {
    if (!isPhoneNumber(phone) || password.length <= 7) return;
    console.log({ phone, password });
    setUser({ phone });
    setConversations(conversations);
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
