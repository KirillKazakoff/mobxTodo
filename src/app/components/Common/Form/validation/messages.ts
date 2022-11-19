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
    newTodo: {
        valueMissing: 'Your todo is empty, input something',
    },
    login: {
        'Auth Failed': 'You have inserted wrong password',
        '404': 'There is no such user',
    },
    register: {
        '400': 'There is a registred user with same mail, try to sign in',
    },
    newTodoForm: {
        '400': "There is a server error, can't add this todo",
    },
};
