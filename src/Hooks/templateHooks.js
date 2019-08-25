import { useEffect, useState } from "react";
import temp from "../utils/template.json";

function addCustomCss(url) {
  const link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("type", "text/css");
  link.setAttribute("href", url);
  document.getElementsByTagName("head")[0].appendChild(link);
}

export function useCss(css) {
  useEffect(() => {
    addCustomCss(css);
  }, []);
}

const LoadJsons = async () => {
  return temp;
};

export function useTemplate() {
  const [template, setTemplate] = useState(null);

  useEffect(() => {
    LoadJsons().then(res => {
      setTemplate(res);
    });
  }, [template]);
  return template;
}
