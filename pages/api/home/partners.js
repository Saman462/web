// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import assettag from "../../../public/assets/assettag.png";

export default function handler(req, res) {
    res.status(200).json(
        {
            partnerText: 'Lörem ipsum mikrosel nyranade. Trigt nism i säns. Krovevåment sos inte homost.Krovevåment sos inte homost.',
            partnerLogos: [
                {
                    partnerLogo: assettag.src,
                }, 
                {
                    partnerLogo: assettag.src,
                }, 
                {
                    partnerLogo: assettag.src,
                }
            ]
        }
    )
}
