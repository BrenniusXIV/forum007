var defaultThreads = [
    {
        id: 1,
        title: "Gaming",
        author: "trenton",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Brent",
                date: Date.now(),
                content: "Hey"
            },
            {
                author: "Ryan",
                date: Date.now(),
                content: "Hey"
            }
        ]
    },
    {
        id: 2,
        title: "Crypto",
        author: "Brent",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "lane",
                date: Date.now(),
                content: "hi"
            },
            {
                author: "Chandler",
                date: Date.now(),
                content: "hi"
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}