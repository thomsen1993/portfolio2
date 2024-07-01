import React from "react";

interface ErrorProps {
    error: string;
}

const Error: React.FC<ErrorProps> = ({ error }) => {
    return (
        <div className="border border-red-500 bg-red-300 rounded-md p-4 text-red-800"> 
            <p>{error}</p>
        </div>
    )
}

export default Error;