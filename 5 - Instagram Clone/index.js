const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postElement = document.getElementById("post")
let listItems = ""

function renderPost() {
    for (let i=0; i < posts.length; i++) {
        listItems += `
        <div class="post-el">
            <div class="poster">
                <div>
                    <img class="poster-avatar" src="${posts[i].avatar}">
                </div>
                <div class="poster-metadata">
                    <h5 class="poster-name">${posts[i].name}</h5>
                    <p class="poster-location">${posts[i].location}</p>
                </div>
            </div>
            <img class="image-posted" src="${posts[i].post}">
            <div class="bottom-content">
                <div class="icons">
                    <img id="likes-btn-${[i]}" class="ico" src="images/icon-heart.png">
                    <img class="ico" src="images/icon-comment.png">
                    <img class="ico" src="images/icon-dm.png">
                </div>
                <div>
                    <p class="likes-el">${posts[i].likes} likes</p>
                </div>
                <div class="comment-section">
                    <p class="username">${posts[i].username}</p>
                    <p class="comment">${posts[i].comment}</p>
                </div>
            </div>
        </div>`
    }
    postElement.innerHTML = listItems
}

renderPost ()