// @ts-nocheck

// Example 1. Display a simple notification popup
reearth.popup.show(`
  <h1 style='color:blue;background:white'>
    You have successfully updated your profile.
  </h1>`, {
  // Set the popup width to 300 pixels
  width: 300,
  // Set the popup height to 100 pixels
  height: 100,
  // Position the popup at the bottom-end of the reference element or viewport
  position: "bottom-end",
  // Adjust the popup's position with specific offsets from the main and cross axis.
  offset: 10, // Set a 10px offset from the target
});

// Example 2. Show a popup with custom HTML, width, and offset adjustments on both axes
reearth.popup.show(`
  <p style='color:blue;background:white'>
    Custom Popup Content
  </p>`, {
  width: "300px",
  height: "150px",
  position: "top-start", // Position popup at the top-left of the target
  offset: {
    // Offset object for fine-tuned placement
    mainAxis: 15, // 15px offset along the main axis
    crossAxis: 10, // 10px offset along the cross axis
    alignmentAxis: null, // No alignment adjustment
  },
});

// Example 3. Show a popup with default dimensions and position
reearth.popup.show("<p>Simple Popup</p>");
