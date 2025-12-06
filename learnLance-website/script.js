
       // DOM Elements
        const welcomePage = document.getElementById('welcomePage');
        const loginPage = document.getElementById('loginPage');
        const getStartedBtn = document.getElementById('getStartedBtn');
        const backBtn = document.getElementById('backBtn');
        
        // Login page elements
        const studentBtn = document.getElementById('studentBtn');
        const tutorBtn = document.getElementById('tutorBtn');
        const studentForm = document.getElementById('studentForm');
        const tutorForm = document.getElementById('tutorForm');
        const studentLoginForm = document.getElementById('studentLoginForm');
        const tutorLoginForm = document.getElementById('tutorLoginForm');
        const loginContainer = document.querySelector('.login-container');

        // Switch to Login Page
        getStartedBtn.addEventListener('click', function() {
            welcomePage.style.display = 'none';
            loginPage.style.display = 'flex';
            document.body.style.backgroundImage = "url('https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg')";
        });

        // Switch back to Welcome Page
        backBtn.addEventListener('click', function() {
            loginPage.style.display = 'none';
            welcomePage.style.display = 'flex';
        });

        // Toggle between Student and Tutor Login
        function showStudentForm() {
            studentForm.style.display = 'block';
            tutorForm.style.display = 'none';
            studentBtn.classList.add('active');
            tutorBtn.classList.remove('active');
            loginContainer.classList.remove('fade-in');
            void loginContainer.offsetWidth;
            loginContainer.classList.add('fade-in');
        }

        function showTutorForm() {
            studentForm.style.display = 'none';
            tutorForm.style.display = 'block';
            tutorBtn.classList.add('active');
            studentBtn.classList.remove('active');
            loginContainer.classList.remove('fade-in');
            void loginContainer.offsetWidth;
            loginContainer.classList.add('fade-in');
        }

        // Event Listeners for toggle buttons
        studentBtn.addEventListener('click', showStudentForm);
        // Add this after tutorBtn is defined
tutorBtn.addEventListener('click', showTutorForm);

        // Form Submission Handling
        studentLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('studentName').value;
            const email = document.getElementById('studentEmail').value;
            
            alert(`Welcome back, ${name}! Student login successful.\n\nRedirecting to your dashboard...`);
            studentLoginForm.reset();
            
            // In real app, you would redirect to dashboard
            // window.location.href = 'student-dashboard.html';
        });

        tutorLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('tutorName').value;
            const email = document.getElementById('tutorEmail').value;
            
            alert(`Welcome back, Tutor ${name}! Login successful.\n\nRedirecting to your tutor dashboard...`);
            tutorLoginForm.reset();
            
            // In real app, you would redirect to dashboard
            // window.location.href = 'tutor-dashboard.html';
        });

        // Add floating animation to feature cards
        document.addEventListener('DOMContentLoaded', function() {
            const featureCards = document.querySelectorAll('.feature-card');
            
            featureCards.forEach((card, index) => {
                // Stagger the animation
                card.style.animationDelay = `${index * 0.1}s`;
                
                // Add hover effect
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
            
            // Add click effect to get started button
            getStartedBtn.addEventListener('mousedown', function() {
                this.style.transform = 'translateY(-2px) scale(0.98)';
            });
            
            getStartedBtn.addEventListener('mouseup', function() {
                this.style.transform = 'translateY(-5px) scale(1.05)';
            });
        });