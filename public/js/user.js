//send data to login route
async function postData(data)
{
    let fetchResult = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return fetchResult;
}

//initiate login fetch
async function onCreateUser(event)
{
    event.preventDefault();
    //aggregate data from form
    let userData = {
        "user_name":document.getElementById(`name-create`).value.trim(),
        "email":document.getElementById(`email-create`).value.trim(),
        "password":document.getElementById(`password-create`).value.trim(),
    }
    let loginResults = await postData(userData);
    //check status
    if(loginResults.ok)
    {
        document.location.replace('/profile');
    }
}

document
  .querySelector('.create-account-form')
  .addEventListener('submit', onCreateUser);