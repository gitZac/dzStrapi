const config = useRuntimeConfig();

export function replaceRelativeImgSrcs(str) {
  const regex = /src="\//g;
  const regexSrcset = /srcset\s*=\s*"(.+?)"/g;

  //Find the img src and replace it with an absolute url.

  let replacedStr = str.replace(
    regex,
    'src="' + config.public.STRAPI_URL_BASE + "/"
  );

  //Iterate over our replaced string and remove the srcset attribute.

  let replacedStrNoSrcset = replacedStr.replace(regexSrcset, "");

  return replacedStrNoSrcset;
}
