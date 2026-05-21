# Picture AAC Talker

Picture AAC Talker is a free, local-first prototype for building spoken messages from large picture tiles.

**Prototype notice:** this project is for exploration and feedback. It is not medical advice, clinical guidance, emergency communication, or a replacement for evaluation by a qualified speech-language professional.

## Try It Locally

Open `index.html` in a modern browser.

The app uses the browser's built-in Web Speech API for text-to-speech, so available voices depend on the device, browser, and operating system.

## Publish With GitHub Pages

This app is plain HTML, CSS, and JavaScript, so it can be hosted for free with GitHub Pages.

1. Create a GitHub repository named `picture-aac-talker`.
2. Upload the files from this project folder.
3. In GitHub, open `Settings -> Pages`.
4. Set source to `Deploy from a branch`.
5. Choose branch `main` and folder `/root`.
6. Save.

GitHub will provide a URL similar to:

```text
https://yourusername.github.io/picture-aac-talker/
```

## Included

- Communication board with picture tiles and text-to-speech
- 6 x 6 default Core board with people, actions, things, feelings, and places pages
- Optional 9 x 9 Expanded Core starter board for denser primary vocabulary
- Local board generator from a caregiver description
- Picture Word Builder with 650+ categorized vocabulary items, search, tap-to-add, and drag-and-drop board building
- Local profiles for saving and loading customized boards on the same device
- Storage meter for watching local browser storage used by profiles, boards, and chat logs
- Starter boards for first words, mealtime, play, school, feelings/needs, bathroom/care, sick/pain, and devices/media
- Vocabulary Builder-style target word masking that keeps tile positions stable while graying out non-target words
- Custom pages and custom picture tiles
- Word search and typed quick speech
- Quick phrase buttons
- Voice, rate, and pitch controls
- SMS composer handoff for sending the current AAC message
- Copy Message fallback and Speak Received box for pasted replies
- Group Chat demo for sending AAC messages into a room log across tabs on the same device
- Speak Chat and Save Chat tools for reviewing or exporting a group chat transcript
- Edit lock, larger labels, and high contrast settings
- Local browser saving with no account or subscription
- JSON backup export and import
- Printable boards
- Help tab with animated click-path GIF walkthroughs, concise tool reference, and large preview frames
- Context F1 help and hover tooltips for the main commands and controls
- Full command reference for Communicate, Group Chat, Builder, Settings, SMS, backups, and privacy limits
- Clickable Help previews that open in a large frame with a full-screen option
- Standalone walkthrough help page at `docs/help.html` with Step 1/Step 2/Step 3 lists, spoken narration, and searchable command help

## Help System

The app now has three help layers:

- **Hover help:** pause over a command to see a short tooltip.
- **F1 context help:** click or tab to a control, then press `F1` for a more detailed explanation of what it does and when to use it.
- **Full help page:** open the Help tab, then choose `Open full help page` for timed workflow guides, narration, animated GIFs, and a searchable command reference.

## Privacy Guardrails

Before sharing publicly:

- Do not enter real phone numbers in screenshots or demos.
- Do not include private medical details.
- Do not include names, addresses, school names, or identifying information about a child.
- Treat exported JSON backups as private because they may contain custom words, phrases, or contacts.

This prototype stores settings and boards in the browser's local storage on the device. It does not include accounts, analytics, cloud sync, or server storage.

## Limits

This version is intentionally local and free. It does not use cloud AI, cloud sync, paid neural voices, remote symbol libraries, or usage analytics. The board generator uses built-in vocabulary templates and simple keyword matching. True AI-generated pictograms can be added later with an API key or a local image model.

SMS sending uses the device's native `sms:` link, so it opens Messages with the current AAC message filled in for review. Receiving SMS directly inside this local browser app is not available without a phone-number service, backend, or paired-device bridge.

Group Chat currently syncs between tabs or windows on the same device using browser storage and BroadcastChannel. Separate iPads, phones, and computers in a therapy group require a realtime backend service such as Firebase, Supabase, or a custom WebSocket server.

The Vocabulary Builder workflow is inspired by public descriptions of LAMP Words for Life Vocabulary Builder: reduce distraction by showing a focused target list while preserving consistent word locations. This app does not copy LAMP Words for Life's proprietary vocabulary files, symbols, or full layout.

## Feedback

See [FEEDBACK.md](FEEDBACK.md) for questions to share with testers.
