console.log('login');

function login(){

    const email = `jota1@gmail.com`
    const senha = `12345`

    const emailInput = document.getElemnetById('email').value;
    const senhaInput = document.getElemnetById('senha').value;

    console.log(`Email: ${emailInput}, Senha ${senhaInput}`);

    if(emailInput == email && senhaInput == senha) {
        console.log(`Login bem-sucedido`);

        alert(`seja bem-vindo`);
    } else {
        console.log("Login falhou");
        alert("Usuário ou senha inválido");
    }

}