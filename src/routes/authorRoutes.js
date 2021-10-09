const express=require("express");
const authorRouter=express.Router();

 function router(nav){
  
    var authors=[
        {
            name:'M.T Vasudevan Nair',
            genre:'Novel,Short story',
            language:'Malayalam',
            img:'m.-t.-vasudevan-nair.png'
        },
        {
            name:'Kristin Hannah',
            genre:'Fiction',
            language:'English',
            img:'kristin.jpg'
        },
        {
            name:'Muhamad Basheer',
            genre:'Novel,Short story,Memoirs',
            language:'Malayalam',
            img:'basheer.jpg'
        },
        {
            name:'J.K. Rowling',
            genre:'Fantasy',
            language:'English',
            img:'rowling.jpg'
        },
        {
            name:'Kamala Suraya',
            genre:'Novel,Short story',
            language:'Malayalam',
            img:'kamala.jpg'
        },
        {
            name:'Chetan Prakash Bhagat',
            genre:'Fiction,Romance',
            language:'English,Hindi',
            img:'chetan.jpg'
        }

    ]
    var glossarys=[
        {
           content:'Madath Thekkepaattu Vasudevan Nair (born 15 July 1933), popularly known as MT, is an Indian author, screenplay writer and film director. He is a prolific and versatile writer in modern Malayalam literature, and is one of the masters of post-Independence Indian literature.Notable works include Naalukettu, Randamoozham, Asuravithu,Kaalam. He has bagged several awards for  his valuable contribution to literature and film at national and state level.M. T. Vasudevan Nair is a script writer and director of Malayalam films. He has directed seven films and written the screenplay for around 54 films. He won the National Film Award for Best Screenplay four times'
        },
        {
            content:'Kristin Hannah (born September 25, 1960) is an American writer. Her most notable works include Winter Garden, The Nightingale, Firefly Lane, The Great Alone, and The Four Winds.ristin Hannah is the award-winning and bestselling author of more than 20 novels including the international blockbuster, The Nightingale, which was named Goodreads Best Historical fiction novel for 2015 and won the coveted Choice award for best fiction in the same year. Additionally, it was named a Best Book of the Year by Amazon, iTunes, Buzzfeed, the Wall Street Journal, Paste, and The Week. Her novel, The Great Alone, was also voted as Goodreads best historical novel of the year in 2018.'
        },
       {
            content : 'Vaikom Muhammad Basheer, born in 1908, also known as Beypore Sulthan, was an Indian independence activist and writer of Malayalam literature . He was a writer, humanist, freedom fighter, novelist and short story writer, noted for his path-breaking, down-to-earth style of writing that made him equally popular among literary critics as well as the common man. His notable works include Balyakalasakhi, Shabdangal, Pathummayude Aadu, Mathilukal, Ntuppuppakkoranendarnnu, Janmadinam and Anargha Nimisham. The translations of his works into other languages have earned him worldwide acclaim. The Government of India awarded him the fourth highest civilian honor of the Padma Shri in 1982. He was also a recipient of the Sahitya Academy Fellowship, Kerala Sahitya Academy Fellowship, and the Kerala State Film Award for Best Story.'
        },
        {
            content:'oanne Rowling CH, OBE, HonFRSE, FRCPE, FRSL  (born 31 July 1965), better known by her pen name J. K. Rowling, is a British author, philanthropist, film producer, television producer, and screenwriter. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies,becoming the best-selling book series in history. The books are the basis of a popular film series, over which Rowling had overall approval on the scripts and was a producer on the final films.[6] She also writes crime fiction under the pen name Robert Galbraith.'
        },
            {
            content:'Kamala Surayya (born Kamala; 31 March 1934–31 May 2009), popularly known by her one-time pen name Madhavikutty and married name Kamala Das, was an Indian poet in English as well as an author in Malayalam from Kerala, India. Her popularity in Kerala is based chiefly on her short stories and autobiography, while her oeuvre in English, written under the name Kamala Das, is noted for the poems and explicit autobiography. She was also a widely read columnist and wrote on diverse topics including issues of women, child care, politics among others etc.er open and honest treatment of female sexuality, free from any sense of guilt, infused her writing with power and she got hope after freedom, but also marked her as an iconoclast in her generation.'
        },
        {
        content:'Chetan Bhagat (born 22 April 1974) is an Indian author and columnist. He was included in Time magazine list of World 100 Most Influential People in 2010. Bhagat graduated in mechanical engineering at IIT Delhi and completed a PGP at IIM Ahmedabad. He started his career as an investment banker but left it after a few years to pursue writing. Five of Chetan Bhagat novels have been adapted into Bollywood films like Hello in 2008 (based on One Night @ the Call Center), 3 Idiots in 2009 (based on Five Point Someone), Kai Po Che! in 2013 (based on The 3 Mistakes of My Life); 2 States in 2014 (based on his novel of the same name) and Half Girlfriend in 2017 (based on his novel of the same name). Bhagat has also written the scripts for Bollywood films.'
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
    
