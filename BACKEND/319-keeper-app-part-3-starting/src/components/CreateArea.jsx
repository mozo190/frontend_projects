import React, {useState} from "react";

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const {name, value} = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submintNote(event) {
    props.onAdd(note);
    event.preventDefault();
    setNote({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form>
        <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
        <textarea name="content" value={note.content} placeholder="Take a note..." rows="3" />
        <button onClick={submintNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
