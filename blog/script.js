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
            I added an about me page now. I put my email. Please don't email me unless it's important, that is legitimately my only email account that I can use, please don't blow it up. Who am I kidding, no one reads this. I added some of my achievements onto that page. Now that I'm thinking about that, I really haven't done much. Hopefully this site helps.
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
            Hello from Aruba! I am currently in bed in a hotel on Aruba. Pretty cool. Did I mention I'm in Aruba? Anyway, I wanted to talk about my journey to fix the WordleGen and why it broke, and also why im a dumbass for not figuring it out.
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
            Also, blog has gone bye bye. I don't want to upkeep it, it's a pain in the ass to maintain, (not like I've been maintaining it anyway) but yeah. I think my site will be better off without it.
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
        title: "f*** njsla and i added web spider, github, generators, and removed name",
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
            Also, I migrated the site to github so I have to change things. It is so much better, 000webhost sucks!!!
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
            Wassup gamers. I fixed the wordle again, It should be working now. The issue was pretty dumb. It had to do with the generate button being after the script which gave nulls and stuff.
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
            I made some changes to the site (using href instead of onclick) to make it faster. The whole fractal + backend idea to make it more efficient isn't exactly working out for me. I've managed to make a fully functioning express server, but I have yet to implement it into a frontend without php (which I suck at) or using unsecure methods.
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
            I finished migrating the blog over to the new site. By the way, I didn't post here for a while because I was busy with school. I am still not doing well, though. 
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
].reverse();

let articlesDiv = document.querySelector("#articles");
let latestSpan = document.querySelector("#latest");
latestSpan.innerHTML = `Latest: ${new Date(posts[0].date_iso).toDateString()}`;

for (let post of posts) {
    article = document.createElement("article");
    article.innerHTML = `
        <div id="post-${post.id}" class="title">${post.title}</div>
        <div class="sub">${post.date_display}</div>
        <div class="content">${post.content}</div>
        <br><br><br>
    `;
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
