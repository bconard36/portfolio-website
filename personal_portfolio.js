// Create an array for projects to add to the portfolio
document.addEventListener("DOMContentLoaded", () => {
    // Define and create my projects in an array
    const PROJECTS = [
        {
            title: "Food Cart Mobile Website",
            image: "images/cropped_burrito_masala.png",
            description: "A mobile-first food cart website mockup built with Figma.",
            process: "Gathered requirements, created user personas, stories and journeys," + 
            " performed content inventory, and designed both low and high-fidelity mock-ups.",
            outcome: "A fully polished, mobile-optimized mock-up ready for developer hand-off." + 
            " Gained hands-on experience with the full UI/UX life-cycle using Figma.",
            link: "https://www.figma.com/design/Xb952BTTvL3Vb9okv3n0q5/Burrito-Masala-Mockup?node-id=0-1&t=Ddis7IVUEBLafCh7-1",
            technologies: [
                "Figma"
            ]
        },
        {
            title: "Multi-Page Website",
            image: "images/portland_historical_tours_screenshot.png",
            description: "A multi-page website for a fictional tour company based out of Portland, OR.",
            process: "Coded the entire site from scratch using HTML and CSS, following mobile-first principles" + 
            " and applying course concepts to create a user-friendly experience.",
            outcome: "A polished, responsive website optimized for multiple devices." + 
            " Met all client and course requirements — and earned a perfect score.",
            link: "https://github.com/bconard36/Portland-Historical-Tours",
            technologies:[
                "HTML",
                "CSS",
                "Brackets"
            ]
        },
        {
            title: "Mobile E-Commerce Website",
            image: "images/SkuSucks_ScreenShot.png",
            description: "Currently designing & creating an e-commerce website for a client who owns a clothing business.",
            process: "After collaboration meetings with my client, both low-fidelity and high-fidelity mock-ups were" + 
            " updated and slight modifications were made to the source code to reflect the client's vision.",
            outcome: "Still in process, outcomes will appear once the project is finished!",
            link: "https://www.figma.com/design/dIfFZAlobZcwnenE2vjXud/SkuSuks-Wireframe?t=Ddis7IVUEBLafCh7-1",
            technologies: [
                "Figma",
                "HTML",
                "CSS",
                "JavaScript",
                "VSCode"
            ]
        }
    ];
    // Select the container in the HTML
    const PROJECT_LIST = document.getElementById("project-list");

    // Loop through projects and create HTML for each 
    PROJECTS.forEach(project => {
        const PROJECT_CARD = document.createElement("div");
        PROJECT_CARD.classList.add("project-card");

        PROJECT_CARD.innerHTML = `
        <h3>${project.title}</h3>
        <div class="project-image">
            <img src="${project.image}" alt="${project.title} screenshot">
        </div>
        <p><strong>Description: </strong>${project.description}</p>
        <p><strong>Process: </strong>${project.process}</p>
        <p><strong>Outcome: </strong>${project.outcome}</p>
        <p><strong>Technologies:</strong> ${project.technologies.join(", ")}</p>
        <a href="${project.link}" target="_blank">View Project</a>`;

        PROJECT_LIST.appendChild(PROJECT_CARD);
    });
});


// Change background color from dark mode to light mode 
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("light-mode");

    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        
        if (document.body.classList.contains("light-mode")) {
            toggleButton.textContent = "Switch to Dark Mode";
        } else {
            toggleButton.textContent = "Switch to Light Mode";
        }
    });
});

// Display and remove a greeting when the greet button is clicked 
document.addEventListener("DOMContentLoaded", () => {
    const greetButton = document.getElementById("greet-button");
    const greetMessage = document.getElementById("greet-message");

    greetButton.addEventListener("click", () => {
        if (!greetMessage.classList.contains("show")) {
            greetMessage.textContent = "\u{1F44B} Thanks for visiting my portfolio page!";
        } else {
            greetMessage.textContent = "";
        }
        greetMessage.classList.toggle("show");
    });
});

// Display extra text content about related skills 
document.addEventListener("DOMContentLoaded", () => {
    const captions = document.querySelectorAll(".skill-caption");

    captions.forEach(caption => {

        caption.addEventListener("mouseenter", () => {
            caption.nextElementSibling.classList.add("show");
        });

        caption.addEventListener("mouseleave", () => {
            caption.nextElementSibling.classList.remove("show");
        });
    });
});

// Display the other referral text area only if "Other" is selected 
document.addEventListener("DOMContentLoaded", function () {
    const referralSelect = document.getElementById("referral-source");
    const otherContainer = document.getElementById("referral-container");
    const otherInput = document.getElementById("other-referral-source");

    otherContainer.style.display = "none";

    referralSelect.addEventListener("change", function() {
        if (referralSelect.value === "Other") {
            otherContainer.style.display = "block";
            otherInput.required = true;
        } else {
            otherContainer.style.display = "none";
            otherInput.required = false;
        }
    });
});