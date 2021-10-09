const express=require("express");
const booksRouter=express.Router();

 function router(nav){
  
    var books=[
        {
            title:'Khasakkinte Itihasam',
            author:'O.V.Vijayan',
            genre:' Novel',
            img:'kasak.jpg'
        },
        
        {
            title:'The Great Gatsby ',
            author:'F. Scott Fitzgerald',
            genre:'Tragedy',
            img:'gatsby.jpg'
        },
        {
            title:'Cien años de soledad ',
            author:'Gabriel García Márquez',
            genre:'Magical Realism',
            img:'cien.jpg'
        },
        {
            title:'Odyssey',
            author:'Homer',
            genre:'Epic Poem',
            img:'odyssey.jpg'
        },
        {
            title:'The Room on the Roof',
            author:'Ruskin Bond',
            genre:'Fiction',
            img:'room.jpg'
        },
        {
            title:'The God of Small Things',
            author:'Arundhati Roy',
            genre:'Family Drama Novel',
            img:'god.jpg'
        }
       
    ]


    var glossarys=[
        {
           content:"Khasakkinte Itihasam is a Malayalam debut novel by the Indian writer O. V. Vijayan (1930–2005). It was first serialised in 1968 and published as a single edition in 1969. The novel has been translated from Malayalam into French by Dominique Vitalyos.The novel tells the story of a young university student, who leaves a promising future to take up a primary school teacher’s job in a remote village (Khasak). Little by little, the village reveals its secrets. The protagonist is soon bewitched by this ancient village where dreams and legends intermingle. He immerses himself in the 'bewitching sensuousness' of the new 'rustic, amoral world', only to emerge as an 'involved outsider'.He finds rational inquiry meaningless and begins a metaphorical journey inwards.The novel is often associated with the general disillusionment with the communist movement in Kerala in the 1960s."
        },
        {
            content:"The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.The novel was inspired by a youthful romance Fitzgerald had with socialite Ginevra King, and the riotous parties he attended on Long Island's North Shore in 1922. Following a move to the French Riviera, Fitzgerald completed a rough draft of the novel in 1924. He submitted it to editor Maxwell Perkins, who persuaded Fitzgerald to revise the work over the following winter. After making revisions, Fitzgerald was satisfied with the text, but remained ambivalent about the books title and considered several alternatives. Painter Francis Cugat's cover art greatly impressed Fitzgerald, and he incorporated aspects of it into the novel."
        },
        {
            content:'One Hundred Years of Solitude (Spanish: Cien años de soledad, American Spanish: [sjen ˈaɲoz ðe soleˈðað]) is a landmark 1967 novel by Colombian author Gabriel García Márquez that tells the multi-generational story of the Buendía family, whose patriarch, José Arcadio Buendía, founded the (fictitious) town of Macondo. The novel is often cited as one of the supreme achievements in literature.'
         },
         {
            content:"The Odyssey is one of two major ancient Greek epic poems attributed to Homer. It is one of the oldest extant works of literature still read by contemporary audiences. As with the Iliad, the poem is divided into 24 books. It follows the Greek hero Odysseus, king of Ithaca, and his journey home after the Trojan War. After the war itself, which lasted ten years, his journey lasted for ten additional years, during which time he encountered many perils and all his crew mates were killed. In his absence, Odysseus was assumed dead, and his wife Penelope and son Telemachus had to contend with a group of unruly suitors who were competing for Penelope's hand in marriage."
         },
         {
            content:"The Room on the Roof is a novel written by Ruskin Bond. It was Bond's first literary venture. Bond wrote the novel when he was seventeen[2] and won the John Llewellyn Rhys Memorial Prize in 1957.[2][3] The novel revolves around Rusty, an orphaned seventeen-year-old Anglo-Indian boy living in Dehradun. Due to his guardian, Mr Harrison's strict ways, he runs away from his home to live with his Indian friends."
         },
         {
            content:"The God of Small Things is a family drama novel written by Indian writer Arundhati Roy. It's Roy's debut novel. It is a story about the childhood experiences of fraternal twins whose lives are destroyed by the 'Love Laws' that lay down 'who should be loved, and how. And how much.' The book explores how the small things affect people's behavior and their lives. The book also reflects its irony against casteism, which is a major discrimination that prevails in India. It won the Booker Prize in 1997." 
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