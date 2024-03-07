const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const uname = document.querySelector("#uname");
const passwordconfirm = document.querySelector("#passwordconfirm");
const email = document.querySelector("#email")
const submitbttn = document.querySelector("#btnsubmit");

function check_password() {
    const password = document.querySelector("#password");
    const messagepassword = document.querySelector("#messagepssw");
    if (password.value !== passwordconfirm.value) {
        password.style.borderBottomColor = "red";
        passwordconfirm.style.borderBottomColor = "red";
        messagepassword.textContent = 'Passwords do not match';
        messagepassword.style.color = 'white';
    } else {
        password.style.borderBottomColor = "green";
        passwordconfirm.style.borderBottomColor = "green";
        messagepassword.textContent = '';
    }
}

function checkemail() {
    const messageemail = document.querySelector("#messageemail");
    var regex = /^[a-zA-Z0-9_.\-]+@byui\.edu$/;

    messageemail.style.width = "200px";
    messageemail.style.height = "20px";
    messageemail.style.textAlign = "center";

    if (regex.test(email.value)) {
        messageemail.textContent = "BYUI email verified.";
        messageemail.style.backgroundColor = "green";
        messageemail.style.color = 'white';
    } else {
        messageemail.textContent = "This is not a BYUI email";
        messageemail.style.backgroundColor = "red";
        messageemail.style.color = 'white';
    }
}

function thanksmessage(fname, lname, uname, passwordconfirm, email) {

    if (fname !== "" && lname !== "" && uname !== "" && passwordconfirm !== "" && email !== "") {

        const form = document.querySelector('.wf1');

        while (form.firstChild) {
            form.removeChild(form.firstChild);
        }

        const paragraph1 = document.createElement("p");
        const paragraph2 = document.createElement("p");
        const paragraph3 = document.createElement("p");
        const paragraph4 = document.createElement("p");
        const paragraph5 = document.createElement("p");
        const paragraph6 = document.createElement("p");
        paragraph1.style.color = "navy";
        paragraph2.style.color = "navy";
        paragraph3.style.color = "navy";
        paragraph4.style.color = "navy";
        paragraph5.style.color = "navy";
        paragraph6.style.color = "navy";
        paragraph1.textContent = `Thanks for submitting your user profile. This is the information that you provided:`;
        paragraph2.textContent = `- First name: ${fname}`;
        paragraph3.textContent = `- Last name: ${lname}`;
        paragraph4.textContent = `- User name: ${uname}`;
        paragraph5.textContent = `- Password: ⊠⊠⊠⊠⊠${passwordconfirm.slice(-4)}`;
        paragraph6.textContent = `- Email: ${email}`;

        form.appendChild(paragraph1);
        form.appendChild(paragraph2);
        form.appendChild(paragraph3);
        form.appendChild(paragraph4);
        form.appendChild(paragraph5);
        form.appendChild(paragraph6);
        form.style.textAlign = "center";
        form.style.backgroundColor = "white";

    }
}

passwordconfirm.addEventListener("focusout", check_password);
email.addEventListener("focusout", checkemail);
submitbttn.addEventListener("click", function () {
    thanksmessage(fname.value, lname.value, uname.value, passwordconfirm.value, email.value);
});

