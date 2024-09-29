    // Form validation and handling
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form fields
        const topic = document.getElementById('topic').value;
        const email = document.getElementById('email').value;
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        // Simple form validation
        if (!topic || !email || !name || !message) {
            alert('Please fill out all fields.');
            return;
        }

        // Check if email is valid using a regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // If everything is valid, submit the form
        this.submit(); // Or you can send the form via AJAX instead
    });