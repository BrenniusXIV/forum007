async function postData(data)
{
    let fetchResult = await fetch('/api/comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return fetchResult;
}

async function putData(id, data)
{
    let fetchResult = await fetch(`/api/comment/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return fetchResult;
}


const createComment = async (ev)=>{
    ev.preventDefault();  //to stop the form submitting
    const queryString = window.location.pathname;
    let threadID = queryString.split("/").pop();
    let comment = {
        body: document.getElementById('comment-content').value,
        thread_id: threadID,
        comment_vote:0
    }
    if (!comment.body){
        alert('Comments cannot be blank!')
        return
    }
    document.forms[0].reset(); // to clear the form for the next entries

    let commentResults = await postData(comment);

    let pre = document.querySelector('#msg pre');
    if (commentResults.ok) {
        pre.textContent = "Comment created!";
        document.location.reload();
    } else {
        pre.textContent = "Comment creation failed. Make sure you're logged in!"
    }
    
}
document.getElementById('btn').addEventListener('click', createComment);


const updateComment = async (id, commentInfo)=>{
    const queryString = window.location.pathname;
    let threadID = queryString.split("/").pop();

    let comment = {
        ...commentInfo,
        thread_id: threadID,
    }

    if (!comment.body){
        alert('pleezzze dont post blank comments.')
        return
    }
    // threads.push(thread);
    document.forms[0].reset(); // to clear the form for the next entries

    let commentResults = await putData(id, comment);

    let pre = document.querySelector('#msg pre');
    if (commentResults.ok) {
        pre.textContent = "Comment updated!"
        document.location.reload();
    } else {
        pre.textContent = "Comment update failed. Make sure you're logged in!"
    }
}

function incrementVote()
{
    let commentID = this.parentNode.getAttribute("commentID");
    let commentVote = this.parentNode.getAttribute("commentVote");
    let commentBody = this.parentNode.getAttribute("commentBody");
    commentVote++;
    updateComment(commentID, {
        comment_vote:commentVote,
        body:commentBody
    })
}

function decrementVote()
{
    let commentID = this.parentNode.getAttribute("commentID");
    let commentVote = this.parentNode.getAttribute("commentVote");
    let commentBody = this.parentNode.getAttribute("commentBody");
    commentVote--;
    updateComment(commentID, {
        comment_vote:commentVote,
        body:commentBody
    })
}

// document.addEventListener('DOMContentLoaded', ()=>{
let thumbsUpArray = document.getElementsByClassName('thumbsUpButton');
for(let i = 0; i < thumbsUpArray.length; i++) {
    thumbsUpArray[i].addEventListener("click",incrementVote)
}
let thumbsDownArray = document.getElementsByClassName('thumbsDownButton');
for(let i = 0; i < thumbsDownArray.length; i++) {
    thumbsDownArray[i].addEventListener("click",decrementVote)
}