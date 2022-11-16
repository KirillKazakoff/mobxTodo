type MessagesT = { [key: string]: any };

export const messages: MessagesT = {
    name: {
        valueMissing: 'Input your name',
    },
    mail: {
        valueMissing: 'Input your email',
        patternMismatch: 'You typed your email wrong',
    },
    password: {
        valueMissing: 'Input your password',
        incorrectLength: 'Password should be between 5 and 10 symbols',
        wrongResponse: 'Incorrect password',
    },
    checkPassword: {
        valueMissing: 'Confirm your password',
        valueMismatch: "Your field doesn't match with password",
    },
    login: {
        'loginFailed': 'You have inserted wrong password',
        'Not Found': 'There is no such user',
    },
    register: {
        registrationFailed: 'There is a registred user with same mail, try to sign in',
    },
};
