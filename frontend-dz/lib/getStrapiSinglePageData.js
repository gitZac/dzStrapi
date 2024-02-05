import { ofetch } from "ofetch";

export const getSinglePage = async (slug, collection) => {
  const config = useRuntimeConfig();

  const filters = `?filters\[slug\][$eq]=${slug}&populate=deep,10`;
  const url = `http://127.0.0.1:1337/api/${collection}` + filters;

  console.log(config);

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
};
