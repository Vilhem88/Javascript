let email = document.getElementById('email')
let btnValidate = document.getElementById('btnValidate')
let domain = document.getElementById('domain')
let btnDomain = document.getElementById('btnDomain')


async function getData(api){
    let response = await fetch(api)
    let data = await response.json()
    return data
}


btnValidate.addEventListener('click', handleEmailCheck)
function handleEmailCheck(e){
    e.preventDefault()
//    console.log(email.value) 
   getData(`https://api.hunter.io/v2/email-verifier?email=${email.value}&api_key=eaef86cda8e1a3d0124a0e0ca3bdba4566841822`)
   .then((response)=>{

    console.log(response.data.status)



   })
   .catch((error)=>{
    console.log('Response error: ' + error.message)
   })

}


btnDomain.addEventListener('click', handleEmailCheck)
function handleEmailCheck(e){
    e.preventDefault()
//    console.log(email.value) 
   getData(`https://api.hunter.io/v2/domain-search?domain=${domain.value}&api_key=eaef86cda8e1a3d0124a0e0ca3bdba4566841822`)
   .then((response)=>{
    console.log(response.data.emails)
   })
   .catch((error)=>{
    console.log('Response error: ' + error.message)
   })

}





