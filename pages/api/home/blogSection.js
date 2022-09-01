// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import assettag from "../../../public/assets/assettag.png";

export default function handler(req, res) {
    res.status(200).json([
        {
            blogTitle: 'Lörem ipsum mik tir. Dyvis negt och Dyvis negt och',
            blogImage: assettag.src,
            blogDescription: 'Lörem ipsum mik tir. Dyvis negt och popresade i pseudongen. Seregt prer vifirad byling ebelt. An hexatt tining innan pobel soren. Milig fosade desat. Ebygt osk rease vyde inte preling. Nys prologi. Treliga tilig. Poktig kasös epigt eller yl. Vypp tikrongen. Debelt råling. Tetrakana devåvis. Tekafel dåll att euron. Gigt malogi polyrtad, fast sov. Geoligen ivis för doligen åsam: detilig. Prerade bäd salogi tetrahuk vabel. Euktiga bivatir med falig. Doliga karar. Dost fan tertad halig mikroväs. Sude senas tira. Doliga karar. Dost fan tertad halig mikroväs. Sude senas tira.',
            blogDate: '5/07/2022',
        }
    ])
}
