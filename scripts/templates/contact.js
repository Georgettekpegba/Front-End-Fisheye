export function contactFormTemplate() {
    const modal = document.getElementById("contact_modal");
    const form = document.querySelector("form");
    const firstName = document.querySelector("input:nth-of-type(1)");
    const lastName = document.querySelector("input:nth-of-type(2)");
    const email = document.querySelector("input:nth-of-type(3)");
    const message = document.querySelector("#msg");
    const closeButton = document.querySelector(".contact_close_btn");
    const sendButton = document.querySelector(".contact_button");

    // Get all focusable elements inside modal
    const focusableElements = modal.querySelectorAll("input, textarea, button");
    let firstFocusableElement = focusableElements[0];
    let lastFocusableElement = focusableElements[focusableElements.length - 1];

    // ✅ Add ARIA attributes
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-labelledby", "contact-title"); // Ensure you have an element with id="contact-title"
    modal.setAttribute("aria-hidden", "true");

    // ✅ Function to open modal with accessibility improvements
    function displayModal() {
        console.log("Display contact form");
        modal.style.display = "block";
        modal.setAttribute("aria-hidden", "false");
        firstFocusableElement.focus(); // Focus on first input

        // Add event listener for keyboard navigation
        document.addEventListener("keydown", trapTabKey);
    }

    // ✅ Function to close modal with accessibility improvements
    function closeModal() {
        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true");

        // Remove event listener for keyboard navigation
        document.removeEventListener("keydown", trapTabKey);
    }

    // ✅ Trap focus inside the modal when open
    function trapTabKey(event) {
        if (event.key === "Tab") {
            if (event.shiftKey) {
                // Shift + Tab (move focus backward)
                if (document.activeElement === firstFocusableElement) {
                    event.preventDefault();
                    lastFocusableElement.focus();
                }
            } else {
                // Tab (move focus forward)
                if (document.activeElement === lastFocusableElement) {
                    event.preventDefault();
                    firstFocusableElement.focus();
                }
            }
        }
    }

    // ✅ Handle form submission
    function submitForm(event) {
        event.preventDefault();

        const firstNameValue = firstName.value.trim();
        const lastNameValue = lastName.value.trim();
        const emailValue = email.value.trim();

        console.log("Prénom:", firstNameValue);
        console.log("Nom:", lastNameValue);
        console.log("Email:", emailValue);

        closeModal();
        form.reset(); // Clear form
    }

    // ✅ Event listeners
    sendButton.addEventListener("click", submitForm);
    closeButton.addEventListener("click", closeModal);
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
    });

    return { displayModal, closeModal };
}
