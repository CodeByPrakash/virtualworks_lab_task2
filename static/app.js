document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('profile-form');
    const generateBtn = document.getElementById('generate-btn');
    const cardContainer = document.getElementById('card-container');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const bio = document.getElementById('bio').value.trim();
        const image_url = document.getElementById('image_url').value.trim();

        if (!name || !bio || !image_url) {
            alert('Please fill in all fields.');
            return;
        }

        generateBtn.disabled = true;
        generateBtn.textContent = 'Generating...';

        try {
            const response = await fetch('/api/generate-card', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, bio, image_url })
            });

            if (response.ok) {
                const data = await response.json();
                renderCard(data.profile);
            } else {
                const errData = await response.json();
                alert(errData.error || 'Failed to generate card');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please check your connection.');
        } finally {
            generateBtn.disabled = false;
            generateBtn.textContent = 'Generate Card';
        }
    });

    function renderCard(profile) {
        // Create the card structure
        const cardHTML = `
            <div class="profile-card">
                <div class="profile-card-header">
                    <img src="${escapeHTML(profile.image_url)}" alt="Profile Image" class="profile-image" onerror="this.src='https://via.placeholder.com/150?text=Error'">
                </div>
                <div class="profile-info">
                    <h3 class="profile-name">${escapeHTML(profile.name)}</h3>
                    <p class="profile-bio">${escapeHTML(profile.bio)}</p>
                </div>
            </div>
        `;
        
        cardContainer.innerHTML = cardHTML;
    }

    // Utility function to escape HTML to prevent XSS
    function escapeHTML(str) {
        return str.replace(/[&<>'"]/g, 
            tag => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag])
        );
    }
});
