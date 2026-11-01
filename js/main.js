document.addEventListener("DOMContentLoaded", function () {
    
    // 1. ACCORDION TOGGLE
    const accordionHeaders = document.querySelectorAll(".accordion-header");
    accordionHeaders.forEach(header => {
        header.addEventListener("click", function () {
            const content = this.nextElementSibling;
            const icon = this.querySelector("i");
            
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.style.padding = "0 15px";
                if (icon) icon.className = "fas fa-chevron-down";
            } else {
                // Close other open accordions
                document.querySelectorAll(".accordion-content").forEach(c => {
                    c.style.maxHeight = null;
                    c.style.padding = "0 15px";
                });
                document.querySelectorAll(".accordion-header i").forEach(i => i.className = "fas fa-chevron-down");
                
                content.style.maxHeight = content.scrollHeight + 30 + "px";
                content.style.padding = "15px";
                if (icon) icon.className = "fas fa-chevron-up";
            }
        });
    });

    // 2. LIGHTBOX GALLERY
    const lightbox = document.getElementById("LightboxModal") || document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img") || document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close-lightbox") || document.querySelector(".lightbox-close");

    if (lightbox && lightboxImg && closeBtn) {
        // Selects images across portfolio cards
        const galleryImages = document.querySelectorAll(".portfolio-card img, .gallery img, .about-img img, .service-card img, img.portfolio-img, main img");

        galleryImages.forEach(img => {
            img.style.cursor = "pointer";
            img.addEventListener("click", function () {
                lightbox.style.display = "flex";
                lightboxImg.src = this.src;

            });
        });

        if (closeBtn) {
            closeBtn.addEventListener("click", function () {
                lightbox.style.display = "none";
            });
        }

        lightbox.addEventListener("click", function (e) {
            if (e.target === lightbox) {
                lightbox.style.display = "none";
            }
        });
    }

    // 3. ENQUIRY FORM VALIDATION & DYNAMIC CALCULATOR
    const enquiryForm = document.getElementById("enquiryForm");
    if (enquiryForm) {
        enquiryForm.addEventListener("submit", function (e) {
            e.preventDefault();
            
            let isValid = true;
            const fullname = document.getElementById("fullname").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const service = document.getElementById("service").value;
            const date = document.getElementById("event-date").value;

            // Clear errors
            document.querySelectorAll(".error-message").forEach(el => el.textContent = "");

            if (!fullname) {
                document.getElementById("fullnameError").textContent = "Please enter your full name.";
                isValid = false;
            }

            const phonePattern = /^(\+27|0)[6-8][0-9]{8}$/;
            if (!phone || !phonePattern.test(phone.replace(/\s+/g, ''))) {
                document.getElementById("phoneError").textContent = "Enter a valid 10-digit SA phone number (e.g. 0733595208).";
                isValid = false;
            }

            if (!service) {
                document.getElementById("serviceError").textContent = "Please select a required service.";
                isValid = false;
            }

            if (!date) {
                document.getElementById("dateError").textContent = "Please select a target date.";
                isValid = false;
            }

            if (isValid) {
                // Dynamic Response Processing
                let estimate = "";
                let duration = "";

                switch(service) {
                    case "traditional":
                        estimate = "R1,200 - R3,500";
                        duration = "7 to 14 business days";
                        break;
                    case "wedding":
                        estimate = "R4,500 - R12,000";
                        duration = "3 to 6 weeks";
                        break;
                    case "alterations":
                        estimate = "R150 - R450";
                        duration = "2 to 4 business days";
                        break;
                    default:
                        estimate = "Custom quote required";
                        duration = "1 to 3 business days";
                }

                const responseCard = document.getElementById("enquiryResponse");
                responseCard.style.display = "block";
                responseCard.innerHTML = `
                    <h4><i class="fas fa-check-circle"></i> Enquiry Submitted Successfully!</h4>
                    <p><strong>Client:</strong> ${fullname}</p>
                    <p><strong>Estimated Price Range:</strong> ${estimate}</p>
                    <p><strong>Estimated Turnaround:</strong> ${duration}</p>
                    <p><em>Thank you! We will contact you at ${phone} to confirm availability for ${date}.</em></p>
                `;
                enquiryForm.reset();
            }
        });
    }

    // 4. CONTACT FORM AJAX SUBMISSION
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const fullname = document.getElementById("fullname").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();
          
            let isValid = true;

            // clear previous error messages
            document.querySelectorAll(".error-message").forEach(el => el.textContent = "");

            if (!fullname) {
                document.getElementById("contactNameError").textContent = "Please enter your full name.";
                isValid = false;
            }

            if (!email|| !email.includes("@")) {
                document.getElementById("contactEmailError").textContent = "Please enter a valid email address.";
                isValid = false;
            }

            if (!subject) {
                document.getElementById("contactSubjectError").textContent = "Please enter a subject.";
                isValid = false;
            }

            if (!message) {
                document.getElementById("contactMessageError").textContent = "Please enter your message.";
                isValid = false;
            }

            if (isValid) {
                const responseBox = document.getElementById("contactResponse");
                responseBox.style.display = "block";
                responseBox.innerHTML = `
                    <h4><i class="fas fa-paper-plane"></i> Message Sent Successfully!</h4>
                    <p>Thank you, <strong>${fullname}</strong>. We have received your message regarding "<em>${subject}</em>". It has been sent successfully.</p>
                `;
                contactForm.reset();

            }
        });
    }
});

// 5. SEARCH & FILTER FUNCTIONS
function filterServices() {
    const input = document.getElementById("serviceSearch").value.toLowerCase();
    const cards = document.querySelectorAll(".service-card");
    const statusMessage = document.getElementById("searchStatus");

    let visibleCount = 0;

    cards.forEach(card => {
        const text = card.textContent.toLowerCase();

        if (text.includes(input)) {
            card.style.display = "block";
            visibleCount++;
        } else {
            card.style.display = "none";
        }

        card.style.display = text.includes(input) ? "block" : "none";
    });

    // Provide feedback on the number of results found
    if (statusMessage) {
        if (input.trim() === "") {
            statusMessage.textContent = "";
        } else if (visibleCount  > 0) {
            statusMessage.textContent = `Showing ${visibleCount} result(s)for "${input}"`;
        } else {
            statusMessage.textContent = `No matching services found for "${input}"`;
        }
    }
}

function filterCategory(category, event) {
    const cards = document.querySelectorAll(".service-card");
    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(btn => btn.classList.remove("active"));

    // highlight the clicked button
    if (event && event.target) {
    event.target.classList.add("active");
    }

    cards.forEach(card => {
        if (category === "all" || card.getAttribute("data-category") === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// Accordion toggle Functionality 
document.addEventListener("DOMContentLoaded", function () {

const accordions = document.querySelectorAll(".accordion-header");

accordions.forEach(accordion => {
    accordion.addEventListener("click", function () {
        this.classList.toggle("active");

        // Find the item and then locate the content section within that item
        const item = this.parentElement;
        item.classList.toggle("active");
    });
});
});
