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

  const _getRecaptchaToken = async (siteKey) => {
    let token = "recaptcha-library-not-found";

    if (window.hasOwnProperty("grecaptcha")) {
      try {
        token = await window.grecaptcha.execute(siteKey, {
          action: "submit",
        });
      } catch (e) {
        console.error(e);
        token = "recaptcha-client-side-error";
      }
    }
    console.log(token);
    return token;
  };

  const postFormData = async (collection, formData) => {
    const url = `${config.public.STRAPI_API_BASE}/${collection}`;
    try {
      const recaptcaToken = await _getRecaptchaToken(
        config.public.GRECAPTCHA_SITE_KEY
      );

      await ofetch(url, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: formData }),
      });
    } catch (err) {
      console.error(err);
    }
  };

  return {
    getSinglePage,
    getMenu,
    postFormData,
  };
};
