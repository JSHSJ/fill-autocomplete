# fill-autocomplete

Small util library to help filling input fields with autocomplete.

If passed an object with keys matching the autocomplete attribute, the library will attempt to query and then fill the input fields.

## Usage

```js
import {attemptAutofill} from 'fill-autocomplete';

const attributesToFill = {
  'given-name': 'John',
  'family-name': 'Doe',
  'email': 'your@email',
}

const queryFn = (selector) => document.querySelector(selector);

attemptAutofill(attributesToFill, queryFn);
```

As seen above, the query function can be changed based on your needs (think Playwright, Puppeteer, etc.).

There is also a `attemptAutofillDocumentQuerySelctor` export that does the above for you.
