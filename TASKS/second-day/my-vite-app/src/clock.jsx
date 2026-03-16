import { useEffect, useState } from "react";

export default function Clock() {
const [counter, setCounter] = useState(0);

// timer

useEffect{() => {

    
setInterval (() => {
setCounter((count) => count + 1);
}, 1000);

}
// empty array to run only once when the component mounts



return <p>{counter} seconds have passed ...</p>;
}

