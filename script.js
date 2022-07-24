const APP = document.querySelector("#app")
const input = document.createElement("input")
const submit = document.createElement("input")

submit.type = "submit"
submit.classList.add('submit')
input.type = "text"
input.classList.add('name')





let name = localStorage.getItem('name')


if(name){
    APP.innerHTML = `Hello ${name}`
}else{

    APP.appendChild(input)
    APP.appendChild(submit)
    submit.addEventListener("click",()=>{
        name = localStorage.setItem('name', input.value.toUpperCase());
     
        document.location.reload()

        if(name === undefined){
           
            APP.appendChild(input)
            APP.appendChild(submit)
        }
         
     })

}
console.log(name)