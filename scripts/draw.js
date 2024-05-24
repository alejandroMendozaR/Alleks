const draws = JSON.parse(localStorage.getItem("draws"));
listaUsuarios=JSON.parse(localStorage.getItem("lista"));
let index = localStorage.getItem("i");
let bool = localStorage.getItem("bandera");
let likeOrNot = false;

let white = "#FFFFFF";
let orange = "#CB6E4F";
let yellow = "#EABB55"

const drawSelected = draws[index];

console.log(drawSelected);

function paintDraw (){
    let name = document.getElementById("name");
    let image = document.getElementById("draw");
    let numLikes = document.getElementById("numLikes");
    let numComs = document.getElementById("numComs");

    name.textContent = drawSelected.name;
    image.src = `././src/draws/${drawSelected.nameImg}`;
    numLikes.textContent = drawSelected.likes;
    numComs.textContent = drawSelected.comments.length;

    paintComments();
}

function paintComments ( ){
    let containerSupreme = document.getElementById("comments");
    let commentContainer = document.getElementById("commentContainer");
    if(commentContainer){
        commentContainer.parentNode.removeChild(commentContainer);

        let newCont = document.createElement("ul");
        newCont.id = "commentContainer";

        drawSelected.comments.forEach(com => {
            let comment  = document.createElement("li");
            let pfp = document.createElement("img");
            let contText = document.createElement("div");
            let username = document.createElement("h3");
            let content = document.createElement("p");
    
            comment.classList.add("comment");
    
            pfp.src = `././src/draws/${com.photo}`;
            pfp.alt = com.nick;
    
            username.textContent = com.nick;
    
            content.textContent = com.comment;
    
            contText.appendChild(username);
            contText.appendChild(content);
    
            comment.appendChild(pfp);
            comment.appendChild(contText);
    
            newCont.appendChild(comment);

            containerSupreme.appendChild(newCont);
            console.log("agregue");
        });
    }else {
        let commentContainer = document.createElement("ul");
        commentContainer.id = "commentContainer";

        drawSelected.comments.forEach(com => {
            let comment  = document.createElement("li");
            let pfp = document.createElement("img");
            let contText = document.createElement("div");
            let username = document.createElement("h3");
            let content = document.createElement("p");
    
            comment.classList.add("comment");
    
            pfp.src = com.photo;
            pfp.alt = com.nick;
    
            username.textContent = com.nick;
    
            content.textContent = com.comment;
    
            contText.appendChild(username);
            contText.appendChild(content);
    
            comment.appendChild(pfp);
            comment.appendChild(contText);
    
            commentContainer.appendChild(comment);
            containerSupreme.appendChild(newCont);
            console.log("agregue");
        });
    }
}

function like() {
    if(bool){
        let heart = document.getElementById("iconLike");
        let numLikes = document.getElementById("numLikes");
        if(likeOrNot){
            likeOrNot = false;
            heart.style.color = white;
            numLikes.style.color = yellow;
            numLikes.textContent -= 1;
            drawSelected.likes -=1;
            console.log("se deslaikeo")
        }else{
            likeOrNot = true;
            heart.style.color = yellow;
            numLikes.style.color = yellow;
            numLikes.textContent = parseInt(numLikes.textContent) + 1;
            drawSelected.likes =  parseInt(numLikes.textContent) + 1;
            console.log("se laikeo")
        }
    }else{
        window.location.href = "./login.html";
    }
}

function comment(){
    let container = document.createElement("form")
    container.id = "formComment";
    container.classList.add("formComment");
    if(bool){
        let title = document.createElement("h1")
        let areaComment = document.createElement("textarea");
        let comBtn = document.createElement("button");
        let closeBtn = document.createElement("button");

        title.textContent = "Comment";

        areaComment.placeholder = "Write what are you thinking...";
        areaComment.id = "commentText";

        comBtn.textContent = "Comment";
        comBtn.addEventListener("click", submitComment)
        comBtn.classList.add("btnSubmit");
        comBtn.type = "button"

        closeBtn.textContent = "x";
        closeBtn.addEventListener("click", () => {
            if(container){
                container.remove();
            }
        });
        closeBtn.classList.add("closeBtn")

        container.appendChild(closeBtn);
        container.appendChild(title);
        container.appendChild(areaComment);
        container.appendChild(comBtn);

        document.body.appendChild(container);
    }else{
        window.location.href = "./login.html";
    }
}

function submitComment() {
    let indexUser = localStorage.getItem("indexUser");
    let comentario = document.getElementById("commentText").value;
    let nickname = listaUsuarios[indexUser];
   
    let newComment = {
        photo: "default.jpg",
        nick: nickname,
        comment: comentario
    }
    console.log(newComment)

    drawSelected.comments.push(newComment);
    console.log(drawSelected.comments);
    localStorage.setItem("draws", JSON.stringify(draws));
    let cont = document.getElementById(formComment);   

    if(cont){
        cont.remove();
    }

    paintComments();
}


let btnBack = document.getElementById("btnBack");
btnBack.addEventListener("click", () => {
    window.history.back();
});


window.addEventListener("load", paintDraw);