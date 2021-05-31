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
    //document.querySelector('form').reset();

    //for display purposes only
    let pre = document.querySelector('#msg pre');
    // pre.textContent = '\n' + JSON.stringify(threads, '\t', 2);
    pre.textContent = "Thread Created";
    //saving to localStorage
    let threadResults = await postData(thread);

    document.location.reload();
}
// document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', createThread);




