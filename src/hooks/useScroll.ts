import useEventListener from "./useEventListener";
import { debounce } from "../utils";

export default function useScroll(cb: (event: Event) => void, delay?: number) {
  useEventListener("scroll", debounce(cb, delay));
}
