
export const test = (registerData) => {

    const result = {};

    const usernamePattern = /[A-Za-z]+/;
    const emailPattern = /[A-Za-z1-9._]+@[a-z]+\.[a-z]+/;

    if (!emailPattern.test(registerData.email)) {
        result.email = 'Invalid e-mail.';
    } else {
        delete result.email
    };

    if (!usernamePattern.test(registerData.username) || registerData.username.length < 3) {
        result.username = 'Username at least 3 char long and only chars from A-z.';
    } else {
        delete result.username;
    };

    if (registerData.password.length < 5) {
        result.password = 'Password length is less then 5 chars.';
    } else {
        delete result.password;
    };

    if (registerData.repeatPassword !== registerData.password || registerData.repeatPassword.length < 5) {
        result.repeatPassword = 'Repeat pass do not match password or less then 5 chars.';
    } else {
        delete result.repeatPassword;
    };

    return result;

}