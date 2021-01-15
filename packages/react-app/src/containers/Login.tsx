import React, { useContext } from "react";
import { isPhoneNumber } from "@shared/helpers";
import { RootContext } from "contexts/RootContext";
import { InputGroup } from "stories/InputGroup";
import { LoginRow } from "stories/Modal.style";
import { Button } from "stories/Button";
import { Modal } from "stories/Modal";
import { useForm } from "hooks/useForm";

// TODO: remove mock data
import { conversations } from "stories/mock/Sidebar";

export const Login = () => {
  const { setUser, setConversations } = useContext(RootContext);
  const { formRef, getFormData } = useForm();

  const onLogin = () => {
    const { phone, password } = getFormData();
    if (!isPhoneNumber(phone) || password.length <= 7) return;
    console.log({ phone, password });
    setUser({ phone });
    setConversations(conversations);
  };

  return (
    <Modal>
      <form ref={formRef}>
        <div className="_2fuxX">
          WhatsApp clone est ouvert sur un autre ordinateur ou navigateur. Cliquez sur "Utiliser ici" pour utiliser
          WhatsApp dans cette fenêtre.
        </div>

        <LoginRow>
          <InputGroup name="phone" label="Phone" placeholder="+1 833 275-1737" />
          <InputGroup name="password" label="Password" type="password" placeholder="password" />
        </LoginRow>

        <div className="_2SGGH">
          <Button text="Create Account" onClick={onLogin} />
          <Button text="Login" primary={true} onClick={onLogin} />
        </div>
      </form>
    </Modal>
  );
};
