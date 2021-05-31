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
        body: document.getElementById('comment-content').value,
        thread_id: 1,
        commenter_id: 1,
    }
    if (!comment.body){
        alert('pleezzze dont post blank comments.')
        return
    }
    document.forms[0].reset(); // to clear the form for the next entries
    //for display purposes only
    console.warn('added' , {comment} );
    let pre = document.querySelector('#msg pre');
    pre.textContent = "Comment Created";
    //saving to localStorage
    localStorage.setItem('threadList', JSON.stringify(comment) );
    console.log(JSON.stringify(comment));
    let commentResults = await postData(comment);
    
}
document.getElementById('btn').addEventListener('click', createComment);
