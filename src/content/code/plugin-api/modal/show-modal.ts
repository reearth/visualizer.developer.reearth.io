// @ts-nocheck

// Example 1: Show a simple modal with HTML content
reearth.modal.show("<h1>Hello, Reearth!</h1>", {
  width: "400px",
  height: "300px",
  background: "#ffffff",
  clickBgToClose: true,
});

// Example 2: Display a fullscreen modal with custom content
reearth.modal.show("<p>This is a fullscreen modal.</p>", {
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.8)",
  clickBgToClose: false,
});
