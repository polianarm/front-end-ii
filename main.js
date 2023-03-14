/* a. O formulário deve ter pelo menos 4 campos: Título, Descrição e URL da imagem e um Botão de submit.
b. Após o preenchimento, ao clicar no botão de submit, as informações devem ser validadas e adicionadas à lista de cards 
na página.
➔ Dica: Você pode acrescentar outros campos ao formulário para deixar a aplicação mais completa.

5. Validações esperadas: 
a. Nenhum campo do formulário pode ser nulo e/ou vazio. ok
b. Os campos Título e Descrição devem possuir ao menos 4 caracteres. ok
c. O botão de cadastro/submit só deve estar disponível/habilitado, 
quando todas as validações tiverem sido realizadas corretamente.
d. Um novo card só deve ser cadastrado, quando todas as validações tiverem sido realizadas corretamente.*/


const inputTitleRef = document.querySelector('#title')
const inputImageRef = document.querySelector('#image')
var formErrors = {

    title: true
    image: true

}

function validateInput(inputRef) {

    const inputValid = inputRef.checkValidity()
    const div = inputRef.parentElement

    if(inputValid) {

        div.classList.remove('error')

   } else {

   div.classList.add('error')

   }


}


inputEmailRef.addEventListener('keyup', validateEmail) //keyup> validar após a escrita 