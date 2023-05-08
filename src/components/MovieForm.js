export default function MovieForm({ handleSubmit }) {
  return (
    <div className="flex items-center justify-center mt-4">
      <form onSubmit={handleSubmit} className="flex flex-col w-[100%]">
        <div className="flex flex-col">
          <label className="text-lg font-medium" form="title">
            Titel:
          </label>
          <input
            className="border my-2 p-2"
            placeholder="Titel här..."
            type="text"
            id="title"
            name="title"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-medium">Betyg:</label>
          <select type="text" defaultValue={0} className="border my-2 p-2">
            <option value="0" disabled>
              Välj betyg här...
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <button
          className="rounded-sm bg-green-600 text-white py-2 mt-2 w-32"
          type="submit"
        >
          Spara film
        </button>
      </form>
    </div>
  );
}
