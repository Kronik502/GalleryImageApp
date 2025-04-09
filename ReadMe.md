📸 GalleryImageApp
A React Native app built with Expo, allowing users to add, view, and manage places by selecting locations on a map and attaching images. Built with local database integration and interactive maps.

🚀 Features
📍 Select locations on a map

🖼️ Attach and display images for each place

🗂️ View all saved places in a list

🧭 Navigate to map view of each saved place

💾 Stores place details locally using SQLite

📦 Tech Stack
React Native (with Expo)

React Navigation

react-native-maps

SQLite (expo-sqlite)

Expo Image Picker

Expo Location

🛠️ Installation
Clone the repo:


git clone https://github.com/Kronik502/GalleryImageApp.git
cd GalleryImageApp
Install dependencies:


npm install
Start the Expo server:


npx expo start
If you run into issues connecting via Expo Go, try using tunnel mode:


npx expo start --tunnel
📱 Usage
Open the app on your device using Expo Go.

Add a new place by:

Picking an image

Selecting a location from the map

Adding a title

View saved places in a scrollable list.

Tap any place to view image, address, and location on map.

📂 Project Structure (simplified)

components/
│
├── Places/
│   └── PlacesList.js
│   └── PlaceForm.js
│
├── UI/
│   └── OutlinedButton.js
│   └── IconButton.js

screens/
│
├── AllPlaces.js
├── AddPlace.js
├── PlaceDetails.js
├── Map.js

constants/
│   └── colors.js

utils/
│   └── database.js
🧪 Notes
App uses SQLite for offline persistence.

Custom color theme defined in constants/colors.js.

Location and image permissions required on device.

📍 To-Do (Future Improvements)
Add search/filter functionality

Cloud sync with Firebase or Supabase

Better offline image handling

Improved map styling

💬 Questions?
Feel free to open an issue or contact me via GitHub.