const blogs = [
    {
        id: 1,
        image: "https://www.gogetready.in/assets/img/blogs/rrb-ntpc-nitification-2024.svg",
        category: "RRB NTPC",
        title: "RRB NTPC 2024 Notification Out, Check All Details Before Apply",
        author: "Admin",
        authorImage: "assets/img/logo.svg",
        date: "2024-10-05",
        blogLink: "https://www.gogetready.in/blogs/rrb-ntpc-2024-notification.html"
    },
    {
        id: 2,
        image: "https://www.gogetready.in/assets/img/blogs/rrb-ntpc-previous-year-cutoff.svg",
        category: "RBI",
        title: "RRB NTPC Cut Off 2024, Category Wise Previous Year Cut Off",
        author: "Admin",
        authorImage: "assets/img/logo.svg",
        date: "2024-10-10",
        blogLink: "https://www.gogetready.in/blogs/rrb-ntpc-cut-off.html"
    },
    {
        id: 3,
        image: "https://www.gogetready.in/assets/img/blogs/ssc-gd-notification-2025.svg",
        category: "SSC GD",
        title: "SSC GD 2025 Notification Out, Check All Details Before Apply",
        author: "Admin",
        authorImage: "assets/img/logo.svg",
        date: "2024-10-08",
        blogLink: "https://www.gogetready.in/blogs/ssc-gd-constable-2025-notification.html"
    },
    {
        id: 4,
        image: "https://www.gogetready.in/assets/img/blogs/ssc-gd-selection-process.svg",
        category: "SSC GD",
        title: "SSC GD Selection Process 2025, CBT, PET, PST, Medical Exam",
        author: "Admin",
        authorImage: "assets/img/logo.svg",
        date: "2024-10-11",
        blogLink: "https://www.gogetready.in/blogs/SSC-GD-Selection-Process.html"
    },
    {
        id: 5,
        image: "https://www.gogetready.in/assets/img/blogs/Bank-Exam-Preparation-Tips.svg",
        category: "General",
        title: "How Can Coaching Help You Achieve Hard Goals?",
        author: "Admin",
        authorImage: "assets/img/logo.svg",
        date: "2024-10-02",
        blogLink: "https://www.gogetready.in/blogs/How-Can-Coaching-Help-You-Achieve-Hard-Goals.html"
    },
    {
        id: 6,
        image: "https://www.gogetready.in/assets/img/blogs/Bank-Exam-Preparation-Tips.svg",
        category: "General",
        title: "Bank Exam Preparation Tips For Beginners, Study Plan",
        author: "Admin",
        authorImage: "assets/img/logo.svg",
        date: "2024-10-01",
        blogLink: "https://www.gogetready.in/blogs/struggling-with-banking-prep.html"
    },
    {
        id: 7,
        image: "https://www.gogetready.in/assets/img/blogs/uiic-2024-notification.png",
        category: "UIIC AO",
        title: "UIIC AO Recruitment 2024, Notification Out for 200 Posts",
        author: "Admin",
        authorImage: "assets/img/logo.svg",
        date: "2024-10-14",
        blogLink: "https://www.gogetready.in/blogs/UIIC-AO-Recruitment-2024.html"
    },
    {
        id: 8,
        image: "https://www.gogetready.in/assets/img/blogs/uiic-ao-2024-cutoff.png",
        category: "UIIC AO",
        title: "UIIC AO Cut Off 2024, Category Wise Previous Year Cut Off Marks",
        author: "Admin",
        authorImage: "assets/img/logo.svg",
        date: "2024-10-14",
        blogLink: "https://www.gogetready.in/blogs/uiic-ao-cut-off-2024.html"
    },
    {
        id: 9,
        image: "https://www.gogetready.in/assets/img/blogs/uiic-ao-2024-syllabus.png",
        category: "UIIC AO",
        title: "UIIC AO Syllabus 2024, Exam Pattern, Download PDF",
        author: "Admin",
        authorImage: "assets/img/logo.svg",
        date: "2024-10-14",
        blogLink: "https://www.gogetready.in/blogs/uiic-ao-syllabus.html"
    },
    {
        id: 10,
        image: "https://www.gogetready.in/assets/img/blogs/uiic-ao-2024-salary.png",
        category: "UIIC AO",
        title: "UIIC AO Salary 2024, Pay Scale, Salary Structure",
        author: "Admin",
        authorImage: "assets/img/logo.svg",
        date: "2024-10-14",
        blogLink: "https://www.gogetready.in/blogs/uiic-ao-salary-2024.html"
    },
    {
        id: 11,
        image: "https://www.gogetready.in/assets/img/blogs/ssc-mts-admit-card-2024.png",
        category: "SSC MTS",
        title: "SSC MTS Admit Card 2024 Released, Download Hall Ticket PDF",
        author: "Admin",
        authorImage: "assets/img/logo.svg",
        date: "2024-10-16",
        blogLink: "https://www.gogetready.in/blogs/ssc-mts-admit-card-2024.html"
    },
    {
        id: 12,
        image: "https://www.gogetready.in/assets/img/blogs/nabard/Nabard-office-attendent-notification.png",
        category: "NABARD",
        title: "NABARD Office Attendant 2024, Apply Link Active for 108 Post",
        author: "Admin",
        authorImage: "assets/img/logo.svg",
        date: "2024-10-16",
        blogLink: "https://www.gogetready.in/blogs/nabard/nabard-office-attendant-2024.html"
    },
    {
        id: 13,
        image: "https://www.gogetready.in/assets/img/blogs/nabard/Nabard-office-attendent-salary.png",
        category: "NABARD",
        title: "NABARD Office Attendant Salary 2024, Job Profile and Perks",
        author: "Admin",
        authorImage: "assets/img/logo.svg",
        date: "2024-10-16",
        blogLink: "https://www.gogetready.in/blogs/nabard/nabard-office-attendant-salary.html"
    },
    {
        id: 14,
        image: "https://www.gogetready.in/assets/img/blogs/nabard/Nabard-office-attendent-syllabus.png",
        category: "NABARD",
        title: "NABARD Office Attendant Syllabus 2024, Exam Pattern",
        author: "Admin",
        authorImage: "assets/img/logo.svg",
        date: "2024-10-16",
        blogLink: "https://www.gogetready.in/blogs/nabard/nabard-office-attendant-syllabus.html"
    },
    // Add 14 more blogs here to make 20 in total.
    // Make sure to add images, category, title, author, and dates in the same format.
];
