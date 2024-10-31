// class QuoteComponent extends HTMLElement {

// 	constructor(...args) {
//         super(...args);
//     }

//     static get observedAttributes() {
//         return ['id', 'author', 'quote'];
//     }
//     get author() {
//         return this.getAttribute('author');
//     }
//     get quote() {
//         return this.getAttribute('quote');
//     }
//     attributeChangedCallback(attrName, oldVal, newVal) {
//         this.render();
//     }
//     render(){
//     	var template = `<div class="quote">`
// 	template += `<span class="quoted">“${this.quote}”</span>`
//         template += `<span class="author">- ${this.author}</span>`
// 	template += `</div>`;
//         this.innerHTML = template;
//     }
// }


// window.customElements.define('post', QuoteComponent);


const body = document.querySelector("body");
const container = document.querySelector(".container");
const postTags = document.querySelectorAll("Post");

const posts = [];
postTags.forEach(element => {

    let title = element.getAttribute("title");
    let content = element.textContent;

    let postContainer = document.createElement("div");
    let postTitle = document.createElement("h2");
    let postContent = document.createElement("article");

    postTitle.textContent = title;
    postContent.textContent = content;

    postTitle.classList.add("post-title");
    postContent.classList.add("post-content");
    postContainer.classList.add("post")

    postContainer.appendChild(postTitle);
    postContainer.appendChild(postContent);

    container.removeChild(element)
    container.appendChild(postContainer)
});

// ideas: labels and category of post, add date for each post + black dark footer as:  https://dribbble.com/shots/24565936-Minimal-blog-Untitled-UI
// https://animated-fluent-emoji.vercel.app/


function toggleDarkMode() {
    const body = document.body;
    const buttonDarkMode = document.getElementById('toggleDarkMode');
    const dataTheme = body.getAttribute('data-theme');

    console.log(buttonDarkMode, dataTheme)
    if (dataTheme === 'dark') {
        body.setAttribute('data-theme', 'light');
        buttonDarkMode.textContent = 'حالت شب';
    } else {
        body.setAttribute('data-theme', 'dark');
        buttonDarkMode.textContent = 'حالت روز';
    }
}
