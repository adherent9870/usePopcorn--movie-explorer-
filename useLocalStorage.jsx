import { useState, useEffect } from "react";
export default function useLocalStorage(initialstate, key) {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : initialstate;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );
  return [value, setValue];
}
