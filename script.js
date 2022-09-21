const BODY = document.querySelector('body')
const APP = document.querySelector("#app")
const input = document.createElement("input")
const submit = document.createElement("input")

submit.type = "submit"
submit.classList.add('submit')
input.type = "text"
input.classList.add('name')





let name = localStorage.getItem('name')


if(name){
    name = name[0].toUpperCase() + name.substring(1)
    APP.innerHTML = `Hello ${name}`
    APP.classList.add('animation-name')
    let animationName = document.querySelector('.animation-name')
    animationName.addEventListener('animationend', ()=>{
        BODY.style.backgroundColor = 'grey'
        APP.classList.remove('animation-name')
        APP.innerHTML = ""
    })
    
}else{

    APP.appendChild(input)
    APP.appendChild(submit)
    submit.addEventListener("click",()=>{
        name = localStorage.setItem('name', input.value);

        document.location.reload()

        if(name === undefined){
           
            APP.appendChild(input)
            APP.appendChild(submit)
        }
         
     })

}
