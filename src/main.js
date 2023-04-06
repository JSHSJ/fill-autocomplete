//@ts-check

/** @typedef { 'off' | 'name' | 'honoric-prefix' | 'given-name' |  'additional-name' |  'family-name' |  'honorific-suffix' |  'nickname' |  'email' |  'username' |  'new-password' |  'current-password' |  'one-time-code' |  'organization-title' |  'organization' |  'street-address' |  'address-line1' |  'address-line2' |  'address-line3' |  'address-level4' |  'country' |  'country-name' |  'postal-code' |  'cc-name' |  'cc-given-name' |  'cc-additional-name' |  'cc-family-name' |  'cc-number' |  'cc-exp' |  'cc-exp-month' |  'cc-exp-year' |  'cc-csc' |  'cc-type' |  'transaction-currency' |  'transaction-amount' |  'language' |  'bday' |  'bday-day' |  'bday-month' |  'bday-year' |  'sex' |  'tel' |  'tel-country-code' |  'tel-national' |  'tel-area-code' |  'tel-local' |  'tel-extension' |  'impp' |  'url' |  'photo' } TAutocompleteAttribute */
/** @typedef {{ [key in TAutocompleteAttribute]?: string }} TAutocompleteRecord */
/** @typedef {(selector: string) => Promise<HTMLInputElement>} TQuerySelectorFn */

/**
 * Properly fills out an input using an input event to trigger the change
 * @param {HTMLInputElement} input
 * @param {string} value
 * @returns {void}
 */
export const fillOutField = (input, value) => {
  const inputEvent = new Event("input", { bubbles: true });
  input.value = value;
  input.dispatchEvent(inputEvent);
};

/**
 * Attempts to autofill inputs using the passed props and querySelectorFn to find the inputs
 * @param {TAutocompleteRecord} propsToFill
 * @param {TQuerySelectorFn} querySelectorFn
 * @returns {Promise<void>}
 */
export const attemptAutofill = async (propsToFill, querySelectorFn) => {
  await Promise.all(
    Object.entries(propsToFill).map(async ([key, value]) => {
      const el = await querySelectorFn(`[autocomplete=${key}]`);
      if (el) {
        fillOutField(el, value);
      }
    }),
  );
};

/**
 * (Util function)
 * @see attemptAutofill
 *
 * Attempts to autofill inputs using the passed props.
 * Uses document.querySelector to find the inputs.
 * @param {TAutocompleteRecord} propsToFill
 * @returns {Promise<void>}
 */
export const attemptAutofillDocumentQuerySelctor = async (propsToFill) => {
  await attemptAutofill(propsToFill, document.querySelector.bind(document));
};
