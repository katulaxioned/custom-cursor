var mouseCursor = document.querySelector('.cursor')
var mouseCursorImg = document.querySelector('.cursor img')
var avatarsLi = document.querySelectorAll('.avatars-menu li')
var avatarsWindow = document.querySelector('.avatars-window')

let selectedAvatarSrc

window.addEventListener('mousemove', cursor)

avatarsLi.forEach(avtar => {
    avtar.addEventListener('click', selectAvatar)
})

document.querySelector(".custom-space").addEventListener("mouseenter", updateAvatar)
document.querySelector(".custom-space").addEventListener("mouseleave", defaultAvatar)

function updateAvatar(e) {
    if (!selectedAvatarSrc) { return false}
    mouseCursorImg.src = "avatar2.png"
}

function defaultAvatar(e) {
    if (!selectedAvatarSrc) { return false}
    mouseCursorImg.src = selectedAvatarSrc
}

function selectAvatar(e) {
    if (e.target.tagName === "LI") {
        return false
    }
    selectedAvatarSrc = e.target.src
    mouseCursorImg.src = selectedAvatarSrc
    mouseCursor.classList.remove("display-none")
    avatarsWindow.classList.add("display-none")
    document.querySelector("html").classList.add("cursor-none")
}

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
    // mouseCursor.setAttribute("style", "top: " + e.pageY + "px; left: " + e.pageX + "px;")
}