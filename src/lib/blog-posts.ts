export interface BlogPost {
    title: string;
    url: string;
    /** ISO date string: YYYY-MM-DD */
    date: string;
    description?: string;
}

// Newest entries first
export const blogPosts: BlogPost[] = [
    {
        title: "Jitse's trip report for ESWC 2025",
        url: "https://knows.idlab.ugent.be/news/eswc2025-trip-report/",
        date: "2025-06-20",
    },
    {
        title: "Jitse De Smet joins KNoWS",
        url: "https://knows.idlab.ugent.be/news/new-colleague-jitse-de-smet/",
        date: "2024-10-17",
    },
];
