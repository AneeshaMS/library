const express=require("express");
const authorRouter=express.Router();

 function router(nav){
  
    var authors=[
        {
            name:'O V Vijayan',
            genre:'Novel, short story, Essays',
            language:'Malayalam',
            img:'ovv.jpg'
        },
        {
            name:'Francis Scott Key Fitzgerald',
            genre:'Novel,Short Story, Essay',
            language:'English',
            img:'fskf.jpg'
        },
        {
            name:'Gabriel García Márquez',
            genre:'Novel,Short story',
            language:'Spanish',
            img:'ggm.jpg'
        },
        {
            name:'Homer',
            genre:'Poem',
            language:'Greek',
            img:'homer.jpg'
        },
        {
            name:'Ruskin Bond',
            genre:'novel,poem,Short story',
            language:'Malayalam',
            img:'ruskin.jpg'
        },
        {
            name:'Suzanna Arundhati Roy',
            genre:'Fiction,nonfiction',
            language:'English',
            img:'ar.jpg'
        }

    ]
    var glossarys=[
        {
           content:"Ottupulackal Velukkuty Vijayan (2 July 1931 – 30 March 2005), commonly known as O. V. Vijayan, was an Indian author and cartoonist, who was an important figure in modern Malayalam language literature. Best known for his first novel Khasakkinte Itihasam (1969), Vijayan was the author of six novels, nine short-story collections, and nine collections of essays, memoirs and reflections."
        },
        {
            content:"Francis Scott Key Fitzgerald (September 24, 1896 – December 21, 1940) was an American novelist, essayist, short story writer and screenwriter. He was best known for his novels depicting the flamboyance and excess of the Jazz Age—a term he popularized. During his lifetime, he published four novels, four collections of short stories, and 164 short stories. Although he achieved temporary popular success and fortune in the 1920s, Fitzgerald received critical acclaim only after his death, and is now widely regarded as one of the greatest American writers of the 20th century."
        },
       {
            content :"Gabriel García Márquez (American Spanish: [ɡaˈβɾjel ɣaɾˈsi.a ˈmaɾkes] (About this soundlisten);[a] 6 March 1927 – 17 April 2014) was a Colombian novelist, short-story writer, screenwriter, and journalist, known affectionately as Gabo [ˈɡaβo] or Gabito [ɡaˈβito] throughout Latin America.[b] Considered one of the most significant authors of the 20th century, particularly in the Spanish language, he was awarded the 1972 Neustadt International Prize for Literature and the 1982 Nobel Prize in Literature.[2] He pursued a self-directed education that resulted in leaving law school for a career in journalism. From early on he showed no inhibitions in his criticism of Colombian and foreign politics. In 1958 he married Mercedes Barcha; they had two sons, Rodrigo and Gonzalo.[3]" 
        },
        {
            content:"Homer (/ˈhoʊmər/; Ancient Greek: Ὅμηρος [hómɛːros], Hómēros) was the reputed author of the Iliad and the Odyssey, the two epic poems that are the foundational works of ancient Greek literature. He is regarded as one of the greatest and most influential writers of all time.[2]"
        },
            {
            content:"Ruskin Bond (born 19 May 1934) is an Indian author of British descent. His first novel, The Room on the Roof, received the John Llewellyn Rhys Prize in 1957. He was awarded the Sahitya Akademi Award in 1992 for Our Trees Still Grow in Dehra, his novel in English. Bond has written hundreds of short stories, essays, novels and books for children. He was awarded the Padma Shri in 1999 and the Padma Bhushan in 2014.[1] He lives with his adopted family in Landour, Mussoorie."
        },
        {
        content:"Suzanna Arundhati Roy (born 24 November 1961) is an Indian author best known for her novel The God of Small Things (1997), which won the Man Booker Prize for Fiction in 1997 and became the best-selling book by a non-expatriate Indian author.[1] She is also a political activist involved in human rights and environmental causes."
        }
       
    ]
    authorRouter.get('/',function(req,res){
        res.render("authors",{
            nav,
            title:'Library',
            authors,
            glossarys
        });
    });
    authorRouter.get('/:id',function(req,res){
        const id=req.params.id;
        res.render("author",{
            nav,
            title:'Library',
            author:authors[id],
            glossary:glossarys[id]
        });
    });
    return authorRouter;
}

module.exports=router;
    
