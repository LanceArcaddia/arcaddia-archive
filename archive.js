(() => {

  // ------------------------------------------------
  // PAGE TYPE / ARCHIVE MODE
  // ------------------------------------------------

  const body = document.body;

  const pageType =
    body.dataset.page || "unknown";

  switch (pageType) {

    case "home":
      document.documentElement.style
        .setProperty("--archive-mode", "home");
      break;

    case "transmissions":
      document.documentElement.style
        .setProperty("--archive-mode", "index");
      break;

    case "entry":
      document.documentElement.style
        .setProperty("--archive-mode", "entry");
      break;

    case "signal":
      document.documentElement.style
        .setProperty("--archive-mode", "core");
      break;

    default:
      document.documentElement.style
        .setProperty("--archive-mode", "unknown");
  }


  // ------------------------------------------------
  // LOCAL TIME / ARCHIVE STATE
  // ------------------------------------------------

  const hour = new Date().getHours();

  let archiveState = "stable";

  if (hour >= 0 && hour < 5) {

    archiveState = "low-signal";

  } else if (hour >= 5 && hour < 12) {

    archiveState = "recovery";

  } else {

    archiveState = "stable";
  }

  body.dataset.state = archiveState;


  // ------------------------------------------------
  // TIME STATUS
  // ------------------------------------------------

  const timeStatus =
    document.getElementById("time-status");

  if (timeStatus) {

    if (hour >= 0 && hour < 5) {

      timeStatus.textContent =
        "quiet hours active";

    } else if (hour >= 5 && hour < 12) {

      timeStatus.textContent =
        "low traffic morning cycle";

    } else if (hour >= 12 && hour < 18) {

      timeStatus.textContent =
        "archive operations stable";

    } else {

      timeStatus.textContent =
        "evening continuity cycle active";
    }
  }


  // ------------------------------------------------
  // ARCHIVIST NOTES
  // ------------------------------------------------

  const archiveNote =
    document.getElementById("archive-note");

  if (archiveNote) {

    let notes = [];

    if (hour >= 0 && hour < 5) {

      notes = [
        "Quiet hours remain active.",
        "Receiver presence acknowledged.",
        "Low signal cycle stable.",
        "Archive activity minimal tonight.",
        "External observation detected.",
        "Continuity drift remains manageable.",

        "Most systems remain dormant.",
        "Environmental silence preserved.",
        "Night cycle stability holding.",
        "Manual continuity maintenance ongoing.",
        "Signal retention remains consistent.",
        "Thermal interference slightly elevated.",
        "Field noise reduced after midnight.",
        "Receiver synchronization remains intact.",
        "Archive remains accessible during low activity.",
        "Observation continuity preserved overnight.",
        "No major drift events detected.",
        "Archive systems operating quietly.",
        "Peripheral activity reduced.",
        "Late cycle conditions remain manageable."
      ];

    } else if (hour >= 5 && hour < 12) {

      notes = [

        "Morning continuity cycle detected.",
        "Environmental conditions stabilizing.",
        "Recovery drift remains manageable.",
        "External traffic gradually increasing.",
        "Archive systems transitioning from low activity.",
        "Signal stability improving.",

        "Low signal conditions receding.",
        "Routine restoration in progress.",
        "Archive synchronization returning to baseline.",
        "Ambient conditions remain soft this morning.",
        "Receiver traffic slowly increasing.",
        "Continuity systems remain responsive.",
        "External environmental pressure reduced.",
        "Field integrity holding through morning cycle.",
        "Residual drift remains within acceptable range.",
        "Observation pathways remain clear.",
        "Archive activity recovering gradually.",
        "Early cycle silence preserved.",
        "Recovery operations proceeding normally.",
        "Archive responsiveness stable."

      ];

    } else {

      notes = [
        "Archive stability holding.",
        "Signal integrity stable.",
        "Field continuity remains intact.",
        "Environmental noise within acceptable range.",
        "Receiver synchronization normal.",
        "Routine preservation active.",

        "Archive systems functioning normally.",
        "No major continuity disruptions detected.",
        "Signal pathways remain open.",
        "Ambient interference manageable.",
        "Observation continuity stable.",
        "External conditions remain fluctuating.",
        "Archive retention protocols active.",
        "Continuity response remains healthy.",
        "Manual preservation procedures ongoing.",
        "Low-grade system fatigue detected.",
        "Receiver presence remains consistent.",
        "Environmental drift remains noncritical.",
        "Archive cycle proceeding normally.",
        "External synchronization stable."
      ];
    }

    const randomNote =
      notes[Math.floor(Math.random() * notes.length)];

    archiveNote.textContent = randomNote;
  }


  // ------------------------------------------------
  // AUDIO PLAYBACK FEEDBACK
  // ------------------------------------------------

  const audioPlayer =
    document.getElementById("audio-player");

  const playbackStatus =
    document.getElementById("playback-status");

  if (audioPlayer && playbackStatus) {

    audioPlayer.addEventListener("play", () => {

      playbackStatus.textContent =
        "signal engaged";

    });

    audioPlayer.addEventListener("pause", () => {

      playbackStatus.textContent =
        "signal paused";

    });

    audioPlayer.addEventListener("ended", () => {

      const completionMessages = [

        "Transmission received. Continuity retained.",

        "Playback completed. Archive stability preserved.",

        "External observation acknowledged.",

        "Signal received successfully.",

        "Continuity response recorded."
      ];

      const randomCompletion =
        completionMessages[
          Math.floor(
            Math.random() * completionMessages.length
          )
        ];

      playbackStatus.textContent =
        randomCompletion;
    });
  }


  // ------------------------------------------------
  // OPTIONAL SYSTEM STATUS TEXT
  // ------------------------------------------------

  const systemStatus =
    document.getElementById("system-status");

  if (systemStatus) {

    if (archiveState === "low-signal") {

      systemStatus.textContent =
        "ARCHIVE STATUS: LOW SIGNAL";

    } else if (archiveState === "recovery") {

      systemStatus.textContent =
        "ARCHIVE STATUS: RECOVERING";

    } else {

      systemStatus.textContent =
        "ARCHIVE STATUS: STABLE";
    }
  }

})();