/* anonymizes the username(local part) of an email ID, that is,
replace the username part with * characters.
*/
const emails = ['mary@northeastern.edu', 'ari@khoury.northeastern.edu', 'jk_neu.edu', 'jk@neu.edu', 'jsned@', 'ai_me@mugar.northeastern.edu',"pa"];
window.onload = function hideEmail() {
    const list = document.getElementById('emails')
    list.innerHTML = '';
    for (const email of emails) {

        if(email.match(/^[a-zA-Z0-9_]+@(.+\.)*northeastern.edu$/)){
           console.log(email)
           const listItem=document.createElement('li');
           maskedEmail = email.replace(/^[^@]+/, match => '*'.repeat(match.length));
           listItem.textContent = maskedEmail;
           list.appendChild(listItem);

        }
    }


}
