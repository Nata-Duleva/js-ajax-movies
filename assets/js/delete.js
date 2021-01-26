async function deleteData(url, body) {
    const response = await fetch(url, {
        method: 'DELETE', //  УДАЛЯТЬ
    });
    if (!response.ok) throw Error(response.status);
    return response.json();
}

// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/posts/1/comments
// https://jsonplaceholder.typicode.com/comments?postId=1


// https://jsonplaceholder.typicode.com/posts/1
deleteData(`https://jsonplaceholder.typicode.com/posts/1`)
    .then((res) => console.log(res))
    .catch(err => console.log(err));


