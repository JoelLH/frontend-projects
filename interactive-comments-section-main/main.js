import data from './data.json' assert { type: 'json' };
let feed = {...data};
let lastId= 0;

document.addEventListener('click', function(e){
    if(e.target.dataset.new){
        newReply(e.target.dataset.new)
    }else if(e.target.dataset.reply){
        replyToComment(e.target.dataset.reply)
        render()
    }else if(e.target.dataset.modal){
        openModal(e.target.dataset.modal)
    }else if(e.target.id === "deleteBtn"){
        deleteComment(e.target.dataset.id);
        document.getElementById('modal-bg').style.display = 'none';
        render()
    }else if(e.target.id === "cancelBtn"){
        document.getElementById('modal-bg').style.display = 'none';
    }else if(e.target.dataset.edit){
        editComment(e.target, e.target.dataset.edit)
    }else if(e.target.dataset.update){
        updateComment(e.target.dataset.update);
        render()
    }else if(e.target.id === "vote" || e.target.id === "downVote"){
        toggleLike(e.target.dataset.like, e.target.id, )
        render()
    }else if(e.target.id === "send-btn"){
        sendComment()
        render()
    }

})


function newReply(commentId){
    const commentFeed = document.getElementById(commentId);
    const comment = commentFeed.querySelector('div.comment');
    let newElem = document.createElement('div');
    newElem.id = "newReply"

    if(!commentFeed.querySelector("div[data-isReplied]")){
        console.log(comment)
        comment.after(newElem)
        newElem.innerHTML= `<div class="new-comment-wrapper new-reply-wrapper" data-isReplied="true">
                                <textarea class="newcom-textarea"
                                placeholder="Add a comment..."
                                ></textarea>
                                <img src="${feed.currentUser.image.webp}">
                                <button class="newcom-btn" data-reply="${commentId}">Reply</button>
                            </div>`
    }
}

function replyToComment(commentId){
    const commentFeed = document.getElementById(commentId);
    const textarea = commentFeed.querySelector('textarea');

    let newReply = {
        "id": lastId + 1,
        "content": textarea.value,
        "createdAt": "Today",
        "score": 0,
        "replyingTo": "",
        "user": {
            "image": { 
                "png": feed.currentUser.image.png,
                "webp": feed.currentUser.image.webp
            },
            "username": feed.currentUser.username
        }
    }

    feed.comments.forEach(comment=>{
        if(comment.id == commentId){
            newReply.replyingTo = comment.user.username
            comment.replies.push(newReply)
        }else{
            comment.replies.forEach(reply=>{
                if(reply.id == commentId){
                    newReply.replyingTo = reply.user.username;
                    comment.replies.push(newReply)
                }
            })
        }
        
    })
    
}

function openModal(commentId){
    document.getElementById('modal-bg').style.display = 'block';
    const deleteBtn = document.getElementById('deleteBtn')
    deleteBtn.dataset.id= commentId;
}

function deleteComment(commentId){
    const commentsArr = feed.comments;

    commentsArr.forEach((comment, index)=>{
        if(comment.id == commentId){
            feed.comments = [...commentsArr.slice(0, index), ...commentsArr.slice(index + 1)]
        }else{
            comment.replies.forEach((reply, index)=>{
                if(reply.id == commentId){
                    comment.replies = [...comment.replies.slice(0, index), ...comment.replies.slice(index + 1)]
                }
            })
        }
    })
}

function editComment(eventTarget, commentId){
    const comment = eventTarget.parentElement.parentElement;
    let commentBody = comment.querySelector('div.comment__body');
    let newTextArea= document.createElement('textarea');
    let newBtn = document.createElement('button');
    newBtn.classList.add('updateBtn');
    newBtn.dataset.update = commentId;
    newBtn.innerText = 'UPDATE'
    newTextArea.classList.add('comment__body');
    newTextArea.value = commentBody.innerText;
    comment.appendChild(newBtn)
    comment.replaceChild(newTextArea, commentBody)
}

function updateComment(commentId){
    const comment = document.getElementById(commentId);
    let textarea = comment.querySelector('textarea')
    let valueString = textarea.value.split(" ")
    if(valueString[0].match(/^@/)){
        valueString = valueString.slice(1)
    }
    valueString = valueString.join(" ")
    
    feed.comments.forEach(comment=>{
        if(comment.id == commentId){
            comment.content = valueString
        }else{
            comment.replies.forEach(reply=>{
                if(reply.id == commentId){
                    reply.content = valueString
                }
            })
        }
    })
}

function toggleLike(commentId, action){
    const fdComments = feed.comments

        switch(action){
            case "vote":
                    feed.comments.forEach((comment, index)=>{
                        if(comment.id == commentId && !comment.isliked){
                            fdComments[index].score = fdComments[index].score + 1
                            fdComments[index].isliked = true
                        }else{
                            comment.replies.forEach((reply, indexj)=>{
                                if(reply.id == commentId && !reply.isliked){
                                    reply.score = reply.score + 1
                                    fdComments[index].replies[indexj].isliked = true
                                }
                            })
                        }
                    })
                break;
            case "downVote":
                    feed.comments.forEach((comment, index)=>{
                        if(comment.id == commentId && comment.isliked){
                            fdComments[index].score = fdComments[index].score - 1
                            fdComments[index].isliked = false
                        }else{
                            comment.replies.forEach((reply, indexj)=>{
                                if(reply.id == commentId && reply.isliked){
                                    reply.score = reply.score - 1
                                    fdComments[index].replies[indexj].isliked = false
                                }
                            })
                        }
                    })
                break;
            default:
                return console.log('No comment found')
        }
}

function sendComment(){
    const textarea = document.getElementById('newcom-textarea');
    let newComment = {
        "id": lastId + 1,
        "content": textarea.value,
        "createdAt": "Today",
        "score": 0,
        "user": {
            "image": { 
                "png": data.currentUser.image.png,
                "webp": data.currentUser.image.webp
            },
            "username": data.currentUser.username
        },
        "replies": []
    }
    if(textarea.value.length > 0){
        feed.comments.push(newComment)
    }
    textarea.value = "";
    
}


function getReplies(comment){
    let commentReplies = "";

    comment.replies.forEach(reply =>{
                let replyTo = reply.replyingTo ?  `<span class="replyTo-user">@${reply.replyingTo}</span>` : "";
                let currentBadge = reply.user.username === feed.currentUser.username ? `<span class="current-badge">you</span>` : "";
                let commentBtns = reply.user.username === feed.currentUser.username ? 
                    `<button class="delete" data-modal="${reply.id}"><img src="./images/icon-delete.svg">Delete</button><button class="edit" data-edit="${reply.id}"><img src="./images/icon-edit.svg">Edit</button>` : 
                    `<button class="reply" data-new="${reply.id}"><img src="./images/icon-reply.svg">Reply</button>`;

                commentReplies += `
                    <div class="comment-feed" id="${reply.id}">
                        <div class="comment comment-reply">
                            <div class="comment__header">
                                <img src=${reply.user.image.png} class="user-img">
                                <span class="user-name">${reply.user.username}</span>
                                ${currentBadge}
                                <span class="comment__date">${reply.createdAt}</span>
                            </div>
                            <div class="comment__body">
                                ${replyTo}
                                ${reply.content}
                            </div>
                            <div class="score-wrapper" >
                                <img src="./images/icon-plus.svg" id="vote" data-like="${reply.id}">
                                <span class="score">${reply.score}</span>
                                <img src="./images/icon-minus.svg" id="downVote" data-like="${reply.id}">
                            </div>
                            <div class="comment__btns">
                                ${commentBtns}
                            </div>
                        </div>
                    </div>
                `
                lastId = lastId < reply.id ? reply.id : lastId;
            })
            return commentReplies
}

function getComments(){
    let htmlString ="";
    feed['comments'].forEach(comment => {
        let replyTo = comment.replyingTo ? `<span class="replyTo-user">@${comment.replyingTo}</span>` : "";
        let currentBadge = comment.user.username === feed.currentUser.username ? `<span class="current-badge">you</span>` : "";
        let commentBtns = comment.user.username === feed.currentUser.username ? 
            `<button class="delete" data-modal="${comment.id}"><img src="./images/icon-delete.svg">Delete</button> <button class="edit" data-edit="${comment.id}"><img src="./images/icon-edit.svg">Edit</button>` : 
            `<button class="reply" data-new="${comment.id}"><img src="./images/icon-reply.svg">Reply</button>`;
        let commentReplies = "";
        if(comment.replies.length > 0){
            commentReplies = getReplies(comment)
        }
            

        htmlString += `
            <div class="comment-feed" id="${comment.id}">
                <div class="comment">
                    <div class="comment__header">
                        <img src=${comment.user.image.png} class="user-img">
                        <span class="user-name">${comment.user.username}</span>
                        ${currentBadge}
                        <span class="comment__date">${comment.createdAt}</span>
                    </div>
                    <div class="comment__body">
                        ${replyTo}
                        ${comment.content}
                    </div>
                    <div class="score-wrapper" >
                        <img src="./images/icon-plus.svg" id="vote" data-like="${comment.id}">
                        <span class="score">${comment.score}</span>
                        <img src="./images/icon-minus.svg" id="downVote" data-like="${comment.id}">
                    </div>
                    <div class="comment__btns">
                        ${commentBtns}
                    </div>
                </div>
                <div class="comment-replies">
                    ${commentReplies}
                </div>
            </div>
        `
        lastId = lastId < comment.id ? comment.id : lastId;
    });
    htmlString += `
        <div class="new-comment-wrapper">
            <textarea class="newcom-textarea"
            id="newcom-textarea"
            placeholder="Add a comment..."
            ></textarea>
            <img src="${feed.currentUser.image.webp}">
            <button class="newcom-btn" id="send-btn">Send</button>
        </div>
    `
    return htmlString
}

function render(){
    document.getElementById('feed').innerHTML = getComments();
}
render()