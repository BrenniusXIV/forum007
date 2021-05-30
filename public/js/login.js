<<<<<<< HEAD
// //get login button
// let loginButton = $('login-button');

// //send data to login route
// async function postData()
// {
//     //
// }

// //initiate login fetch
// async function onLoginButton()
// {
//     let loginResults = await postData();

// }

// //assign function to login button
// loginButton.click(onLoginButton);
=======
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
        document.location.replace('/profile');
    }
}

document
  .querySelector('.login-form')
  .addEventListener('submit', onLogin);
>>>>>>> 4b49737ade8b25c4c68e3e4055edd1c03e12cb3f
