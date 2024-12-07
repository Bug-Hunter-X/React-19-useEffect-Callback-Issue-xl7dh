```javascript
// In a React 19 functional component:

const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect use of a callback function in useEffect
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1); // Correct usage
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup function
  }, []); // Empty dependency array

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
};
```