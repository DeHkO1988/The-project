const baseUrl = 'http://localhost:3030/users/'

export const login = async (data) => {

        const user = await fetch(`${baseUrl}/login`, {
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

};

export const register = async (data) => {
    const user = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: data.email,
            username: data.username,
            password: data.password,
        })
    });

    const result = user.json();

    return result;
}