
const postName = document.getElementById('postName')
const postInfo = document.getElementById('postInfo')
const post = document.getElementById('post')

let postControl=1
function publicarPost(){    
    
    if(postInfo.value!="" &&postName.value!=""){
        post.style.display='block'
        let newPost=`
        <div> 
                    <h2>${postName.value}</h2>
                    <h4>${postInfo.value}</h4>
                    <br>
                    <section>
                        <hr>
                        <h6>Comentarios</h6>
                        <ul id="comentarios${postControl}">
                        </ul>
                        <br>
                    </section >
                    <form  onsubmit="return false;">
                        <label for="nuevocomentario${postControl}" class="form-label">nuevo comentario:</label>
                        <textarea id="nuevocomentario${postControl}" name="nuevocomentario${postControl}"  cols="20" rows="1" class="form-control"required></textarea>
                        <button onclick="newComment(${postControl})"class="btn btn-primary">Publicar</button>
                    </form>
                </div>
                <br>
                `
        post.innerHTML=newPost+post.innerHTML
        postName.value=""
        postInfo.value=""
    }
    //post.innerHTML+=newPost

}

function newComment(postNumber){
    const newCommentList = document.getElementById('nuevocomentario'+postNumber)
    if(newCommentList.value!=""){
        
        let newLi = document.createElement("li");
        let newContent = document.createTextNode(newCommentList.value);
        newLi.appendChild(newContent);
        document.querySelector(`#comentarios${postControl}`).appendChild(newLi)
        newCommentList.value=""
    }
}
function iniciar (){
    post.style.display='none'
}
window.addEventListener('load', iniciar)