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
        head += `<link rel="stylesheet" href="../../site/css/style.css">`;
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
        <li class="logo"><a href="../../index.html">RSF</a></li>
        <li class="link"><a href="../../site/src/articles.html">ARTIGOS</a></li>
        <li class="link"><a href="../../site/src/about.html">SOBRE</a></li>
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
                TPA - TUPI ANTIGO
            </h2>
            <p>
                Neste artigo eu detalho o processo de desenvolvimento do TPA, o software de estudos do Tupi Antigo. O Tupi Antigo foi a língua indígena mais falada na costa do Brasil até o século XVI. O TPA possui um dicionário, um tradutor e um modelo generativo. A base de dados é retirada das obras do professor Eduardo de Almeida Navarro, associado da Faculdade de Filosofia, Letras e Ciências Humanas da USP, mestre experiente no ensino e na pesquisa do Tupi Antigo. As principais obras do professor Navarro são o Dicionário e o Método. Leia o artigo e saiba mais sobre o processo de desenvolvimento do TPA.
            </p>
            <div class="read">`;

    var filename = getFilename();
    if (filename == "index.html") {
    articles +=   `<a href="post/2024/post_28_10_2024_tupi_antigo.html">LER</a>
            </div>            
        </article>
    `;
    }else {
        articles +=   `<a href="../../post/2024/post_28_10_2024_tupi_antigo.html">LER</a>
            </div>            
        </article>
    `;  
    }

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