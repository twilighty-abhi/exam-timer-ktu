const tableBody = document.getElementById('table-body');
const examsDetails = {
    "S2": {
        "CS": [
            { "code": "MAT102", "date": "May 25, 2024 9:30:00", "name": "Vector Calculus, and Differential Equations and Transforms", "id": 1 },
            {"code": "CYT100", "date": "May 31, 2024 9:30:00", "name": "Engineering Chemistry", "id":2},
            {"code": "EST100", "date": "June 5, 2024 9:30:00", "name": "Engineering Mechanics", "id":3},
            {"code": "EST120", "date": "June 10, 2024 9:30:00", "name": "BME & BCE", "id":4},
            {"code": "HUN102", "date": "June 13, 2024 9:30:00", "name": "Professional Communication", "id":5},
            {"code": "EST102", "date": "June 18, 2024 9:30:00", "name": "Programming in C", "id":6},
        ],
        "EC":[
            { "code": "MAT102", "date": "May 25, 2024 9:30:00", "name": "Vector Calculus, and Differential Equations and Transforms", "id": 1 },
            {"code": "PHT100", "date": "May 31, 2024 9:30:00", "name": "Engineering Physics", "id":2},
            {"code": "EST110", "date": "June 5, 2024 9:30:00", "name": "Engineering Graphics", "id":3},
            {"code": "EST130", "date": "June 10, 2024 9:30:00", "name": "ECE & EEE", "id":4},
            {"code": "HUN102", "date": "June 13, 2024 9:30:00", "name": "Professional Communication", "id":5},
            {"code": "EST102", "date": "June 18, 2024 9:30:00", "name": "Programming in C", "id":6},

        ],
        "ME":[
            { "code": "MAT102", "date": "May 25, 2024 9:30:00", "name": "Vector Calculus, and Differential Equations and Transforms", "id": 1 },
            {"code": "PHT100", "date": "May 31, 2024 9:30:00", "name": "Engineering Physics", "id":2},
            {"code": "EST110", "date": "June 5, 2024 9:30:00", "name": "Engineering Graphics", "id":3},
            {"code": "EST130", "date": "June 10, 2024 9:30:00", "name": "ECE & EEE", "id":4},
            {"code": "HUN102", "date": "June 13, 2024 9:30:00", "name": "Professional Communication", "id":5},
            {"code": "EST102", "date": "June 18, 2024 9:30:00", "name": "Programming in C", "id":6},

        ],

    },
    "S4": {
        "AD": [
            {"code": "MAT256", "date": "April 28, 2025 9:30:00", "name": "PROBABILITY AND STATISTICAL MODELING", "id": 1 },
            {"code": "CST202", "date": "May 2, 2025 9:30:00", "name": "COMPUTER ORGANISATION AND ARCHITECTURE", "id":2},
            {"code": "CST204", "date": "May 8, 2025 9:30:00", "name": "DATABASE MANAGEMENT SYSTEMS", "id":3},
            {"code": "EST200", "date": "May 16, 2025 9:30:00", "name": "DESIGN AND ENGINEERING", "id":4},
            {"code": "HUT200", "date": "May 16, 2025 9:30:00", "name": "PROFESSIONAL ETHICS", "id":5},
            {"code": "MCN202", "date": "May 20, 2025 9:30:00", "name": "CONSTITUTION OF INDIA", "id":6},
            {"code": "CST206", "date": "May 23, 2025 9:30:00", "name": "OPERATING SYSTEMS", "id":7},
        ],

        "AM": [
            {"code": "MAT216", "date": "April 28, 2025 9:30:00", "name": " MATHEMATICAL FOUNDATIONS FOR MACHINE LEARNING", "id": 1 },
            {"code": "CST202", "date": "May 2, 2025 9:30:00", "name": "COMPUTER ORGANISATION AND ARCHITECTURE", "id":2},
            {"code": "CST204", "date": "May 8, 2025 9:30:00", "name": "DATABASE MANAGEMENT SYSTEMS", "id":3},
            {"code": "EST200", "date": "May 16, 2025 9:30:00", "name": "DESIGN AND ENGINEERING", "id":4},
            {"code": "HUT200", "date": "May 16, 2025 9:30:00", "name": "PROFESSIONAL ETHICS", "id":5},
            {"code": "MCN202", "date": "May 20, 2025 9:30:00", "name": "CONSTITUTION OF INDIA", "id":6},
            {"code": "CST206", "date": "May 23, 2025 9:30:00", "name": "OPERATING SYSTEMS", "id":7},
        ],

        "BM": [
            {"code": "BMT202", "date": "May 2, 2025 9:30:00", "name": "MICROCONTROLLERS AND INTERFACING", "id":1},
            {"code": "BMT204", "date": "May 8, 2025 9:30:00", "name": "ELECTRICAL AND ELECTRONIC INSTRUMENTATION", "id":2},
            {"code": "BMT206", "date": "May 13, 2025 9:30:00", "name": "BIOPHYSICS", "id":3},
            {"code": "EST200", "date": "May 16, 2025 9:30:00", "name": "DESIGN AND ENGINEERING", "id":4},
            {"code": "HUT200", "date": "May 16, 2025 9:30:00", "name": "PROFESSIONAL ETHICS", "id":5},
            {"code": "MCN202", "date": "May 20, 2025 9:30:00", "name": "CONSTITUTION OF INDIA", "id":6},
        ],

        "BT": [
            {"code": "BTT202", "date": "May 2, 2025 9:30:00", "name": "CHEMICAL AND BIOLOGICAL REACTION ENGINEERING", "id":1},
            {"code": "BTT204", "date": "May 8, 2025 9:30:00", "name": "PRINCIPLES OF BIOCHEMISTRY", "id":2},
            {"code": "BTT206", "date": "May 13, 2025 9:30:00", "name": "BIOPROCESS ENGINEERING", "id":3},
            {"code": "EST200", "date": "May 16, 2025 9:30:00", "name": "DESIGN AND ENGINEERING", "id":4},
            {"code": "HUT200", "date": "May 16, 2025 9:30:00", "name": "PROFESSIONAL ETHICS", "id":5},
            {"code": "MCN202", "date": "May 20, 2025 9:30:00", "name": "CONSTITUTION OF INDIA", "id":6},
        ],

        "CA": [
            {"code": "MAT236", "date": "April 28, 2025 9:30:00", "name": "MATHEMATICS FOR ARTIFICIAL INTELLIGENCE", "id": 1 },
            {"code": "CST202", "date": "May 2, 2025 9:30:00", "name": "COMPUTER ORGANISATION AND ARCHITECTURE", "id":2},
            {"code": "CST204", "date": "May 8, 2025 9:30:00", "name": "DATABASE MANAGEMENT SYSTEMS", "id":3},
            {"code": "HUT200", "date": "May 16, 2025 9:30:00", "name": "PROFESSIONAL ETHICS", "id":4},
            {"code": "EST200", "date": "May 16, 2025 9:30:00", "name": "DESIGN AND ENGINEERING", "id":5},
            {"code": "MCN202", "date": "May 20, 2025 9:30:00", "name": "CONSTITUTION OF INDIA", "id":6},
            {"code": "CST206", "date": "May 23, 2025 9:30:00", "name": "OPERATING SYSTEMS", "id":7},
        ],

        "CE": [
            {"code": "CET202", "date": "May 2, 2025 9:30:00", "name": "ENGINEERING GEOLOGY", "id": 1 },
            {"code": "CET204", "date": "May 8, 2025 9:30:00", "name": "GEOTECHNICAL ENGINEERING I", "id":2},
            {"code": "CET206", "date": "May 13, 2025 9:30:00", "name": "TRANSPORTATION ENGINEERING", "id":3},
            {"code": "HUT200", "date": "May 16, 2025 9:30:00", "name": "PROFESSIONAL ETHICS", "id":4},
            {"code": "EST200", "date": "May 16, 2025 9:30:00", "name": "DESIGN AND ENGINEERING", "id":5},
            {"code": "MCN202", "date": "May 20, 2025 9:30:00", "name": "CONSTITUTION OF INDIA", "id":6},
        ],

        "CC": [
            {"code": "MAT266", "date": "April 28, 2025 9:30:00", "name": "MATHEMATICAL FOUNDATIONS FOR SECURITY SYSTEMS", "id": 1 },
            {"code": "CST202", "date": "May 2, 2025 9:30:00", "name": "COMPUTER ORGANISATION AND ARCHITECTURE", "id":2},
            {"code": "CST204", "date": "May 8, 2025 9:30:00", "name": "DATABASE MANAGEMENT SYSTEMS", "id":3},
            {"code": "HUT200", "date": "May 16, 2025 9:30:00", "name": "PROFESSIONAL ETHICS", "id":4},
            {"code": "EST200", "date": "May 16, 2025 9:30:00", "name": "DESIGN AND ENGINEERING", "id":5},
            {"code": "MCN202", "date": "May 20, 2025 9:30:00", "name": "CONSTITUTION OF INDIA", "id":6},
            {"code": "CST206", "date": "May 23, 2025 9:30:00", "name": "OPERATING SYSTEMS", "id":7},
        ],

        "CS": [
            {"code": "MAT206", "date": "April 28, 2025 9:30:00", "name": "GRAPH THEORY", "id": 1 },
            {"code": "CST202", "date": "May 2, 2025 9:30:00", "name": "COMPUTER ORGANISATION AND ARCHITECTURE", "id":2},
            {"code": "CST204", "date": "May 8, 2025 9:30:00", "name": "DATABASE MANAGEMENT SYSTEMS", "id":3},
            {"code": "HUT200", "date": "May 16, 2025 9:30:00", "name": "PROFESSIONAL ETHICS", "id":4},
            {"code": "EST200", "date": "May 16, 2025 9:30:00", "name": "DESIGN AND ENGINEERING", "id":5},
            {"code": "MCN202", "date": "May 20, 2025 9:30:00", "name": "CONSTITUTION OF INDIA", "id":6},
            {"code": "CST206", "date": "May 23, 2025 9:30:00", "name": "OPERATING SYSTEMS", "id":7},
        ],

        "EC": [
            {"code": "ECT202", "date": "May 2, 2025 9:30:00", "name": "ANALOG CIRCUITS", "id":1},
            {"code": "ECT204", "date": "May 8, 2025 9:30:00", "name": "SIGNALS AND SYSTEMS", "id":2},
            {"code": "ECT206", "date": "May 13, 2025 9:30:00", "name": "COMPUTER ARCHITECTURE AND MICROCONTROLLERS*", "id":3},
            {"code": "EST200", "date": "May 16, 2025 9:30:00", "name": "DESIGN AND ENGINEERING", "id":4},
            {"code": "HUT200", "date": "May 16, 2025 9:30:00", "name": "PROFESSIONAL ETHICS", "id":5},
            {"code": "MCN202", "date": "May 20, 2025 9:30:00", "name": "CONSTITUTION OF INDIA", "id":6},

        ],

        "ER": [
            {"code": "MAT204", "date": "April 28, 2025 9:30:00", "name": "PROBABILITY, RANDOM PROCESS AND NUMERICAL METHODS", "id":1},
            {"code": "CST202", "date": "May 2, 2025 9:30:00", "name": "COMPUTER ORGANISATION AND ARCHITECTURE", "id":2},
            {"code": "ERT204", "date": "May 13, 2025 9:30:00", "name": "OBJECT ORIENTED PROGRAMMING USING JAVA", "id":3},
            {"code": "ERT206", "date": "May 13, 2025 9:30:00", "name": "INTEGRATED CIRCUITS", "id":4},
            {"code": "EST200", "date": "May 16, 2025 9:30:00", "name": "DESIGN AND ENGINEERING", "id":5},
            {"code": "HUT200", "date": "May 16, 2025 9:30:00", "name": "PROFESSIONAL ETHICS", "id":6},
            {"code": "MCN202", "date": "May 20, 2025 9:30:00", "name": "CONSTITUTION OF INDIA", "id":7},

        ],

        "IT": [
            {"code": "ITT202", "date": "May 2, 2025 9:30:00", "name": "PRINCIPLES OF OBJECT ORIENTED TECHNIQUES", "id": 1 },
            {"code": "ITT204", "date": "May 8, 2025 9:30:00", "name": "COMPUTER ORGANIZATION", "id":2},
            {"code": "ITT206", "date": "May 13, 2025 9:30:00", "name": "DATABASE MANAGEMENT SYSTEMS", "id":3},
            {"code": "EST200", "date": "May 16, 2025 9:30:00", "name": "DESIGN AND ENGINEERING", "id":5},
            {"code": "HUT200", "date": "May 16, 2025 9:30:00", "name": "PROFESSIONAL ETHICS", "id":6},
            {"code": "MCN202", "date": "May 20, 2025 9:30:00", "name": "CONSTITUTION OF INDIA", "id":7},

        ],

        "ME": [
            {"code": "MAT202", "date": "April 28, 2025 9:30:00", "name": "PROBABILITY, STATISTICS AND NUMERICAL METHODS", "id": 1 },
            {"code": "MET202", "date": "May 2, 2025 9:30:00", "name": "ENGINEERING THERMODYNAMICS", "id":2},
            {"code": "MET204", "date": "May 8, 2025 9:30:00", "name": "MANUFACTURING PROCESS", "id":3},
            {"code": "MET206", "date": "May 13, 2025 9:30:00", "name": "FLUID MACHINERY", "id":4},
            {"code": "EST200", "date": "May 16, 2025 9:30:00", "name": "DESIGN AND ENGINEERING", "id":5},
            {"code": "HUT200", "date": "May 16, 2025 9:30:00", "name": "PROFESSIONAL ETHICS", "id":6},
            {"code": "MCN202", "date": "May 20, 2025 9:30:00", "name": "CONSTITUTION OF INDIA", "id":7},
        ],

        "EE": [
            {"code": "EET202", "date": "May 2, 2025 9:30:00", "name": "DC MACHINES AND TRANSFORMERS", "id": 1 },
            {"code": "EET204", "date": "May 8, 2025 9:30:00", "name": "ELECTROMAGNETIC THEORY", "id":2},
            {"code": "EET206", "date": "May 13, 2025 9:30:00", "name": "DIGITAL ELECTRONICS", "id":3},
            {"code": "EST200", "date": "May 16, 2025 9:30:00", "name": "DESIGN AND ENGINEERING", "id":4},
            {"code": "HUT200", "date": "May 16, 2025 9:30:00", "name": "PROFESSIONAL ETHICS", "id":5},
            {"code": "MCN202", "date": "May 20, 2025 9:30:00", "name": "CONSTITUTION OF INDIA", "id":6},
        ],

    },
    "S6": {
        "AD": [
            { "code": "ADT302", "date": "April 25, 2025 9:30:00", "name": "Concepts in Big Data Analytics", "id": 1 },
            { "code": "AIT304", "date": "April 30, 2025 9:30:00", "name": "Robotics and Intelligent System", "id": 2 },
            { "code": "CST306", "date": "May 7, 2025 9:30:00", "name": "Algorithm Analysis And Design", "id": 3 },
            { "code": "ADT---", "date": "May 12, 2025 9:30:00", "name": "Elective - I", "id": 4 },
            { "code": "HUT300", "date": "May 15, 2025 9:30:00", "name": "Industrial Economics And Foreign Trade", "id": 5 },
            { "code": "ADT308", "date": "May 19, 2025 9:30:00", "name": "Comprehensive Course Work", "id": 6 }
        ],

        "AM": [
            { "code": "AMT302", "date": "April 25, 2025 9:30:00", "name": "Concepts in Natural Language Processing", "id": 1 },
            { "code": "AIT304", "date": "April 30, 2025 9:30:00", "name": "Robotics and Intelligent System", "id": 2 },
            { "code": "CST306", "date": "May 7, 2025 9:30:00", "name": "Algorithm Analysis And Design", "id": 3 },
            { "code": "AMT---", "date": "May 12, 2025 9:30:00", "name": "Elective - I", "id": 4 },
            { "code": "HUT300", "date": "May 15, 2025 9:30:00", "name": "Industrial Economics And Foreign Trade", "id": 5 },
            { "code": "AMT308", "date": "May 19, 2025 9:30:00", "name": "Comprehensive Course Work", "id": 6 }
        ],

        "BM": [
            { "code": "BMT302", "date": "April 25, 2025 9:30:00", "name": "Biomechanics", "id": 1 },
            { "code": "BMT304", "date": "April 30, 2025 9:30:00", "name": "Therapeutics Equipments", "id": 2 },
            { "code": "BMT306", "date": "May 7, 2025 9:30:00", "name": "Principles of Medical Imaging", "id": 3 },
            { "code": "BMT3x2", "date": "May 12, 2025 9:30:00", "name": "Elective - I", "id": 4 },
            { "code": "HUT300", "date": "May 15, 2025 9:30:00", "name": "Industrial Economics And Foreign Trade", "id": 5 },
            { "code": "HUT310", "date": "May 15, 2025 9:30:00", "name": "Management for Engineers", "id": 6 },
            { "code": "BMT308", "date": "May 19, 2025 9:30:00", "name": "Comprehensive Course Work", "id": 7 }
        ],

        "BT": [
            { "code": "BTT302", "date": "April 25, 2025 9:30:00", "name": "Bioinformatics", "id": 1 },
            { "code": "BTT304", "date": "April 30, 2025 9:30:00", "name": "Downstream Processing", "id": 2 },
            { "code": "BTT306", "date": "May 7, 2025 9:30:00", "name": "Bioreactor Control and Instrumentation", "id": 3 },
            { "code": "BTT3x2", "date": "May 12, 2025 9:30:00", "name": "Elective - I", "id": 4 },
            { "code": "HUT300", "date": "May 15, 2025 9:30:00", "name": "Industrial Economics And Foreign Trade", "id": 5 },
            { "code": "HUT310", "date": "May 15, 2025 9:30:00", "name": "Management for Engineers", "id": 6 },
            { "code": "BTT308", "date": "May 19, 2025 9:30:00", "name": "Comprehensive Course Work", "id": 7 }
        ],

        "CA": [
            { "code": "CST302", "date": "April 25, 2025 9:30:00", "name": "Compiler Design", "id": 1 },
            { "code": "AIT304", "date": "April 30, 2025 9:30:00", "name": "Robotics and Intelligent System", "id": 2 },
            { "code": "CST306", "date": "May 7, 2025 9:30:00", "name": "Algorithm Analysis And Design", "id": 3 },
            { "code": "CAT---", "date": "May 12, 2025 9:30:00", "name": "Elective - I", "id": 4 },
            { "code": "HUT300", "date": "May 15, 2025 9:30:00", "name": "Industrial Economics And Foreign Trade", "id": 5 },
            { "code": "HUT310", "date": "May 15, 2025 9:30:00", "name": "Management for Engineers", "id": 6 },
            { "code": "CAT308", "date": "May 19, 2025 9:30:00", "name": "Comprehensive Course Work", "id": 7 }
        ],

        "CC": [
            { "code": "CST302", "date": "April 25, 2025 9:30:00", "name": "Compiler Design", "id": 1 },
            { "code": "CCT304", "date": "April 30, 2025 9:30:00", "name": "Cyber Forensics", "id": 2 },
            { "code": "CST306", "date": "May 7, 2025 9:30:00", "name": "Algorithm Analysis And Design", "id": 3 },
            { "code": "CST---", "date": "May 12, 2025 9:30:00", "name": "Elective - I", "id": 4 },
            { "code": "HUT300", "date": "May 15, 2025 9:30:00", "name": "Industrial Economics And Foreign Trade", "id": 5 },
            { "code": "CCT308", "date": "May 19, 2025 9:30:00", "name": "Comprehensive Course Work", "id": 6 }
        ],

        "CS": [
            { "code": "CST302", "date": "April 25, 2025 9:30:00", "name": "Compiler Design", "id": 1 },
            { "code": "CST304", "date": "April 30, 2025 9:30:00", "name": "Computer Graphics And Image Processing", "id": 2 },
            { "code": "CST306", "date": "May 7, 2025 9:30:00", "name": "Algorithm Analysis And Design", "id": 3 },
            { "code": "CST3x2", "date": "May 12, 2025 9:30:00", "name": "Elective - I", "id": 4 },
            { "code": "HUT300", "date": "May 15, 2025 9:30:00", "name": "Industrial Economics And Foreign Trade", "id": 5 },
            { "code": "HUT310", "date": "May 15, 2025 9:30:00", "name": "Management for Engineers", "id": 5 },
            { "code": "CST308", "date": "May 19, 2025 9:30:00", "name": "Comprehensive Course Work", "id": 6 }
        ],

        "IT": [
            { "code": "ITT302", "date": "April 25, 2025 9:30:00", "name": "Internetworking With TCP/IP", "id": 1 },
            { "code": "ITT304", "date": "April 30, 2025 9:30:00", "name": "Algorithm Analysis And Design", "id": 2 },
            { "code": "ITT306", "date": "May 7, 2025 9:30:00", "name": "Data Science", "id": 3 },
            { "code": "ITT3x2", "date": "May 12, 2025 9:30:00", "name": "Elective - I", "id": 4 },
            { "code": "HUT300", "date": "May 15, 2025 9:30:00", "name": "Industrial Economics And Foreign Trade", "id": 5 },
            { "code": "HUT310", "date": "May 15, 2025 9:30:00", "name": "Management For Engineers", "id": 5 },
            { "code": "ITT308", "date": "May 19, 2025 9:30:00", "name": "Comprehensive Course Work", "id": 6 }
        ],

        "EC": [
            { "code": "ECT302", "date": "April 25, 2025 9:30:00", "name": "Electromagnetics", "id": 1 },
            { "code": "ECT304", "date": "April 30, 2025 9:30:00", "name": "VLSI Circuit Design", "id": 2 },
            { "code": "ECT306", "date": "May 7, 2025 9:30:00", "name": "Information Theory And Coding", "id": 3 },
            { "code": "ECT3x2", "date": "May 12, 2025 9:30:00", "name": "Elective - I", "id": 4 },
            { "code": "HUT300", "date": "May 15, 2025 9:30:00", "name": "Industrial Economics And Foreign Trade", "id": 5 },
            { "code": "HUT310", "date": "May 15, 2025 9:30:00", "name": "Management For Engineers", "id": 6 },
            { "code": "ECT308", "date": "May 19, 2025 9:30:00", "name": "Comprehensive Course Work", "id": 7 }
        ],

        "ER": [
            { "code": "ERT302", "date": "April 25, 2025 9:30:00", "name": "Operating Systems ", "id": 1 },
            { "code": "ERT304", "date": "April 30, 2025 9:30:00", "name": "Embedded Systems & IoT", "id": 2 },
            { "code": "ERT306", "date": "May 7, 2025 9:30:00", "name": "Data Communication and Networking", "id": 3 },
            { "code": "ERT–", "date": "May 12, 2025 9:30:00", "name": "Elective - I", "id": 4 },
            { "code": "HUT300", "date": "May 15, 2025 9:30:00", "name": "Industrial Economics And Foreign Trade", "id": 5 },
            { "code": "ERT308", "date": "May 19, 2025 9:30:00", "name": "Comprehensive Course Work", "id": 6 }
        ],

        "ME": [
            { "code": "MET302", "date": "April 25, 2025 9:30:00", "name": "Heat & Mass Transfer", "id": 1 },
            { "code": "MET304", "date": "April 30, 2025 9:30:00", "name": "Dynamics Of Machinery & Machine Design", "id": 2 },
            { "code": "MET306", "date": "May 7, 2025 9:30:00", "name": "Advanced Manufacturing Engineering", "id": 3 },
            { "code": "MET3x2", "date": "May 12, 2025 9:30:00", "name": "Elective - I", "id": 4 },
            { "code": "HUT300", "date": "May 15, 2025 9:30:00", "name": "Industrial Economics And Foreign Trade", "id": 5 },
            { "code": "HUT310", "date": "May 15, 2025 9:30:00", "name": "Management for Engineers", "id": 6 },
            { "code": "MET308", "date": "May 19, 2025 9:30:00", "name": "Comprehensive Course Work", "id": 7 },
        ],
    
        "EE": [
            { "code": "EET302", "date": "April 25, 2025 9:30:00", "name": "Linear Control Systems", "id": 1 },
            { "code": "EET304", "date": "April 30, 2025 9:30:00", "name": "Power Systems II", "id": 2 },
            { "code": "EET306", "date": "May 7, 2025 9:30:00", "name": "Power Electronics", "id": 3 },
            { "code": "EET3x2", "date": "May 12, 2025 9:30:00", "name": "Elective - I", "id": 4 },
            { "code": "HUT300", "date": "May 15, 2025 9:30:00", "name": "Industrial Economics And Foreign Trade", "id": 5 },
            { "code": "HUT310", "date": "May 15, 2025 9:30:00", "name": "Management For Engineers", "id": 6 },
            { "code": "EET308", "date": "May 19, 2025 9:30:00", "name": "Comprehensive Course Work", "id": 7 }
        ],

        "CE": [
            { "code": "CET302", "date": "April 25, 2025 9:30:00", "name": "Structural Analysis - II", "id": 1 },
            { "code": "CET304", "date": "April 30, 2025 9:30:00", "name": "Environmental Engineering", "id": 2 },
            { "code": "CET306", "date": "May 7, 2025 9:30:00", "name": "Design of Hydraulic Structures", "id": 3 },
            { "code": "CET3x2", "date": "May 12, 2025 9:30:00", "name": "Elective - I", "id": 4 },
            { "code": "HUT300", "date": "May 15, 2025 9:30:00", "name": "Industrial Economics And Foreign Trade", "id": 5 },
            { "code": "HUT310", "date": "May 15, 2025 9:30:00", "name": "Management for Engineers", "id": 6 },
            { "code": "CET308", "date": "May 19, 2025 9:30:00", "name": "Comprehensive Course Work", "id": 7 }
        ],
        
    },
    "S8": {
        "AD": [
            { "code": "ADT402", "date": "April 16, 2025 9:30:00", "name": "Business Analytics", "id": 1 },
            {"code": "ADT---", "date": "April 22 2025 9:30:00", "name": "Program Elective 3", "id":2},
            {"code": "ADT---", "date": "April 24, 2025 9:30:00", "name": "Program Elective 4", "id":3},
            {"code": "CST4X8", "date": "April 29, 2025 9:30:00", "name": "Program Elective 5", "id":4},
        ],

        "AM": [
            { "code": "AMT402", "date": "April 16, 2025 9:30:00", "name": "Concepts in Reinforcement Learning", "id": 1 },
            {"code": "AMT---", "date": "April 22 2025 9:30:00", "name": "Program Elective 3", "id":2},
            {"code": "AMT---", "date": "April 24, 2025 9:30:00", "name": "Program Elective 4", "id":3},
            {"code": "AMT---", "date": "April 29, 2025 9:30:00", "name": "Program Elective 5", "id":4},
        ],

        "BM": [
            { "code": "BMT402", "date": "April 16, 2025 9:30:00", "name": "Biomaterials", "id": 1 },
            {"code": "BMT4X4", "date": "April 22 2025 9:30:00", "name": "Program Elective 3", "id":2},
            {"code": "BMT4X6", "date": "April 24, 2025 9:30:00", "name": "Program Elective 4", "id":3},
            {"code": "BMT4X8", "date": "April 29, 2025 9:30:00", "name": "Program Elective 5", "id":4},
        ],

        "BT": [
            { "code": "BTT402", "date": "April 16, 2025 9:30:00", "name": "Environmental Biotechnology", "id": 1 },
            {"code": "BTT4X4", "date": "April 22 2025 9:30:00", "name": "Program Elective 3", "id":2},
            {"code": "BTT4X6", "date": "April 24, 2025 9:30:00", "name": "Program Elective 4", "id":3},
            {"code": "BTT4X8", "date": "April 29, 2025 9:30:00", "name": "Program Elective 5", "id":4},
        ],

        "CA": [
            { "code": "AIT402", "date": "April 16, 2025 9:30:00", "name": "Robotic Process Automation", "id": 1 },
            {"code": "CAT---", "date": "April 22 2025 9:30:00", "name": "Program Elective 3", "id":2},
            {"code": "CAT---", "date": "April 24, 2025 9:30:00", "name": "Program Elective 4", "id":3},
            {"code": "CST4X8", "date": "April 29, 2025 9:30:00", "name": "Program Elective 5", "id":4},
        ],

        "CE": [
            { "code": "CET402", "date": "April 16, 2025 9:30:00", "name": "Quantity Surveying and Valuation", "id": 1 },
            {"code": "CET4X4", "date": "April 22 2025 9:30:00", "name": "Program Elective 3", "id":2},
            {"code": "CET4X6", "date": "April 24, 2025 9:30:00", "name": "Program Elective 4", "id":3},
            {"code": "CET4X8", "date": "April 29, 2025 9:30:00", "name": "Program Elective 5", "id":4},
        ],

        "CC": [
            { "code": "CCT402", "date": "April 16, 2025 9:30:00", "name": "Biometric Security", "id": 1 },
            {"code": "CCT---", "date": "April 22 2025 9:30:00", "name": "Program Elective 3", "id":2},
            {"code": "CCT---", "date": "April 24, 2025 9:30:00", "name": "Program Elective 4", "id":3},
            {"code": "CST4X8", "date": "April 29, 2025 9:30:00", "name": "Program Elective 5", "id":4},
        ],

        "CS": [
            { "code": "CST402", "date": "April 16, 2025 9:30:00", "name": "Distributed Computing", "id": 1 },
            {"code": "CST4X4", "date": "April 22 2025 9:30:00", "name": "Program Elective 3", "id":2},
            {"code": "CST4X6", "date": "April 24, 2025 9:30:00", "name": "Program Elective 4", "id":3},
            {"code": "CST4X8", "date": "April 29, 2025 9:30:00", "name": "Program Elective 5", "id":4},
        ],

        "EC":[
            { "code": "ECT402", "date": "April 16, 2025 9:30:00", "name": "Wireless Communication", "id": 1 },
            {"code": "ECT4X4", "date": "April 22, 2025 9:30:00", "name": "Program Elective 3", "id":2},
            {"code": "ECT4XX", "date": "April 24, 2025 9:30:00", "name": "Program Elective 4", "id":3},
            {"code": "ECT4XX", "date": "April 29, 2025 9:30:00", "name": "Program Elective 5", "id":4},
        ],

        "EE":[
            { "code": "EET402", "date": "April 16, 2025 9:30:00", "name": "Electrical System Design and Estimation", "id": 1 },
            {"code": "EET4X4", "date": "April 22, 2025 9:30:00", "name": "Program Elective 3", "id":2},
            {"code": "EET4X6", "date": "April 24, 2025 9:30:00", "name": "Program Elective 4", "id":3},
            {"code": "EET4X8", "date": "April 29, 2025 9:30:00", "name": "Program Elective 5", "id":4},
        ],

        "ER": [
            { "code": "ERT402", "date": "April 16, 2025 9:30:00", "name": "Algorithm Analysis and Design", "id": 1 },
            {"code": "ERT4X4", "date": "April 22 2025 9:30:00", "name": "Program Elective 3", "id":2},
            {"code": "XXX", "date": "April 24, 2025 9:30:00", "name": "Program Elective 4", "id":3},
            {"code": "XXX", "date": "April 29, 2025 9:30:00", "name": "Program Elective 5", "id":4},
        ],

        "IT":[
            { "code": "ITT402", "date": "April 16, 2025 9:30:00", "name": "Cryptography and Network Security", "id": 1 },
            {"code": "ITT4X4", "date": "April 22, 2025 9:30:00", "name": "Program Elective 3", "id":2},
            {"code": "ITT4X6", "date": "April 24, 2025 9:30:00", "name": "Program Elective 4", "id":3},
            {"code": "ITT4X8", "date": "April 29, 2025 9:30:00", "name": "Program Elective 5", "id":4},
        ],
        "ME":[
            { "code": "MET402", "date": "April 16, 2025 9:30:00", "name": "Mechatronics", "id": 1 },
            {"code": "MET4X4", "date": "April 22, 2025   9:30:00", "name": "Program Elective 3", "id":2},
            {"code": "MET4X6", "date": "April 24, 2025 9:30:00", "name": "Program Elective 4", "id":3},
            {"code": "MET4X8", "date": "April 29, 2025 9:30:00", "name": "Program Elective 5", "id":4},
        ],
    }

}

var defaultBranch;
var defaultSem;
if (localStorage.getItem('branch')) {
    defaultBranch = localStorage.getItem('branch');
    document.getElementById("branch").value = defaultBranch;
}else{
    defaultBranch = "CS";
}

if (localStorage.getItem('sem')) {
    defaultSem = localStorage.getItem('sem');
    document.getElementById("sem").value = defaultSem;
}else{
    defaultSem = "S6";
}
    

function countdown(cdate, dest) {
    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = cdate - now;
        if (distance < 0) {
            clearInterval(x);
            dest.innerHTML = "EXAM OVER";
            return;
        }
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (days < 5) {
            dest.style.color = "red";
        } else {
            dest.style.color = "black";
        }

        dest.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    }, 1000);
}

document.getElementById('branch').addEventListener('change', function (e) {
    defaultBranch = e.target.value;
    updateTable(defaultSem, defaultBranch);
    localStorage.setItem('branch', defaultBranch);
})

document.getElementById('sem').addEventListener('change', function (e) {
    defaultSem = e.target.value;
    updateTable(defaultSem, defaultBranch);
    localStorage.setItem('sem', defaultSem);
})


function updateTable(sem, branch) {
    tableBody.innerHTML = "";
    if(examsDetails[sem] === undefined || examsDetails[sem][branch] === undefined){
        document.getElementById('meme').innerHTML = `<img src="3.png" alt="No Data Found" style="width: 30vh; height: 30vh; object-fit: contain;">`;
    }else{
        document.getElementById('meme').innerHTML = "";
    
    }
    examsDetails[sem][branch].forEach(exam => {
        var row = document.createElement('tr');
        row.innerHTML = `
        <td>${exam.id}</td>
        <td>${exam.name}</td>
        <td>${exam.code}</td>
        <td>${exam.date}</td>
        <td id="countdown${exam.id}"> </td>
        `;
        tableBody.appendChild(row);
        countdown(new Date(exam.date).getTime(), document.getElementById(`countdown${exam.id}`));
    });
}

updateTable(defaultSem, defaultBranch);
