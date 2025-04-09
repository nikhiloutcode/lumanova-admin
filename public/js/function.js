// JavaScript Document

dmx.Formatter('string', 'formatPhoneNumber', function (phoneNumber) {
    const localNumber = phoneNumber.slice(-10);
    const countryCode = phoneNumber.slice(0, -10);

    if (localNumber.length === 10) {
        return `${countryCode} (${localNumber.slice(0, 3)}) ${localNumber.slice(3, 6)}-${localNumber.slice(6, 10)}`;
    } else {
        return phoneNumber;
    }
});
