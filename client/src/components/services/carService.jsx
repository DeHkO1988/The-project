const baseUrl = 'http://localhost:3030/data/cars';

export const getAll = async () => {

    const allCars = await fetch(baseUrl);

    const result = await allCars.json();

    return Object.values(result);

};

export const getOne = async (carId) => {
    const car = await fetch(`${baseUrl}/${carId}`);

    const result = await car.json();

    return result;
};

// export const deleteCar = async (carId) => {
//     await fetch(`${baseUrl}/${carId}`, {
//         method: 'DELETE',
//     });
// };

export const create = async (data, user) => {
    const newCar = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': `${user.accessToken}`,
        },
        body: JSON.stringify({...data, owner: user.username}),
    });

    const result = await newCar.json();

    return result;

}