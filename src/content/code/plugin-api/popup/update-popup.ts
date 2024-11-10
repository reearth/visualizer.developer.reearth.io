// @ts-nocheck

// Example 1. Update the popup with specific offset adjustments along both axes
reearth.popup.update({
  width: "250px",
  height: "100px",
  position: "bottom", // Place below the target
  offset: {
    // Offset object for detailed adjustments
    mainAxis: 10, // 10px offset from the target on the main axis
    crossAxis: 5, // 5px offset along the cross axis
  },
});

// Example 2. Adjusting the popup's offset to better accommodate new content or UI layout changes
reearth.popup.update({
  offset: { mainAxis: 25, crossAxis: 15 }, // Adjusting both main and cross axis offsets
  // Width, height, and position are not updated; only the offset changes
});

// Example 3. Adjust the popup's height while keeping other properties the same
reearth.popup.update({
  height: 200, // Set height to 200px
});
