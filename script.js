

let index = 0;
        const slides = document.querySelectorAll(".hero img");
 
        function showSlide(i) {
            slides.forEach(slide => slide.classList.remove("active"));
            slides[i].classList.add("active");
        }
 
        function prevSlide() {
            index = (index - 1 + slides.length - 1) % (slides.length - 1);
            showSlide(index);
        }
 
        function nextSlide() {
            index = (index + 1) % (slides.length - 1);
            showSlide(index);
        }

       /* let currentSlide = 0;
        const slides = document.querySelectorAll('.hero img:not(.logo)');
         
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
        }
         
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }
         
        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }
         
        document.addEventListener("DOMContentLoaded", () => {
            showSlide(currentSlide);
        }); */
        document.addEventListener("DOMContentLoaded", () => {
            showSlide(index);
        });

        function validateForm(formId) {
            const form = document.getElementById(formId);
            const name = form.querySelector('input[type="text"]').value;
            const email = form.querySelector('input[type="email"]').value;
            const message = form.querySelector('textarea').value;
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (name.length < 3) {
                alert('Full Name must be at least 3 characters long.');
                return false;
            }
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return false;
            }
            if (message.length < 10) {
                alert('Message must be at least 10 characters long.');
                return false;
            }
            return true;
        }
        