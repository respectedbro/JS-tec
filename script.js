//1
const form1 = document.getElementById('form');
const savedInfo = document.querySelector('.saved');

const showContact = () => {
    const saved = localStorage.getItem('contact');

    if (saved) {
        const contact = JSON.parse(saved);
        savedInfo.innerHTML = `
          <p>Имя: ${contact.name}</p>
          <p>Телефон: ${contact.phone}</p>
          <p>Email: ${contact.email}</p>
    `;
    }
};
//
// document.addEventListener('DOMContentLoaded', showContact);

showContact();
form1.addEventListener('submit', (e) => {
    e.preventDefault();
    const formName = document.getElementById('name');
    const formPhone = document.getElementById('phone');
    const formEmail = document.getElementById('email');

    const contact = {
        name: formName.value,
        phone: formPhone.value,
        email: formEmail.value
    };

    localStorage.setItem('contact', JSON.stringify(contact));

    showContact();
});

//2


