const baseUrl = 'http://localhost:3030/data/cars';

export const getAll = async () => {

    try {

        const allCars = await fetch(baseUrl);

        const result = await allCars.json();

        return Object.values(result);

    } catch (error) {

        alert(error);

        return;

    };



};

export const getOne = async (carId) => {

    try {

        const car = await fetch(`${baseUrl}/${carId}`);

        const result = await car.json();

        return result;

    } catch (error) {

        alert(error);

        return;

    };

};

export const deleteCar = async (carId, user) => {

    try {

        await fetch(`${baseUrl}/${carId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': `${user.accessToken}`,
            },
        });

    } catch (error) {

        alert(error);

        return;

    };


};

export const create = async (data, user) => {

    const newCar = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': `${user.accessToken}`,
        },
        body: JSON.stringify({ ...data, owner: user.username }),
    });

    const result = await newCar.json();

    return result;

};

export const edit = async (data, user, id) => {

    try {

        const editedCar = await fetch(`${baseUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': `${user.accessToken}`,
            },
            body: JSON.stringify(data)
        });

        const result = await editedCar.json();

        return result;

    } catch (error) {

        alert(error);

        return;

    };

};

export const getMyPosts = async (userId) => {

    const uri = encodeURI(`"${userId}"`);

    try {
        const myPosts = await fetch(`${baseUrl}?where=_ownerId%3D${uri}`);

        const result = await myPosts.json();

        return result;

    } catch (error) {

        alert(error);

    };

};