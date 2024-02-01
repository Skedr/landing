import { DateTime } from "luxon";
import { computed, ref } from "vue";

export const useTimeCounter = (options) => {
  const { startIsoTime, endIsoTime, immediate = true } = options;

  const interval = ref();
  const isRunning = ref(false);
  const days = ref("");
  const hours = ref("");
  const minutes = ref("");
  const seconds = ref("");

  const end = ref(DateTime.fromISO(endIsoTime));

  const start = () => {
    interval.value = setInterval(() => {
      const diff = end.value
        .diffNow(["day", "hour", "minute", "second", "millisecond"])
        .toObject();
      days.value = diff.days.toString().padStart(2, "0");
      hours.value = diff.hours.toString().padStart(2, "0");
      minutes.value = diff.minutes.toString().padStart(2, "0");
      seconds.value = diff.seconds.toString().padStart(2, "0");
    }, 1000);
    isRunning.value = true;
  };
  const stop = () => {
    clearInterval(interval.value);
    isRunning.value = false;
  };

  if (startIsoTime) {
    const startInterval = setInterval(() => {
      const diff = DateTime.fromISO(startIsoTime).diffNow().toObject();
      if (diff.milliseconds < 0) {
        start();
        clearInterval(startInterval);
      }
    }, 1000);
  } else if (immediate) {
    start();
  }

  const formated = computed(
    () =>
      `${days.value.toString().padStart(2, "0")}d 
      ${hours.value.toString().padStart(2, "0")}h 
      ${minutes.value.toString().padStart(2, "0")}m 
      ${seconds.value.toString().padStart(2, "0")}s`,
  );

  return {
    isRunning,
    start,
    stop,
    formated,
    days,
    hours,
    minutes,
    seconds,
  };
};
