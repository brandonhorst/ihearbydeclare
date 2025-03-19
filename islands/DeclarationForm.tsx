import { useState } from "preact/hooks";

export default function DeclarationForm() {
  const [showConfirm, setShowConfirm] = useState(false);

  // Helper to format current date-time in required format for min attribute
  const getMinDateTimeString = () => {
    const now = new Date();
    // Format: YYYY-MM-DDThh:mm
    return now.toISOString().slice(0, 16);
  };

  const handleSubmit = (e: Event) => {
    if (!showConfirm) {
      e.preventDefault();
      setShowConfirm(true);
    }
  };

  return (
    <form method="POST" class="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="title"
          class="block text-sm font-medium text-gray-700 mb-1"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="My Prediction"
          class="p-2 border rounded w-full"
          required
          onInput={() =>
            setShowConfirm(false)}
          onChange={() =>
            setShowConfirm(false)}
        />
      </div>
      <div>
        <label
          htmlFor="message"
          class="block text-sm font-medium text-gray-700 mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Snape kills Dumbledore."
          class="p-2 border rounded w-full"
          rows={5}
          required
          onInput={() =>
            setShowConfirm(false)}
          onChange={() => setShowConfirm(false)}
        >
        </textarea>
      </div>
      <div>
        <label
          htmlFor="publication-date"
          class="block text-sm font-medium text-gray-700 mb-1"
        >
          Reveal Date
        </label>
        <input
          type="datetime-local"
          id="publication-date"
          name="publication-date"
          min={getMinDateTimeString()}
          class="p-2 border rounded w-full"
          required
          onInput={() => setShowConfirm(false)}
          onChange={() => setShowConfirm(false)}
        />
      </div>
      <div class="bg-amber-100 p-4 mb-6 rounded-lg border border-amber-300">
        <p class="text-amber-800 font-medium mb-2">⚠️ Important</p>
        <ul class="list-disc pl-5 text-amber-800 text-sm">
          <li>
            Once created, declarations <strong>cannot</strong>{" "}
            be changed or deleted.
          </li>
          <li>
            Declarations cannot be viewed by anybody until after their reveal
            date has passed.
          </li>
        </ul>
      </div>
      <button
        type="submit"
        class={`w-full ${
          showConfirm
            ? "bg-red-600 hover:bg-red-700"
            : "bg-emerald-600 hover:bg-emerald-700"
        } text-white p-2 rounded`}
      >
        {showConfirm ? "Are you sure?" : "Submit"}
      </button>
    </form>
  );
}
