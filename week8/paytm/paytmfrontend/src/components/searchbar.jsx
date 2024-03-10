import {useRecoilState} from "recoil";
import { Allprofiles } from "../atoms/profilesatom";

export function Searchbar() {
    const [filtres, setFiltres] = useRecoilState(Allprofiles);
function searchFunction(event) {
    fetch(`http://localhost:3000/filtre?filtre=${event.target.value}`)
    .then((res) => (res.json()))
    .then((data) =>{
setFiltres(data.users)
    })
}
    return(
        <>
         <input className="border" type="text" placeholder="Search User" onChange={searchFunction}></input>

        {filtres.map((filT,index)=>(
            <ShowSearched key={index} firstname={filT.firstname} lastname={filT.lastname}></ShowSearched>
        ))}
       
        </>
    )
}
function ShowSearched({firstname, lastname}) {
    return(<>
    <div>{firstname} {lastname}</div>
    </>)
}