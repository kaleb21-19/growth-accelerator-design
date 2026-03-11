import before1 from "@/assets/b1.jpg";
import after1 from "@/assets/f1.jpg";
import before2 from "@/assets/b2.jpg";
import after2 from "@/assets/f2.jpg";
import before3 from "@/assets/b3.jpg";
import after3 from "@/assets/f3.jpg";
import before4 from "@/assets/b4.jpg";
import after4 from "@/assets/f4.jpg";
import before5 from "@/assets/b5.jpg";
import after5 from "@/assets/f5.jpg";
import before6 from "@/assets/b6.jpg";
import after6 from "@/assets/f6.jpg";
import before7 from "@/assets/b7.jpg";
import after7 from "@/assets/f7.jpg";
import before8 from "@/assets/b8.jpg";
import after8 from "@/assets/f8.jpg";


export interface ResultItem {
  before: string;
  after: string;
  caption: string;
}

export const primaryResults: ResultItem[] = [
  { before: before1, after: after1, caption: "2,500 → 450K followers in 6 months" },
  { before: before2, after: after2, caption: "800 → 320K followers in 4 months" },
  { before: before3, after: after3, caption: "1,200 → 185K followers in 5 months" },
];

export const moreResults: ResultItem[] = [
  { before: before3, after: after3, caption: "1,200 → 85,000 followers in 5 months" },
  { before: before1, after: after1, caption: "700 → 450,000 followers in 6 months" },
  { before: before2, after: after2, caption: "3,500 → 320,000 followers in 4 months" },
  { before: before4, after: after4, caption: "1,800 → 120,000 followers in 5 months" },
  { before: before5, after: after5, caption: "900 → 280,000 followers in 4 months" },
  { before: before6, after: after6, caption: "2,200 → 410,000 followers in 6 months" },
  { before: before7, after: after7, caption: "1,500 → 195,000 followers in 5 months" },
  { before: before8, after: after8, caption: "600 → 380,000 followers in 4 months" },
];

export const allResults: ResultItem[] = [...primaryResults, ...moreResults];
