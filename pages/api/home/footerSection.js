// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import assettag from "../../../public/assets/assettag.png";
import pavo from "../../../public/assets/Asset6_1.png";
export default function handler(req, res) {
  res.status(200).json({
    footerText1:
      "Mauris eget varius sapien. Sed facilisis congue porta. Nulla laoreet orci nulla, in dictum ligula laoreet nec.",
    footerText2:
      "Mauris eget varius sapien. Sed facilisis congue porta. Nulla laoreet orci nulla, in dictum ligula laoreet nec.",
    footerLogos: [
      {
        footerLogo: assettag.src,
      },
      {
        footerLogo: assettag.src,
      },
      {
        footerLogo: assettag.src,
      },
      {
        footerLogo: assettag.src,
      },
    ],
  });
}
