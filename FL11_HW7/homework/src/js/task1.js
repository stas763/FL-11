let userMail = prompt('Enter your email');
const minStMail = 6;
const minStPas = 5;
let userPass = 'UserPass';
let adminPass = 'AdminPass';

if (userMail === '' || userMail === null ) {
  alert('Canceled');
} else if (userMail && userMail.length <= minStMail) {
    alert('I don’t know any emails having name length less than 6 symbols');
  }

if (userMail === 'user@gmail.com' || userMail === 'admin@gmail.com') {
  let password = prompt('Enter your password');

  if (password === '' || password === null) {
    alert('Canceled');
  }
  if (userMail === 'user@gmail.com' && password === 'UserPass' ||
   userMail === 'admin@gmail.com' && password === 'AdminPass') {
     let changePassword = confirm('Do you want to change your password?');
     if (changePassword) {
       let oldPassword = prompt('write the old password')
       if (oldPassword === '' || oldPassword === null) {
         alert('You have failed the change.');
       } else if (oldPassword === password) {
         password = prompt('write new password');
         if (password.length < minStPas) {
           alert('It’s too short password. Sorry.');
         } else {
           let newPassword = prompt('enter it again');
           if (password === newPassword) {
             alert('You have successfully changed your password.');
           } else {
             alert('You wrote the wrong password.');
           }
         }
       }
     }
   }
} else {
  alert('I don’t know you');
}
