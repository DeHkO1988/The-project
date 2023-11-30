const baseUrl = 'http://localhost:3030/data/likes';

export const getAllLikes = async (carId) => {


    const uri = encodeURI(`"${carId}"`);

    try {
        const likes = await fetch(`${baseUrl}?where=postId%3D${uri}`);

        const result = await likes.json();

        return result;

    } catch (error) {

        alert(error);

    }

    // const allLikes = await fetch(baseUrl);

    // const result = await allLikes.json();

    // return result;
};

export const addLike = async (user, carId) => {

    const like = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': `${user.accessToken}`,
        },
        body: JSON.stringify({
            owner: user.username,
            postId: carId,
        }),
    });

    const result = await like.json();

    return result;
};

export const removeLike = async (userId, userAccessToken, carId, likes) => {

    const url = `${baseUrl}?where=postId%3D%22${carId}%22 AND _ownerId%3D%22${userId}%22`;

    const likeId = await fetch(url);

    const result = await likeId.json();

    await fetch(`${baseUrl}/${result[0]._id}`, {
        method: 'DELETE',
        headers: {
            //'Content-Type': 'application/json',
            'X-Authorization': userAccessToken,
        },
    });

};