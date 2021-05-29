
let threads = [];

const createThread = (ev)=>{
    ev.preventDefault();  //to stop the form submitting
    let thread = {
        id: Date.now(),
        title: document.getElementById('thread-title').value,
        content: document.getElementById('thread-content').value
    }
    threads.push(thread);
    document.forms[0].reset(); // to clear the form for the next entries
    //document.querySelector('form').reset();

    //for display purposes only
    console.warn('added' , {threads} );
    let pre = document.querySelector('#msg pre');
    // pre.textContent = '\n' + JSON.stringify(threads, '\t', 2);
    pre.textContent = "Thread Created";
    //saving to localStorage
    localStorage.setItem('threadList', JSON.stringify(threads) );
}
// document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', createThread);




