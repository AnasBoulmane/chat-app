import { useToggle } from "./useToggle";

type OnMouseHoverState = boolean;
type OnMouseHoverToggle = (newValue?: boolean) => void;
type OnMouseHoverHandlerHOF = (newValue?: boolean) => (event: any) => any;
type OnMouseHoverHook = [OnMouseHoverState, OnMouseHoverHandlerHOF, OnMouseHoverToggle];

export function useOnMouseHover (initialValue?: boolean): OnMouseHoverHook {
  const [isHover, toggleHover] = useToggle(initialValue);
  // handlers
  const onToggleHandler: OnMouseHoverHandlerHOF = (value?: boolean) => () => toggleHover(value);
  // result
  return [isHover, onToggleHandler, toggleHover];
}
