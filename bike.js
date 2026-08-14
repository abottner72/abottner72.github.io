const { useState } = React;

function App() {
    const [position, setPosition] = useState(0);

    function moveBike() {
        if (position >= 300) {
            setPosition(0);
        } else {
            setPosition(position + 50);
        }
    }

    return (
        <div>
            <button onClick={moveBike}>
                Move Bike
            </button>

            <img
                id="Bike"
                src="images/bike.jpg"
                alt="Black bike"
                className={`position-${position}`}
            />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById("bike-root")
);
