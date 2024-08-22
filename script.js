document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#cadastro-form');
    const nomeInput = document.querySelector('#nome');
    const emailInput = document.querySelector('#email');
    const senhaInput = document.querySelector('#senha');
    const confirmarSenhaInput = document.querySelector('#confirmar-senha');
    const message = document.querySelector('#message');

    
    const salvarDadosCadastro = (nome, email, senha) => {
        const usuario = { nome, email, senha };
        localStorage.setItem(email, JSON.stringify(usuario));
    };

    
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nome = nomeInput.value;
        const email = emailInput.value;
        const senha = senhaInput.value;
        const confirmarSenha = confirmarSenhaInput.value;

        
        if (senha !== confirmarSenha) {
            message.textContent = 'As senhas não coincidem. Tente novamente.';
            message.style.color = 'red';
            return;
        }

       
        if (localStorage.getItem(email)) {
            message.textContent = 'Este email já está cadastrado.';
            message.style.color = 'red';
        } else {
           
            salvarDadosCadastro(nome, email, senha);
            message.textContent = 'Cadastro realizado com sucesso!';
            message.style.color = 'green';
            form.reset();
        }
    });
});
