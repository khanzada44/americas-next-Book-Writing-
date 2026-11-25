import PageAssets from '@/components/PageAssets';

export default function NotFound() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: "document.body.className='404'" }} />
      <PageAssets
        styles={[
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.2.1/css/intlTelInput.css",
          "/assets/css/vendor.css",
          "/assets/css/style.css",
          "/assets/legacy/404-1.css",
          "/assets/legacy/404-2.css",
        ]}
        scripts={[
          "/assets/legacy/404-1.js",
          "/assets/js/jquery-3.7.0.min.js",
          "/assets/legacy/404-2.js",
          "/assets/legacy/404-3.js",
          "https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.11/jquery.mask.js",
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.2.1/js/intlTelInput-jquery.min.js",
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.min.js",
          "/assets/legacy/404-4.js",
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "\n\t\t\t{ \"@context\": \"https://schema.org/\", \"@type\": \"WebSite\", \"name\": \"publisher 4 states\", \"url\": \"https://publisher4states.com/\", \"potentialAction\": { \"@type\": \"SearchAction\", \"target\": \"{search_term_string}\", \"query-input\": \"required name=search_term_string\" }\n\t\t\t}\n\t\t\t{ \"@context\": \"https://schema.org\", \"@type\": \"Organization\", \"name\": \"publisher 4 states\", \"url\": \"https://publisher4states.com/\", \"logo\": \"https://publisher4states.com/assets/img/logo-white.png\", \"contactPoint\": { \"@type\": \"ContactPoint\", \"telephone\": \"(855) 556-8603\", \"contactType\": \"customer service\", \"areaServed\": \"US\", \"availableLanguage\": \"en\" }, \"sameAs\": [ \"https://www.facebook.com/americasbookwritingofficial\", \"https://www.instagram.com/americasbookwriting/\" ]\n\t\t\t}\n\t\t\t{ \"@context\": \"https://schema.org/\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{ \"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home Page\", \"item\": \"https://publisher4states.com/\" },{ \"@type\": \"ListItem\", \"position\": 2, \"name\": \"eBook Writing\", \"item\": \"https://publisher4states.com/ebook-writing\" },{ \"@type\": \"ListItem\", \"position\": 3, \"name\": \"Book Publishing\", \"item\": \"https://publisher4states.com/book-publishing\" },{ \"@type\": \"ListItem\", \"position\": 4, \"name\": \"Book Promotion\", \"item\": \"https://publisher4states.com/book-promotion\" },{ \"@type\": \"ListItem\", \"position\": 5, \"name\": \"Audio Book\", \"item\": \"https://publisher4states.com/audio-book\" },{ \"@type\": \"ListItem\", \"position\": 6, \"name\": \"Ghost Writing\", \"item\": \"https://publisher4states.com/ghost-writing\" },{ \"@type\": \"ListItem\", \"position\": 7, \"name\": \"Book Video\", \"item\": \"https://publisher4states.com/book-video\" },{ \"@type\": \"ListItem\", \"position\": 8, \"name\": \"Book Proofreading\", \"item\": \"https://publisher4states.com/book-proofreading\" },{ \"@type\": \"ListItem\", \"position\": 9, \"name\": \"Article Publication\", \"item\": \"https://publisher4states.com/article-publication\" },{ \"@type\": \"ListItem\", \"position\": 10, \"name\": \"Book Cover Design\", \"item\": \"https://publisher4states.com/book-cover-design\" }{ \"@type\": \"ListItem\", \"position\": 11, \"name\": \"Our Writers\", \"item\": \"https://publisher4states.com/our-writers\" },{ \"@type\": \"ListItem\", \"position\": 12, \"name\": \"Blogs\", \"item\": \"http\\s://publisher4states.com/blogs/\" },{ \"@type\": \"ListItem\", \"position\": 13, \"name\": \"Privacy Policy\", \"item\": \"https://publisher4states.com/privacy-policy\" },{ \"@type\": \"ListItem\", \"position\": 14, \"name\": \"Terms Conditions\", \"item\": \"https://publisher4states.com/terms-conditions\" }]\n\t\t\t}\n\t\t" }} />
      <div className="mars"></div>
      <img src="https://assets.codepen.io/1538474/404.svg" className="logo-404" />
      <img src="https://assets.codepen.io/1538474/meteor.svg" className="meteor" />
      <p className="title">Oh no!!</p>
      <p className="subtitle">
        {" You’re either misspelling the URL "}
        <br />
        {" or requesting a page that's no longer here. "}
      </p>
      <div align="center"><a className="btn-back" href="/">Back to previous page</a></div>
      <div className="cursor"><div><span></span></div></div>
      <img src="https://assets.codepen.io/1538474/astronaut.svg" className="astronaut" />
      <img src="https://assets.codepen.io/1538474/spaceship.svg" className="spaceship" />
    </>
  );
}
