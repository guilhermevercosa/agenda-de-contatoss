document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const contactsTable = document.getElementById('contactsTable').getElementsByTagName('tbody')[0];

    // Função para adicionar um contato à tabela
    function addContact(name, phone) {
        // Cria uma nova linha
        const newRow = contactsTable.insertRow();

        // Cria e insere células para nome e telefone
        const nameCell = newRow.insertCell(0);
        const phoneCell = newRow.insertCell(1);

        // Define o texto das células
        nameCell.textContent = name;
        phoneCell.textContent = phone;
    }

    // Adiciona um evento de submissão ao formulário
    contactForm.addEventListener('submit', function(event) {
        // Evita o comportamento padrão do formulário (recarregar a página)
        event.preventDefault();

        // Obtém os valores dos campos de entrada
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;

        // Adiciona o contato à tabela
        addContact(name, phone);

        // Limpa os campos do formulário
        contactForm.reset();
    });
});