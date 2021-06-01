//send data to user route
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

//initiate create user fetch
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
    } else if (loginResults.status === 409) {
        alert('Your username or e-mail address is already in use. Please try again.')
        return
    } else {
        alert('Something else went wrong. Please let us know if you hit this error!')
        return
    }
}

document
  .querySelector('.create-account-form')
  .addEventListener('submit', onCreateUser);