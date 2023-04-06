// @ts-check

import { attemptAutofillDocumentQuerySelctor } from "./main.js";

const testAutocomplete1 = async () => {
  /** @type {import('./main.js').TAutocompleteRecord} */
  const credentials = {
    email: "test@your-domain.example",
    "current-password": "hunter_2",
    "new-password": "test2",
  };
  await attemptAutofillDocumentQuerySelctor(credentials);
};

document.querySelector("#button1")?.addEventListener("click", testAutocomplete1);
