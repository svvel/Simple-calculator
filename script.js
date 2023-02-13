const input = document.getElementById("input")

const number = document.querySelectorAll(".number")

const clear = document.querySelector(".clear")

const equal =document.querySelector(".equal")

number.forEach((element)=>{
    element.addEventListener("click",(e)=>{
        if(input.value==("not valid number"||undefined)){
            input.value=""
            input.focus()
            input.value += e.target.value
        }else{
          input.focus()
          input.value += e.target.value
      }
    })
})

clear.addEventListener("click",(e)=>{
    input.value=""
})

let cal = ""

equal.addEventListener("click",()=>{
    try {
        cal = eval(input.value)
        if(cal !== undefined){
            input.value = cal
        }
    } catch (error) {
        input.value = "not valid number"
    }
    
})