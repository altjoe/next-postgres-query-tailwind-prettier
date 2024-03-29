import { useQuery } from "react-query";

const handleExample = () => {
    const queryExample = () => {
        return fetch("api/example")
            .then((res) => {
                return res.json();
            })
            .then((data) => data)
            .catch((err) => console.log(err));
    };

    return useQuery(["example"], queryExample);
};

export default handleExample;
