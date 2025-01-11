document.addEventListener('DOMContentLoaded',() =>{
    const links = document.querySelectorAll("nav a[data-view]");

    const content = document.getElementById("content");

    const loadView = async(view) =>{
        try {
            const response = await fetch(view)
            if (response.ok) {
                const html = await response.text();
                content.innerHTML = html;
                
            } else {
                content.innerHTML = "<p> Error loading page. Try again</p>";
            }
        } catch (error) {
            content.innerHTML = `<p>Error: ${error.message}</p>`;
            
        }
    }

    links.forEach((link) => {
        link.addEventListener("click",(e) =>{
            e.preventDefault();
            const view = link.getAttribute("data-view");
            loadView(view);
        });
    });

});