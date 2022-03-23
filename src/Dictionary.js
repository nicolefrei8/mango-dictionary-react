import React, {useState}from 'react';

export default function Dictionary(){
    const [keyword, setKeyword]= useState("");
    function search(event){
event.preventDefault();
alert(`Searching for ${keyword}`);
}
function keywordChange(event){
    setKeyword(event.target.value);

}
return(
<div className="Dictionary">
    <form onSubmit={search}>
       <input type="search"  onChange={keywordChange}/>
    </form>

</div>
)

}