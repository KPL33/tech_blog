const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#form2Example1').value.trim();
    const password = document.querySelector('#form2Example2').value.trim();
  
    if (username && password) {
      try {
        const response = await fetch('/api/signup', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
          window.location.href = '/';
        } else {
          alert('Sign up unsuccessful. Please try again.');
        }
      } catch (error) {
        console.error('An error occurred during signup:', error);
        alert('An error occurred during signup. Please try again.');
      }
    } else {
      alert('Please enter a username and password.');
    }
  };

  const signupButton = document.querySelector('.btn-primary');
  if (signupButton) {
    signupButton.addEventListener('click', signupFormHandler);
  }