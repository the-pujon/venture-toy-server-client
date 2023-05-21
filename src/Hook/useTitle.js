import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Venture Toy Verse`;
  }, []);
};

export default useTitle;
