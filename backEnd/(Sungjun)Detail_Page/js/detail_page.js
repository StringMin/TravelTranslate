document.addEventListener('DOMContentLoaded', function() {
    const messageDiv = document.getElementById('messageDiv');
    const showMessageBtn = document.getElementById('showMessageBtn');

    showMessageBtn.addEventListener('click', function() {
        messageDiv.textContent = 'Hello, World!';
    });
});
