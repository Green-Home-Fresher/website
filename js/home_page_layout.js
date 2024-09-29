function adjustLayout() {
    const imageLg = document.getElementById("image-lg");
    const textParagraphLg = document.getElementById("text-paragraph-lg");

    const headerSm = document.getElementById("header-sm");
    const imageSm = document.getElementById("image-sm");
    const textParagraphSm = document.getElementById("text-paragraph-sm");
  
    // If screen width is below 768px, move title and header before image
    if (window.innerWidth < 768) {
        imageLg.hidden = true;
        textParagraphLg.hidden = true;
        headerSm.hidden = false;
        imageSm.hidden = false;
        textParagraphSm.hidden = false;
    } else {
        imageLg.hidden = false;
        textParagraphLg.hidden = false;
        headerSm.hidden = true;
        imageSm.hidden = true;
        textParagraphSm.hidden = true;
    }
  }
  
  // Adjust layout on page load
//   adjustLayout();
  
  // Adjust layout when resizing the window
//   window.addEventListener("resize", adjustLayout);