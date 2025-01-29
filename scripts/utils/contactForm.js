
export function displayModal() {
    console.log("display modal");
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
}

export function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

export function closeModalEscape(e) {
    if (e.key == "Escape") {
        closeModal();
    }
}
