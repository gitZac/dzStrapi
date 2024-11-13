export const useStrapiData = () => {
  const config = useRuntimeConfig();

  const getSinglePage = async (slug, collection) => {
    const filters = `?filters\[slug\][$eq]=${slug}&populate=deep,10`;
    const url = `${config.public.STRAPI_API_BASE}/${collection}` + filters;

    try {
      const response = await fetch(url, {
        headers: {
          Accept: "application/json",
        },
      });

      const data = await response.json();
      const { attributes } = data.data[0];
      const { components } = attributes;

      return {
        components: components,
        attributes: attributes,
      };
    } catch (err) {
      console.log(err);
    }
  };

  const getMenu = async (menuId) => {
    const url = `${config.public.STRAPI_API_BASE}/menus/${menuId}?populate=*`;

    try {
      const response = await fetch(url, {
        headers: {
          Accept: "application/json",
        },
      });

      const { data } = await response.json();
      const { attributes: menu } = data;

      return {
        menu: menu,
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
    return token;
  };

  const postFormData = async (collection, formData) => {
    const url = `${config.public.STRAPI_API_BASE}/${collection}`;

    try {
      const recaptcaToken = await _getRecaptchaToken(
        config.public.GRECAPTCHA_SITE_KEY
      );

      const res = await fetch("/api/recaptcha", {
        method: "POST",
        body: JSON.stringify({
          token: recaptcaToken,
        }),
      });

      const { score } = await res.json();

      if (score > 0.5) {
        await fetch(url, {
          method: "POST",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ data: formData }),
        });

        return {
          msg: "Form submission successful",
          status: "OK",
        };
      }
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
