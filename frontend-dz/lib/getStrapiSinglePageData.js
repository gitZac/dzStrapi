export default async function getSinglePageData(slug, collection) {
  const config = useRuntimeConfig();
  let filters = `?filters\[slug\][$eq]=${slug}&populate=deep,10`;

  try {
    const url = `${config.public.STRAPI_API_BASE}/${collection}` + filters;
    const request = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data);
    return {
      data: request.data[0].attributes,
    };
  } catch (error) {
    console.log(error);
  }
}
