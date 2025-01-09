document.querySelectorAll('.dynamic-textarea').forEach(textarea => {
    textarea.addEventListener('input', function () {
        // Reset height to calculate new height accurately
        this.style.height = 'auto';
        // Set the height to match the content
        this.style.height = `${this.scrollHeight}px`;
    });
});