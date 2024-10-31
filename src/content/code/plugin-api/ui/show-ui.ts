// @ts-nocheck

const html = `
  <h1 style="color:red;background:black">
    Hello world
  </h1>
`;

// Display the HTML UI only
reearth.ui.show(html);

// Display the HTML UI without making it visible
reearth.ui.show(html, { visible: false });

// Display the HTML UI with a specified width and height
reearth.ui.show(html, { width: 400, height: 200 });

// Extend the iframe in an extendable area
reearth.ui.show(`<div>Extended widget content</div>`, { extended: true });
