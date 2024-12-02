// @ts-nocheck

// Log each tick of the timeline's current time
reearth.timeline.on("tick", (e) => {
  console.log("Timeline tick at:", e.toISOString());
});

// Perform actions based on specific tick values
reearth.timeline.on("tick", (e) => {
  const targetTime = new Date("2023-12-25T00:00:00Z");
  if (e.getTime() === targetTime.getTime()) {
    console.log("Merry Christmas! Timeline reached the target time.");
  }
});
