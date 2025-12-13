// DOM Elements
const welcomePage = document.getElementById('welcomePage');
const signupPage = document.getElementById('signupPage');
const loginPage = document.getElementById('loginPage');

// Header buttons
const headerLoginBtn = document.getElementById('headerLoginBtn');

// Welcome page buttons
const getStartedBtn = document.getElementById('getStartedBtn');
const goToLoginBtn = document.getElementById('goToLoginBtn');

// Back buttons
const backBtnFromSignup = document.getElementById('backBtnFromSignup');
const backBtnFromLogin = document.getElementById('backBtnFromLogin');

// Sign-up page elements
const studentRoleCard = document.getElementById('studentRoleCard');
const tutorRoleCard = document.getElementById('tutorRoleCard');
const studentSignupForm = document.getElementById('studentSignupForm');
const tutorSignupForm = document.getElementById('tutorSignupForm');
const roleSelectionSection = document.querySelector('.role-selection');
const backToRoleSelection = document.getElementById('backToRoleSelection');
const backToRoleSelectionTutor = document.getElementById('backToRoleSelectionTutor');

// Sign-up forms
const studentSignupFormContent = document.getElementById('studentSignupFormContent');
const tutorSignupFormContent = document.getElementById('tutorSignupFormContent');

// Login page elements
const studentBtn = document.getElementById('studentBtn');
const tutorBtn = document.getElementById('tutorBtn');
const studentLoginForm = document.getElementById('studentLoginForm');
const tutorLoginForm = document.getElementById('tutorLoginForm');
const studentLoginFormContent = document.getElementById('studentLoginFormContent');
const tutorLoginFormContent = document.getElementById('tutorLoginFormContent');

// Links from login to sign-up
const signupFromStudentLogin = document.getElementById('signupFromStudentLogin');
const signupFromTutorLogin = document.getElementById('signupFromTutorLogin');

// ============================================
// PAGE NAVIGATION FUNCTIONS
// ============================================

// Show Welcome Page
function showWelcomePage() {
    welcomePage.style.display = 'flex';
    signupPage.style.display = 'none';
    loginPage.style.display = 'none';
}

// Show Sign-Up Page
function showSignupPage() {
    welcomePage.style.display = 'none';
    signupPage.style.display = 'flex';
    loginPage.style.display = 'none';
    
    // Reset to role selection
    showRoleSelection();
}

// Show Login Page
function showLoginPage() {
    welcomePage.style.display = 'none';
    signupPage.style.display = 'none';
    loginPage.style.display = 'flex';
}

// Show Role Selection (within sign-up page)
function showRoleSelection() {
    roleSelectionSection.style.display = 'block';
    studentSignupForm.style.display = 'none';
    tutorSignupForm.style.display = 'none';
}

// Show Student Sign-Up Form
function showStudentSignupForm() {
    roleSelectionSection.style.display = 'none';
    studentSignupForm.style.display = 'block';
    tutorSignupForm.style.display = 'none';
}

// Show Tutor Sign-Up Form
function showTutorSignupForm() {
    roleSelectionSection.style.display = 'none';
    studentSignupForm.style.display = 'none';
    tutorSignupForm.style.display = 'block';
}

// Toggle between Student and Tutor Login
function showStudentLoginForm() {
    studentLoginForm.style.display = 'block';
    tutorLoginForm.style.display = 'none';
    studentBtn.classList.add('active');
    tutorBtn.classList.remove('active');
}

function showTutorLoginForm() {
    studentLoginForm.style.display = 'none';
    tutorLoginForm.style.display = 'block';
    tutorBtn.classList.add('active');
    studentBtn.classList.remove('active');
}

// ============================================
// EVENT LISTENERS - PAGE NAVIGATION
// ============================================

// From Welcome Page
getStartedBtn.addEventListener('click', showSignupPage);
goToLoginBtn.addEventListener('click', showLoginPage);
headerLoginBtn.addEventListener('click', showLoginPage);

// Back buttons
backBtnFromSignup.addEventListener('click', showWelcomePage);
backBtnFromLogin.addEventListener('click', showWelcomePage);

// Role selection in sign-up
studentRoleCard.addEventListener('click', showStudentSignupForm);
tutorRoleCard.addEventListener('click', showTutorSignupForm);

// Role selection buttons
document.querySelectorAll('.role-select-btn').forEach(button => {
    button.addEventListener('click', function() {
        const role = this.getAttribute('data-role');
        if (role === 'student') {
            showStudentSignupForm();
        } else if (role === 'tutor') {
            showTutorSignupForm();
        }
    });
});

// Back to role selection from forms
backToRoleSelection.addEventListener('click', showRoleSelection);
backToRoleSelectionTutor.addEventListener('click', showRoleSelection);

// Login page toggle buttons
studentBtn.addEventListener('click', showStudentLoginForm);
tutorBtn.addEventListener('click', showTutorLoginForm);

// Links from login to sign-up
signupFromStudentLogin.addEventListener('click', function(e) {
    e.preventDefault();
    showSignupPage();
    showStudentSignupForm();
});

signupFromTutorLogin.addEventListener('click', function(e) {
    e.preventDefault();
    showSignupPage();
    showTutorSignupForm();
});

// ============================================
// FORM SUBMISSION HANDLING
// ============================================

// Student Sign-Up Form Submission
studentSignupFormContent.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('studentFullName').value;
    const email = document.getElementById('studentEmail').value;
    const password = document.getElementById('studentPassword').value;
    const confirmPassword = document.getElementById('studentConfirmPassword').value;
    
    // Simple validation
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // Get selected interests
    const interestsSelect = document.getElementById('studentInterests');
    const selectedInterests = Array.from(interestsSelect.selectedOptions).map(option => option.value);
    
    // Get education level
    const educationLevel = document.getElementById('studentEducation').value;
    
    // In a real app, you would send this data to a server
    alert(`🎓 Student Account Created!\n\nName: ${name}\nEmail: ${email}\nEducation: ${educationLevel}\n\nYou will receive a confirmation email shortly.`);
    
    // Reset form
    studentSignupFormContent.reset();
    
    // Redirect to login page after successful sign-up
    setTimeout(() => {
        showLoginPage();
        showStudentLoginForm();
    }, 2000);
});

// Tutor Sign-Up Form Submission
tutorSignupFormContent.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('tutorFullName').value;
    const email = document.getElementById('tutorEmail').value;
    const password = document.getElementById('tutorPassword').value;
    const confirmPassword = document.getElementById('tutorConfirmPassword').value;
    
    // Simple validation
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // Get selected expertise
    const expertiseSelect = document.getElementById('tutorExpertise');
    const selectedExpertise = Array.from(expertiseSelect.selectedOptions).map(option => option.value);
    
    // Get experience
    const experience = document.getElementById('tutorExperience').value;
    const qualifications = document.getElementById('tutorQualifications').value;
    
    // In a real app, you would send this data to a server
    alert(`👨‍🏫 Tutor Account Created!\n\nName: ${name}\nEmail: ${email}\nExperience: ${experience}\n\nYour account will be reviewed within 24-48 hours.`);
    
    // Reset form
    tutorSignupFormContent.reset();
    
    // Redirect to login page after successful sign-up
    setTimeout(() => {
        showLoginPage();
        showTutorLoginForm();
    }, 2000);
});

// Student Login Form Submission
studentLoginFormContent.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('studentLoginEmail').value;
    const password = document.getElementById('studentLoginPassword').value;
    
    // In a real app, you would authenticate with a server
    alert(`✅ Welcome back, Student!\n\nEmail: ${email}\n\nRedirecting to your dashboard...`);
    
    // Reset form
    studentLoginFormContent.reset();
    
    // In real app, redirect to dashboard
    // window.location.href = 'student-dashboard.html';
});

// Tutor Login Form Submission
tutorLoginFormContent.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('tutorLoginEmail').value;
    const password = document.getElementById('tutorLoginPassword').value;
    
    // In a real app, you would authenticate with a server
    alert(`✅ Welcome back, Tutor!\n\nEmail: ${email}\n\nRedirecting to your tutor dashboard...`);
    
    // Reset form
    tutorLoginFormContent.reset();
    
    // In real app, redirect to dashboard
    // window.location.href = 'tutor-dashboard.html';
});

// ============================================
// INITIALIZATION AND ANIMATIONS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('LearnLance Website Loaded!');
    
    // Initialize with welcome page
    showWelcomePage();
    
    // Add hover effects to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add hover effects to role cards
    const roleCards = document.querySelectorAll('.role-card');
    roleCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Button click effects
    getStartedBtn.addEventListener('mousedown', function() {
        this.style.transform = 'translateY(-2px) scale(0.98)';
    });
    
    getStartedBtn.addEventListener('mouseup', function() {
        this.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    // Debug info
    console.log('Available pages:', {
        welcomePage: !!welcomePage,
        signupPage: !!signupPage,
        loginPage: !!loginPage
    });
});

// Forgot password links
document.getElementById('forgotPasswordStudent')?.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Password reset link will be sent to your email.');
});

document.getElementById('forgotPasswordTutor')?.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Password reset link will be sent to your email.');
});