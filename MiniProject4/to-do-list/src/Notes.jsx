import { useState } from "react";

function Notes() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [editId, setEditId] = useState(null);

  const saveNote = () => {
    if (!note.trim()) return;

    if (editId) {
      setNotes(
        notes.map((n) =>
          n.id === editId
            ? { ...n, text: note }
            : n
        )
      );

      setEditId(null);
    } else {
      setNotes([
        ...notes,
        {
          id: Date.now(),
          text: note,
        },
      ]);
    }

    setNote("");
  };

  const editNote = (id) => {
    const selected = notes.find(
      (n) => n.id === id
    );

    setNote(selected.text);
    setEditId(id);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  return (
    <div className="card">
      <h1>🌷 My Notes Diary 📖</h1>

      <textarea
        rows="5"
        placeholder="💌 Write your cute note here..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
        onFocus={() => console.log("Focused")}
        onBlur={() => console.log("Blurred")}
      />

      <button onClick={saveNote}>
        {editId ? "Update Note" : "Save Note"}
      </button>

      <div className="notes-container">
        {notes.map((note) => (
          <div className="note" key={note.id}>
            <p>{note.text}</p>

            <div className="note-buttons">
              <button
                onClick={() => editNote(note.id)}
              >
                Edit
              </button>

              <button
                className="delete"
                onClick={() => deleteNote(note.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;