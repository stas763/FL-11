const userMail = prompt('Enter your email');
const minStMail = 6;


if (userMail === '' || userMail === null ) {
  alert('Canceled');
} else if (userMail && userMail.length <= minStMail) {
  alert('I dont know any emails having name length less than 6 symbols');
}
