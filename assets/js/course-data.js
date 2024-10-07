const courseData = [
    { id: 1, type: 'banking', courseName: 'IBPS PO', img: 'assets/img/exams/ibps-po.svg' },
    { id: 2, type: 'banking', courseName: 'IBPS Clerk', img: 'assets/img/exams/ibps-clerk.svg' },
    { id: 3, type: 'banking', courseName: 'IBPS RRB PO', img: 'assets/img/exams/ibps-rrb-po.svg' },
    { id: 4, type: 'banking', courseName: 'IBPS RRB Clerk', img: 'assets/img/exams/ibps-rrb-clerk.svg' },
    { id: 5, type: 'banking', courseName: 'IBPS SO', img: 'assets/img/exams/ibps-so.svg' },

    { id: 6, type: 'banking', courseName: 'SBI PO', img: 'assets/img/exams/sbi-po.svg' },
    { id: 7, type: 'banking', courseName: 'SBI Clerk', img: 'assets/img/exams/sbi-clerk.svg' },
    { id: 8, type: 'banking', courseName: 'SBI Associate', img: 'assets/img/exams/sbi-associate.svg' },
    { id: 10, type: 'banking', courseName: 'SBI SO', img: 'assets/img/exams/sbi-so.svg' },
    { id: 11, type: 'banking', courseName: 'RBI Grade - B', img: 'assets/img/exams/rbi-grade-b.svg' },
    { id: 12, type: 'banking', courseName: 'RBI Assistant', img: 'assets/img/exams/rbi-assistant.svg' },


    { id: 13, type: 'ssc', courseName: 'SSC MTS', img: 'assets/img/exams/ssc-mts.svg' },
    { id: 14, type: 'ssc', courseName: 'SSC CGL', img: 'assets/img/exams/ssc-cgl.svg' },
    { id: 15, type: 'ssc', courseName: 'SSC CHSL', img: 'assets/img/exams/ssc-chsl.svg' },
    { id: 16, type: 'ssc', courseName: 'SSC CPO', img: 'assets/img/exams/ssc-cpo.svg' },
    { id: 17, type: 'ssc', courseName: 'SSC JE', img: 'assets/img/exams/ssc-je.svg' },

    { id: 18, type: 'ssc', courseName: 'SBI STENO', img: 'assets/img/exams/ssc-steno.svg' },
    { id: 19, type: 'ssc', courseName: 'SBI GD Constable', img: 'assets/img/exams/ssc-gd.svg' },
    { id: 20, type: 'ssc', courseName: 'SBI IB ACIO', img: 'assets/img/exams/ssc-ib-acio.svg' },

    { id: 21, type: 'railway', courseName: 'RRB NTPC', img: 'assets/img/exams/rrb-ntpc.png' },
    { id: 22, type: 'railway', courseName: 'RRB JE', img: 'assets/img/exams/rrb-je.png' },
    { id: 23, type: 'railway', courseName: 'RRB GROUP D', img: 'assets/img/exams/rrb-group-d.png' },
    { id: 24, type: 'railway', courseName: 'RRB ALP', img: 'assets/img/exams/rrb-alp.png' },
    { id: 25, type: 'railway', courseName: 'RPF SI', img: 'assets/img/exams/rpf-si.png' },
    { id: 25, type: 'railway', courseName: 'RPF CONSTABLE', img: 'assets/img/exams/rpf-constable.png' }
];

// Function to get query parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Function to update the page content based on the ID
function updatePageContent() {
    // Get the 'id' from the URL
    const id = getQueryParam('id');

    // Find the data by id
    const course = courseData.find(item => item.id == id);

    // If the person is found, update the h1 tag
    if (course) {
        document.getElementById('service-name').textContent = `${course.courseName} Besic Course`;
        document.getElementById('title').textContent = `${course.courseName} - Get Ready`;
        document.getElementById('course-name').textContent = `${course.courseName} Besic Course`;
        document.getElementById('courseImage').src = `${course.img}`;
        document.getElementById('service-name').textContent = `${course.courseName} Besic Course`;
        document.getElementById('service-name').textContent = `${course.courseName} Besic Course`;
    }
}

// Run the update function after the page loads
window.onload = updatePageContent;