import { useRef } from "react";

export function useForm () {
  const formRef = useRef<any>();
  const getFormData = () => Object.fromEntries(new FormData(formRef.current)) as { [key: string]: string };
  return { formRef, getFormData };
}
