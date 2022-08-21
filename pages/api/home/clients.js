// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
    res.status(200).json([
        {
            clientName: 'Luther Mark',
            clientImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyCLcY8R5uG_R4vTKW1D7onTKjOMACYS7wGA&usqp=CAU",
            clientDesignation: 'Regional Manager',
            clientCompany: 'Jacobs Construction Co.',
            clientDescription: 'Mauris eget varius sapien. Sed facilisis congue porta. Nulla laoreet orci nulla, in dictum ligula laoreet nec. Lorem ipsumdolor sit amet, consectetur adipiscing elit. Quisque vulputate adipiscing elit.' ,
            clientCompanyLogo: 'Jacobs',
        }
    ])
}
