


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





const createComment = async (ev)=>{
    ev.preventDefault();  //to stop the form submitting
    let comment = {
        // id: Date.now(),
        body: document.getElementById('comment-content').value,
        thread_id: 1,
        commenter_id: 1,
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
