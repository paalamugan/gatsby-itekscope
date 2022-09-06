/* eslint-disable */
/**
 * Trust All Scripts
 *
 * This is a dirty little script for iterating over script tags
 * and adding them to the document head.
 *
 * This works for any script that then injects content into the page
 * via ids/classnames etc.
 *
 * TODO: use our browser eslint for this code
 */
export const trustAllScripts = function () {
  setTimeout(() => {
    var scriptNodes = document.querySelectorAll<HTMLScriptElement>(".external-scripts script");
    for (var i = 0; i < scriptNodes.length; i += 1) {
      var node = scriptNodes[i];
      // @TODO: do the same for inline scripts?
      const src = node.attributes.getNamedItem("src");
      if (src) {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = src.value;
        s.async = true;
        document.getElementsByTagName("head")[0].appendChild(s);
      }
    }
  }, 1000);
};

export default {
  trustAllScripts,
};
