export default defineEventHandler(async (event) => {
  const payload = await readBody(event);
  const responseToken = payload.token;
  const secret = process.env.GRECAPTCHA_SITE_VERIFY;

  const siteVerifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${responseToken}`;

  try {
    const request = await $fetch(siteVerifyUrl, {
      method: "POST",
    });

    return request;
  } catch (err) {
    console.error(err);
    return err;
  }
});
