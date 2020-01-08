import React from 'react'

export default () => (
    <div className={"experiencefragment aem-GridColumn aem-GridColumn--default--12"}>
        <div className={"xf-content-height"}>
            <div className={"aem-Grid aem-Grid--12 aem-Grid--default--12"}>
                <div className={"header aem-GridColumn aem-GridColumn--default--12"}>
                    <header className={"o-header"}>
                        <nav className={"o-navbar -desktop"}>
                            <div className={"o-navbar__main"}>
                                <div className={"m-navbar__socialMediaList"}>
                                    <ul>
                                        <li className={"m-navbar__socialMediaListItem"}>
                                            <a href="https://www.facebook.com/asianfoodnetworkofficial" target="_blank" className={"a-socialMediaIcon -facebook"}></a>
                                        </li>
                                        <li className={"m-navbar__socialMediaListItem"}>
                                            <a href="https://www.pinterest.com/asianfoodnetwork" target="_blank" className={"a-socialMediaIcon -pinterest"}></a>
                                        </li>
                                        <li className={"m-navbar__socialMediaListItem"}>
                                            <a href="https://www.instagram.com/asianfoodnetwork" target="_blank" className={"a-socialMediaIcon -instagram"}></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className={"m-navbar__logo"}>
                                    <a href={"https://asianfoodnetwork.com/"}>
                                        <img src={"https://dev.asianfoodnetwork.com/content/dam/afn/global/en/common/logo/afn-logo-white.svg"} className={"lazyloaded"} alt={"Asian Food Network"} title={"Asian Food Network"}/>
                                    </a>
                                </div>
                                <div className={"o-navbar__rightAligned"}>
                                    <div className={"m-main-search-bar"}>
                                        <div className={"m-search__suggestionsMenu tt-empty"}>
                                            <div className={"tt-dataset tt-dataset-page"}></div>
                                        </div>
                                        <form className={"m-search-form"} autoComplete="off" action="">
                                            <div data-search="autocomplete" data-enginekey="vmeRn9nsnWvxpy2yrxtp" data-resultsurl="https://asianfoodnetwork.com/en/search.html" data-noresults="Please try with a different search term">
                                                <span className={"twitter-typeahead"} style={{position: 'relative', display: 'inline-block'}}>
                                                    <input className={"typeahead tt-input"} autoComplete="off" type="search" name="Search" title="Search" id="navbar-search" placeholder="Find recipes, articles and more" spellCheck="false" dir="auto"/>
                                                    <pre aria-hidden="true"></pre>
                                                </span>
                                            </div>
                                        </form>
                                        <button className={"button m-search__clear"}>
                                            <svg width="34" height="34" viewBox="0 0 32 32" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                                                <rect height="5" rx="1.5" transform="translate(14.000000, 14.500000) rotate(-45.000000) translate(-14.000000, -14.500000) " width="34" x="-3" y="12"></rect>
                                                <rect height="5" rx="1.5" transform="translate(14.000000, 14.500000) rotate(-135.000000) translate(-14.000000, -14.500000) " width="34" x="-3" y="12"></rect>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className={"a-navbar__bookmark"}>
                                        <a href="/content/afn/global/en/bookmark.html" target="_self">
                                            <svg className={"a-afnIcon -bookmark -filled"} role="img" viewBox="0 0 12 17">
                                                <path d="M.5 0h11c.3 0 .5.2.5.5v15.4a.5.5 0 0 1-.8.4l-5-3.1a.5.5 0 0 0-.5 0l-5 3.1a.5.5 0 0 1-.7-.4V.5C0 .2.2 0 .5 0z"></path>
                                            </svg>
                                            <span>Saves</span>
                                        </a>
                                    </div>
                                    <div className={"o-navbar__profile dropdown"}>
                                        <button className={"dropdown-toggle"} data-toggle="dropdown">
                                            <svg className={"a-afnIcon -profile -filled active"} width="64px" height="64px" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                <g stroke="none" strokeWidth="1" fill="none">
                                                    <g transform="translate(-1211.000000, -2.000000)">
                                                        <g transform="translate(0.000000, -14.000000)">
                                                            <g transform="translate(1195.000000, 0.000000)">
                                                                <g>
                                                                    <polygon id="Path" points="0 0 96 0 96 96 0 96"></polygon>
                                                                    <path d="M48,48 C56.84,48 64,40.84 64,32 C64,23.16 56.84,16 48,16 C39.16,16 32,23.16 32,32 C32,40.84 39.16,48 48,48 Z M48,56 C37.32,56 16,61.36 16,72 L16,80 L80,80 L80,72 C80,61.36 58.68,56 48,56 Z" id="Shape" fill="#CCCDCF"></path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                            <div className={"a-profile-no-avatar"}>
                                                <img src="/etc.clientlibs/afn/clientlibs/clientlib-site/resources/images/common/profile-loggedin.png" alt=""/>
                                            </div>
                                            <div className={"a-profile-avatar"}>
                                                <img src="" alt=""/>
                                            </div>
                                        </button>
                                        <div className={"dropdown-menu dropdown-menu-right m-profile-dropdown"}>
                                            <div className={"dropdown-item m-profile-dropdown__login active"}>
                                                <button>Login</button>
                                            </div>
                                            <div className={"dropdown-item m-profile-dropdown__signup active"}>
                                                <button>Sign Up</button>
                                            </div>
                                            <div className={"dropdown-item m-profile-dropdown__name"}>
                                                <span>Profile</span>
                                            </div>
                                            <div className={"dropdown-item m-profile-dropdown__logout"}>
                                                <button>Log out</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"o-navbar__secondary"}>
                                <div className={"m-navbar__menuList"}>
                                    <ul>
                                        <li className={"m-navbar__menuListItem -dropdown"}>
                                            <button className={"m-menuListItem__button"}>
                                            <span>Recipes</span>
                                            <span className={"m-menuListItem__arrow"}></span>
                                            </button>
                                            <div className={"m-subMenu text-only"}>
                                                <div data-carousel="sub-menu" className={"owl-carousel owl-theme owl-loaded owl-drag"}>
                                                    <div className={"owl-stage-outer"}>
                                                        <div className={"owl-stage"}>
                                                            <div className={"owl-item active"} style={{width: '192px', 'margin-right': '10px;'}}>
                                                                <a className={"m-subMenuItem -main"} href="/en/recipes.html">
                                                                    <p className={"m-subMenuItem__label"}>All</p>
                                                                </a>
                                                            </div>
                                                            <div className={"owl-item active"} style={{width: '192px', 'margin-right': '10px;'}}>
                                                                <a className={"m-subMenuItem"} href="/en/recipes/cuisine.html">
                                                                    <p className={"m-subMenuItem__label"}>Cuisine</p>
                                                                </a>
                                                            </div>
                                                            <div className={"owl-item active"} style={{width: '192px', 'margin-right': '10px;'}}>
                                                                <a className={"m-subMenuItem"} href="/en/recipes/ingredients.html">
                                                                    <p className={"m-subMenuItem__label"}>Ingredients</p>
                                                                </a>
                                                            </div>
                                                            <div className={"owl-item active"} style={{width: '192px', 'margin-right': '10px;'}}>
                                                                <a className={"m-subMenuItem"} href="/en/recipes/time.html">
                                                                    <p className={"m-subMenuItem__label"}>Time</p>
                                                                </a>
                                                            </div>
                                                            <div className={"owl-item active"} style={{width: '192px', 'margin-right': '10px;'}}>
                                                                <a className={"m-subMenuItem"} href="/en/recipes/difficulty.html">
                                                                    <p className={"m-subMenuItem__label"}>Difficulty</p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={"owl-nav disabled"}><button type="button" role="presentation" className={"owl-prev disabled"}><span className={"icon-afn-navigate-left"}></span></button><button type="button" role="presentation" className={"owl-next disabled"}><span className={"icon-afn-navigate-right"}></span></button></div>
                                                    <div className={"owl-dots disabled"}></div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={"m-navbar__menuListItem "}>
                                            <a className={"m-menuListItem__link"} href="/en/how-to.html">How-To</a>
                                        </li>
                                        <li className={"m-navbar__menuListItem "}>
                                            <a className={"m-menuListItem__link"} href="/en/articles.html">Articles</a>
                                        </li>
                                        <li className={"m-navbar__menuListItem "}>
                                            <a className={"m-menuListItem__link"} href="/en/travel-and-eat.html">Travel &amp; Eat</a>
                                        </li>
                                        <li className={"m-navbar__menuListItem "}>
                                            <a className={"m-menuListItem__link"} href="/en/our-foodies.html">Our Foodies</a>
                                        </li>
                                        <li className={"m-navbar__menuListItem "}>
                                            <a className={"m-menuListItem__link"} href="/en/chinese-new-year-2020.html">Chinese New Year  2020</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <nav className={"o-navbar -mobile"}>
                            <div className={"o-navbar__hamburgerMenu"}>
                                <div className={"a-hamburgerMenu__button"}>
                                    <button>
                                        <svg role="img">
                                            <symbol id="icon-menu">
                                                <rect height="20%" rx="1.5" width="100%" x="0" y="0"></rect>
                                                <rect height="20%" rx="1.5" width="100%" x="0" y="40%"></rect>
                                                <rect height="20%" rx="1.5" width="100%" x="0" y="80%"></rect>
                                            </symbol>
                                            <use href="#icon-menu"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className={"m-navbar__logo"}>
                                <a href="https://asianfoodnetwork.com/">
                                    <img data-src="/content/dam/afn/global/en/common/logo/afn-logo-white.svg" className={"lazyload"} alt="Asian Food Network" title="Asian Food Network"/>
                                </a>
                            </div>
                            <div className={"o-navbar__rightAligned"}>
                                <div className={"o-navbar__search"}>
                                    <button className={"a-expand-search"}>
                                        <span className={"icon-afn-search"}></span>
                                    </button>
                                </div>
                                <div className={"a-navbar__bookmark"}>
                                    <a href="/content/afn/global/en/bookmark.html" target="_self">
                                        <svg className={"a-afnIcon -bookmark -filled"} role="img" viewBox="0 0 12 17">
                                            <path d="M.5 0h11c.3 0 .5.2.5.5v15.4a.5.5 0 0 1-.8.4l-5-3.1a.5.5 0 0 0-.5 0l-5 3.1a.5.5 0 0 1-.7-.4V.5C0 .2.2 0 .5 0z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </header>
                    <div className={"padded-header"}></div>
                    <div className={"o-search-container"}>
                        <div className={"o-search__expanded"}>
                            <div className={"m-main-search-bar"}>
                                <div className={"m-search__suggestionsMenu tt-empty"}>
                                    <div className={"tt-dataset tt-dataset-page"}></div>
                                </div>
                                <form className={"m-search-form"} autoComplete="off" action="">
                                    <div data-search="autocomplete" data-enginekey="vmeRn9nsnWvxpy2yrxtp" data-resultsurl="https://asianfoodnetwork.com/en/search.html" data-noresults="Please try with a different search term ">
                                        <span className={"twitter-typeahead"} style={{position: 'relative', display: 'inline-block'}}>
                                            <input className={"typeahead tt-input"} autoComplete="off" type="search" name="Search" title="Search" id="navbar-search" placeholder="Find recipes, articles and more" spellCheck="false" dir="auto" style={{position: 'relative', 'vertical-align': 'top', 'background-color': 'transparent'}}/>
                                            <pre aria-hidden="true" ></pre>
                                        </span>
                                    </div>
                                    <button type="submit" className={"button m-search__submit"}>
                                        <span className={"icon-afn-search"}></span>
                                    </button>
                                </form>
                                <button className={"button m-search__clear"}>
                                    <svg width="34" height="34" viewBox="0 0 32 32" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                                        <rect height="5" rx="1.5" transform="translate(14.000000, 14.500000) rotate(-45.000000) translate(-14.000000, -14.500000) " width="34" x="-3" y="12"></rect>
                                        <rect height="5" rx="1.5" transform="translate(14.000000, 14.500000) rotate(-135.000000) translate(-14.000000, -14.500000) " width="34" x="-3" y="12"></rect>
                                    </svg>
                                </button>
                            </div>
                            <button className={"a-collapse-search"}>
                                <span>Cancel</span>
                            </button>
                        </div>
                    </div>
                    <div className={"o-hamburgerMenu__menuList"}>
                        <div className={"a-hamburgerMenu__button -close"}>
                            <button>
                                <svg width="34" height="34" viewBox="0 0 32 32" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                                    <rect height="5" rx="1.5" transform="translate(14.000000, 14.500000) rotate(-45.000000) translate(-14.000000, -14.500000) " width="34" x="-3" y="12"></rect>
                                    <rect height="5" rx="1.5" transform="translate(14.000000, 14.500000) rotate(-135.000000) translate(-14.000000, -14.500000) " width="34" x="-3" y="12"></rect>
                                </svg>
                            </button>
                        </div>
                        <div className={"o-accordion"} id="mobile-nav">
                            <div className={"m-hamburgerMenuItem"}>
                                <button className={"m-hamburgerMenuItem__accordion collapsed"} type="button" data-toggle="collapse" data-target="#sub-mobile-nav-0" aria-expanded="false">
                                    <span className={"bold"}>Recipes</span>
                                    <div className={"m-hamburgerMenuItem__icon"}>
                                        <span className={"icon-afn-navigate-down"}></span>
                                        <span className={"icon-afn-navigate-up"}></span>
                                    </div>
                                </button>
                                <div id="sub-mobile-nav-0" className={"collapse"} data-parent="#mobile-nav">
                                    <div className={"m-accordionMenu"}>
                                        <a className={"m-accordionMenu__subLink "} href="/en/recipes.html">All</a>
                                        <a className={"m-accordionMenu__subLink "} href="/en/recipes/cuisine.html">Cuisine</a>
                                        <a className={"m-accordionMenu__subLink "} href="/en/recipes/ingredients.html">Ingredients</a>
                                        <a className={"m-accordionMenu__subLink "} href="/en/recipes/time.html">Time</a>
                                        <a className={"m-accordionMenu__subLink "} href="/en/recipes/difficulty.html">Difficulty</a>
                                    </div>
                                </div>
                            </div>
                            <div className={"m-hamburgerMenuItem"}>
                                <a className={"m-hamburgerMenuItem__link bold"} href="/en/how-to.html" role="button">How-To</a>
                            </div>
                            <div className={"m-hamburgerMenuItem"}>
                                <a className={"m-hamburgerMenuItem__link bold"} href="/en/articles.html" role="button">Articles</a>
                            </div>
                            <div className={"m-hamburgerMenuItem"}>
                                <a className={"m-hamburgerMenuItem__link bold"} href="/en/travel-and-eat.html" role="button">Travel &amp; Eat</a>
                            </div>
                            <div className={"m-hamburgerMenuItem"}>
                                <a className={"m-hamburgerMenuItem__link bold"} href="/en/our-foodies.html" role="button">Our Foodies</a>
                            </div>
                            <div className={"m-hamburgerMenuItem"}>
                                <a className={"m-hamburgerMenuItem__link bold"} href="/en/chinese-new-year-2020.html" role="button">Chinese New Year  2020</a>
                            </div>
                        </div>
                        <div className={"m-hamburgerMenuItem__profile"}>
                            <div className={"m-hamburgerMenuItem__item m-hamburgerMenuItem__logIn active"}>
                                <button>
                                    <span className={"button__icon"}>
                                        <svg className={"a-afnIcon -profile -filled active"} width="64px" height="64px" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <g stroke="none" strokeWidth="1" fill="none">
                                                <g transform="translate(-1211.000000, -2.000000)">
                                                    <g transform="translate(0.000000, -14.000000)">
                                                        <g transform="translate(1195.000000, 0.000000)">
                                                            <g>
                                                                <polygon id="Path" points="0 0 96 0 96 96 0 96"></polygon>
                                                                <path d="M48,48 C56.84,48 64,40.84 64,32 C64,23.16 56.84,16 48,16 C39.16,16 32,23.16 32,32 C32,40.84 39.16,48 48,48 Z M48,56 C37.32,56 16,61.36 16,72 L16,80 L80,80 L80,72 C80,61.36 58.68,56 48,56 Z" id="Shape" fill="#CCCDCF"></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </span>
                                    <span className={"button__copy"}>Login</span>
                                </button>
                            </div>
                            <div className={"m-hamburgerMenuItem__item m-hamburgerMenuItem__signUp active"}>
                                <button>Sign Up</button>
                            </div>
                            <div className={"m-hamburgerMenuItem__item m-hamburgerMenuItem__profileName"}>
                                <a href="">
                                    <svg className={"a-afnIcon -profile -filled active"} width="64px" height="64px" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <g stroke="none" strokeWidth="1" fill="none">
                                            <g transform="translate(-1211.000000, -2.000000)">
                                                <g transform="translate(0.000000, -14.000000)">
                                                    <g transform="translate(1195.000000, 0.000000)">
                                                        <g>
                                                            <polygon id="Path" points="0 0 96 0 96 96 0 96"></polygon>
                                                            <path d="M48,48 C56.84,48 64,40.84 64,32 C64,23.16 56.84,16 48,16 C39.16,16 32,23.16 32,32 C32,40.84 39.16,48 48,48 Z M48,56 C37.32,56 16,61.36 16,72 L16,80 L80,80 L80,72 C80,61.36 58.68,56 48,56 Z" id="Shape" fill="#CCCDCF"></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    <div className={"a-profile-no-avatar"}>
                                        <img src="/etc.clientlibs/afn/clientlibs/clientlib-site/resources/images/common/profile-loggedin.png" alt=""/>
                                    </div>
                                    <div className={"a-profile-avatar"}>
                                        <img src="" alt=""/>
                                    </div>
                                    <span>Profile</span>
                                </a>
                            </div>
                            <div className={"m-hamburgerMenuItem__item m-hamburgerMenuItem__logOut"}>
                                <button>Log out</button>
                            </div>
                        </div>
                        <div className={"m-navbar__socialMediaList"}>
                            <ul>
                                <li className={"m-navbar__socialMediaListItem"}>
                                    <a href="https://www.facebook.com/asianfoodnetworkofficial" target="_blank" className={"a-socialMediaIcon -facebook"}></a>
                                </li>
                                <li className={"m-navbar__socialMediaListItem"}>
                                    <a href="https://www.pinterest.com/asianfoodnetwork" target="_blank" className={"a-socialMediaIcon -pinterest"}></a>
                                </li>
                                <li className={"m-navbar__socialMediaListItem"}>
                                    <a href="https://www.instagram.com/asianfoodnetwork" target="_blank" className={"a-socialMediaIcon -instagram"}></a>
                                </li>
                            </ul>
                        </div>
                        <div className={"a-footer__footnote"}>
                            © 2020 Discovery Networks International. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
