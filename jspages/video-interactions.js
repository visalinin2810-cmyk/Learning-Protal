
// Simple video interactions with Firebase

// Function to load notes for a video
async function loadNotes(videoId) {
    const user = auth.currentUser;
    if (!user) {
        console.log("User not logged in.");
        return;
    }

    try {
        const docRef = db.collection("users").doc(user.uid).collection("videoData").doc(videoId);
        const doc = await docRef.get();

        if (doc.exists) {
            const data = doc.data();
            const textarea = document.querySelector('#video-' + videoId + ' .notes-area');
            if (textarea) textarea.value = data.notes || '';
        } else {
            console.log("No notes for video:", videoId);
        }
    } catch (error) {
        console.error("Error loading notes:", error);
    }
}

// Function to save notes for a video
async function saveNotes(videoId) {
    const user = auth.currentUser;
    if (!user) {
        alert("Please login to save notes.");
        return;
    }

    const textarea = document.querySelector('#video-' + videoId + ' .notes-area');
    if (!textarea) return;

    const content = textarea.value;

    try {
        const docRef = db.collection("users").doc(user.uid).collection("videoData").doc(videoId);
        await docRef.set({ notes: content }, { merge: true });
        alert("Notes saved!");
    } catch (error) {
        console.error("Error saving notes:", error);
        alert("Failed to save notes.");
    }
}

// Load notes when user logs in
auth.onAuthStateChanged(user => {
    if (user) {
        document.querySelectorAll('[id^="video-"]').forEach(container => {
            const videoId = container.id.replace('video-', '');
            loadNotes(videoId);
        });
    }
});
