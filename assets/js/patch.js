async function patchData(url, body) {
    const response = await fetch(url, {
        method: 'PATCH', //  ОБНОВЛЯТЬ
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok) throw Error(response.status);
    return response.json();
}

// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/posts/1/comments
// https://jsonplaceholder.typicode.com/comments?postId=1


// https://jsonplaceholder.typicode.com/posts/1
patchData(`https://jsonplaceholder.typicode.com/posts/1`, {
    title: 'title text',
    descr: 'description text',
    body: 'body text long text',
    name: 'John',
    age: '42',
    userId: '00111'
})
    .then((res) => console.log(res))
    .catch(err => console.log(err));


