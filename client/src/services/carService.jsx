const baseUrl = 'http://localhost:3030/jsonstore/users';

export const getAll = async () => {

    const allCars = await fetch(baseUrl);

    const result = await allCars.json();

    return Object.values(result);

};

export const getOne = async (carId) => {
    const car = await fetch(`${baseUrl}/${carId}`);

    const result = await car.json();
    
    return result;
}