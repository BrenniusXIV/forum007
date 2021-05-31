//send data to login route
async function postLoginData(data)
{
    let fetchResult = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return fetchResult;
}

//initiate login fetch
async function onLogin(event)
{
    event.preventDefault();
    //aggregate data from form
    let userData = {
        "email":document.getElementById(`email-login`).value.trim(),
        "password":document.getElementById(`password-login`).value.trim(),
    };
    let loginResults = await postLoginData(userData);
    //check status
    if(loginResults.ok)
    {
        document.location.replace('/');
    }
}
document
  .querySelector('.login-form')
  .addEventListener('submit', onLogin);

