const forms = document.querySelectorAll('[data-local-form]');

const validateField = (field) => {
  const error = field.closest('.form-field')?.querySelector('.field-error');
  const normalized = field.value.trim();
  field.setCustomValidity('');
  if (field.required && !normalized) field.setCustomValidity('Please complete this field.');
  if (field.type === 'email' && normalized && !field.validity.typeMismatch) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) field.setCustomValidity('Enter a valid email address.');
  }
  if (field.minLength > 0 && normalized && normalized.length < field.minLength) {
    field.setCustomValidity(`Please enter at least ${field.minLength} characters.`);
  }
  if (error) error.textContent = field.validity.valid ? '' : field.validationMessage;
  field.setAttribute('aria-invalid', String(!field.validity.valid));
  return field.validity.valid;
};

forms.forEach((form) => {
  const fields = [...form.querySelectorAll('input:not([type="checkbox"]), select, textarea')];
  fields.forEach((field) => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.hasAttribute('aria-invalid')) validateField(field);
      const result = form.querySelector('.form-result');
      if (result && !result.hidden) result.hidden = true;
    });
    field.addEventListener('change', () => {
      if (field.hasAttribute('aria-invalid')) validateField(field);
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const valid = fields.map(validateField).every(Boolean);
    const result = form.querySelector('.form-result');
    if (!valid) {
      if (result) {
        result.className = 'form-result form-result-error';
        result.textContent = 'Please review the highlighted fields and try again. Nothing has been submitted.';
        result.hidden = false;
      }
      form.querySelector('[aria-invalid="true"]')?.focus();
      return;
    }

    // Intentionally do not send or store form data; a real backend is out of scope for Phase 2.
    if (result) {
      result.className = 'form-result form-result-info';
      result.textContent = 'Your entries look complete in this browser, but this form is not connected to a submission service. Nothing was sent or saved. Please contact PASI through confirmed official channels when available.';
      result.hidden = false;
    }
  });
});
