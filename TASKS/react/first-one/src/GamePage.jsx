import { useState } from "react";

const [key, setKey] = useState(0);

export default function GamePage() {
    return <game key={key} resetkey={() => setKey((key) => key + 1)} />
}