const posts = [
    {
        id: 0,
        title: "The first entry.",
        date_display: "March 11, 2022, 12:25",
        date_iso: "2022-03-11T17:25:00.000Z",
        content: /* html */ `
        <p>
            This is the first entry. IDK what to put here. I might put a blog. After all, I did name this file blogtest.html. I kind of have an obligation now. Maybe it will be a coding blog.
        </p>
        <p>
            So lets start, then? I figured out subpages just now. Funny, cause my previous website didn't use those. Turns out it's just as easy as making subfolders. Next task, getting rid of the "something.html" on the nav. I want it to look clean. Lets see if I can figure that out. I also want to make an icon and a title in the tab. That would be cool.
        </p>
        <p>
            Today, I have:
        </p>
        <ol>
            <li>Made a subpage</li>
            <li>Made a hub</li>
            <li>Made this site</li>
            <li>Fallen asleep during class</li>
        </ol>
        <p>
            I know. Very productive. The goal of this, btw, is not to flex my skill, but just to flex my non-skill. I'm pretty bad at this, so I just want to see how far I can get before I die. Pretty cool. Alright goodbye
        </p>
    `,
    },
    {
        id: 1,
        title: "Website Cleanup",
        date_display: "March 24, 2022, 8:29",
        date_iso: "2022-03-24T12:29:00.000Z",
        content: /* html */ `
        <p>
            So I removed the file name from the url up top! If you look at the url, now it says /blog, not /blog/index.html. Very proud of that. Also, what I did with wordle might be illegal. I don't really care though. Also, I kind of erased all of the curse word from the site. Just in case. Hello Mr Zeller
        </p>
        <p>
            Yesterday, I presented the pong game I made. I am going to see if chrome still supports applets. I don't think they do, so I'm going to try to find a way to upload the pong game I made to this site. It's really cool, and it features Walter White.
        </p>
        <p>
            I added an about me page now. I put my email. Please don't email me unless it's important, that is legitimately my only email account that I can use, please don't blow it up. Who am I kidding, no one reads this. I added some of my achievements onto that page. Now that I'm thinking about that, I really haven't done much&{}{ yet}. Hopefully this site helps.
        </p>
        <p>
            I don't know what next project to start on here. My current project has been written entirely in Java and Idon't know how to make Java go on a site. But I will return with more information on that.
        </p>
        <p>
            Lastly, I wanted to add some information on my current workflow. Right now, I do pretty much everything for this website in vscode and then drag and drop in into the file manager and then it works. I might even buy premium to make this faster but then I'd need to generate a return from this site. However, I can't do that. Because then I'd be making money off of Wordle, nytimes' creation. That's illegal. I don't really care but I don't like the idea of a conglomerate megacorporation having it out for me. Although my allowance might cover it?
        </p>
        <p>
            Thats it.
        </p>
        <p>
            Have a good day gamers
        </p>
    `,
    },
    {
        id: 2,
        title: "WordleGen fixed, pme++ updooted, blog went bye bye",
        date_display: "April 18, 2022, 8:57",
        date_iso: "2022-04-18T12:57:00.000Z",
        content: /* html */ `
        <p>    
            Hello from Aruba! I am currently in bed in a hotel on Aruba. Pretty cool. Did I mention I'm in Aruba? Anyway, I wanted to talk about my journey to fix the WordleGen and why it broke, and also why &{im a dumbass for not figuring}{it took so long to figure} it out.
        </p>
        <p>
            So I attempted to implement date input and not days input like originally. It works well now, but originally, I thought that the <i>input</i> tag set to Date input would return a Date object, but it actually returns the millisecond value. I then had to convert that to a date and add hours to it and then I could pass it into the generator. It works now but it was broken for a while. I have to email my grandparents and tell them it works again.
        </p>
        <p>
            Additionally, now, I realized this file is called index.hmtl again. I don't know when I renamed it to that, but whatever. Now onto the PME++ interpreter.
        </p>
        <p>
            I decided that I am going to drop the project mainly because I'm not very inspired to do it anymore. However I do kind of want to make a new "compression" system. One of the main file size culprits right now is the WordleGen, because the <i>script</i> tag in the file has to list every single word choice in a row. So maybe, I could figure out how to get the string value of an html file, and then nav to a js file, and then turn that into code for html files. I wanted to do this because sometimes, New York Times adds new words to the roster and that means I have to fix everything. Kinda annoying. But it's fine. Maybe instead, I could make a program to make an array smaller, then decompress it for use in the js.
        </p>
        <p>
            Also, blog has gone bye bye. I don't want to upkeep it, it's a pain &{in the ass}{} to maintain, (not like I've been maintaining it anyway) but yeah. I think my site will be better off without it.
        </p>
        <p>
            Anyway, just a few things about Aruba. Food ain't bad, weather is SOOOO hot, like way too hot, and I have a cold. However we do have a lot of stuff planned so that should be cool.
        </p>
        <p>
            I may in the future actually remove all personal details on this site so that I can advertise it on Twitter and GitHub. That would be cool. I say <i>that would be cool</i> a bit too much, don't you think?
        </p>
        <p>
            Anyway, have a good day everyone. Peace.
        </p>
    `,
    },
    {
        id: 3,
        title: "fixed links, thanks thomas, next project?",
        date_display: "May 4, 2022, 12:50",
        date_iso: "2022-05-04T16:50:00.000Z",
        content: /* html */ `
        <p>Hello gamers. Thomas fixed all the broken links. thanks.</p><p>So I can't figure out what to do for the next project. I might do a punnet square calculator. That will be interesting. Also, I reorganized this page, so newer articles are at the top. Not much else really, so have a good day.</p>
    `,
    },
    {
        id: 4,
        title: "span >> div, punnet square progress??",
        date_display: "May 8, 2022, 3:08 (AM 😳)",
        date_iso: "2022-05-08T07:08:00.000Z",
        content: /* html */ `
        <p>
            Morning. Can't sleep so I might as well make an entry. On this page (and soon this whole site) I am changing spans to divs. This should make the code more redundant and readable. Also, a short story.
        </p>
        <p>
            For my Hebrew school classes bar/bat mitzvahs, our parents got to make a ~4*5 inch "card" for us. It went in like, a yearbook type of book. Most families just made a card with a baby photo and "wErE so ProUD oF YoU bAbY yOu grEW uP sO FAst". However, my MADLAD mom went out of her way to LEARN HTML, and wrote a script (THAT WORKS) to display the card. And the card had the script on it, and below it, the image and stuff!
        </p>
        <p>
            It's so cool that coding has become accessible enough that my mom learned enough HTML to display images and text
            at the same time, and make it look good with a font. I can't even do images, lol.
        </p>
        <p>
            Anyway, punnet square progress. I tried making some progress but the thing kept breaking. I am going to try again soon but just know that I am still working on it.
        </p>
        <p>
            That's pretty much it, so to whoever is reading this, have a good day.
        </p>
    `,
    },
    {
        id: 5,
        title: "&{f***}{i dislike} njsla and i added web spider, github, generators, and removed name",
        date_display: "May 18, 2022, 8:53",
        date_iso: "2022-05-18T12:53:00.000Z",
        content: /* html */ `
        <p>
            Hello broskis. I added robots.txt and sitemap.xml to the site but I don't understand robots.txt, I don't care though. I added it to the google search console so yeah. Cool.
        </p>
        <p>
            Also, I made a new page. Go to ./generators and choose username generator. I will put stuff there that is cool.Among us
        </p>
        <p>
            Also, I migrated the site to github so I have to change things. It is so much better&{, 000webhost sucks!!!}{!}
        </p>
        <p>
            Lastly, I removed a lot of personal information, hopefully I didn't leave any, I will do a final sweep later.
        </p>
        <p>
            That's really it, not much has happened in 10 days, so have a good day bros
        </p>
    `,
    },
    {
        id: 6,
        title: "fixed wordle, moved js and worked on privacy policy",
        date_display: "May 26, 2022, 10:26",
        date_iso: "2022-05-26T14:26:00.000Z",
        content: /* html */ `
        <p>
            Wassup gamers. I fixed the wordle again, It should be working now. The issue was pretty &{dumb}{silly}. It had to do with the generate button being after the script which gave nulls and stuff.
        </p>
        <p>
            I also moved all of the javascript files into /js now, so I would be able to reuse libraries and variables in the future. I put unused js files that I want to keep into /js/unused.
        </p>
        <p>
            I also fixed the privacy policy. Now, it can detect what page to return you to. The link is now formatted like "https://cheespeasa1234.github.io/privacy/?y=https://cheespeasa1234.github.io/generators/email?n=https://www.google.com". Basically what this does, is when you press the I Accept button on the privacy policy, it will look at location.href, and cut out the text before ?n= and after ?y= and save that, then get the text after ?n=. It sets those strings to send you to them when you make a choice on the screen.
        </p>
        <p>
            Yeah. Maybe I will use that strategy later. But I don't want to because apparently, it takes up lots of resources for web spiders.
        </p>
        <p>
            That's all for today. Hopefully the wordle doesn't break again. Bye
        </p>
    `,
    },
    {
        id: 7,
        title: "full website revamp!",
        date_display: "October 9, 2022, 15:25",
        date_iso: "2022-10-09T19:25:00.000Z",
        content: /* html */ `
        <p>
            Since school ended a bit after my last post, I kind of didn't work on the website. School started a bit more than a month ago, so I started adding some small stuffs. Here they are:
        <ul>
            <li><a href="/downloads">A Java utility class for Arrays</a></li>
            I really hate the ArrayList class in the java.util default package. It doesn't have a lot of features that
            most other language have. So I made my own. I really like it and think you will too.
            <li><a href="/mandlebrot">A mandelbrot fractal generator</a></li>
            This thing is super duper cool. I didn't make it myself but I added some features to it. The interesting
            thing
            is that the fractal never ends, so you could keep zooming in and out forever. (it would get laggier though)
            <li>Redesigning the website</li>
            A lot of the features of the website has been reworked. I removed unused directories and cleaned some stuff
            up.
            Also, I added a cool css links thing, and I hope you all like using it.
        </ul>
        </p>
        <p>
            I also made some Java games, but I don't feel the need to share it here (with the one FBI agent who is paid to read this) I wish applets still worked, because then I could put them all in here, but oh well.
        </p>
        <p>
            Anyway, I hope to start posting here again and to grow this website. This year, I want to focus on learning backend and getting better at CSS. Have a good day :)
        </p>
    `,
    },
    {
        id: 8,
        title: "Progress in coding (but not on the site)",
        date_display: "November 18, 2022, 12:36",
        date_iso: "2022-11-18T17:36:00.000Z",
        content: /* html */ `
        <p>
            I made some changes to the site (using href instead of onclick) to make it faster. The whole fractal + backend idea to make it more efficient isn't exactly working out for me. I've managed to make a fully functioning express server, but I have yet to implement it into a frontend without php (which I &{suck}{am not great} at) or using unsecure methods.
        </p>
        <p>
            Speaking of security, I have no idea how to make a backend without leaking my computer's IP address, and to be honest, I don't know if my parents would buy me a domain and hosting service for hannukkah (they don't entirely trust technology).
        </p>
        <p>
            Other than that, I have started learning some random languages. I learned basic programming with Ruby, C, and C++. I made fizzbuzz in Ruby and C++, but with C, I still have yet to make much progress. I started to learn about R, but being a unique type of language and having completely different syntax, I am learning slowly. I just realized too that I am going through my second year with java, and soon, will finish my first year of Python.
        </p>
        <p>
            Thanks for reading this, (if anyone reads this). I am thinking about a great project using frontend and backend to make something cool. I might post more about it. &lt;3
        </p>
    `,
    },
    {
        id: 9,
        title: "Migration halfway complete",
        date_display: "March 13, 2023, 21:29",
        date_iso: "2023-03-14T01:29:32.410Z",
        content: /* html */ `
        <p>
            I finished migrating the blog over to the new site. By the way, I didn't post here for a while because I was busy with school. &{I am still not doing well, though}{}. 
        </p>
        <p>
            I have changed a lot of things with this website, so here they are...
            <ol>
                <li>I redesigned everything</li>
                <li>I made a custom and consistent header & footer</li>
                <li>I made a more consistent website style</li>
                <li>I rewrote the blog</li>
            </ol>
        </p>
        <p>
            I have also learned a lot about CS, programming, and computers in general. I especially have improved with HTML, CSS, and JS. I learned a bit of Rust and C++, with OpenGL. I am excited for all that is to come.
        </p>
        <p>
            Anyway, happy new year, (3 months late), and much love!
        </p>
    `,
    },
    {
        id: 10,
        title: "Absolute grindset",
        date_display: "March 23, 2023, 15:05",
        date_iso: "2023-03-23T19:05:40.049Z",
        content: /* html */ `
        <p>
            Yeah, I'm on a grindset, baby. So rad dude. For real, homes. Anyway, back to my real voice. I have been trying to work more on schoolwork, and by that I mean make a java program to make a schedule. Yeah, very productive.
        </p>
        <p>
            But seriously, I did make a scheduling program. It isn't 100% finished, but it is safe to say that it is safely at version 1.0 . It uses a bunch of cool math and object patterns, and I even made a file format for it that stores schedules. I spent some time to learn making a vscode extension (if you can even call it that) just to make a syntax highlighter for the files. I don't think anyone will use it but it's interesting never the less.
        </p>
        <p>
            All in all, I haven't modified this website at all, but I hope to be documenting more of my coding journey online, as to make a portfolio. Speaking of which, check out my <a href="https://www.github.com/Cheespeasa1234">GitHub profile readme.</a> I spent a bit of time on it, as you will see!
        </p>
        `,
    },
    {
        id: 11,
        title: "Long time no c++",
        date_display: "May 3, 2023, 10:40",
        date_iso: "2023-05-03T14:40:25.680Z",
        content: /* html */ `
        <p>
            Like the title? Yeah, I'm kinda proud of it. It took me a while! ;)
        </p>
        <p>
            Seriously though, times have been tough, but huge news in the coding world for a while. I realize that I have yet to comment on the AI situation, so here we go.
        </p>
        <p>
            I see AI as a huge moral issue. I don't know who said it, and how exactly they did so, but this is a quote that I agree with strongly. "The powers of technology shall be used to eliminate the tedium of our lives, and to allow humans to do something only humans can do- be creative." But of course, that is what AI is being used to do now- be "creative". And I use those words loosely. Most people don't understand that AI doesn't come up with ANYTHING original. Ask it for a business idea. You might think that is a really unique idea, but someone has already come up with it, somewhere in the AI's dataset. Ask it for a story, no other prompts. It will make you a story, whose elements and plot points have already been concieved on some corner of the internet. But the facade that the AI produces makes it seem like it has been creative. And that is enough for the artistic world itself to be on fire. I believe AI should ONLY be used for cubicle work, for the mindless robotic tedium that our human talents are restrained to. For the impossible to concieve concepts the human mind could never wrap itself around. For the symptoms of society a human would be traumatized by, physically and mentally. Why is AI being made to write stories, draw paintings, create businesses? Why are people being forced to work more, write more emails, build more apps, sign more papers? Why can't we switch these roles significantly?
        </p>
        <p>
            I think it is pretty clear that I am very strongly opinionated on this topic, and that I feel extremely strongly on it. But it would be unfair of me to ignore the benefits of AI. AI can help with communication. In fact, I use ChatGPT for this often. It is sometimes difficult for me to get my words out in a way that doesn't make me look like a lunatic in a cage. But ChatGPT helps me sound like a human. It can also help you ask questions you can't ask Google, or another person. For example, I can ask ChatGPT what the word is for what I am trying to say, and ChatGPT helps greatly with that. Additionally, I can ask it to explain a word to me, but instead of giving me a Webster-style explanation like Google, I can have it explain it to me as I as a highschooler. It will adjust vocabulary and make connections which allow my mind to comprehend the defenition to a higher level. Other benefits of AI are that it can do things that are far too dangerous for humans, such as complex surgeries and medicines, and stuff like that.
        </p>
        <p>
            Anyway, I am off to lunch, then my APCS test. I am very scared but confident. I will create another blog post about how that goes, and about my recent programming bouts and adventures. Goodbye!
        </p>
        `,
    },
    {
        id: 12,
        title: "So much work, I can't even c#",
        date_display: "May 6, 2023, 8:26",
        date_iso: "2023-05-05T12:26:17.450Z",
        content: /* html */ `
        <p>
            Yes, I know it's been two days. I have been very busy. But I hope that I did well on the AP test. It was a very long test, maybe 3-4 hours? Also, the stickers that you had to use smelled very good. I smelled them alot during the test. Did I mention I have a sinus infection now? Also a headache. Probably a coincidence.
        </p>
        <p>
            Tons of work, no time, barely even enough to do any coding. Or sleeping. Also I am pretty proud of this post's title as well ;)
        </p>
        <p>
            But I think it is time I explain my bouts in the world of the ones and the zeros. With all this AI nonsense, I have been very worried for my future in programming, but I hope that the environment changes, but programmers still exist. Otherwise, what will all of this have been for? I understand I am being a bit of a doomer but when you grew up with tech and coding, code.org, scratch, whatnot, it is really hard to see everything you ever knew about tech just go out the window.
        </p>
        <p>
            I have still been programming, although at a lower frequency; mainly because I was studying for the AP test, or I was &{on my ass}{doing nothing}. But I have been working on <a href="https://www.github.com/Cheespeasa/LeviAntSim">Boids simulation</a> to get better at mathematical functions in computer science. I have struggled with angles because it is so difficult to visualize the internal mathematics for debugging purposes.
        </p>
        <p>
            In the physical realm, I have been waiting for a new desk, and possibly a new SSD. The physical storage situation has become ever more dire, and I am seriously almost out of capacity. I predict I have one more month of regular programming usage until I am <i>out</i>.
        </p>
        <p>
            Anyway, I wanted to just finish this post by saying that I know no one reads this. My goal is that someone who wants to know more about me can see my internal train of thought and understand what I do with my time. And sometimes for mom. Hi mom!! But thanks for reading. Bye.
        </p>
        `,
    },
    {
        id: 13,
        title: "RIP cheespeasa1234.github.io",
        date_display: "Aug 1, 2023, 23:23:42",
        date_iso: "2023-08-02T03:24:12.855Z",
        content: /* html */ `
        <p>
            Wow, it really has been a while. What, four months? Crazy. Well, it's about time I give you a life update.
        </p>
        <p>
            First of all, I returned from Europe. That was very fun, and I saw a lot of things I enjoyed seeing. For example, I saw the &{colloseum}{Colosseum}, the &{pantheon}{Pantheon}, &{st peters}{St. Peters}, a bunch of cool places. I'm really happy that I got to do those things. Also, seeing such a different way of life was so interesting and eye opening. Cool!
        </p>
        <p>
            Kind of boring, though, so lets talk about the COOL STUFF!! You may not have noticed, but my website is now on natelevison.com! Now please, let me explain to you my journey to getting to this point (it was not easy).
        </p>
        <p>
            This journey started one month ago, just after I returned from &{europe}{Europe}. I was curious about what I could do to make my own backend for this website, as until now, I have been using GitHub Pages to do my hosting. I learned port forwarding and http and made my own server! So I bought a domain as well, and after a bit of struggling with DNS, I became the proud owner of natelevison.com.
        </p>
        <p>
            I soon realized I can remotely access my computer with SSH, because it would be easier now that there is a domain name. In a nutshell, SSH is a program that allows you to access the terminal of any computer on the public internet, as long as you have the passcode. So that is how I have been coding away from my PC during trips.
        </p>
        <p>
            During the in between time till the next stage, I have been bestowed with the honor of family IT guy, because my grandpa called me to fix his printer! And I did it! For those who don't know, in the computer science community, fixing printers is a mark of honor, a badge to prove you are actually a computer scientist. Hooray!
        </p>
        <p>
            The journey to web domination is not over. I am dipping my toes into encryption and into authorization, all homebrewed of course. I will also try to figure out nginx, one day. Still too confusing for me 😖
        </p>
        <p>
            Well, time to go. Thanks for reading, <s>everyone</s> grandma!
        <p>
        `
    },
    {
        id: 14,
        title: "8 months of changes",
        date_display: "Apr 16, 2024, 14:46:28",
        date_iso: "2024-04-16T18:45:02.460Z",
        content: /* html */ `
        <p>
            The last post was an understatement. It's been EIGHT MONTHS. What am I doing with myself?
        </p>
        <p>
            School has been fine. But this is about the website. As you can see, this website has nearly had a full revamp, visually. It also is hosted on NGINX, hooray!
        </p>
        <p>
            I've also been writing other blog articles. That's pretty cool. You've probably seen them though.
        </p>
        <p>
            You can barely recognize the new website, it's changed so much. But I've stuck to my philosophy of self-hosting and homebrewing, and everything (mostly) works! And this website is getting actual visitors now, from important people! This website truly is one of my biggest accomplishments.
        </p>
        <p>
            I'll make another blog post about the projects I've been doing, but in all, this website has made some huge leaps in technology. I am going to a robotics trip tomorrow, my Forgetting article is being published, things are happening, fast. But this website is like a life raft, that I come back to when I need something consistent, something predictable. Pretty cool, I'd say. I really enjoy coding on this website.
        </p>
        <p>
            Thanks for reading, grandma. Bye :D
        </p>
        `
    },
    {
        id: 15,
        title: "Issues with IPs and DNS",
        date_display: "Sep 26, 2024, 23:59",
        date_iso: "2024-09-27T03:59:13.355Z",
        content: /* html */ `
        <p>
            Here I am, again. I don't even want to know how long it's been. Anyway, the reason I'm writing is because I want to be open about the downtime my website has been experiencing.
        </p>
        <p>
            This website is run on my home computer, on my home router. Meaning, my IP address is dynamic and changes occasionally. Additionally, my local subnet address changes frequently, meaning I both have to update my DNS settings on Cloudflare, but I also have to update the port forwarding rules on my router- which I can only do when I am actually at home!
        </p>
        <p>
            The reason this is so bad is that my website is becoming more and more important. I mentioned this website as my crowning achievement in my college apps and I want it to be somewhat functional, and if a recruiter opens it to be greeted by a 523 error nothing good will happen. Also, for TAing in HCS, I made a cheatsheet website so I could embed styled and scripted elements into Canvas pages, which don't allow scripts or CSS classes at all! So if my website goes down, not only will college recruiters get the ick, but my students will get messed with too.
        </p>
        <p>
            This has been the dream for so long but its definitely a challenge. My goal is to save up for my own router, or some other workaround where I don't have to constantly switch IPs. That's all for today, except for that I am working on a new article, a follow up to Forgetting. Still working on it. Talk to you later, and thanks for reading, Grandma!
        </p>
        `
    }
].reverse();


function replaceAt(str, replacement, index, length) {
    const beforeSlice = str.slice(0, index);
    const afterSlice = str.slice(index + length);

    return beforeSlice + replacement + afterSlice;
}

function setCensorMode(content, mode){
    // Find all instances of &{option1}{option2}
    const regex = /&{[^{}]*}{[^{}]*}/gm;
    const matches = Array.from(content.matchAll(regex));

    console.log(`Swear matches: ${matches.length}`);

    let replaced = content;
    for (let i = matches.length - 1; i >= 0; i--) {
        // Get the information about the match
        const match = matches[i];
        const matchContent = match[0];
        const matchIndex = match.index;
        const matchLength = matchContent.length;

        // Get what we need to replace it with
        const optionOne = matchContent.slice(2, matchContent.indexOf("}"));
        const optionTwo = matchContent.slice(matchContent.lastIndexOf("{") + 1, -1);
        // console.log(`"${optionOne}", "${optionTwo}"`);
        const option = mode ? optionOne : optionTwo;

        replaced = replaceAt(replaced, option, matchIndex, matchLength);
    }
    return replaced;
}

let articlesDiv = document.querySelector("#articles");
let latestSpan = document.querySelector("#latest");
latestSpan.innerHTML = `Latest: ${new Date(posts[0].date_iso).toDateString()}`;

for (let post of posts) {
    article = document.createElement("article");
    article.innerHTML = setCensorMode(`
        <div id="post-${post.id}" class="title">${post.title}</div>
        <div class="sub">${post.date_display}</div>
        <div class="content">${post.content}</div>
        <br><br><br>
    `, false);
    articlesDiv.appendChild(article);
}

// if there is a URL param called post
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if (urlParams.has("post")) {
    const post = urlParams.get("post");
    const id = `post-${post}`;
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset - 50;
    scrollTo({ top: y, behavior: "smooth" });
    highlightme.classList.add("highlighted");
    setTimeout(() => {
        element.classList.add("nothighlighted");
        element.classList.remove("highlighted");
    }, 1000);
}
