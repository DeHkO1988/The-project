
export const validation = (data) => {

    const result = {};

    const imgPattern = /^https|^http/;

    if (data.brand.length < 5) {
        result.brand = 'Brand length too short.';
    } else {
        delete result.brand;
    };

    if (data.fuel.length < 5) {
        result.fuel = 'Fuel length too short.';
    } else {
        delete result.fuel;
    };

    if (data.mileage <= 0) {
        result.mileage = 'Have to be positive number.';
    } else {
        delete result.mileage;
    };

    if (data.registration < 1900 || data.registration > 2023) {
        result.registration = 'Year of manufacture between 1900 and 2023.';
    } else {
        delete result.registration;
    };

    if (!imgPattern.test(data.imageUrl)) {
        result.imageUrl = 'Have to start whit http or https.';
    } else {
        delete result.imageUrl;
    }

    if (data.description.length < 10) {
        result.description = 'Opinion at least 10 chars.';
    } else {
        delete result.description;
    }

    return result;

};