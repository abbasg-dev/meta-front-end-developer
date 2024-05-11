import { useRef, useState } from "react";
const Forms = () => {

  const inputRef = useRef(null);
  const fileInput = useRef(null);

  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value;
    // Do something with the value

    const files = fileInput.current.files;
    // Do something with the files here
    setName('');
    console.log('form submitted!');
    if (Number(score) <= 5 && comment.length <= 10) {
      console.log('Please provide a comment explaining why the experience was poor.')
      return;
    }

    console.log('Form submitted!');
    setComment('');
    setScore('10');
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Uncontrolled inputs */}
      <input ref={inputRef} type="text" />&nbsp;
      <input ref={fileInput} type="file" />
      <br />
      {/* Controlled Inputs */}
      <input value={value} onChange={handleChange} type="text" />
      <br /><br />
      <fieldset>
        <div className="field">
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="score">Score: {score} ⭐</label>
          <input
            type="range"
            min="0"
            max="10"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </div>
        <div className="Field">
          <label>Comment: </label>
          <textarea value={comment} onChange={e => setComment(e.target.value)}></textarea>
        </div>
        <button disabled={!name} type="submit">Submit</button>
      </fieldset>
    </form>
  );
};

export default Forms;
