const baseUrl = 'http://localhost:3030/users/login'

export const login = async (data) => {

        const user = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });

        
        const result = await user.json();

        if(result.code == '403') {
            throw new Error('Username or password is incorrect!');
        }

        return result;

}