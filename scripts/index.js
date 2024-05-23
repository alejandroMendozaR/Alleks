const draws = [
    {
        name: "Me",
        nameImg: "PFP.png",
        description: "My profile picture",
        likes: 10,
        comments: [
            {
                nickYpfp: "",
                comment: ""
            }
        ]
    },
]
const recomes = [
    {
        name: "",
        description: "",
        link: ""
    }
]





localStorage.setItem("draws", JSON.stringify(draws));

function paintDraws (){
    let container = document.getElementById("obras");

    draws.forEach((draw, index) => {
        let element = document.createElement("li");
        let btn = document.createElement("button");
        let image = document.createElement("img");
        let name = document.createElement("h3");
        let description = document.createElement("p");

        element.classList.add("draw");

        image.src = `././src/img/${draw.nameImg}`;
        image.alt = draw.description;

        name.textContent = draw.name;

        description.textContent = draw.description;

        btn.id = index;
        btn.addEventListener("click", openImg(index));

        btn.appendChild(image);
        btn.appendChild(name);
        btn.appendChild(description);
        element.appendChild(btn);

        container.appendChild(element);
    });
}

function openImg(index){

}

function paintRecomes(){
    let container = document.getElementById("recomes");
    recomes.forEach(recom => {
        let element = document.createElement("li");
        let image = document.createElement("img");
        let name = document.createElement("h3");
        let link = document.createElement("a");

        
    });
}


window.addEventListener("load", paintDraws());
window.addEventListener("load", paintRecomes());