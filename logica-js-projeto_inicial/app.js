const chooseRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const verifyUserNumberToChosenNumber = (userNumber) => {
    
    const numberSecret = chooseRandomNumber();
    
    while(true) {

        if (userNumber === numberSecret) { 

            alert('Você acertou!');
            break;
        } 
        
        else if (userNumber < numberSecret) 
            alert('O número digitado é menor')
        ;
        
        else 
            alert('O número digitado é maior')
        ;

        userNumber = inputUserNumber();
    }
}

const inputUserNumber = () => Number(prompt('Escolha um número'));

const main = () => {

    let userNumberChosen = inputUserNumber();
    verifyUserNumberToChosenNumber(userNumberChosen);
}

main();
