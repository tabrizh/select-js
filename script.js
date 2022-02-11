'use strict';

import Select from './select.js';

const selectElements = document.querySelectorAll('[data-custom-select]');

selectElements.forEach(selectElement => {
  new Select(selectElement);
});
