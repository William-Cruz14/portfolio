let secretPassword = "";

export const getPassword = () => {
    // Reseta a senha para forçar nova geração
    secretPassword = "";

    // Define a base da senha
    for (let i = 0; i < 4; i++) {
        let numRandom = Math.ceil(Math.random() * 10);
        numRandom < 10 && !secretPassword.includes(String(numRandom)) ? secretPassword += numRandom : i -= 1;
    }

    return secretPassword;
}

export const passwordAttemp = (attempt) => {
    if(attempt === secretPassword) {
        return true;
    }

    let result = attempt.split("");

    for (let i = 0; i < secretPassword.length; i++) {
        if(attempt.at(i) === secretPassword.at(i)) {
            result[i] = "A";
        } else if(secretPassword.includes(attempt.at(i)) ) {
            result[i] = "B";
        }
    }

    return result.join("");
}