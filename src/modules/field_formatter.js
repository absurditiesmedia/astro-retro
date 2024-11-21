function formatTime(secs) {
  if (isNaN(secs) || secs < 0) {
    const segmentedTime = secs.split(":");
    return segmentedTime[0] == "00" || segmentedTime[0] == "0" ? secs : null;
  }

  const hours = Math.floor(secs / 3600);
  const minutes = Math.floor((secs % 3600) / 60);
  const seconds = Math.floor(secs % 60);
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedseconds = seconds < 10 ? `0${seconds}` : seconds;
  return hours > 0 ? `${hours}:${formattedMinutes}:${formattedseconds}` : `${minutes}:${formattedseconds}`;
}

export { formatTime };