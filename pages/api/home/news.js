import pavo from "../../../public/assets/Asset6_1.png";

export default function handler(req, res) {
    res.status(200).json(
        {
            newsTitle: 'Mauris zalqarnain sapien. Sed facilisis congue porta. Nulla',
            newsLink: 'Lorem ipsum vel',
            newsText1: 'Lorem ipsum dolor sit amet, ipsum dolor sit amet, consectetur adipiscing elit.',
            newsText2: 'Lorem ispum vestibulum.',
            newsHeadlines: [
                {
                    newsHeadline: 'Mauris eget varius sapien. Sed facilisis congue porta. Nulla laoreet laoreet nec.'
                },
                {
                    newsHeadline: 'Mauris eget varius sapien. Sed facilisis congue porta. Nulla laoreet laoreet nec.'
                },
                {
                    newsHeadline: 'Mauris eget varius sapien. Sed facilisis congue porta. Nulla laoreet laoreet nec.'
                },
                {
                    newsHeadline: 'Mauris eget varius sapien. Sed facilisis congue porta. Nulla laoreet laoreet nec.'
                },
            ]
        }
    )
}
