const [position, setPosition] = useState(0);

function moveBike() {
  setPosition(position + 50);
}

function resetBike() {
  setPosition(0);
}
