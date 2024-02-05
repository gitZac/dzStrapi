import { ofetch } from "ofetch";

export const getSinglePage = async (slug, collection) => {
  const config = useRuntimeConfig();

  const filters = `?filters\[slug\][$eq]=${slug}&populate=deep,10`;
  const url = `http://127.0.0.1:1337/api/${collection}` + filters;
  console.log(config);
  console.log(url);

  try {
    const data = await ofetch(url, {
      headers: {
        Accept: "application/json",
      },
    });

    return data;
  } catch (err) {
    console.log(err);
  }

  // const { data } = await useAsyncData("pageData", () =>
  //   $fetch(url, {
  //     headers: {
  //       Accept: "application/json",
  //     },
  //   })
  // );

  // let filters = `?filters\[slug\][$eq]=${slug}&populate=deep,10`;
  // try {
  //   const url = `${config.public.STRAPI_API_BASE}/${collection}` + filters;x
  //     headers: {
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => data);

  //   return {
  //     data: request.data[0].attributes,
  //   };
  // } catch (error) {
  //   console.log(error);
  // }
};
