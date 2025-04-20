import {useState, useRef} from "react"
import { useNavigate } from "react-router-dom";
export type NavigationPanel = Record<string,Record<string,Record<string,string|Record<string, string>>>>
export type HeaderT = {
    material : NavigationPanel
};

// let navigationPanel : NavigationPanel =   
//     {
//         "courses" : {
//             "NEET" : {
//                 "link" : "/neet",
//                 "class 11th" : {
//                     "link" : "/class11"
//                 },
//                 "class 12th" : {
//                     "link" : "/class12"
//                 },
//                 "class 12th Pluc" : {
//                     "link" : "/class12Plus"
//                 }
//             },
//             "JEE" : {
//                 "link" : "/jee",
//                 "class 11th" : {
//                     "link" : "/class11"
//                 },
//                 "class 12th" : {
//                     "link" : "/class12"
//                 },
//                 "class 12th Pluc" : {
//                     "link" : "/class12Plus"
//                 }
//             },
//             "Class 6-10" : {
//                 "link" : "/class6-10",
//                 "class 6th" : {
//                     "link" : ""
//                 },
//                 "class 7th" : {
//                     "link" : ""
//                 },
//                 "class 8th" : {
//                     "link" : ""
//                 },
//                 "class 9th" : {
//                     "link" : ""
//                 },
//                 "class 10th" : {
//                     "link" : ""
//                 },
//             },
//             "View all options" : {
//                 "link" : "/viewAll",
//                 "Online Courses" : {
//                     "link" : ""
//                 },
//                 "Offline Courses" : {
//                     "link" : ""
//                 },
//                 "Distance Learning" : {
//                     "link" : ""
//                 },
//                 "Hindi Medium Courses" : {
//                     "link" : ""
//                 },
//             }
//         } ,        
//         "Test Series" : {
//             "NEET" : {
//                 "link" : "/neet",
//                 "class 11th" : {
//                     "link" : "/class11"
//                 },
//                 "class 12th" : {
//                     "link" : "/class12"
//                 },
//                 "class 12th Pluc" : {
//                     "link" : "/class12Plus"
//                 }
//             },
//             "JEE (Main+Advance)" : {
//                 "link" : "/neet",
//                 "class 11th" : {
//                     "link" : "/class11"
//                 },
//                 "class 12th" : {
//                     "link" : "/class12"
//                 },
//                 "class 12th Pluc" : {
//                     "link" : "/class12Plus"
//                 }
//             },
//             "JEE Main" : {
//                 "link" : "/neet",
//                 "class 11th" : {
//                     "link" : "/class11"
//                 },
//                 "class 12th" : {
//                     "link" : "/class12"
//                 },
//                 "class 12th Pluc" : {
//                     "link" : "/class12Plus"
//                 }
//             },
//             "CUET" : {
//                 "link" : "/CUET",
//                 "Class 12th" : {
//                     "link" : ""
//                 }
//             }
//         } , 
//         "Result" : {
//             "JEE MAIN 2025" : {
//                 "link" : "/main2025"
//             },
//             "NEET" : {
//                 "link" : "/result",
//                 "2024" : {
//                     "link" : "/Neet-2024"
//                 },
//                 "2023" : {
//                     "link" : "/Neet-2024"
//                 },
//                 "2022" : {
//                     "link" : "/Neet-2024"
//                 }
//             },
//             "Class 6th-10th" : {
//                 "link" : "/result/class6-10"
//             }
//         },
//         "Study Materials" : {
//             "JEE Main" : {
//                 "link" : "/jeeMain",
//                 "Previous Year Papers" : {
//                     "link" : "/prevPapers"
//                 },
//                 "Sample Papers" : {
//                     "link" : "/samplePapers"
//                 },
//                 "Result" : {
//                     "link" : "/result"
//                 },
//                 "Analysis" : {
//                     "link" : "/analysis"
//                 },
//                 "Syllabus" : {
//                     "link" : "/syllabus"
//                 },
//                 "Exam Date" : {
//                     "link" : "/examDate"
//                 }
//             },
//             "JEE Advance" : {
//                 "link" : "/jeeAdvance",
//                 "Previous Year Papers" : {
//                     "link" : "/prevPapers"
//                 },
//                 "Sample Papers" : {
//                     "link" : "/samplePapers"
//                 },
//                 "Mock Test" : {
//                     "link" : "/mocks"
//                 },
//                 "Result" : {
//                     "link" : "/result"
//                 },
//                 "Analysis" : {
//                     "link" : "/analysis"
//                 },
//                 "Syllabus" : {
//                     "link" : "/syllabus"
//                 },
//                 "Exam Date" : {
//                     "link" : "/examDate"
//                 }
//             },
//             "NEET" : {
//                 "link" : "/neet",
//                 "Previous Year Papers" : {
//                     "link" : "/prevPapers"
//                 },
//                 "Sample Papers" : {
//                     "link" : "/samplePapers"
//                 },
//                 "Mock Test" : {
//                     "link" : "/mocks"
//                 },
//                 "Result" : {
//                     "link" : "/result"
//                 },
//                 "Analysis" : {
//                     "link" : "/analysis"
//                 },
//                 "Syllabus" : {
//                     "link" : "/syllabus"
//                 },
//                 "Exam Date" : {
//                     "link" : "/examDate"
//                 }

//             },
//             "NCERT Solutions" : {
//                 "link" : "/ncert",
//                 "Class 6" : {
//                     "link" : "/class6"
//                 },
//                 "Class 7" : {
//                     "link" : "/class7"
//                 },
//                 "Class 8" : {
//                     "link" : "/class8"
//                 },
//                 "Class 9" : {
//                     "link" : "/class9"
//                 },
//                 "Class 10" : {
//                     "link" : "/class10"
//                 },
//                 "Class 11" : {
//                     "link" : "/class11"
//                 },
//                 "Class 12" : {
//                     "link" : "/class12"
//                 },
//             },
//             "CBSE" : {
//                 "link" : "/CBSE",
//                 "Notes" : {
//                     "link" : "/cbse-notes"
//                 },
//                 "Sample Papers" : {
//                     "link" : "/cbse-samplePapers"
//                 },
//                 "Question Papers" : {
//                     "link" : "/cbse-questionPapers"
//                 }

//             },
//             "Olympiad" : {
//                 "link" : "/olympiad",
//                 "NSO" : {
//                     "link" : "/nso"
//                 },
//                 "IMO" : {
//                     "link" : "/imo"
//                 },
//                 "IMTC" : {
//                     "link" : "imtc"
//                 }
//             }
//         },
//         "Books" : {
//             "Allen Store" : {
//                 "link" : "/allen-store"
//             }
//         },
//         "More" : {
//             "AOSAT" : {
//                 "link" : "/aosat"
//             },
//             "Allen for Schools" : {
//                 "link" : "/allen-for-schools"
//             },
//             "About Allen" : {
//                 "link" : "/about"
//             },
//             "Blogs" : {
//                 "link" : "/blogs"
//             },
//             "News" : {
//                 "link" : "/news"
//             },
//             "Careers" : {
//                 "link" : "/careers"
//             }
//         }
//     }





export default function Header(props:HeaderT){
    const [child, setChild] = useState(false);
    const [subchild, setSubChild] = useState(false);
    const [element, setElement] = useState<string|Record<string,string|Record<string, string>> | any>(null);
    const [subelement, setSubElement] = useState<string|Record<string,string|Record<string, string>> | any>(null);
    let arr = props.material;
    // console.log(arr);
    // console.log(typeof(arr));
    // let navItems = Object.keys(props.material);



    if(element){

    }

    function expand(e:string|Record<string,string|Record<string, string>>|any){
        setChild(true);
        // console.log(`expand ${JSON.stringify(arr[e])}`)
        setElement(e);

    }

    function collapse(e:any){
        setSubChild(false);
        setChild(false);
    }

    function subExpand(innerObject:any){
        setSubElement(arr[element][innerObject]);
        setSubChild(true);
        console.log(Object.keys(subelement))
    }

    function goTo(link:any) {
        const navigate= useNavigate();

        navigate(link["link"]);
    }

    function parentLeft(){
        setChild(false)
    }
    // function expand(e:string|Record<string,string|Record<string, string>>|any){
    //     console.log(`expand ${JSON.stringify(arr[e])}`)

    // }
    return (
        <>
        <div className="border border-solid border-black flex gap-4 py-4 px-2 flex-col w-fit">
            <div  onMouseLeave={parentLeft} className="gap-2 flex flex-col">
            <div className="flex flex-row w-fit gap-2">
            {
                // navItems.map((e,index)=>{
                Object.keys(props.material).map((e,index)=>{
                    return (
                        <div key={index} >
                            <a onMouseEnter={()=>expand(e)} className="bg-gray-600 px-2 py-1 rounded-lg text-white" href='#'>{e}</a>      
                        </div>
                    )
                })

            }

            </div>

            <div>
            {
                child && <div className={`flex flex-col gap-2 border border-solid border-red-900 w-fit p-2 absolute`}>
                        { 
                    
                            Object.keys(arr[element]).map((e,index)=>{
                                return (
                                    <div key={index}>
                                        {/* {Object.keys(arr[element][e])} */}
                                        {/* {typeof(Object.keys(arr[element][e]))} */}
                                        {/* {Object.hasOwn(Object.keys(arr[element][e]),"link")} */}
                                        <a onMouseEnter={()=>subExpand(e)} className="bg-gray-400 px-2 py-1 rounded-lg text-white" href=''>{e}</a> 
                                    </div>
                                )
                            })
                        }
                    </div>
            }

            </div>
            </div>

            {
                subchild && <div className="flex flex-col gap-2 w-fit absolute right-0 border border-red-600 border-solid p-2">
                    {
                        Object.keys(subelement).map((e,index)=>{
                            return (
                                <div key={index}>
                                    <button onMouseLeave={()=>collapse(e)} className="bg-gray-300 px-2 py-1 rounded-lg text-white" onClick={()=>goTo(subelement[e])}>{e}</button> 
                                </div>
                            )
                        })
                    }
                </div>
            }

        </div>
        </>
    )
}

function ChildrenComp(){}