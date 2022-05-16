import { useEffect } from "react";

export const useCheckIfClickedOutside = (state, ref, stateHandler) => {
  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (state && ref.current && !ref.current.contains(e.target)) {
        stateHandler(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [state, ref, stateHandler]);
};
