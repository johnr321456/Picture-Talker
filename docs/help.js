const lessons = {
  communicate: {
    prefix: "01-communicate",
    title: "Communicate",
    steps: [
      { title: "Tap a picture tile", detail: "Choose the word the AAC user wants to say. The selected word is added to the message bar at the top of the screen.", narration: "Step 1. Tap a picture tile, such as want, more, or help. The word is added to the message bar." },
      { title: "Check the message bar", detail: "Read the message from left to right. If the last word is not correct, use Backspace. If the whole message is wrong, use Clear.", narration: "Step 2. Check the message bar. It shows the words in order. Use Backspace if the last word is wrong." },
      { title: "Tap Speak", detail: "When the message is ready, tap Speak. The app reads the full message using the selected voice, rate, and pitch.", narration: "Step 3. Tap Speak to say the whole message out loud." },
    ],
  },
  starter: {
    prefix: "02-starter-boards",
    title: "Starter Boards",
    steps: [
      { title: "Choose a starter", detail: "Pick the starter board that matches the current routine, such as Mealtime, Play, School, Feelings, or First Words.", narration: "Step 1. Choose a starter board for the routine, such as Mealtime, School, or First Words." },
      { title: "Tap Load Starter", detail: "Load Starter replaces the current local board with the selected starter. Export a backup first if you need to keep custom work.", narration: "Step 2. Tap Load Starter. It replaces the current board with the starter you chose." },
      { title: "Use the new board", detail: "After loading, go to Communicate and test a few real messages. Add missing words later with Add Picture Tile.", narration: "Step 3. The app returns to Communicate with the new board ready to use." },
    ],
  },
  pictureBuilder: {
    prefix: "02-starter-boards",
    title: "Picture Word Builder",
    steps: [
      { title: "Choose the page", detail: "Use Build page to choose where new words will go. For example, choose Core for everyday words, Feelings for regulation language, or School for classroom vocabulary.", narration: "Step 1. Choose the build page that should receive new picture words." },
      { title: "Pick a category or search", detail: "The word bank has 650 plus items across categories. Choose a category such as Self Advocacy, Medical and Emergency, Food, School, Technology, or Places. Use Search Words when you already know what you need.", narration: "Step 2. Pick a category or search the word bank." },
      { title: "Tap or drag a word", detail: "On iPad or iPhone, tap a picture word to add it. On a computer, you can also drag the word onto the board preview. The word is added to the selected page.", narration: "Step 3. Tap a picture word, or drag it onto the board preview." },
      { title: "Review the preview", detail: "The Board Preview shows the selected page. Dense 9 by 9 boards may scroll sideways so tiles stay readable instead of overlapping. Tap preview tiles to hear them.", narration: "Step 4. Review the board preview. Dense boards may scroll sideways so tiles stay readable." },
      { title: "Save the board", detail: "When the board feels useful, save it as a Profile for this device. Export Backup if you need a file to move to another device or keep a private copy.", narration: "Step 5. Save the customized board as a profile, and export a backup when you need a movable file." },
    ],
  },
  vocab: {
    prefix: "03-vocabulary-builder",
    title: "Vocabulary Builder",
    steps: [
      { title: "Enter target words", detail: "Type a short list of words for today's practice. Separate words with commas or line breaks. Start small so the user can succeed.", narration: "Step 1. Enter the small set of words you want to practice today." },
      { title: "Show only targets", detail: "Turn on Show only target words when you want to reduce visual distraction. The app dims other tiles instead of moving them.", narration: "Step 2. Turn on Show only target words to reduce distraction while keeping word positions stable." },
      { title: "Apply targets", detail: "Tap Apply Targets to begin practice. The target words remain easy to find while the board layout stays consistent.", narration: "Step 3. Tap Apply Targets. Non-target words are grayed out during practice." },
    ],
  },
  tile: {
    prefix: "04-custom-tile",
    title: "Custom Tile",
    steps: [
      { title: "Add the word", detail: "Enter the label that should appear on the tile. Use short, familiar wording when possible.", narration: "Step 1. Add the word. This is the label that appears on the tile." },
      { title: "Pick picture and type", detail: "Use Speak as when the spoken phrase should be different from the label. Choose a picture word and a type so the tile color fits the category.", narration: "Step 2. Pick the picture and tile type. Picture can be a simple word like cup, heart, or school." },
      { title: "Choose the page", detail: "Place the tile where the user will naturally look for it. For example, put juice on Mealtime and doctor on Sick or Pain.", narration: "Step 3. Choose the page where this tile will be easiest to find." },
      { title: "Tap Add Tile", detail: "Tap Add Tile to save the new vocabulary locally in this browser. Test it on Communicate and edit if needed.", narration: "Step 4. Tap Add Tile. The new tile is saved locally and appears on the selected page." },
    ],
  },
  settings: {
    prefix: "05-settings",
    title: "Settings",
    steps: [
      { title: "Adjust speech", detail: "Use the rate and pitch sliders to make the voice clear. Test with a real message instead of a single word.", narration: "Step 1. Adjust speech rate and pitch until the voice is comfortable and understandable." },
      { title: "Choose tile speech", detail: "Leave Speak each tile on for immediate auditory feedback. Turn it off when the user wants only the final message spoken.", narration: "Step 2. Leave Speak each tile on to hear every tile, or turn it off to speak only full messages." },
      { title: "Set access options", detail: "Keep editing locked for everyday use. Turn on larger labels or high contrast when visual scanning is difficult.", narration: "Step 3. Lock editing for daily use. Larger labels and high contrast can make tiles easier to see." },
    ],
  },
  backup: {
    prefix: "06-backup-print",
    title: "Backup and Print",
    steps: [
      { title: "Export backup", detail: "Export Backup downloads a JSON file with custom pages, tiles, phrases, target words, and settings. Keep this file private.", narration: "Step 1. Export Backup saves custom pages, tiles, phrases, target words, and settings." },
      { title: "Import backup", detail: "Use Import Backup to restore a saved board in this browser or another browser. Importing replaces the current local board.", narration: "Step 2. Use Import Backup on another device browser to load the same board." },
      { title: "Print board", detail: "Print Board creates a paper copy for modeling, school, therapy, or times when the device is not available.", narration: "Step 3. Print Board makes a paper copy for modeling, school, therapy, or fridge practice." },
    ],
  },
};

const commandSearch = document.querySelector("#commandSearch");
const commandTopics = document.querySelectorAll(".command-list details");

commandSearch?.addEventListener("input", () => {
  const query = commandSearch.value.trim().toLowerCase();
  commandTopics.forEach((topic) => {
    const text = topic.textContent.toLowerCase();
    const match = !query || text.includes(query);
    topic.classList.toggle("hidden", !match);
    if (query && match) topic.open = true;
  });
});

document.querySelectorAll(".lesson").forEach((lessonEl) => {
  const key = lessonEl.dataset.lesson;
  const lesson = lessons[key];
  const image = lessonEl.querySelector("img");
  const label = lessonEl.querySelector(".step-label");
  const stepList = lessonEl.querySelector(".step-list");
  const detail = document.createElement("p");
  const playButton = lessonEl.querySelector('[data-action="play"]');
  const narrateButton = lessonEl.querySelector('[data-action="narrate"]');
  let step = 1;
  let timer = null;
  let narrating = false;

  detail.className = "step-detail";
  label.after(detail);

  function renderStepList() {
    stepList.innerHTML = "";
    lesson.steps.forEach((item, index) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>Step ${index + 1}: ${item.title}</strong><span>${item.detail}</span>`;
      li.className = index + 1 === step ? "active-step" : "";
      li.addEventListener("click", () => {
        stopPlay();
        stopNarration();
        step = index + 1;
        render();
      });
      stepList.append(li);
    });
  }

  function currentStep() {
    return lesson.steps[step - 1];
  }

  function render() {
    image.src = `screenshots/${lesson.prefix}-step-${step}.png`;
    image.alt = `${lesson.title} step ${step}`;
    label.textContent = `Step ${step} of ${lesson.steps.length}: ${currentStep().title}`;
    detail.textContent = currentStep().detail;
    renderStepList();
  }

  function stopPlay() {
    if (timer) window.clearInterval(timer);
    timer = null;
    playButton.textContent = "Play";
  }

  function stopNarration() {
    narrating = false;
    narrateButton.textContent = "Narrate";
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  }

  function next() {
    step = step === lesson.steps.length ? 1 : step + 1;
    render();
  }

  function prev() {
    step = step === 1 ? lesson.steps.length : step - 1;
    render();
  }

  function speakCurrentThenAdvance() {
    if (!narrating || !("speechSynthesis" in window)) return;
    render();
    const utterance = new SpeechSynthesisUtterance(currentStep().narration);
    utterance.rate = 0.92;
    utterance.onend = () => {
      if (!narrating) return;
      if (step === lesson.steps.length) {
        stopNarration();
        return;
      }
      step += 1;
      window.setTimeout(speakCurrentThenAdvance, 350);
    };
    window.speechSynthesis.speak(utterance);
  }

  lessonEl.querySelector('[data-action="next"]').addEventListener("click", () => {
    stopPlay();
    stopNarration();
    next();
  });

  lessonEl.querySelector('[data-action="prev"]').addEventListener("click", () => {
    stopPlay();
    stopNarration();
    prev();
  });

  playButton.addEventListener("click", () => {
    stopNarration();
    if (timer) {
      stopPlay();
      return;
    }
    playButton.textContent = "Pause";
    timer = window.setInterval(next, 2600);
  });

  narrateButton.addEventListener("click", () => {
    stopPlay();
    if (narrating) {
      stopNarration();
      return;
    }
    if (!("speechSynthesis" in window)) {
      label.textContent = "Narration is not available in this browser.";
      return;
    }
    narrating = true;
    narrateButton.textContent = "Stop Narration";
    window.speechSynthesis.cancel();
    speakCurrentThenAdvance();
  });

  render();
});
