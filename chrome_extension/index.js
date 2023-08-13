let mylead=[]

//local storage trail
//mylead='["hello"]'
//mylead=JSON.parse(mylead)
//mylead.push("sachu")
//mylead=JSON.stringify(mylead)
//console.log(typeof mylead)


let inputel=document.getElementById("inp") 
const inpbtn=document.getElementById("btn")
let renderel=document.getElementById("ren")
let empty=document.getElementById("del")

//getting LS to webpage
let disp=JSON.parse(localStorage.getItem('myleads'))
console.log(disp) 
//truthy or falsey
if(disp){
    mylead=disp
    renderleads()
}

//delete
empty.addEventListener(('dblclick'),function(){
    //cleaing localstorege
    localStorage.clear()
    //clearing array
    mylead=[]
    //clearing DOM
    renderleads()

})

inpbtn.addEventListener("click",function(){
    mylead.push(inputel.value)
    inputel.value=""
    //saving mylead to LS
    localStorage.setItem('myleads',JSON.stringify(mylead))
    renderleads()

    //getting from LS in console

})

function renderleads(){
let listitems=""
for(i=0;i<mylead.length;i++){
    //listitems+="<li><a target='_blank' href='mylead[i]'>"+mylead[i]+"</a></li>"
    listitems+=`<li>
                    <a target='_blank' href='${mylead[i]}'>${mylead[i]}
                    </a>
                </li>`
    //const li=document.createElement("li")
    //li.textContent+=mylead[i]
    //renderel.append(li)
}
renderel.innerHTML=listitems
}

    
//to render all the elements from input html
 
