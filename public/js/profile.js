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

document.getElementById('update-button').addEventListener('click', updateProfile);




async function updateProfile(ev) { 
    ev.preventDefault();  
    let userId = this.getAttribute("userId");
    let userName = document.getElementById('name-create').value
    let userEmail = document.getElementById('email-user').value
    await putData(userId, {
        user_name: userName,
        email: userEmail,
    });
console.log(userId, userEmail, userName, 'updating profile')
}

