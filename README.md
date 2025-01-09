
# Weekly Feedback Form

## Description
This project is a responsive **Weekly Feedback Form** designed for students to provide feedback to their instructor. The form allows students to share their thoughts on course content, identify areas they found challenging, suggest additional support, and optionally request a one-to-one session with the instructor.

The form is styled for accessibility and usability across both desktop and mobile devices, ensuring a seamless experience for all users.

---

## Features
- **Student Information Fields**:  
  Collects the student's name and email address.
- **Feedback Questions**:  
  Includes areas to provide feedback on confidence, challenges, skills improved, and future goals.
- **One-to-One Session Request**:  
  Allows students to indicate if they need a one-on-one session with the instructor.
- **Responsive Design**:  
  Ensures compatibility with all device sizes, from desktop to mobile.
- **Dynamic Textareas**:  
  Automatically resizes textareas based on user input for a cleaner experience.
- **Copyright Footer**:  
  Includes branding and copyright information for JustIT.

---

## Installation
1. Clone this repository:
   ```bash
   git clone <repository-url>
   ```
2. Open the project in your preferred code editor.
3. Launch the project locally by opening `index.html` in your browser.

---

## How to Use

### Setting Up Formspree Integration
1. Open the `index.html` file in your code editor.
2. Locate the `<form>` tag and replace the `action` attribute with your Formspree endpoint.
3. To generate a Formspree endpoint:
   - Sign up at [Formspree](https://formspree.io).
   - Navigate to "Forms" and click **+ Add New**.
   - Select **New Form**, give it a name, and configure the recipient email.
   - Copy the generated endpoint and update the `action` URL in your form.

### Testing the Form
1. Ensure the `style.css` and `main.js` files are correctly linked for styling and functionality.
2. Open the `index.html` file in a browser to test the form.
3. Fill out the form fields and submit to verify the email functionality.

---

## File Structure
```plaintext
project/
│
├── index.html       # Main HTML file
├── style.css        # Stylesheet for the form
├── main.js          # JavaScript for dynamic textarea resizing
└── assets/          # Folder for images or other assets
```

---

## Technologies Used
- **HTML5**: For structure.
- **CSS3**: For styling and responsive design.
- **JavaScript**: For dynamic form functionality.
- **Formspree**: For handling form submissions.

---

## License
© 2024 JustIT. All rights reserved.  

This project and its associated files are the intellectual property of JustIT. Unauthorized reproduction, distribution, or modification is prohibited.

---

## Contact
For questions or support, please reach out to **JustIT** via the official [website](https://www.justit.co.uk).
