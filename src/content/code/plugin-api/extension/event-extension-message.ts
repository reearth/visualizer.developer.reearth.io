// @ts-nocheck

reearth.extension.on("extensionMessage", (props) => {
  console.log("Message from:", props.sender);
  console.log("Message data:", props.data);
});
