export default async function getGithubUserData(){
    try{
        const url = 'https://api.github.com/users/gitzac';
        const request = await fetch( url , {
            headers: {
                Accept: 'application/json',
            }
        })
        .then((res) => res.json())
        .then((data) => data);
        return{
            data: request,
        }
    }
    catch(error){
        console.log(error);
    }
}