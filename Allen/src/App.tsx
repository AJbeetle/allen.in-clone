import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route, Link} from "react-router-dom"

import DesignSheet from "./layouts/DesignSheet"
import HeaderComp from './components/header_2'
import Footer from "./components/footer"
import {NavigationPanel} from "./components/header_2"

function App() {

  let navigationPanel : NavigationPanel =   
  {
      "Courses" : {
          "NEET" : {
              "link" : "/neet",
              "class 11th" : {
                  "link" : "/class11"
              },
              "class 12th" : {
                  "link" : "/class12"
              },
              "class 12th Plus" : {
                  "link" : "/class12Plus"
              }
          },
          "JEE" : {
              "link" : "/jee",
              "class 11th" : {
                  "link" : "/class11"
              },
              "class 12th" : {
                  "link" : "/class12"
              },
              "class 12th Plus" : {
                  "link" : "/class12Plus"
              }
          },
          "Class 6-10" : {
              "link" : "/class6-10",
              "class 6th" : {
                  "link" : ""
              },
              "class 7th" : {
                  "link" : ""
              },
              "class 8th" : {
                  "link" : ""
              },
              "class 9th" : {
                  "link" : ""
              },
              "class 10th" : {
                  "link" : ""
              },
          },
          "View all options" : {
              "link" : "/viewAll",
              "Online Courses" : {
                  "link" : ""
              },
              "Offline Courses" : {
                  "link" : ""
              },
              "Distance Learning" : {
                  "link" : ""
              },
              "Hindi Medium Courses" : {
                  "link" : ""
              },
          }
      } ,        
      "Test Series" : {
        "new" : "NEW",
          "NEET" : {
              "link" : "/neet",
              "class 11th" : {
                  "link" : "/class11"
              },
              "class 12th" : {
                  "link" : "/class12"
              },
              "class 12th Pluc" : {
                  "link" : "/class12Plus"
              }
          },
          "JEE (Main+Advance)" : {
              "link" : "/jee_main_advance",
              "class 11th" : {
                  "link" : "/class11"
              },
              "class 12th" : {
                  "link" : "/class12"
              },
              "class 12th Plus" : {
                  "link" : "/class12Plus"
              }
          },
          "JEE Main" : {
              "link" : "/jeeMain",
              "class 11th" : {
                  "link" : "/class11"
              },
              "class 12th" : {
                  "link" : "/class12"
              },
              "class 12th Plus" : {
                  "link" : "/class12Plus"
              }
          },
          "CUET" : {
              "link" : "/CUET",
              "Class 12th" : {
                  "link" : "/cuet/12"
              }
          }
      } , 
      "Result" : {
        "new" : "NEW",
          "JEE MAIN 2025" : {
              "link" : "/main2025"
          },
          "NEET" : {
              "link" : "/result/neet",
              "2024" : {
                  "link" : "/Neet-2024"
              },
              "2023" : {
                  "link" : "/Neet-2024"
              },
              "2022" : {
                  "link" : "/Neet-2024"
              }
          },
          "Class 6th-10th" : {
              "link" : "/result/class6-10"
          }
      },
      "Study Materials" : {
          "JEE Main" : {
              "link" : "/jeeMain",
              "Previous Year Papers" : {
                  "link" : "/prevPapers"
              },
              "Sample Papers" : {
                  "link" : "/samplePapers"
              },
              "Result" : {
                  "link" : "/result"
              },
              "Analysis" : {
                  "link" : "/analysis"
              },
              "Syllabus" : {
                  "link" : "/syllabus"
              },
              "Exam Date" : {
                  "link" : "/examDate"
              }
          },
          "JEE Advance" : {
              "link" : "/jeeAdvance",
              "Previous Year Papers" : {
                  "link" : "/prevPapers"
              },
              "Sample Papers" : {
                  "link" : "/samplePapers"
              },
              "Mock Test" : {
                  "link" : "/mocks"
              },
              "Result" : {
                  "link" : "/result"
              },
              "Analysis" : {
                  "link" : "/analysis"
              },
              "Syllabus" : {
                  "link" : "/syllabus"
              },
              "Exam Date" : {
                  "link" : "/examDate"
              }
          },
          "NEET" : {
              "link" : "/neet",
              "Previous Year Papers" : {
                  "link" : "/prevPapers"
              },
              "Sample Papers" : {
                  "link" : "/samplePapers"
              },
              "Mock Test" : {
                  "link" : "/mocks"
              },
              "Result" : {
                  "link" : "/result"
              },
              "Analysis" : {
                  "link" : "/analysis"
              },
              "Syllabus" : {
                  "link" : "/syllabus"
              },
              "Exam Date" : {
                  "link" : "/examDate"
              }

          },
          "NCERT Solutions" : {
              "link" : "/ncert",
              "Class 6" : {
                  "link" : "/class6"
              },
              "Class 7" : {
                  "link" : "/class7"
              },
              "Class 8" : {
                  "link" : "/class8"
              },
              "Class 9" : {
                  "link" : "/class9"
              },
              "Class 10" : {
                  "link" : "/class10"
              },
              "Class 11" : {
                  "link" : "/class11"
              },
              "Class 12" : {
                  "link" : "/class12"
              },
          },
          "CBSE" : {
              "link" : "/CBSE",
              "Notes" : {
                  "link" : "/cbse-notes"
              },
              "Sample Papers" : {
                  "link" : "/cbse-samplePapers"
              },
              "Question Papers" : {
                  "link" : "/cbse-questionPapers"
              }

          },
          "Olympiad" : {
              "link" : "/olympiad",
              "NSO" : {
                  "link" : "/nso"
              },
              "IMO" : {
                  "link" : "/imo"
              },
              "IMTC" : {
                  "link" : "imtc"
              }
          }
      },
      "Books" : {
          "Allen Store" : {
              "link" : "/allen-store"
          }
      },
      "More" : {
          "AOSAT" : {
              "link" : "/aosat"
          },
          "Allen for Schools" : {
              "link" : "/allen-for-schools"
          },
          "About Allen" : {
              "link" : "/about"
          },
          "Blogs" : {
              "link" : "/blogs"
          },
          "News" : {
              "link" : "/news"
          },
          "Careers" : {
              "link" : "/careers"
          }
      }
  }


  return (
      <>
    {/* <Header></Header> */}
    <HeaderComp material={navigationPanel}></HeaderComp>
      <Routes>
        <Route></Route>
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
