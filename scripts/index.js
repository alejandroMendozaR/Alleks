let draws = JSON.parse(localStorage.getItem("draws"));
if(!draws){
    let draws = [
        {
            name: "Warmth",
            nameImg: "warmth.png",
            description: "A draw with warm colors",
            likes: 10,
            comments: [
                {
                    photo: "default.jpg",
                    nick: "Artu_ls",
                    comment: "Great draw, I like colors :D"
                }
            ]
        },
        {
            name: "Gymbro",
            nameImg: "gymbro.png",
            description: "A practice of anatomy",
            likes: 8,
            comments: [
                {
                    photo: "default.jpg",
                    nick: "Andrew52",
                    comment: "Cool"
                },
                {
                    photo: "default.jpg",
                    nick: "galletitas_con_lesheUwU",
                    comment: "I like it -.-"
                }
            ]
        },
        {
            name: "Tacosaurio",
            nameImg: "tacosaur.png",
            description: "tacosaurio RAWWWWWWWWWWWWWWWR",
            likes: 8,
            comments: [
                {
                    photo: "default.jpg",
                    nick: "Artu_ls",
                    comment: "rawwwwwr"
                },
                {
                    photo: "default.jpg",
                    nick: "im_susy68",
                    comment: "Great idea -.-"
                },
                {
                    photo: "default.jpg",
                    nick: "racer",
                    comment: "..."
                },
                {
                    photo: "default.jpg",
                    nick: "katyrssss",
                    comment: "idk what I can type"
                }
            ]
        },
        {
            name: "Balance",
            nameImg: "balance.png",
            description: "Balance in nature",
            likes: 8,
            comments: [
                {
                    photo: "default.jpg",
                    nick: "starsky",
                    comment: "I really love it"
                }
            ]
        },
        {
            name: "Sendier",
            nameImg: "sendier.png",
            description: "Pokemon crreated by my mind",
            likes: 8,
            comments: [
                {
                    photo: "default.jpg",
                    nick: "pokelover",
                    comment: "Remember to dragonite"
                }
            ]
        },
        {
            name: "Calaverita",
            nameImg: "diadeMuertos.png",
            description: "I did it for school",
            likes: 8,
            comments: [
                {
                    photo: "default.jpg",
                    nick: "troll99",
                    comment: "._."
                },
                {
                    photo: "default.jpg",
                    nick: "troll99",
                    comment: "._."
                }
            ]
        },
        {
            name: "Subway Surfers",
            nameImg: "subwaySurfers.png",
            description: "A fanart, just that",
            likes: 8,
            comments: [
                {
                    photo: "default.jpg",
                    nick: "taily_12",
                    comment: "Ily"
                },
                {
                    photo: "default.jpg",
                    nick: "kvsss_shop",
                    comment: "oh well..."
                }
            ]
        },
        {
            name: "Introspection",
            nameImg: "introspection.png",
            description: "Into something unknown",
            likes: 8,
            comments: [
                {
                    photo: "default.jpg",
                    nick: "julesss",
                    comment: "Interesting"
                },
                {
                    photo: "default.jpg",
                    nick: "lift_ppp",
                    comment: "Coool..."
                }
            ]
        }
    ]
}
localStorage.setItem("draws", JSON.stringify(draws));


const recomes = [
    {
        name: "Sahlarei",
        nameImg: "sahlarei.jpg",
        description: "Digital artist / Semirrealism",
        link: "https://www.instagram.com/sahlarei?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    },
    {
        name: "Mauro Delacroix",
        nameImg: "mauro.jpg",
        description: "Digital artist / Mangaka",
        link: "https://www.instagram.com/mauro_delacroix?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    },
    {
        name: "Alejandra PLS",
        nameImg: "ale_pls.jpg",
        description: "Digital artist / Own style",
        link: "https://www.instagram.com/alejandra_pls?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    },
    {
        name: "Thunder Starxx",
        nameImg: "thunderStarx.png",
        description: "Digital artist / Cartoon",
        link: "https://www.instagram.com/thunder_starx?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
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

        image.src = `././src/artists/${recom.nameImg}`;
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