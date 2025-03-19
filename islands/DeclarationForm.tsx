import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

export default function DeclarationForm() {
  // Classic prediction placeholders
  const predictionPlaceholders = [
    "Snape kills Dumbledore",
    "Darth Vader is Luke's father",
    "Rosebud was his sled",
    "Soylent Green is people",
    "Bruce Willis was dead the whole time",
    "It was Earth all along",
    "The cake is a lie",
    "They were in purgatory",
    "It was all a dream",
    "The butler did it",
  ];

  // Initialize states
  const [showConfirm, setShowConfirm] = useState(false);
  const [placeholder, _setPlaceholder] = useState(() => {
    // Select a random placeholder on initial render
    return predictionPlaceholders[
      Math.floor(Math.random() * predictionPlaceholders.length)
    ];
  });

  // Helper to format current date-time in required format for min attribute
  const getMinDateTimeString = () => {
    const now = new Date();
    // Format: YYYY-MM-DDThh:mm
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day}T${hours}:${minutes}`;
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
          placeholder={placeholder}
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
      <div class="bg-amber-100 p-4 mb-1 rounded-lg border border-amber-300">
        <p class="text-amber-800 font-medium mb-2">⚠️ Important</p>
        <ul class="list-disc pl-5 text-amber-800 text-sm">
          <li>
            Once created, declarations <strong>cannot</strong>{" "}
            be changed or deleted.
          </li>
          <li>
            Declarations cannot be viewed by anybody until their reveal date has
            passed.
          </li>
        </ul>
      </div>
      <Button
        type="submit"
        class={`w-full ${showConfirm ? "bg-red-600 hover:bg-red-700" : ""}`}
      >
        {showConfirm ? "Are you sure?" : "Submit"}
      </Button>
    </form>
  );
}
