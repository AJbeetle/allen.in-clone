import {useState, useRef, ReactNode} from "react"
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
export type NavigationPanel = Record<string,Record<string,string|Record<string,string|Record<string, string>>>>
export type HeaderT = {
    material : NavigationPanel
};

export default function HeaderComp(props:HeaderT){
    let [child, setChild] = useState<String[]>([]);
    let [childObj, setChildObj] = useState({});
    let parentElem = useRef("");
    let navigate = useNavigate();
    
    let [subChild, setSubChild] = useState<String[]>([]);
    let [subChildObj, setSubChildObj] = useState({});
    let childElem = useRef("");

    function showChild(parentElement:any){
        parentElem.current = parentElement;
        setChildObj(props.material[parentElement]);
        let arr = Object.keys(props.material[parentElement]);
        setChild(arr);
        
    }

    function hideChild(){
        setChild([])
    }

    function brignToHome(){
        navigate("/");
    }
    
    function moveto(link:any){
        setSubChildObj({});
        setChildObj({});
        setSubChild([]);
        setChild([])
        navigate(link);
    }
    
    function showSubChild(childElement:any){
        setSubChildObj(childElement);
        let arr = Object.keys(childElement).filter(t=>t!="link");
        setSubChild(arr);

        Object.keys(childObj).forEach(e=>{
            if(childObj[e] == childElement){
                childElem.current = e;
            }
        })

    }

    function hideSubChild(){
        setSubChild([]);
        setSubChildObj({});
    }
    
   return (
    <div>
        <div>
            happy me
        </div>
        <br/>
        <hr/>
        {/* {
            Object.keys(props.material).map((e,index)=>{
                return <div className="flex text-2xl font-bold flex-col">
                    {e} - 
                    {
                        Object.keys(props.material[e]).map((elem,index)=>{
                            return <div className="text-lg font-semibold flex">
                                {elem} | &nbsp;
                                [
                                {
                                    Object.keys(props.material[e][elem]).map((subelem,index)=>{
                                        return <div className="text-sm font-normal">
                                            {subelem} | &nbsp;
                                        </div>
                                    })
                                }
                                ]
                            </div>
                        })
                    }
                </div>
            })
        } */}

        <div className="flex gap-14 border border-solid border-blue-900 w-[60%] items-center">
            <div onClick={brignToHome} className="cursor-pointer">
                <svg viewBox="0 0 91 26" fill="none" xmlns="http://www.w3.org/2000/svg" alt={"Allen logo"} data-testid="onboardingAllenLogo" className="w-23 h-8"><path d="M22.2309 23.7954H13.9211L12.626 20.1214H9.60432L8.30916 23.7954H0L11.1154 0L22.2309 23.7954ZM12.2753 14.7801C12.2753 14.4604 12.1583 14.1776 11.9247 13.9328C11.6905 13.6875 11.4206 13.5648 11.1154 13.5648C10.8096 13.5648 10.5397 13.6875 10.3061 13.9328C10.072 14.1776 9.95491 14.4604 9.95491 14.7801C9.95491 15.1004 10.072 15.3833 10.3061 15.628C10.5397 15.8734 10.8096 15.9955 11.1154 15.9955C11.4206 15.9955 11.6905 15.8734 11.9247 15.628C12.1583 15.3832 12.2753 15.1004 12.2753 14.7801ZM37.4199 16.5611L35.8013 23.7953H22.9594V2.3176H31.0526V16.5611H37.4199ZM53.6068 16.5611L51.9882 23.7953H39.1464V2.3176H47.2401V16.5611H53.6068ZM71.1435 16.5611L69.309 23.7953H55.3339V2.3176H69.309L71.1435 9.55235H63.4276C63.1037 9.55235 62.9599 9.86904 62.9957 10.1706C63.0321 10.4341 63.1753 10.7061 63.4276 10.7061H68.0139V15.4073H63.4276C63.1401 15.4073 62.9957 15.6995 62.9957 15.9824C62.9957 16.2652 63.1401 16.5611 63.4276 16.5611L71.1435 16.5611ZM90.9999 26L81.5036 18.1434V23.7953H73.3559V1.01768L82.9068 7.96961V2.31767H91L90.9999 26Z" fill="#005BAA"></path></svg>
            </div>
            {
                Object.keys(props.material).map((e,index)=>{
                    return <div key={index} className="flex text-lg w-fit h-[80px] font-semibold text-gray-500 relative items-center" onMouseOver={()=>showChild(e)} onMouseLeave={hideChild}>
                        <div className="relative flex flex-col w-fit h-full justify-center">
                            <div className="flex gap-2 relative items-center cursor-pointer">
                                {
                                    props.material[e]["new"] && <div className="absolute -top-6 -right-10 bg-yellow-600 font-semibold text-sm px-2 py-1 rounded-2xl text-white">
                                        {
                                                props.material[e]["new"] as ReactNode
                                        }
                                    </div>
                                } 
                                {e}{/* no-clickable items, their children are clickable*/}
                            </div>
                            {parentElem.current==e && child.length>0 ? <div className="absolute w-full bottom-2 border-b-8 border-solid border-blue-600 rounded-lg"></div> : null}
                            <div className="flex text-md flex-col gap-2 absolute top-20 left-0 z-10 w-[290px] font-normal "  >
                                <div className="w-fit bg-white shadow-xl rounded-lg relative ">
                                    {
                                        parentElem.current == e && child.length>0 && child.map((el,index)=>{
                                            return (
                                                <div className="flex w-[250px] py-1 px-2  mt-0 mb-4" onMouseOver={()=>showSubChild(childObj[el])} onMouseLeave={hideSubChild}>
                                                    
                                                    <div key={index} className="w-full relative">
                                                        {
                                                            Object.keys(childObj[el]).map(elm=>{
                                                                if (elm=="link"){
                                                                    return (
                                                                    <div className=" flex flex-row w-full rounded-md" >  
                                                                            <div className="w-full" >
                                                                                <div className="absolute top-0  w-[120%] h-full -z-10" onMouseLeave={hideSubChild} ></div>
                                                                                <button onClick={()=>moveto(childObj[el][elm])} className="text-left hover:bg-gray-200 rounded-lg px-4 py-2 w-full h-full flex justify-between items-center">
                                                                                    {el}  
                                                                                    {
                                                                                        Object.keys(childObj[el]).length>1 && <IoIosArrowForward />
                                                                                    }
                                                                                </button>
                                                                            </div>

                                                                            {
                                                                                childElem.current==el && subChild.length>0 && subChild.map((elme,index)=>{
                                                                                    return (
                                                                                        <div className="flex text-lg flex-col gap-2 bg-white shadow-lg rounded-lg absolute -right-52 top-0 z-10 p-2 w-[80%]">
                                                                                            {
                                                                                                Object.keys(subChildObj).map((elemen,index)=>{
                                                                                                    if(elemen!=="link"){
                                                                                                        return(
                                                                                                        <div className="w-full hover:bg-gray-200 px-2 py-1 rounded-lg">
                                                                                                            <button onClick={()=>moveto(subChildObj[elemen]["link"])} className="text-left w-full flex justify-between items-center ">{elemen}  </button>
                                                                                                        </div>
                                                                                                        )

                                                                                                    }
                                                                                                })
                                                                                            }
                                                                                        </div>
                                                                                    )
                                                                                })
                                                                            }
                                                                    </div>
                                                                    )
                                                                    }
                                                                
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>    
                            </div>
                                
                        </div>

                    </div>
                })
            }
        </div>
    </div>
   )
}
