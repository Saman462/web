// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import assettag from "../../../public/assets/assettag.png";
import deeproad from "../../../public/assets/deeproad.png";
import pavo from "../../../public/assets/Asset6_1.png";

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      productName:
        "Lörem ipsum suprask kvasisat för att salig. Kan bina i teleligt oaktat pengen dil.",
      productImage: pavo.src,
      productDescription:
        "Mauris eget varius sapien. Sed facilisis congue porta. Nulla laoreet orci nulla, in dictum ligula laoreet nec. Mauris eget varius sapien. Sed facilisis congue porta. Nulla laoreet orci nulla, in dictum ligula laoreet nec.Mauris eget varius sapien. Sed facilisis congue porta. Nulla laoreet orci nulla, in dictum ligula laoreet nec.Mauris eget varius sapien. Sed facilisis congue porta.",
      productLink: "stradaimaging.com/products/pavo-dvi/",
    },
    {
      id: 2,
      productName:
        "Lörem ipsum suprask kvasisat för att salig. Kan bina i teleligt oaktat pengen dil.",
      productImage: assettag.src,
      productDescription:
        "Mauris eget varius sapien. Sed facilisis congue porta. Nulla laoreet orci nulla, in dictum ligula laoreet nec. Mauris eget varius sapien. Sed facilisis congue porta. Nulla laoreet orci nulla, in dictum ligula laoreet nec.Mauris eget varius sapien. Sed facilisis congue porta. Nulla laoreet orci nulla, in dictum ligula laoreet nec.Mauris eget varius sapien. Sed facilisis congue porta.",
      productLink: "stradaimaging.com/products/assettag/",
    },
    {
      id: 3,
      productName:
        "Lörem ipsum suprask kvasisat för att salig. Kan bina i teleligt oaktat pengen dil. . ",
      productImage: deeproad.src,
      productDescription:
        "Mauris eget varius sapien. Sed facilisis congue porta. Nulla laoreet orci nulla, in dictum ligula laoreet nec. Mauris eget varius sapien. Sed facilisis congue porta. Nulla laoreet orci nulla, in dictum ligula laoreet nec.Mauris eget varius sapien. Sed facilisis congue porta. Nulla laoreet orci nulla, in dictum ligula laoreet nec.Mauris eget varius sapien. Sed facilisis congue porta.",
      productLink: "stradaimaging.com/products/deeproad/",
    },
  ]);
}
