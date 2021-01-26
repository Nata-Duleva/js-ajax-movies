async function getData(url) {
    const response = await fetch(url, {
        method: 'GET', // просить , ЧИТАТЬ
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok) throw Error(response.status);
    return response.json();
}

// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/posts/1
// https://jsonplaceholder.typicode.com/posts/1/comments
// https://jsonplaceholder.typicode.com/comments?postId=1
getData(`https://jsonplaceholder.typicode.com/comments?postId=1`)
    .then((res) => console.log(res));


