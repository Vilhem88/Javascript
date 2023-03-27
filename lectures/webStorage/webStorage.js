// LOCAL STORAGE ///
localStorage.setItem('country', 'Macedonia')
localStorage.getItem('country')
localStorage.removeItem('country')
localStorage.clear()

// -----------------SESSION STORAGE -------------------------//
// in Local and Session storage the data is always from type: string
let btnPoints = document.getElementById('btnPoints')
let sessionStorageCounter = sessionStorage.getItem('counter')
let counter = 0
if(sessionStorageCounter){
    counter = parseInt(sessionStorageCounter)
    // Boolean() convert the string into boolean
}

btnPoints.addEventListener('click', function(e){
    counter++
    sessionStorage.setItem('counter', counter)
    console.log('ova e counter', counter)

})
