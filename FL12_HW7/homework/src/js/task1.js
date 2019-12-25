let email = prompt('Enter your email:', '');
let password;
let newPassword;
let minEmailLength = 5
let minNewEmailLength = 6
let confirmChangePass;
if (email === '' || email === null) {
    alert('Canceled')
} else if (email.length < minEmailLength) {
    alert("I don't know any emails having name length less than 5 symbols")
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
    password = prompt('Enter your password:', '')
    if (password === '' || password === null) {
        alert('Canceled')
    } else if (email === 'user@gmail.com' && password === 'UserPass'
        || email === 'admin@gmail.com' && password === 'AdminPass') {
        confirmChangePass = confirm('Do you want to change your password?')
        if (confirmChangePass) {
            password = prompt('Enter your old password:')
            if (password === '' || password === null) {
                alert('Canceled')
            } else if (email === 'user@gmail.com' && password === 'UserPass'
                || email === 'admin@gmail.com' && password === 'AdminPass') {
                password = prompt('Enter your new password:')
                if (password === '' || password === null) {
                    alert('Canceled')
                } else if (password.length < minNewEmailLength) {
                    alert('It’s too short password. Sorry')
                } else {
                    newPassword = prompt('Enter again your new password:')
                    if (password === newPassword) {
                        alert('You have successfully changed your password')
                    } else {
                        alert('You wrote the wrong password.')
                    }
                }
            } else {
                alert('Wrong password')
            }
        } else {
            alert('You have failed the change')
        }

    } else {
        alert('Wrong password')
    }
} else {
    alert('I don’t know you')
}



