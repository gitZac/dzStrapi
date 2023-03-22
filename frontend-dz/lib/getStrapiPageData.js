export default async function getPageData(){
    try{
        const pages = await fetch('http://localhost:1337/api/pages?populate=*', {
            headers: {
                Accept: 'application/json'
            }
        })
        .then((res) => res.json())
        .then((data) => data)
        return{
            pages: pages.data,
        }
    }
    catch(error){
        console.log(error);
    }
}