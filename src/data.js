import { ILLUSTRATIONS, GRAPHIC_DESIGN } from "./routes";
import abcForLittlePiantists1 from "./images/illustrations/books/ABCForLittlePianists/1 - Bladzij 8.jpg";
import abcForLittlePiantists2 from "./images/illustrations/books/ABCForLittlePianists/2 - Bladzij 6.jpg";
import abcForLittlePiantists3 from "./images/illustrations/books/ABCForLittlePianists/3 - Bladzij 16.jpg";
import abcForLittlePiantists4 from "./images/illustrations/books/ABCForLittlePianists/4 - Bladzij 17.jpg";
import abcForLittlePiantists5 from "./images/illustrations/books/ABCForLittlePianists/Dolfijn.jpg";
import abcForLittlePiantists6 from "./images/illustrations/books/ABCForLittlePianists/Flamingo.jpg";
import abcForLittlePiantists7 from "./images/illustrations/books/ABCForLittlePianists/Giraffe.jpg";
import deWeddenskip1 from "./images/illustrations/books/deWeddenskip/1 - De spear Gungnir 1200 dpi.jpg";
import deWeddenskip2 from "./images/illustrations/books/deWeddenskip/2 - It skip Skidbladnir ein.jpg";
import deWeddenskip3 from "./images/illustrations/books/deWeddenskip/3 - De ring Draupnir.jpg";
import deWeddenskip4 from "./images/illustrations/books/deWeddenskip/4 - It swyn Gullinbursti - ein.jpg";
import deWeddenskip5 from "./images/illustrations/books/deWeddenskip/5 - boek.jpg";
import deWeddenskip6 from "./images/illustrations/books/deWeddenskip/6 - boek.jpg";
import deWeddenskip7 from "./images/illustrations/books/deWeddenskip/7 - boek.jpg";
import deWeddenskip8 from "./images/illustrations/books/deWeddenskip/8 - boek.jpg";
import deWeddenskip9 from "./images/illustrations/books/deWeddenskip/9 - boek.jpg";
import deWeddenskip10 from "./images/illustrations/books/deWeddenskip/10 - boek.jpg";
import erikOfItLytsYnsekteboek1 from "./images/illustrations/books/erikOfItLytsYnsekteboek/1 - H3 Holder.jpg";
import erikOfItLytsYnsekteboek2 from "./images/illustrations/books/erikOfItLytsYnsekteboek/2 - Haadstik 5.jpg";
import erikOfItLytsYnsekteboek3 from "./images/illustrations/books/erikOfItLytsYnsekteboek/3 - Haadstik 6.jpg";
import erikOfItLytsYnsekteboek4 from "./images/illustrations/books/erikOfItLytsYnsekteboek/4 - H8 Deagraversdûns.jpg";
import erikOfItLytsYnsekteboek5 from "./images/illustrations/books/erikOfItLytsYnsekteboek/5 - Haadstik 13.jpg";
import erikOfItLytsYnsekteboek6 from "./images/illustrations/books/erikOfItLytsYnsekteboek/6 - Flap foarkant.jpg";
import erikOfItLytsYnsekteboek7 from "./images/illustrations/books/erikOfItLytsYnsekteboek/7 - boek.jpg";
import erikOfItLytsYnsekteboek8 from "./images/illustrations/books/erikOfItLytsYnsekteboek/8 - boek.jpg";
import erikOfItLytsYnsekteboek9 from "./images/illustrations/books/erikOfItLytsYnsekteboek/9 - boek.jpg";
import erikOfItLytsYnsekteboek10 from "./images/illustrations/books/erikOfItLytsYnsekteboek/10 - boek.jpg";
import erikOfItLytsYnsekteboek11 from "./images/illustrations/books/erikOfItLytsYnsekteboek/11 - bek.jpg";

const data = {
  english: {
    title: "Nina Peckelsen Illustrations",
    [ILLUSTRATIONS]: {
      name: "Illustrations",
      categories: [
        { name: "Books" },
        { name: "Stained Glass" },
        { name: "Assignments" },
        { name: "Free Work" },
      ],
    },
    [GRAPHIC_DESIGN]: {
      name: "Graphic Design",
      categories: [{ name: "Books" }, { name: "Assignments" }],
    },
  },

  dutch: {
    title: "Nina Peckelsen Illustratie",
    [ILLUSTRATIONS]: {
      name: "Illustraties",
      categories: [
        { name: "Boeken" },
        { name: "Glas-in-lood" },
        { name: "In opdracht" },
        { name: "Vrij werk" },
      ],
    },
    [GRAPHIC_DESIGN]: {
      name: "Grafisch Werk",
      categories: [{ name: "Boeken" }, { name: "Assignments" }],
    },

    images: {
      [ILLUSTRATIONS]: {
        overview: [],
        books: {
          abcForLittlePiantists: [
            abcForLittlePiantists1,
            abcForLittlePiantists2,
            abcForLittlePiantists3,
            abcForLittlePiantists4,
            abcForLittlePiantists5,
            abcForLittlePiantists6,
            abcForLittlePiantists7,
          ],
          deWeddenskip: [
            deWeddenskip1,
            deWeddenskip2,
            deWeddenskip3,
            deWeddenskip4,
            deWeddenskip5,
            deWeddenskip6,
            deWeddenskip7,
            deWeddenskip8,
            deWeddenskip9,
            deWeddenskip10,
          ],
          erikOfItLytsYnsekteboek: [
            erikOfItLytsYnsekteboek1,
            erikOfItLytsYnsekteboek2,
            erikOfItLytsYnsekteboek3,
            erikOfItLytsYnsekteboek4,
            erikOfItLytsYnsekteboek5,
            erikOfItLytsYnsekteboek6,
            erikOfItLytsYnsekteboek7,
            erikOfItLytsYnsekteboek8,
            erikOfItLytsYnsekteboek9,
            erikOfItLytsYnsekteboek10,
            erikOfItLytsYnsekteboek11,
          ],
        },
        stainedGlass: [],
        assignments: [],
        freeWork: [],
      },
      [GRAPHIC_DESIGN]: {
        overview: [],
        books: [],
        assignments: [],
      },
    },
  },
};

export default data;
