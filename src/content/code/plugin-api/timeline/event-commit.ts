// @ts-nocheck

// Log commit source and ID when the timeline is modified
reearth.timeline.on("commit", (e) => {
  console.log(`Timeline commit from source: ${e.source}`);
  if (e.id) {
    console.log(`Commit ID: ${e.id}`);
  }
});

// Perform specific actions based on the commit source
reearth.timeline.on("commit", (e) => {
  if (e.source === "pluginAPI") {
    console.log("Timeline updated via Plugin API.");
  } else if (e.source === "storyPage") {
    console.log("Timeline updated by a story page.");
  }
});
