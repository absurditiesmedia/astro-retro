export { formatTime as default };

function formatTime(secs) {
  if (isNaN(secs) || secs < 0) {
    const segmentedTime = secs.split(":");
    var totalSeconds = 0
    //extremely resiliant conversion. Even in most absurd mixes of hours minutes and seconds. I guess because I can.
    if(segmentedTime.length > 2) {
      totalSeconds += parseInt(segmentedTime[2]);
      totalSeconds += parseInt(segmentedTime[1]) * 60;
      totalSeconds += parseInt(segmentedTime[0]) * 3600;
    }
    else if(segmentedTime.length > 1) {
      totalSeconds += parseInt(segmentedTime[1]);
      totalSeconds += parseInt(segmentedTime[0]) * 60;
    }
    else if(segmentedTime.length > 0) 
      totalSeconds += parseInt(segmentedTime[0]);
    else if(secs < 0)
      totalSeconds = 0;
  }
  else totalSeconds = secs;
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedseconds = seconds < 10 ? `0${seconds}` : seconds;
  return hours > 0 ? `${hours}:${formattedMinutes}:${formattedseconds}` : `${minutes}:${formattedseconds}`;
}
