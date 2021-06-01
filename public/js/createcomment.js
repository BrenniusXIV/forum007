


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
    console.log(threadID);
    let comment = {
        body: document.getElementById('comment-content').value,
        thread_id: threadID,
        commenter_id: 1,
        comment_vote:0
        // board_id: text
        // board_id: //await grabbing board where: {name: name}
    }
    if (!comment.body){
        alert('pleezzze dont post blank comments.')
        return
    }
    // threads.push(thread);
    document.forms[0].reset(); // to clear the form for the next entries
    //document.querySelector('form').reset();

    //for display purposes only
    console.warn('added' , {comment} );
    let pre = document.querySelector('#msg pre');
    // pre.textContent = '\n' + JSON.stringify(threads, '\t', 2);
    pre.textContent = "Comment Created";
    //saving to localStorage
    localStorage.setItem('threadList', JSON.stringify(comment) );
    console.log(JSON.stringify(comment));
    let commentResults = await postData(comment);
    
}
// document.addEventListener('DOMContentLoaded', ()=>{
document.getElementById('btn').addEventListener('click', createComment);


const updateComment = async (id, commentInfo)=>{
    const queryString = window.location.pathname;
    let threadID = queryString.split("/").pop();

    let comment = {
        ...commentInfo,
        thread_id: threadID,
        commenter_id: 1,
    }

    if (!comment.body){
        alert('pleezzze dont post blank comments.')
        return
    }
    // threads.push(thread);
    document.forms[0].reset(); // to clear the form for the next entries
    //document.querySelector('form').reset();

    //for display purposes only
    console.warn('added' , {comment} );
    let pre = document.querySelector('#msg pre');
    // pre.textContent = '\n' + JSON.stringify(threads, '\t', 2);
    pre.textContent = "Comment Updated";
    //saving to localStorage
    localStorage.setItem('threadList', JSON.stringify(comment) );
    console.log(JSON.stringify(comment));
    let commentResults = await putData(id, comment);
    window.location.reload();
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