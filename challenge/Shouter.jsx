import { useState } from "react";

const Shouter = () => {
    const [message, setMessage] = useState("");
    const update = (event) => setMessage(event.target.value);

    return (
        <>
            <input value={message} onChange={update} />
            <output>{message.toUpperCase()}</output>
        </>
    );
};

export default Shouter;