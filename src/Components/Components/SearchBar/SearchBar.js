import { useState } from "react"

export default function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        if (searchTerm === "") return;

        const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&
        inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchTerm}`;

        const response = await fetch(endpoint);

        // console.log(response);
        const json = await response.json();
        console.log(json.query.search);
        props.setArticleList(json.query.search);

    }

    return (
        <form className="Searchform" onSubmit={handleSubmit}>
            <input type="search" placeholder="Search" onChange={(e) => setSearchTerm(e.target.value)} />
            <button type="submit">Search</button>
        </form>
    )
}