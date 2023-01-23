import React, { useState, useEffect, useRef } from "react";
import handleCreateTable from "@/handlers/handle-create-table";

export default function Index(props) {
    const [triggerTable, setTriggerTable] = useState(false);
    // const useCreateTable = handleCreateTable('test', '(id, test)', triggerTable)

    // useEffect(() => {
    //     fetch("api/create-table")
    //         .then((res) => res.json())
    //         .then((data) => console.log(data))
    //         .catch((err) => console.log(err));
    // }, []);

    // useEffect(() => {
    //     fetch("api/insert-row")
    //         .then((res) => res.json())
    //         .then((data) => console.log(data))
    //         .catch((err) => console.log(err))
    //         .finally(
    //             fetch("api/get-table")
    //                 .then((res) => res.json())
    //                 .then((data) => console.log(data))
    //                 .catch((err) => console.log(err))
    //         );
    // }, []);

    return (
        <div className={`flex h-screen flex-col bg-gradient-to-tr from-slate-700 to-slate-500`}>
            <div className={`flex-1`}></div>
            <div className={`text-center text-3xl text-white`}>Working on this...</div>
            <div className={`flex-1`}></div>
        </div>
    );
}
