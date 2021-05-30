

//send data to thread route
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


//getting data from creating thread
// let threads = [];

const createThread = async (ev)=>{
    ev.preventDefault();  //to stop the form submitting
    let dropdownlist = document.getElementById("ddlViewBy")
    console.log(dropdownlist)
    var text= dropdownlist.options[dropdownlist.selectedIndex].text;
    console.log(text)
    let thread = {
        // id: Date.now(),
        thread_name: document.getElementById('thread-title').value,
        body: document.getElementById('thread-content').value,
        board_id: text
        // board_id: //await grabbing board where: {name: name}
    }
    // threads.push(thread);
    document.forms[0].reset(); // to clear the form for the next entries
    //document.querySelector('form').reset();

    //for display purposes only
    console.warn('added' , {thread} );
    let pre = document.querySelector('#msg pre');
    // pre.textContent = '\n' + JSON.stringify(threads, '\t', 2);
    pre.textContent = "Thread Created";
    //saving to localStorage
    localStorage.setItem('threadList', JSON.stringify(thread) );
    let threadResults = await postData(thread);
}
// document.addEventListener('DOMContentLoaded', ()=>{
document.getElementById('btn').addEventListener('click', createThread);



