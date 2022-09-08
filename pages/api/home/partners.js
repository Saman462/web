// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import assettag from "../../../public/assets/assettag.png";

export default function handler(req, res) {
  res.status(200).json({
    partnerText:
      "Lörem ipsum mikrosel nyranade. Trigt nism i säns. Krovevåment sos inte homost.Krovevåment sos inte homost.",
    partnerLogos: [
      {
        id: 1,
        partnerLogo: assettag.src,
      },
      {
        id: 2,
        partnerLogo: assettag.src,
      },
      {
        id: 3,
        partnerLogo: assettag.src,
      },
    ],
  });
}
