
export const validation = (data) => {

    const result = {};

    const imgPattern = /^https|^http/;

    if (data.brand.length < 5) {
        result.brand = 'At least 5 chars.';
    } else {
        delete result.brand;
    };

    if (data.fuel.length < 5) {
        result.fuel = 'At least 5 chars.';
    } else {
        delete result.fuel;
    };

    if (data.mileage <= 0) {
        result.mileage = 'Have to be positive number.';
    } else {
        delete result.mileage;
    };

    if (data.registration < 1900 || data.registration > 2023) {
        result.registration = 'Number between 1900 and 2023.';
    } else {
        delete result.registration;
    };

    if (!imgPattern.test(data.imageUrl)) {
        result.imageUrl = 'Picture URL must start whit http or https.';
    } else {
        delete result.imageUrl;
    }

    if (data.description.length < 10) {
        result.description = 'At least 10 chars.';
    } else {
        delete result.description;
    }

    return result;

};