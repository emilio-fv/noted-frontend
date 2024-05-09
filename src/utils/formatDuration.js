const formatDuration = (milliseconds) => {
    let totalSeconds = Math.floor(milliseconds / 1000);

    // Calculate minutes and seconds
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    // Format minutes and seconds to have leading zeros if needed
    let formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    let formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    // Return the formatted time string
    return formattedMinutes + ':' + formattedSeconds;
};

export default formatDuration;