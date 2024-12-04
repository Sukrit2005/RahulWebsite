import { useEffect } from "react";

const DocTitle = (title) => {
  return useEffect(() => {
    document.title = title;
  }, [title]);
};

export default DocTitle;
