window.onload = () => {
const modalShowTrigger = document.querySelector(".modal-trigger")
const modalCloseTrigger = document.querySelector(".close")
const bgBlackout = document.querySelector(".bg-blackout");
const modal = document.querySelector(`[data-modal="kanye"]`)
const quoteDiv = document.getElementById("quote")

    // make modal visible and background blacked out on button click
    modalShowTrigger.addEventListener("click", () => {
        modal.classList.add("is-visible")
        bgBlackout.classList.add("is-blacked-out")
    })

    const resetStyles = () => {
        modal.classList.remove("is-visible")
        bgBlackout.classList.remove("is-blacked-out")
    }

    // remove these visible classes on close button click or backdrop click
    modalCloseTrigger.addEventListener("click", resetStyles)
    bgBlackout.addEventListener("click", resetStyles)

    fetch("https://api.kanye.rest")
    .then(res => res.json())
    .then(json => {
        quoteDiv.innerText = json.quote })
}