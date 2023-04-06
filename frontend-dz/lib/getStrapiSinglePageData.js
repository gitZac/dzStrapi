export default async function getSinglePageData(slug){
    const config  = useRuntimeConfig();
    try{
        const page = await fetch(`${config.public.STRAPI_API_BASE}/api/pages?filters\[slug\][$eq]=${slug}&populate=deep,10`, {
            headers: {
                Accept: 'application/json'
            }
        })
        .then((res) => res.json())
        .then((data) => data)
        return{
            page: page.data[0].attributes,
        }
    }
    catch(error){
        console.log(error);
    }
}