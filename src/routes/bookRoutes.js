const express=require("express");
const booksRouter=express.Router();

 function router(nav){
  
    var books=[
        {
            title:'Karnan',
            author:'Sivaji Savanth',
            genre:'Classic Novel',
            img:'karnan.jpg'
        },
        
        {
            title:'Aadujeevitham',
            author:'Benyamin',
            genre:'Novel',
            img:'benyamin.jpg'
        },
        {
            title:'The four winds',
            author:'Kristin Hannah',
            genre:'Novel',
            img:'four winds.jpg'
        },
        {
            title:'One last stop',
            author:'Casey MCQuiston',
            genre:'Novel',
            img:'onelast stop.jpg'
        },
        {
            title:'7 secrets of Eucharist',
            author:'Vinny Flyn',
            genre:'Religious',
            img:'vinny flyn.jpg'
        },
        {
            title:'Digital Communication',
            author:'Simon Haykins',
            genre:'Education',
            img:'haykin_simon_2.jpg'
        }
       
    ]


    var glossarys=[
        {
           content:'Malayalam version of the novel Mrityunjay, penned by Shivaji Sawant, one of the most known writers in Marathi. Karnan tells the story of Karna, one of the leading characters of the epic Mahabharath. This book was translated in Hindi (1974), English (1989), Kannada (1990), Gujarati (1991), Malayalam (1995) and received numerous awards and accolades.it  is a classic novel written by Shivaji Sawant on the life of Karna, the greatest tragic hero in Indian history. Despite being dedicated to the life and times of the benign hero, it highlights significant characters from the Mahabharata and also a socio-political frame of the time.'
        },
        {
            content:'Goat Days is a 2008 Malayalam novel about an abused migrant worker in Saudi Arabia written by Bahrain-based Indian author Benyamin.The novel is based on real-life events and was a best seller in Kerala. According to media, Benyamin became an "overnight sensation" with the publication of this "hard-hitting story" and is currently one of the top sellers in Malayalam. The original Malayalam version of Goat Days has gone through over 100 reprints.The novel depicts the life of Najeeb Muhammed, an Indian emigrant going missing in Saudi Arabia.'
        },
        {
            content : 'The Four Winds is a deeply moving, powerful story about the strength and resilience of women and the bond between mother and daughter, by the multi-million copy number one bestselling author of The Nightingale, Kristin Hannah. Elsa Wolcott is a woman trying to raise two children on farm in the Great Plains during the Dust Bowl following the Great Depression. She watches as the lands around her crack in their perpetually parched state and the hopelessness threatens to breaks the spirit of those around her.As the situation worsens, Elsa is forced to make a decision to stay and fight or leave for the uncertain and unfamiliar lands in the West. In this tale, Kristin has written a survival story about resilience, love, family, courage and the American Dream.'
        },
            {
            content:'In her sophomore romance One Last Stop, Casey McQuiston has managed to do what no one else has: Make the New York City subway  magical — and make readers feel so five minutes ago for not having our own public transit meet-cutes.One Last Stop is an electrifying romance that synapses into the dreamy "Hot Person Summer" kind of story you wish you were a part of.Even so, McQuiston delicately juxtaposes the past with the present, evoking nostalgia for classic music (and terrestrial radio!) and beloved institutions, while brewing possibilities for a more accepting society.'
        },
        {
            content:'One of the best books for helping meditate on the great mystery of the Holy Eucharist. Great book to buy! Here’s my summary of the book: Exploring the mysteries of the Eucharist is like discovering a bottomless treasure chest; as you unpack each gem, it reveals another that was hidden from view. No matter how many you discover, there are always more.'
        },
        {
            content:' Digital communication systems offers the most complete, up-to-date coverage available on the principles of digital communications. Focuses on basic issues, relating theory to practice wherever possible. Numerous examples, worked out in detail, have been included to help the reader develop an intuitive grasp of the theory. Topics covered include the sampling process, digital modulation techniques, error-control coding, robust quantization for pulse-code modulation, coding speech at low bit radio, information theoretic concepts, coding and computer communication. Because the book covers a broad range of topics in digital communications, it should satisfy a variety of backgrounds and interests.'
        }
    ]
    booksRouter.get('/',function(req,res){
        res.render("books",{
            nav,
            title:'Library',
            books,
            glossarys
        });
    });
    booksRouter.get('/:id',function(req,res){
        const id=req.params.id;
        res.render("book",{
            nav,
            title:'Library',
            book:books[id],
            glossary:glossarys[id]
        });
    });
    return booksRouter;
}

module.exports=router;