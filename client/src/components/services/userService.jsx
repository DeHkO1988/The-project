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

    if (!user.ok) {
        throw (result.message);
    };

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

    if (!user.ok) {
        throw ('E-mail already taken.');
    };

    const result = user.json();

    return result;

};

export const logout = async (user) => {

    try {

        const result = await fetch(`${baseUrl}/logout`, {
            method: 'GET',
            headers: {
                'X-Authorization': user.accessToken,
            }
        })

        return result;

    } catch (error) {

        alert(error);

        return;
    }

};