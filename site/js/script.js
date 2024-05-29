/* RSF scripts */

function getFilename()
{
    var segments = window.location.pathname.split('/');
    var toDelete = [];
    for (var i = 0; i < segments.length; i++) {
        if (segments[i].length < 1) {
            toDelete.push(i);
        }
    }
    for (var i = 0; i < toDelete.length; i++) {
        segments.splice(i, 1);
    }
    var filename = segments[segments.length - 1];
    
    return filename;
}

function showHead()
{
    var head =
    `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=PT+Serif&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    `;

    var filename = getFilename();

    if (filename === "index.html" || filename === "404.html") {
        head += `<link rel="stylesheet" href="./site/css/style.css">`;
    }else if (filename === "about.html" || filename === "articles.html") {
        head += `<link rel="stylesheet" href="../css/style.css">`;
    }else {
        head += `<link rel="stylesheet" href="../site/css/style.css">`;
    }
    
    document.write(head);
}

function showNav()
{
    var nav = 
    `
    <nav>
        <ul>`;
        
    var filename = getFilename();

    if (filename === "index.html" || filename === "404.html") {
        nav += 
        `
        <li class="logo"><a href="./index.html">RSF</a></li>
        <li class="link"><a href="./site/src/articles.html">ARTIGOS</a></li>
        <li class="link"><a href="./site/src/about.html">SOBRE</a></li>
        `;
    }else if (filename === "about.html" || filename === "articles.html") {
        nav += 
        `
        <li class="logo"><a href="../../index.html">RSF</a></li>
        <li class="link"><a href="./articles.html">ARTIGOS</a></li>
        <li class="link"><a href="./about.html">SOBRE</a></li>
        `;
    }else {
        nav += 
        `
        <li class="logo"><a href="../index.html">RSF</a></li>
        <li class="link"><a href="../site/src/articles.html">ARTIGOS</a></li>
        <li class="link"><a href="../site/src/about.html">SOBRE</a></li>
        `;
    }
            
    nav += `</ul>
    </nav>
    `;

    document.write(nav);
}

function showIndexArticles() 
{
    var articles =
    `
    <article>
            <h2>
                LOREM IPSUM
            </h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <div class="read">
                <a href="#">LER</a>
            </div>            
        </article>
    `;

    document.write(articles);
}

function showFooter() 
{
    var footer = 
    `
    <footer>
        <p>Desenvolvido por <a href="https://rontekhne.github.io">RonTekhne</a> &copy; 2024</p>
        <p>Distribuído por <i class="fa fa-github" aria-hidden="true"></i>
        </p>
    </footer>
    `;

    document.write(footer);
}