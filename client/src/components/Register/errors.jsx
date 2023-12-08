
export const test = (registerData) => {

    const result = {};

    const usernamePattern = /[A-Za-z]+/;
    const emailPattern = /[A-Za-z1-9._]+@[a-z]+\.[a-z]+/;

    if (!emailPattern.test(registerData.email)) {
        result.email = 'Valid e-mail address.';
    };
    
    if (!usernamePattern.test(registerData.username) || registerData.username.length < 3) {
        result.username = 'More then 3 chars.';
    };

    if (registerData.password.length < 5) {
        result.password = 'More then 4 chars.';
    };

    if (registerData.repeatPassword !== registerData.password || registerData.repeatPassword.length < 5) {
        result.repeatPassword = 'Same as password.';
    };

    return result;

}