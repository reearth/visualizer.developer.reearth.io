// @ts-nocheck

// Example 1: Resize the UI to 400px by 300px
reearth.ui.resize(400, 300);

// Example 2: Resize the UI to 50% width and 200px height
reearth.ui.resize("50%", 200);

// Example 3: Extend the UI element without changing its size
reearth.ui.resize(undefined, undefined, true);

// Example 4: Change only the height to 500px and leave other properties unchanged
reearth.ui.resize(undefined, 500);
