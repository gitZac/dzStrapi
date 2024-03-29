export function replaceRelativeImgSrcs(str, base) {
  const regex = /src="\//g;
  const regexSrcset = /srcset\s*=\s*"(.+?)"/g;

  let replacedStr = str.replace(regex, 'src="' + base + "/");
  //Iterate over our replaced string and remove the srcset attribute.

  let replacedStrNoSrcset = replacedStr.replace(regexSrcset, "");

  return replacedStrNoSrcset;
}

export function getFormattedComponentName(cmpStr) {
  const capRegex = /(\b[a-z](?!\s))/g;

  //Remove global
  let formattedStr = cmpStr.replace("global.", "");

  //Capitalize before and after dash
  formattedStr = formattedStr.replace(capRegex, (str) => {
    return str.toUpperCase();
  });

  // Remove dash
  formattedStr = formattedStr.replace("-", "");

  return formattedStr;
}
