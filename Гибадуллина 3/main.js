document.addEventListener('DOMContentLoaded', () => {
  const openLogin = document.getElementById('openLogin');
  const openComments = document.getElementById('openComments');

  const modalLogin = document.getElementById('myModal');
  const modalComments = document.getElementById('myModal2');

  const closeButtons = document.querySelectorAll('.modal .close, .modal2 .close');

  openLogin.addEventListener('click', (e) => {
    e.preventDefault();
    modalComments.style.display = 'none'; 
    modalLogin.style.display = 'block';  
  });

  openComments.addEventListener('click', (e) => {
    e.preventDefault();
    modalLogin.style.display = 'none';  
    modalComments.style.display = 'block';
  });

  closeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      modalLogin.style.display = 'none';
      modalComments.style.display = 'none';
    });
  });

  window.addEventListener('click', (e) => {
    if (e.target === modalLogin) {
      modalLogin.style.display = 'none';
    }
    if (e.target === modalComments) {
      modalComments.style.display = 'none';
    }
  });
});