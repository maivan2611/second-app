import { useState, useEffect } from 'react';
function Count() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>,
      <button onClick={() => setCount((c) => c + 1)}>+ button</button>,
      <button onClick={() => setCount((c) => c - 1)}>- button</button>
    </div>
  );
}

export default Count;
