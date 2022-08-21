// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import assettag from "../../../public/assets/assettag.png";

export default function handler(req, res) {
    res.status(200).json([
        {
            productName: 'Mauris eget varius sapien. Sed facilisis congue porta. Nulla laoreet orci nulla, in dictum ligula laoreet nec.',
            productImage: assettag.src,
            productDescription: 'Mauris eget varius sapien. Sed facilisis congue porta. Nulla laoreet orci nulla, in dictum ligula laoreet nec. Mauris eget varius sapien. Sed facilisis congue porta. Nulla laoreet orci nulla, in dictum ligula laoreet nec.',
            productLink: '',
        },{
            productName: 'Mauris eget varius sapien. Sed facilisis congue porta. Nulla laoreet orci nulla, in dictum ligula laoreet nec.',
            productImage: assettag.src,
            productDescription: 'Mauris eget varius sapien. Sed facilisis congue porta. Nulla laoreet orci nulla, in dictum ligula laoreet nec. Mauris eget varius sapien. Sed facilisis congue porta. Nulla laoreet orci nulla, in dictum ligula laoreet nec.',
            productLink: ''
        },{
            productName: 'Mauris eget varius sapien. Sed facilisis congue porta. Nulla laoreet orci nulla, in dictum ligula laoreet nec.',
            productImage: assettag.src,
            productDescription: 'Mauris eget varius sapien. Sed facilisis congue porta. Nulla laoreet orci nulla, in dictum ligula laoreet nec. Mauris eget varius sapien. Sed facilisis congue porta. Nulla laoreet orci nulla, in dictum ligula laoreet nec.',
            productLink: ''
        }
    ])
}
