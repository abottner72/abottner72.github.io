const [position, setPosition] = useState(0);

function moveBike() {
  if (position >= 150) {
    setPosition(0);
  } else {
    setPosition(position + 50);
  }
}
