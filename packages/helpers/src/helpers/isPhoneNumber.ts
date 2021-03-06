import googleLibphonenumber from "google-libphonenumber";

/**
 * Checks if the string is a valid phone number.
 * @param value the potential phone number string to test
 * @param {string} region 2 characters uppercase country code (e.g. DE, US, CH).
 * If users must enter the intl. prefix (e.g. +41), then you may pass "ZZ" or null as region.
 * See [google-libphonenumber, metadata.js:countryCodeToRegionCodeMap on github]{@link https://github.com/ruimarinho/google-libphonenumber/blob/1e46138878cff479aafe2ce62175c6c49cb58720/src/metadata.js#L33}
 */
export const isPhoneNumber = (value: string, region?: string) => {
  const phoneUtil = googleLibphonenumber.PhoneNumberUtil.getInstance();
  try {
    const phoneNum = phoneUtil.parseAndKeepRawInput(value, region);
    const result = phoneUtil.isValidNumber(phoneNum);
    return result;
  } catch (error) {
    // logging?
    return false;
  }
};
