import React, { useEffect, useState, useRef } from "react";

export function Copy() {
    const [buttonText, setButtonText] = useState("Copy page URL")
    const textAreaRef = useRef(null)

    async function copyToClip() {
        await navigator.clipboard.writeText(location.href);
        setButtonText("Copied to clipboard");
        setTimeout(() => setButtonText("Copy page URL"), [2000])

    }

    return (
        <>
            <button onClick={copyToClip}>
                {buttonText}
            </button>
        </>
    )
}