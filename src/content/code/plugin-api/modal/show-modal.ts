// @ts-nocheck

// Example 1: Display a modal with custom HTML content
reearth.modal.show("<p>Welcome to Reearth!</p>", {
  width: 400,
  height: 300,
  background: "rgba(0, 0, 0, 0.5)",
  clickBgToClose: true,
});

// Example 2: Display a modal with a larger, fixed-size and solid background
reearth.modal.show(
  "<h1>Important Information</h1><p>Details about the project...</p>",
  {
    width: 600,
    height: 400,
    background: "#f8f8f8",
    clickBgToClose: false,
  }
);
