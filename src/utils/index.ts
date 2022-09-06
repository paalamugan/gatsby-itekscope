import { Argument } from "../types";

export const debounce = <
  TCallback extends (...args: never[]) => void,
  TArgument extends Argument<TCallback>
>(
  cb: TCallback,
  delay = 250
) => {
  let timeout: NodeJS.Timeout;

  return (...args: TArgument) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

export const throttle = <
  TCallback extends (...args: never[]) => void,
  TArgument extends Argument<TCallback>
>(
  cb: TCallback,
  delay = 1000
) => {
  let shouldWait = false;
  let waitingArgs: Array<never> | null;

  const timeoutFunc = () => {
    if (waitingArgs == null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args: TArgument) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    cb(...args);
    shouldWait = true;
    setTimeout(timeoutFunc, delay);
  };
};
