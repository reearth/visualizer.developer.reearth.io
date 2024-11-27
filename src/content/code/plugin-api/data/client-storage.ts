// @ts-nocheck

// Example 1: Store and Retrieve a Value
const clientStorage = reearth.data.clientStorage;

// Store a value
await clientStorage.setAsync("username", "JohnDoe");

// Retrieve the value
const username = await clientStorage.getAsync("username");
console.log("Retrieved Username:", username);

// Example 2: Delete a Key
const clientStorage = reearth.data.clientStorage;

await clientStorage.deleteAsync("username");
console.log("Username key deleted");

// Example 3: List All Keys
const clientStorage = reearth.data.clientStorage;

const keys = await clientStorage.keysAsync();
console.log("Stored Keys:", keys);

// Example 4: Clear All Data
const clientStorage = reearth.data.clientStorage;

await clientStorage.dropStoreAsync();
console.log("All data cleared from client storage");
