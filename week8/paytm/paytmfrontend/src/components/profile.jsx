import { useRecoilState } from "recoil"
import { Allprofiles } from "../atoms/profilesatom"
import { useEffect } from "react"
import { Searchbar } from "./searchbar"

export function ShowProfileNow() {
    const [profile, setProfile] =useRecoilState(Allprofiles)
    useEffect(()=>{fetch("http://localhost:3000/getallusers")
    .then((res) => (res.json()))
    .then((data) => {
        setProfile(data.msgg);
    })},[])
    
    return (
        <>
        <Searchbar></Searchbar>
        </>
    )
}