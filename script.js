console.log('Hello World');

// document.querySelector(".cta-button").addEventListener("click", (e)=>{
//     alert("Option will be available soon.")
// })

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.className = "show";

    setTimeout(() => {
        toast.className = toast.className.replace("show", "");
    }, 3000);
}
document.querySelectorAll(".cta-button").forEach(btn => {
    btn.addEventListener("click", () => {
        showToast("Luxury takes time, stay tuned.")
    });
});