import {
    attemptAutofillDocumentQuerySelctor, TAutocompleteAttribute,
    TAutocompleteRecord
} from "./main";

const testAutocomplete1 = async () => {
    const credentials: TAutocompleteRecord = {
        [TAutocompleteAttribute.Email]: "test@your-domain.example",
        [TAutocompleteAttribute.CurrentPassword]: "hunter_2",
        [TAutocompleteAttribute.NewPassword]: "test2",
    }
    console.log("testAutocomplete1", credentials)
    await attemptAutofillDocumentQuerySelctor(credentials)
}

document.querySelector("#button1")?.addEventListener("click", testAutocomplete1)
