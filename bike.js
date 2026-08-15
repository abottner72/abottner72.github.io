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
            <button className="move-bike" onClick={moveBike}>
                Move Bike
            </button>

            <img
            id="Bike"
            src="images/bike-800.webp"
            srcSet="
            images/bike-500.webp 500w,
            images/bike-800.webp 800w"
            sizes="(max-width: 600px) 100vw, 800px"
            width="800"
            height="517"
            alt="Black bike"
            className={`position-${position}`}
            />
            />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById("bike-root")
);
