const getTimes = (timeInSeconds: number) => {
    if (timeInSeconds < 0) return { minutes: 0, seconds: 0 };

    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    return { minutes, seconds };
};

const formattedTimes = (time: number) => {
    if (time < 0) throw new Error('Input cannot be a negative number');

    return time >= 10 ? String(time) : '0' + time;
};

const minutesToSeconds = (minutes: number) => {
    return minutes * 60;
};

const clipTime = (time: number) => {
    return Math.min(Math.max(0, time), 999);
};

export { getTimes, formattedTimes, minutesToSeconds, clipTime };
