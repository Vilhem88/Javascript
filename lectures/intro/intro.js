
// let name = "Wilhem"
// let age = 27
// const PI = 3.14
// console.log(name, age + PI)
// document.write(name)

// let isSunny = true

// isSunny ? console.log('e soncevo') : console.log('vrne sneg')

// /*
// ova e kommnetar 
// */

// arr = [1,2,3,4,5,6,7,8]

// arr.forEach(function ( value, key ){

//     console.log('Ova e nizata', key + '=>' + value)


// })

// let i = 10

// while(i <= 20){
//     console.log('ova e while', i)
//     i++
// }


// let h1AllTags = document.getElementsByTagName('h1')
// console.log(h1AllTags)

// let divContainer = document.getElementById('container')
// console.log(divContainer)

// let className = document.getElementsByClassName('resType')
// console.log(className   )

// for(let i = 0; i < h1AllTags.length; i++){

//     h1AllTags[i].style.color = 'red'
// }

// divContainer.style.backgroundColor = 'green'


// let list_one = document.getElementById('list_one')
// let list_two = document.getElementById('list_two')

// console.log(list_one.children, list_two)

// for(let i = 0; i < list_one.children.length; i++){
//     let child = list_one.children[i]
//     let liText = child.innerText
//     let liFinal = `${i + 1} . ${liText}`
//     child.innerText = liFinal
// }

// for(let i = 0; i < list_two.children.length; i++){
    
//     let child = list_two.children[i]
//     if(i % 2 === 0){

//         child.style.color = 'red'
//     }else{
     
//         child.style.color = 'blue'
//     }
// }

// let newDiv = document.createElement('div')
// newDiv.setAttribute('id', 'new_div')

// let newPtag = document.createElement('p')

// newPtag.innerHTML = 'I am a nested elemenet'
// newDiv.appendChild(newPtag)
// console.log(newDiv)

// let mainDiv = document.getElementsById('mainDiv')
// let main = document.body.insertBefore(newDiv, mainDiv)



let divs = document.getElementsByTagName('div')
console.log(divs)

let liElements = document.getElementsByTagName('li')
console.log(liElements)

for(let i = 0; i < liElements.length; i++){
   let className =  liElements[i].setAttribute('class', (1+i)+ 'newName')
    console.log(className)

}   

for(let i = 0; i < divs.length; i++){
    divs[i].setAttribute('id', (i+1))
}


let ulList = document.getElementById('ulList')

let newLi = document.createElement('li')
newLi.innerText = 'new'

ulList.appendChild(newLi)
console.log(ulList)

let aTags = document.getElementsByTagName('a')
console.log(aTags)

for(let i = 0; i < aTags.length; i++){
    (aTags[i].setAttribute('href', 'www.google.com'))
 }


let allImg = document.getElementsByTagName('img')
console.log(allImg)

for(let i = 0; i < allImg.length; i++){
    allImg[i].setAttribute('src','https://picsum.photos/200/300')
    allImg[i].style.width = '30%';
    allImg[i].style.height = '30%';
}