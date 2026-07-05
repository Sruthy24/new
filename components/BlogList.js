"use client";

import { useState } from "react";
import BlogCard from "./BlogCard";
import SearchBar from "./SearchBar";

export default function BlogList({ posts }) {

const [search,setSearch]=useState("");

const filtered=posts.filter(post=>

post.title.toLowerCase()

.includes(search.toLowerCase())

);

return(

<>

<SearchBar

search={search}

setSearch={setSearch}

/>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

{

filtered.map(post=>

<BlogCard

key={post.id}

post={post}

/>

)

}

</div>

</>

);

}
