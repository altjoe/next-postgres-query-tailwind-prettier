import { useQuery } from "react-query";

const handleCreateTable = (tablename, columns, trigger) => {
    console.log("ran", trigger);
    const queryCreateTable = () => {
        // console.log('ran query create table');
        // return fetch("api/create-table").then((res) => {
        //     console.log(res, tablename, columns);
        //     return res.json();
        // }).catch(err => console.log(err));
    };

    return useQuery(["create-table", trigger], queryCreateTable, { enabled: false });
};

export default handleCreateTable