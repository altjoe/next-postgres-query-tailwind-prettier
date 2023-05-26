import React, { useState, useEffect, useRef } from "react";
import handleExample from "@/handlers/handle-example";

export default function Index(props) {
    const example = handleExample();

    if (example.isLoading) {
        return <div>Loading...</div>;
    } else if (example.isError) {
        return <div>Error: {example.error.message}</div>;
    }

    return (
        <div className={`flex h-screen flex-col bg-gradient-to-tr from-slate-700 to-slate-500`}>
            <div className={`flex-1`}></div>
            <div className={`text-center text-3xl text-white`}>{example.data[0].name}</div>
            <div className={`flex-1`}></div>
        </div>
    );
}
