import React, {useState} from "react";

function Time()
{
  const now = new Date().toLocaleTimeString()
  const [count, setTime] = useState(now)
  setInterval(update, 1000)
  function update()
  {
    const now = new Date().toLocaleTimeString()
    setTime(now)
  }
  return (
      <center><b className="time">{count}</b></center>
    )
}

function Header() {
  return (
    <header>
      <h1>Keeper</h1>
      <Time />
    </header>
  );
}

export default Header;
