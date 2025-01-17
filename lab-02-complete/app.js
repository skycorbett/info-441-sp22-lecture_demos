const fs = require('fs').promises

const songLyrics =  async () => {
try {
    let files = await fs.readdir("song_lyrics"); //read directory
    console.log(files);

    let fileData = await fs.readFile("song_lyrics/" + files[4]); // read a file
    console.log(fileData);

    let fileString = fileData.toString(); // turn fileData into a readable version
    console.log(fileString);
} catch(e) {
    console.log(e);
}
};

songLyrics();

// ** I DID THIS !~ Debug Console Readout is correct

/* Console readout the following

Car rides to Malibu
Strawberry ice cream
One spoon for two
And trading jackets
Laughing 'bout how small it looks on you
(Ha-ha-ha-ha, ha-ha-ha-ha, ha-ha-ha-ha)
Watching reruns of Glee
Being annoying
Singing in harmony
I bet she's bragging
To all her friends, saying you're so unique, hmm

So when you gonna tell her
That we did that too?
She thinks it's special
But it's all reused
That was our place, I found it first
I made the jokes you tell to her when she's with you

Do you get déjà vu when she's with you?
Do you get déjà vu? (Ah), hmm
Do you get déjà vu, huh?

Do you call her
Almost say my name?
'Cause let's be honest
We kinda do sound the same
Another actress
I hate to think that I was just your type

I'll bet that she knows Billy Joel
'Cause you played her Uptown Girl
You're singing it together
Now I bet you even tell her
How you love her
In between the chorus and the verse (ooh) (I love you)

So when you gonna tell her
That we did that too?
She thinks it's special
But it's all reused
That was the show we talked about
Played you the song she's singing now when she's with you

Do you get déjà vu when she's with you?
Do you get déjà vu? Oh
Do you get déjà vu?

Strawberry ice cream in Malibu
Don't act like we didn't do that shit too
You're trading jackets like we used to do
(Yeah, everything is all reused)
Play her piano, but she doesn't know (oh, oh)
That I was the one who taught you Billy Joel (oh)
A different girl now, but there's nothing new
(I know you get déjà vu)

I know you get déjà vu
I know you get déjà vu

*/
