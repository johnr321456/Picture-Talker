# Privacy Notes

Picture AAC Talker is currently a static browser app. There is no backend server, account system, analytics package, or cloud sync in this version.

## What Stays on the Device

The app uses browser local storage for:

- Custom boards
- Custom pages and tiles
- Settings
- Target words
- Saved SMS number, if one is entered
- Group Chat room code, participant name, and local chat messages

Anyone with access to the same browser profile may be able to see this local data.

## Public Demo Safety

When sharing screenshots, GIFs, exported backups, or a public demo:

- Do not use real phone numbers.
- Do not use a child's full name.
- Do not include addresses, school names, or private medical details.
- Review exported JSON backups before sharing.

## SMS

The Send SMS feature opens the device's native SMS app using an `sms:` link. The user still reviews and sends the text in the device SMS app.

Receiving SMS inside this app is not supported without adding a separate SMS service, backend, or native app integration.

## Group Chat

The current Group Chat feature is local to the browser/device. It is useful for demos and same-device testing, but it is not a private clinical messaging system.

Do not use real names or sensitive therapy details in public demos. A future multi-device version should include clear consent, room access controls, data retention rules, and a secure realtime backend.
