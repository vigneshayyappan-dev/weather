const covid = async function(){
    const response = fetch("579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b")
    let data = response.json()
    console.log(data)
}
covid()
// .then((data)=>{
//     console.log(data)
// }).catch((e)=>{
//     console.log(e.message)
// })
