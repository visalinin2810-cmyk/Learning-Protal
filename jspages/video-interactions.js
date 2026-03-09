

const videoInteractions = {
    
    init: async function(videoId) {
        const user = auth.currentUser;
        if (!user) {
            console.log("User not logged in. Cannot load video data.");
            return;
        }

        try {
            const docRef = db.collection("users").doc(user.uid).collection("videoData").doc(videoId);
            const doc = await docRef.get();

            if (doc.exists) {
                const data = doc.data();
                this.renderNotes(videoId, data.notes || "");
            } else {
                console.log("No data found for video:", videoId);
                this.renderNotes(videoId, "");
            }
        } catch (error) {
            console.error("Error loading video data:", error);
        }
    },

    /**
     * Saves notes for a video to Firestore.
     */

    saveNote: async function(videoId, content) {
        const user = auth.currentUser;
        if (!user) {
            alert("Please login to save your notes.");
            return;
        }

        try {
            const docRef = db.collection("users").doc(user.uid).collection("videoData").doc(videoId);
            await docRef.set({ notes: content }, { merge: true });
            console.log("Notes saved for:", videoId);
            alert("Notes saved successfully!");
        } catch (error) {
            console.error("Error saving notes:", error);
            alert("Failed to save notes.");
        }
    },

    
    renderNotes: function(videoId, content) {
        const textarea = document.querySelector(`#video-${videoId} .notes-area`);
        if (textarea) textarea.value = content;
    }
};

auth.onAuthStateChanged(user => {
    if (user) {
        document.querySelectorAll('[id^="video-"]').forEach(container => {
            const videoId = container.id.replace('video-', '');
            videoInteractions.init(videoId);
        });
    }
});
