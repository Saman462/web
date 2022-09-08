// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import assettag from "../../../public/assets/assettag.png";
import deeproad from "../../../public/assets/deeproad.png";
import pavo from "../../../public/assets/Asset6_1.png";

export default function handler(req, res) {
    res.status(200).json([
        {
            id: 1,
            productName: 'Mauris eget varius sapien. Sed facilisis congue porta. Nulla laoreet orci nulla, in dictum ligula laoreet nec.',
            productImage: pavo.src,
            productDescription: 'Mauris eget varius sapien. Sed facilisis congue porta. Nulla laoreet orci nulla, in dictum ligula laoreet nec. Mauris eget varius sapien. Sed facilisis congue porta. Nulla laoreet orci nulla, in dictum ligula laoreet nec.Mauris eget varius sapien. Sed facilisis congue porta. Nulla laoreet orci nulla, in dictum ligula laoreet nec.Mauris eget varius sapien. Sed facilisis congue porta.',
            productLink: 'stradaimaging.com/products/pavo-dvi/',
        },{
            id: 2,
            productName: 'Mauris eget varius sapien. Sed facilisis congue porta. Nulla laoreet orci nulla, in dictum ligula laoreet nec.',
            productImage: assettag.src,
            productDescription: 'Mauris eget varius sapien. Sed facilisis congue porta. Nulla laoreet orci nulla, in dictum ligula laoreet nec. Mauris eget varius sapien. Sed facilisis congue porta. Nulla laoreet orci nulla, in dictum ligula laoreet nec.Mauris eget varius sapien. Sed facilisis congue porta. Nulla laoreet orci nulla, in dictum ligula laoreet nec.Mauris eget varius sapien. Sed facilisis congue porta.',
            productLink: 'stradaimaging.com/products/assettag/'
        },{
            id: 3,
            productName: 'Mauris eget varius sapien. Sed facilisis congue porta. Nulla laoreet orci nulla, in dictum ligula laoreet nec.',
            productImage: deeproad.src,
            productDescription: 'Mauris eget varius sapien. Sed facilisis congue porta. Nulla laoreet orci nulla, in dictum ligula laoreet nec. Mauris eget varius sapien. Sed facilisis congue porta. Nulla laoreet orci nulla, in dictum ligula laoreet nec.Mauris eget varius sapien. Sed facilisis congue porta. Nulla laoreet orci nulla, in dictum ligula laoreet nec.Mauris eget varius sapien. Sed facilisis congue porta.',
            productLink: 'stradaimaging.com/products/deeproad/'
        }
    ])
}
