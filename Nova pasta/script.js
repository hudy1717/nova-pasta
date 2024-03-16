document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const successMessage = document.createElement('div');
  successMessage.textContent = 'Enviado com sucesso! Aguarde.';
  successMessage.classList.add('success-message');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    form.reset(); 
    form.parentElement.appendChild(successMessage); 

    
    setTimeout(function() {
      window.location.href = 'cobrinha/index.html';
    }, 3000);
  });
});
