export enum TAutocompleteAttribute {
  Off = "off",
  Name = "name",
  // Name subtypes

  HonoricPrefix = "honorific-prefix",
  GivenName = "given-name",
  AdditionalName = "additional-name",
  FamilyName = "family-name",
  HonoricSuffix = "honorific-suffix",
  Nickname = "nickname",

  Email = "email",
  Username = "username",
  NewPassword = "new-password",
  CurrentPassword = "current-password",
  OneTimeCode = "one-time-code",
  OrganizationTitle = "organization-title",
  Organization = "organization",
  StreetAddress = "street-address",
  AddressLine1 = "address-line1",
  AddressLine2 = "address-line2",
  AddressLine3 = "address-line3",
  AddressLevel4 = "address-level4",

  Country = "country",
  CountryName = "country-name",
  PostalCode = "postal-code",
  CreditCardName = "cc-name",
  CreditCardGivenName = "cc-given-name",
  CreditCardAdditionalName = "cc-additional-name",
  CreditCardFamilyName = "cc-family-name",

  CreditCardNumber = "cc-number",
  CreditCardExp = "cc-exp",
  CreditCardExpMonth = "cc-exp-month",
  CreditCardExpYear = "cc-exp-year",
  CreditCardCsc = "cc-csc",
  CreditCardType = "cc-type",

  TransactionCurrency = "transaction-currency",
  TransactionAmount = "transaction-amount",

  Language = "language",

  Bday = "bday",
  BdayDay = "bday-day",
  BdayMonth = "bday-month",
  BdayYear = "bday-year",

  Sex = "sex",
  Tel = "tel",
  TelCountryCode = "tel-country-code",
  TelNational = "tel-national",
  TelAreaCode = "tel-area-code",
  TelLocal = "tel-local",
  TelExtension = "tel-extension",
  Impp = "impp",
  Url = "url",
  Photo = "photo",
}

type TValueOfAutocompleteAttribute = `${TAutocompleteAttribute}`

// export type TAutocompleteRecord = Record<keyof typeof TAutocompleteAttribute, string>;
export type TAutocompleteRecord = {
    [key in TValueOfAutocompleteAttribute]?: string;
}

export const fillOutField = (input: HTMLInputElement, value: string) => {
  const inputEvent = new Event("input", { bubbles: true });
  input.value = value;
  input.dispatchEvent(inputEvent);
};

export type TQuerySelectorFn = (selector: string) => Promise<HTMLInputElement>;

export const attemptAutofill = async (
  propsToFill: TAutocompleteRecord,
  querySelectorFn: TQuerySelectorFn,
): Promise<void> => {
  await Promise.all(Object.entries(propsToFill).map(async ([key, value]) => {
    const el = await querySelectorFn(`[autocomplete=${key}]`);
    if (el) {
      fillOutField(el, value);
    }
  }));
};

export const attemptAutofillDocumentQuerySelctor = (propsToFill: TAutocompleteRecord): void => {
  attemptAutofill(propsToFill, document.querySelector.bind(document));
};
