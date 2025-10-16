function NoteInput() {
  return (
    <div>
      <h1 className="mb-2 font-semibold">Note</h1>
      <textarea
        name="note"
        className="border w-full rounded-lg min-h-[120px] p-2 outline-none focus:ring-2 focus:ring-black-pearl-300"
      ></textarea>
    </div>
  );
}

export default NoteInput;
