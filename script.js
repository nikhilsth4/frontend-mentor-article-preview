const userContainer = document.querySelector(".article__card-user")

const shareBtn = document.querySelector(".article__card-share-image")


shareBtn.addEventListener("click", function () {
  userContainer.classList.toggle("social-expanded")
})
