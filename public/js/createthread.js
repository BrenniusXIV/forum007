async function postData(data)
{
    let fetchResult = await fetch('/api/thread', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return fetchResult;
}

const createThread = async (ev)=>{
    ev.preventDefault();  //to stop the form submitting
    const queryString = window.location.pathname;
    let boardID = queryString.split("/").pop();
    let thread = {
        thread_name: document.getElementById('thread-title').value,
        body: document.getElementById('thread-content').value,
        board_id: boardID
    }
    document.forms[0].reset(); // to clear the form for the next entries
    
    let threadResults = await postData(thread);
    
    let pre = document.querySelector('#msg pre'); //message to append describing posting status
    
    if (threadResults.ok) {
        pre.textContent = "Thread Created";
        document.location.reload();
    } else {
        pre.textContent = "Thread creation failed. Make sure you're logged in!"
    }
}
    document.getElementById('btn').addEventListener('click', createThread);




