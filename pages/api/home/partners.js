// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import assettag from "../../../public/assets/assettag.png";y

export default function handler(req, res) {
    res.status(200).json([
        {
            partnerLogo: assettag.src,
        }, 
        {
            partnerLogo: assettag.src,
        }, 
        {
            partnerLogo: assettag.src,
        }
    ])
}
