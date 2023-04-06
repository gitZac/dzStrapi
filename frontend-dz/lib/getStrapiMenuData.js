export default async function getMenuData(menuId){
    const config  = useRuntimeConfig();

    try{
        const menu = await fetch(`${config.public.STRAPI_API_BASE}/api/menus/${menuId}?populate=*`, {
            headers: {
                Accept: 'application/json'
            }
        })
        .then((res) => res.json())
        .then((data) => data)
        return{
            menu: menu.data.attributes,
        }
    }
    catch(error){
        console.log(error);
    }
}