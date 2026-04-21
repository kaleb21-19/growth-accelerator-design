// --- Standard Imports (1-8) ---
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

// --- Primary Results Assets (10-15) ---
import b10 from "@/assets/b10.png";
import b11 from "@/assets/b11.png";
import b12 from "@/assets/b12.png";
import b13 from "@/assets/b13.png";
import b14 from "@/assets/b14.png";
import b15 from "@/assets/b15.png";

// --- Additional Assets (16-21) ---
import b16 from "@/assets/b16.png";
import f16 from "@/assets/f16.jpg";
import f17 from "@/assets/f17.jpg";
import b18 from "@/assets/b18.png";
import f18 from "@/assets/f18.jpg";
import b19 from "@/assets/b19.png";
import f19 from "@/assets/f19.jpg";
import b20 from "@/assets/b20.png";
import f20 from "@/assets/f20.jpg";
import b21 from "@/assets/b21.png";
import f21 from "@/assets/f21.jpg";

export interface ResultItem {
  before: string;
  after: string;
  caption: string;
}

// These are used for your new SocialProof section (Only Afters)
export const primaryResults: ResultItem[] = [
  { before: "", after: b10, caption: "" },
  { before: "", after: b11, caption: "" },
  { before: "", after: b12, caption: "" },
  { before: "", after: b13, caption: "" },
  { before: "", after: b14, caption: "" },
  { before: "", after: b15, caption: "" },
];

// Deduplicated: Removed 10, 11, 12, 13, 14, and 15
export const moreResults: ResultItem[] = [
  { before: before1, after: after1, caption: "2,500 → 450,000 followers" },
  { before: before2, after: after2, caption: "800 → 320,000 followers" },
  { before: before3, after: after3, caption: "1,200 → 185,000 followers" },
  { before: before4, after: after4, caption: "1,800 → 120,000 followers" },
  { before: before5, after: after5, caption: "900 → 280,000 followers" },
  { before: before6, after: after6, caption: "2,200 → 410,000 followers" },
  { before: before7, after: after7, caption: "1,500 → 195,000 followers" },
  { before: before8, after: after8, caption: "600 → 380,000 followers" },
  { before: b16, after: f16, caption: "750 → 115,000 followers" },
  { before: b18, after: f18, caption: "1,300 → 155,000 followers" },
  { before: b19, after: f19, caption: "900 → 210,000 followers" },
  { before: b20, after: f20, caption: "3,800 → 340,000 followers" },
  { before: b21, after: f21, caption: "1,200 → 130,000 followers" },
];

// This list now contains everything without repeating the 10-15 set
export const allResults: ResultItem[] = [...primaryResults, ...moreResults];
