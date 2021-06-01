async function putData(user_id, data)
{
    let fetchResult = await fetch(`/api/user/${user_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return fetchResult;

}


async function updateProfile(ev) { 
    ev.preventDefault();  
    let userId = this.getAttribute("userId");
    let userName = document.getElementById('name-create').value
    let userEmail = document.getElementById('email-user').value
    let userPassword = document.getElementById('password-field').value
    await putData(userId, {
        user_name: userName,
        email: userEmail,
        password: userPassword,
    });
console.log(userId, userEmail, userName, 'updating profile')
}

document.getElementById('update-button').addEventListener('click', updateProfile);