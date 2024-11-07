// @ts-nocheck

// Example 1: Resize the modal to 300px width and 400px height with a light blue background
reearth.modal.update({
  width: 300,
  height: 400,
  background: "#ADD8E6",
  clickBgToClose: true,
});

// Example 2: Update the modal with a a custom background color, larger size, and disable click-to-close
reearth.modal.update({
  width: 600,
  height: 450,
  background: "rgba(0, 128, 128, 0.8)",
  clickBgToClose: false, // Prevent closing the modal by clicking the background
});

// Example 3: Allow the modal to close when clicking the background
reearth.modal.update({
  clickBgToClose: true,
});

// Example 4: Change only the modal's width to 300px, keeping other properties unchanged
reearth.modal.update({
  width: 300,
});
