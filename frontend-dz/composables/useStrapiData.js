import { ofetch } from "ofetch";
export const useStrapiData = () => {
  const config = useRuntimeConfig();

  const getSinglePage = async (slug, collection) => {
    const filters = `?filters\[slug\][$eq]=${slug}&populate=deep,10`;
    const url = `${config.public.STRAPI_API_BASE}/${collection}` + filters;
    try {
      const data = await ofetch(url, {
        headers: {
          Accept: "application/json",
        },
      });

      return {
        components: data.data[0].attributes.components,
        page: data.data[0].attributes,
      };
    } catch (err) {
      console.log(err);
    }
  };

  const getMenu = async (menuId) => {
    const url = `${config.public.STRAPI_API_BASE}/menus/${menuId}?populate=*`;

    try {
      const menuData = await ofetch(url, {
        headers: {
          Accept: "application/json",
        },
      });

      return {
        menu: menuData.data.attributes,
      };
    } catch (err) {
      console.log(err);
    }
  };

  return {
    getSinglePage,
    getMenu,
  };
};
