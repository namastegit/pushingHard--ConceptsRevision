export function MainCard(props) {
    return (
        <>
            <div>

             <img className="rounded-xl" src={props.thumbnail}></img>
                
            </div>

            <div className="grid grid-cols-12 pt-2">
                   <div className="col-span-1">
                    <img className="rounded-full w-15 h-15" src={props.thumbnail2}></img>
                    </div>

            <div  className="col-span-11 pl-2">
                   <div>
                   {props.title} 
                    </div>

                    <div className="col-span-11 text-gray-600 text-base ">
                    {props.author} 
                   </div>
                    <div className="col-span-11 text-gray-600 text-base ">
                    {props.views} | {props.timestamp}
                    </div>
             </div>
            </div>
         
        </>

    )
}