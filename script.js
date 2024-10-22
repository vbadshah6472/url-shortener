document.getElementById('shorten-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const originalUrl = document.getElementById('original-url').value;
    const customAlias = document.getElementById('custom-alias').value;

    // Simulate URL shortening with custom alias (you can integrate a real URL shortening API here)
    const baseUrl = "https://vbadshah6472.github.io/url-shortener/s/";
    const shortUrl = baseUrl + (customAlias ? customAlias : generateRandomString());

    // Display the shortened URL
    const resultDiv = document.getElementById('result');
    const shortUrlAnchor = document.getElementById('short-url');
    shortUrlAnchor.href = shortUrl;
    shortUrlAnchor.textContent = shortUrl;
    resultDiv.classList.remove('hidden');

    // Copy URL functionality
    document.getElementById('copy-btn').addEventListener('click', () => {
        navigator.clipboard.writeText(shortUrl);
        alert('Shortened URL copied to clipboard!');
    });
});

// Function to generate a random string for the shortened URL
function generateRandomString() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const length = 6;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
