const submit = document.querySelector('.comment-submit');
const commentList = document.querySelector('.comments');
const commentInput = document.querySelector('.comment-input');
const authorList = document.querySelector('.authors');
const authorInput = document.querySelector('.author-input');

function template(data) {
    commentList.insertAdjacentHTML("beforeend", `
  <div class="comment flex items-start justify-start">
      <img class="comment-avatar" src="${data.avatar}" />
      <div class="flex-1">
        <h3 class="comment-author">${data.author}</h3>
        <p class="comment-body">${data.comment}</p>
      </div>
    </div>
  </div>`);
}

function appendComment(event) {

    const data = {
        avatar: "./assets/commentavatar.jpg",
        comment: commentInput.value,
        author: authorInput.value
    };

    event.preventDefault();
    // If the value is nothing just return
    if (commentInput.value.length < 1) return;
    if (authorInput.value.length < 1) return;

    // Insert new template into DOM
    template(data);

    // Reset textrea value
    authorInput.value = "";
    commentInput.value = "";

    // Save the list to localStorage
    localStorage.setItem('commentListing', commentList.innerHTML);
}

submit.addEventListener('click', appendComment, false)

// Check for saved wishlist items
const saved = localStorage.getItem('commentListing');

// If there are any saved items, update our list
if (saved) {
    commentList.innerHTML = saved;
}