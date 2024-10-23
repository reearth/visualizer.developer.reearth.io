// @ts-nocheck

// Display the HTML UI only
reearth.ui.show(`<h1 style="color:red;background:black">Hello world</h1>`);

// Display an iframe with specified HTML content, making it visible and auto-sized
reearth.ui.show(`<p style="color:red;background:white">Hello, Reearth!</p>`, {
  visible: true,
});

// Display the HTML UI without making it visible
reearth.ui.show(html, { visible: false });

// Display an iframe with specified dimensions and hide it (headless mode)
reearth.ui.show(`<div>Widget content here</div>`, {
  visible: false,
  width: "100%",
  height: 200,
});

// Display the HTML UI with a specified width and height
reearth.ui.show(html, { width: 400, height: 200 });

// Extend the iframe in an extendable area
reearth.ui.show(`<div>Extended widget content</div>`, { extended: true });
