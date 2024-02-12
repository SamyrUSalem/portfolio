//Semd Email
document.querySelector(".contact-form").addEventListener("submit", (event) => {
    event.preventDefault()

    const nameIn = document.getElementById("name"),
        emailIn = document.getElementById("email"),
        subjectIn = document.getElementById("subject"),
        messageIn = document.getElementById("message");

    const name = nameIn.value,
        email = emailIn.value,
        subject = subjectIn.value,
        message = messageIn.value;

    console.log(name, email, subject, message)

    if (name && email && subject && message) {
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "formsportfolio@gmail.com",
            Password: "AA0350CE0A0B624A3B1789D3C964AD06041A",
            To: 'samyruchoasalem@gmail.com',
            From: "formsportfolio@gmail.com",
            Subject: `${subject}`,
            Body: `${name}, com o email: ${email}, disse:${message}`
        }).then(() => {
            //Redirect page 
            nameIn.value = ""
            emailIn.value = ""
            subjectIn.value = ""
            messageIn.value = ""
            window.location.href = "../thanks.html"
        }
        );
    }
})






