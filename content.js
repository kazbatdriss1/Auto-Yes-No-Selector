chrome.storage.local.get('choice', function(data) {
  const choice = data.choice || 'YES';
  const wrappers = document.querySelectorAll('.inputWrapper-01');
  wrappers.forEach(wrapper => {
    const options = wrapper.querySelectorAll('input[type="radio"]');
    options.forEach(option => {
      const parent = option.closest('label').parentElement.parentElement;
      const span = parent.querySelector('span');
      if (span && span.textContent.trim().toUpperCase() === choice) {
        option.checked = true;
        option.click();
      }
    });
  });
});