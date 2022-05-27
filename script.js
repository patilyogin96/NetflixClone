const users = ["Yogin","Ajit","Patil"];

const  divMembers = document.querySelector('.mem-div');

const addIcons = document.querySelector('.add-icons');

const userIcons = ()=>{
    users.reverse();
    users.map((currElem)=>{
       divMembers.insertAdjacentHTML("afterbegin",`<button class="btn"><span>${currElem} </span></button>`)
    })
}

addIcons.addEventListener('click',()=>{
    let userName = prompt("Enter User Name:")

    if(userName !=null && !users.includes(userName))
    {
        users.push(userName);
        console.log(users);
        divMembers.insertAdjacentHTML("afterbegin",`<button class="btn"><span>${userName} </span></button>`)

    }
    else{
        alert("User already exist")
    }

    
})


userIcons();