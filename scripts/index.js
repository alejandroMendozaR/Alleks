let draws = JSON.parse(localStorage.getItem("draws"));
if(!draws){
    let draws = [
        {
            name: "Me",
            nameImg: "PFP.png",
            description: "My profile picture",
            likes: 5,
            comments: [
                {
                    photo: "",
                    nick: "",
                    comment: ""
                }
            ]
        },
        {
            name: "Me",
            nameImg: "PFP.png",
            description: "My profile picture",
            likes: "5",
            comments: [
                {
                    photo: "",
                    nick: "",
                    comment: ""
                }
            ]
        }
    ]
    localStorage.setItem("draws", JSON.stringify(draws));
}


const recomes = [
    {
        name: "Me",
        nameImg: "PFP.png",
        description: "ps yo ",
        link: "https://www.instagram.com/alleks_drw?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    }
]
let listaUsuarios=JSON.parse(localStorage.getItem("lista"));
if(!listaUsuarios){
    listaUsuarios = [];
    let user = {
        user: "user1", 
        email: "user@gmail.com",
        pass: "1234"
    };
    listaUsuarios.push(user);
    localStorage.setItem("lista", JSON.stringify(listaUsuarios));
}
let bandera = localStorage.getItem("bandera");
if(!bandera){    
    let banderita = false; 
    localStorage.setItem("bandera", banderita);
}

localStorage.setItem("recomes", JSON.stringify(recomes));

function paintDraws (){
    let container = document.getElementById("obras");

    draws.forEach((draw, index) => {
        let element = document.createElement("li");
        let btn = document.createElement("button");
        let image = document.createElement("img");
        let name = document.createElement("h3");
        let description = document.createElement("p");

        element.classList.add("draw");

        image.src = `././src/draws/${draw.nameImg}`;
        image.alt = draw.description;

        name.textContent = draw.name;

        description.textContent = draw.description;

        btn.id = index;
        btn.addEventListener("click", () => {
            window.location.href = "./draw.html";
            localStorage.setItem("i", index);
        });

        btn.appendChild(image);
        btn.appendChild(name);
        btn.appendChild(description);
        element.appendChild(btn);

        container.appendChild(element);
    });
}

function paintRecomes(){
    let container = document.getElementById("recomes");
    recomes.forEach(recom => {
        let element = document.createElement("li");
        let image = document.createElement("img");
        let name = document.createElement("h3");
        let description = document.createElement("p");
        let link = document.createElement("a");

        element.classList.add("recom");

        image.src = `././src/draws/${recom.nameImg}`;
        image.alt = recom.name;

        name.textContent = recom.name;

        description.textContent = recom.description;

        link.textContent = "Visit";
        link.href = recom.link;

        element.appendChild(image);
        element.appendChild(name);
        element.appendChild(description);
        element.appendChild(link);

        container.appendChild(element);
    });
}


window.addEventListener("load", paintDraws());
window.addEventListener("load", paintRecomes());