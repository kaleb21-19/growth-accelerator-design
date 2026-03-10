import before1 from "@/assets/before-1.png";
import after1 from "@/assets/after-1.png";
import before2 from "@/assets/before-2.png";
import after2 from "@/assets/after-2.png";
import before3 from "@/assets/before-3.png";
import after3 from "@/assets/after-3.png";

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
];

export const allResults: ResultItem[] = [...primaryResults, ...moreResults];
