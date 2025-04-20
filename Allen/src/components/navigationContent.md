// -----------------------1st approach came to me------------------

export type NavigationPanel = Record<string,Record<string,string[]>[]>[];
export type HeaderT = {
    material : NavigationPanel
};


let navigationPanel:NavigationPanel = [
        {
                "courses" : [ 
                        {"NEET" : ["Class 11th", "Class 12th", "Class 12th Plus"] }, 
                        {"JEE" : ["Class 11th", "Class 12th", "Class 12th Plus"]}, 
                        {"Class 6-10" : ["Class 6th","Class 7th","Class 8th","Class 9th","Class 10th",]},
                        {"View all options" : ["Online Courses","Offline Courses","Distance Learning","Hindi Medium Courses"]}
        ]
    },
    {
            "Test Series" : [
                    {"NEET" : ["Class 11th", "Class 12th", "Class 12th Plus"]},
            {"JEE (Main+Advance)" : ["Class 11th", "Class 12th", "Class 12th Plus"]},
            {"JEE Main" : ["Class 11th", "Class 12th", "Class 12th Plus"]},
            {"CUET" : ["Class 12th"]}
        ]
    },
    {
            "Result" : [
            {"JEE MAIN 2025" : []},
            {"NEET" : ["2024","2023","2022"]},
            {"Class 6th-10th" : []}
        ]
    },
    {
            "Study Materials " : [
                    {"JEE Main" : ["Previous Year Papers","Sample Papers","Result","Analysis","Syllabus","Exam Date"]},
                    {"JEE Advance" : ["Previous Year Papers","Sample Papers","Mock Test","Result","Analysis","Syllabus","Exam Date"]},
            {"NEET" : ["Previous Year Papers","Sample Papers","Mock Test","Result","Analysis","Syllabus","Exam Date"]},
            {"NCERT Solutions" : ["Class 6","Class 7","Class 8","Class 9","Class 10","Class 11","Class 12"]},
            {"CBSE" : ["Notes","Sample Papers","Question Papers"]},
            {"Olympiad" : ["NSO","IMO","IMTC"]}

        ]
    }
]



// -----------------------2nd approach came to me------------------

let navigationPanel  =   
    {
        "courses" : {
            "NEET" : ["Class 11th", "Class 12th", "Class 12th Plus"],
            "JEE" : ["Class 11th", "Class 12th", "Class 12th Plus"],
            "Class 6-10" : ["Class 6th","Class 7th","Class 8th","Class 9th","Class 10th",],
            "View all options" : ["Online Courses","Offline Courses","Distance Learning","Hindi Medium Courses"]
        } ,
        
        "Test Series" : {
            "NEET" : ["Class 11th", "Class 12th", "Class 12th Plus"],
            "JEE (Main+Advance)" : ["Class 11th", "Class 12th", "Class 12th Plus"],
            "JEE Main" : ["Class 11th", "Class 12th", "Class 12th Plus"],
            "CUET" : ["Class 12th"]
        } , 
        "Result" : {
            "JEE MAIN 2025" : [],
            "NEET" : ["2024","2023","2022"],
            "Class 6th-10th" : []
        },
        "Study Materials" : {
            "JEE Main" : ["Previous Year Papers","Sample Papers","Result","Analysis","Syllabus","Exam Date"],
            "JEE Advance" : ["Previous Year Papers","Sample Papers","Mock Test","Result","Analysis","Syllabus","Exam Date"],
            "NEET" : ["Previous Year Papers","Sample Papers","Mock Test","Result","Analysis","Syllabus","Exam Date"],
            "NCERT Solutions" : ["Class 6","Class 7","Class 8","Class 9","Class 10","Class 11","Class 12"],
            "CBSE" : ["Notes","Sample Papers","Question Papers"],
            "Olympiad" : ["NSO","IMO","IMTC"]
        },
        "Books" : {
            "Allen Store" : []
        },
        "More" : {
            "AOSAT" : [],
            "Allen" : [],

        }
    }

BUT HERE LINKS TO THESE PAGES IS NOT SPECIFIED, so after click where to go, this information is missing


// FINAL APPROACH

export type NavigationPanel = Record<string,Record<string,Record<string,string|Record<string, string>>>>
export type HeaderT = {
    material : NavigationPanel
};

let navigationPanel : NavigationPanel =   
    {
        "courses" : {
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
            "JEE" : {
                "link" : "/jee",
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
            "JEE Main" : {
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
            "CUET" : {
                "link" : "/CUET",
                "Class 12th" : {
                    "link" : ""
                }
            }
        } , 
        "Result" : {
            "JEE MAIN 2025" : {
                "link" : "/main2025"
            },
            "NEET" : {
                "link" : "/result",
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


