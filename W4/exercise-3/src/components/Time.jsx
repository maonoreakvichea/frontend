function Time() {
    let date = new Date().toLocaleString() + "";
    let time = date.split(",")[1];
    return(
        <h2>
            {time}
        </h2>
    );
}

export default Time;