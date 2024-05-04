import React, { useState } from "react";

export function useDebounce(value: string, delay: number) {
    const [debounced, setDebounced] = useState<string>(value)

    React.useEffect(() => {
        const handler = setTimeout(() => setDebounced(value), delay);
        return () => clearTimeout(handler)
    }, [value, delay]) 

    return debounced
}