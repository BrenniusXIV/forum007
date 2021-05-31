//send delete request via logout route
async function logoutRequest() {
    let fetchResult = await fetch ('/api/logout', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return fetchResult;
}

async function onLogout(event) {
    event.preventDefault();
    let logoutResults = await logoutRequest();

    if (logoutResults.ok)
    {
        document.location.replace('/login');
    }
}
console.log(document.querySelector('#logout'))
document.querySelector('#logout').addEventListener('click', onLogout)