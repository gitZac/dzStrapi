export default async function getMenuData(menuId){
    try{
        const menu = await fetch(`http://localhost:1337/api/menus/${menuId}?populate=*`, {
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