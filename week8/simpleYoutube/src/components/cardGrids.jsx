import { MainCard } from "./mainCard"

export function CardGrid() {
const VIDEOS =[{
    thumbnail: "/thumbnailPic.png",
    thumbnail2: "/Channelpic.png",
    title:"Youtube First Video",
    
    author:"ANYONE",
     views:"200 M",timestamp:"18 years ago"},{ thumbnail: "/thumbnailPic.png",   thumbnail2: "/Channelpic.png",
     title:"Youtube Second Video",
     
     author:"ANYONE",
      views:"200 M",timestamp:"18 years ago"},{ thumbnail: "/thumbnailPic.png",   thumbnail2: "/Channelpic.png",
      title:"Youtube Third Video",
      
      author:"ANYONE",
       views:"200 M",timestamp:"18 years ago"}, { thumbnail: "/thumbnailPic.png",   thumbnail2: "/Channelpic.png",
       title:"Youtube First Video",
       
       author:"ANYONE",
        views:"200 M",timestamp:"18 years ago"},{ thumbnail: "/thumbnailPic.png",   thumbnail2: "/Channelpic.png",
        title:"Youtube First Video",
        
        author:"ANYONE",
        views:"200 M",timestamp:"18 years ago"},{ thumbnail: "/thumbnailPic.png",   thumbnail2: "/Channelpic.png",
        title:"Youtube First Video",
        
        author:"ANYONE",
         views:"200 M",timestamp:"18 years ago"}, { thumbnail: "/thumbnailPic.png",   thumbnail2: "/Channelpic.png",
         title:"Youtube First Video",
         
         author:"ANYONE",
          views:"200 M",timestamp:"18 years ago"},{ thumbnail: "/thumbnailPic.png",   thumbnail2: "/Channelpic.png",
          title:"Youtube First Video",
          
          author:"ANYONE",
           views:"200 M",timestamp:"18 years ago"},{ thumbnail: "/thumbnailPic.png",   thumbnail2: "/Channelpic.png",
           title:"Youtube First Video",
           
           author:"ANYONE",
            views:"200 M",timestamp:"18 years ago"}, { thumbnail: "/thumbnailPic.png",   thumbnail2: "/Channelpic.png",
            title:"Youtube First Video",
            
            author:"ANYONE",
             views:"200 M",timestamp:"18 years ago"}]

    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid">
        {
            VIDEOS.map((video) => <div className="pl-2 pr-2 pt-2"  >
            <MainCard
            thumbnail={video.thumbnail} thumbnail2={video.thumbnail2} title={video.title} author={video.author} views={video.views} timestamp={video.timestamp}></MainCard>
            </div>)
        }
        </div>
        
        </>
    )
}