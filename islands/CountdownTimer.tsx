import { useEffect, useState } from "preact/hooks";

export default function CountdownTimer(
  { publicationDate }: { publicationDate: Date },
) {
  const targetDate = new Date(publicationDate).getTime();
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, expired: false };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = calculateTimeRemaining();
      setTimeRemaining(remaining);

      if (remaining.expired) {
        clearInterval(timer);
        globalThis.location.reload(); // Reload the page when time expires
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div class="text-center">
      <h2 class="text-xl font-bold mb-4 text-emerald-700">Time Remaining</h2>
      <div class="grid grid-cols-4 gap-2 text-center">
        <div class="bg-gray-100 p-3 rounded">
          <div class="text-2xl font-bold">{timeRemaining.days}</div>
          <div class="text-sm">Days</div>
        </div>
        <div class="bg-gray-100 p-3 rounded">
          <div class="text-2xl font-bold">{timeRemaining.hours}</div>
          <div class="text-sm">Hours</div>
        </div>
        <div class="bg-gray-100 p-3 rounded">
          <div class="text-2xl font-bold">{timeRemaining.minutes}</div>
          <div class="text-sm">Mins</div>
        </div>
        <div class="bg-gray-100 p-3 rounded">
          <div class="text-2xl font-bold">{timeRemaining.seconds}</div>
          <div class="text-sm">Secs</div>
        </div>
      </div>
    </div>
  );
}
