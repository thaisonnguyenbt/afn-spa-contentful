import React, { Component } from 'react'
import { AfnContext } from "../Context";
import IngredientTile from "./IngredientTile"

export default class RecipeDetails extends Component {
    static contextType = AfnContext;
    render() {
        let recipe = this.context;
        console.log(recipe.ingredients)

        return (
            <div className="container responsivegrid aem-GridColumn--offset--medium--0 aem-GridColumn--small--none aem-GridColumn--medium--none aem-GridColumn--default--none aem-GridColumn--medium--12 aem-GridColumn aem-GridColumn--small--12 aem-GridColumn--offset--small--0 aem-GridColumn--default--10 aem-GridColumn--offset--default--1">
                <div id="details-page-container" className="cmp-container">
                    <div className="aem-Grid aem-Grid--default--10 aem-Grid--medium--12 aem-Grid--small--12 ">
                        <div className="breadcrumb aem-GridColumn--offset--medium--0 aem-GridColumn--small--none aem-GridColumn--medium--none aem-GridColumn--default--none aem-GridColumn--medium--12 aem-GridColumn aem-GridColumn--small--12 aem-GridColumn--offset--small--0 aem-GridColumn--default--7 aem-GridColumn--offset--default--0">
                            <nav className="cmp-breadcrumb">
                                <ol className="cmp-breadcrumb__list" itemscope="" itemtype="http://schema.org/BreadcrumbList">
                                    <li className="cmp-breadcrumb__item" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                                        <a href="/" className="cmp-breadcrumb__item-link" itemprop="item">
                                        <span itemprop="name">Home</span>
                                        </a>
                                        <meta itemprop="position" content="1"/>
                                    </li> > &nbsp;
                                    <li className="cmp-breadcrumb__item" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                                        <a href="/en/recipes.html" className="cmp-breadcrumb__item-link" itemprop="item">
                                        <span itemprop="name">Recipes</span>
                                        </a>
                                        <meta itemprop="position" content="2"/>
                                    </li> > &nbsp;
                                    <li className="cmp-breadcrumb__item" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                                        <a href="/en/recipes/cuisine.html" className="cmp-breadcrumb__item-link" itemprop="item">
                                        <span itemprop="name">Cuisine</span>
                                        </a>
                                        <meta itemprop="position" content="3"/>
                                    </li> > &nbsp;
                                    <li className="cmp-breadcrumb__item" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                                        <a href="/en/recipes/cuisine/asian-desserts.html" className="cmp-breadcrumb__item-link" itemprop="item">
                                        <span itemprop="name">Asian Desserts | Learn To Cook Common Asian </span>
                                        </a>
                                        <meta itemprop="position" content="4"/>
                                    </li> > &nbsp;
                                    <li className="cmp-breadcrumb__item cmp-breadcrumb__item--active" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                                        <span itemprop="name">{recipe.title}</span>
                                        <meta itemprop="position" content="5"/>
                                    </li>
                                </ol>
                            </nav>
                        </div>



                        <div className="recipeingredients aem-GridColumn--offset--medium--0 aem-GridColumn--small--none aem-GridColumn--medium--none aem-GridColumn--default--none aem-GridColumn--medium--12 aem-GridColumn aem-GridColumn--small--12 aem-GridColumn--offset--small--0 aem-GridColumn--default--3 aem-GridColumn--offset--default--0">
                            <div className="col o-recipe__right desktop">
                                <div className="m-sticky-container -sticky -active" data-sticky="sidebar">
                                    <span className="col m-recipeDetailList">
                                        <div className="cmp-title">
                                            <h3 className="cmp-title__text">Ingredients</h3>
                                        </div>
                                        <ul>
                                            <li className="m-recipeDetailList__item">
                                                <strong>Serves {recipe.numOfPeopleToServe} people</strong>
                                            </li>
                                            
                                            {recipe.ingredients && recipe.ingredients.map(item => {
                                                return <li className="m-recipeDetailList__item">
                                                    <p>{item}</p>
                                                </li>
                                            })} 
                                        </ul>
                                    </span>
                                </div>
                            </div>
                        </div>


                        <div className="recipeoverview aem-GridColumn--offset--medium--0 aem-GridColumn--small--none aem-GridColumn--medium--none aem-GridColumn--default--none aem-GridColumn--medium--12 aem-GridColumn aem-GridColumn--small--12 aem-GridColumn--offset--small--0 aem-GridColumn--default--7 aem-GridColumn--offset--default--0">
                            <div className="o-recipe aem-Grid aem-Grid--12 aem-Grid--default--12">
                                <div className="m-recipe-overview__hero">
                                    <div className="m-recipe-image__main">
                                        <div className="cmp-image" data-cmp-src="/content/dam/afn/global/en/recipes/snow-fungus/AFN_snow_fungus_main_image.jpg" data-title="Snow Fungus Dessert" itemscope="" itemtype="http://schema.org/ImageObject">
                                            <img data-src="/content/dam/afn/global/en/recipes/snow-fungus/AFN_snow_fungus_main_image.jpg" className="cmp-image__image lazyloaded" itemprop="contentUrl" data-cmp-hook-image="image" alt="Snow Fungus Dessert" title="Snow Fungus Dessert" src={recipe.images[0]}/>
                                        </div>
                                    </div>
                                    <div className="m-recipe-image__logo desktop">
                                        <img src="https://asianfoodnetwork.com/etc.clientlibs/afn/clientlibs/clientlib-site/resources/images/common/afn-logo.png" alt="Asian Food Network" title="Asian Food Network"/>
                                    </div>
                                </div>
                                <section className="o-recipe-details">
                                    <div className="o-recipe-details__card">
                                        <div className="m-recipe-overview__generalInfo">
                                            <div className="m-recipe-info__mobileWrapper">
                                                <div className="m-recipe-image__logo -mobile">
                                                    <img src="https://asianfoodnetwork.com/etc.clientlibs/afn/clientlibs/clientlib-site/resources/images/common/afn-logo.png" alt="Asian Food Network" title="Asian Food Network"/>
                                                </div>
                                                <div className="m-recipe-info__creator">{recipe.recipeCreator}</div>
                                            </div>
                                            <div className="m-recipe-info__title">
                                                <div className="cmp-title">
                                                    <h2 className="cmp-title__text">{recipe.title}</h2>
                                                </div>
                                            </div>
                                            <a className="m-ratings gigya-style-modern gigya-mac gigya-chrome" smooth-scroll="" scroll-current="true" href="#recipe-ratings-reviews-container" id="view-overall-recipe-ratings" data-rating="overall-ratings" rating-categoryid="afn_ratings_reviews_default_configuration" rating-ratingconfigid="afn_ratings_reviews_default_configuration" rating-streamid="L2NvbnRlbnQvYWZuL2dsb2JhbC9lbi9yZWNpcGVzL2N1aXNpbmUvYXNpYW4tZGVzc2VydHMvc25vdy1mdW5ndXMtZGVzc2VydC5odG1s" rating-container="view-overall-recipe-ratings">
                                                <div className="gig-rating gig-clr">
                                                    <div className="gig-stars-container">
                                                        <div className="gig-rating-topbar">
                                                            <span className="gig-rating-averageRating">Average rating:</span>
                                                            <span className="gig-rating-stars" title="0" alt="0">
                                                                <div className="gig-rating-star gig-rating-star-empty"></div>
                                                                <div className="gig-rating-star gig-rating-star-empty"></div>
                                                                <div className="gig-rating-star gig-rating-star-empty"></div>
                                                                <div className="gig-rating-star gig-rating-star-empty"></div>
                                                                <div className="gig-rating-star gig-rating-star-empty"></div>
                                                            </span>
                                                        </div>
                                                        <div className="gig-rating-dimensions"></div>
                                                    </div>
                                                    <div className="gig-button-container gig-clr">
                                            <a href="#" className="gig-rating-readReviewsLink">0 Reviews</a>
                                            <a href="#" className="gig-rating-writeYourReview gig-rating-button">Write your review</a>
                                            </div>
                                            </div>
                                            </a>
                                            <div className="m-content__blurb -collapsed">
                                                <div className="m-content__copy -full">
                                                    <span>{recipe.description}</span>
                                                    <button className="a-button -text" button-click="less-copy">Less</button>
                                                </div>
                                            </div>
                                            <div className="m-recipe-info__options desktop m-save-bookmark">
                                                <div className="a-loading-spinner -small -disabled">
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                </div>
                                                <button className="a-button -withIcon" button-cl vick="save-bookmark" bookmark-type="afn" bookmark-author="Asian Food Network" bookmark-category="recipe" bookmark-subcategory="default" bookmark-thumbnail="/content/dam/afn/global/en/recipes/snow-fungus/AFN_snow_fungus_main_image.jpg.transform/1280x853/img.png" bookmark-title="Snow Fungus Dessert" bookmark-url="/content/afn/global/en/recipes/cuisine/asian-desserts/snow-fungus-dessert.html" bookmark-categoryid="afn_ratings_reviews_default_configuration" bookmark-ratingconfigid="afn_ratings_reviews_default_configuration" bookmark-streamid="L2NvbnRlbnQvYWZuL2dsb2JhbC9lbi9yZWNpcGVzL2N1aXNpbmUvYXNpYW4tZGVzc2VydHMvc25vdy1mdW5ndXMtZGVzc2VydC5odG1s" data-endpoint="https://asianfoodnetwork.com/en/recipes/cuisine/asian-desserts/snow-fungus-dessert/_jcr_content/root/responsivegrid/container/recipeoverview.gigya.bookmark.exist.json?uid={USERID}&amp;streamid=L2NvbnRlbnQvYWZuL2dsb2JhbC9lbi9yZWNpcGVzL2N1aXNpbmUvYXNpYW4tZGVzc2VydHMvc25vdy1mdW5ndXMtZGVzc2VydC5odG1s">
                                                    <span className="button__icon">
                                                        <svg className="a-afnIcon -bookmark -filled" role="img" viewBox="0 0 12 17">
                                                            <path d="M.5 0h11c.3 0 .5.2.5.5v15.4a.5.5 0 0 1-.8.4l-5-3.1a.5.5 0 0 0-.5 0l-5 3.1a.5.5 0 0 1-.7-.4V.5C0 .2.2 0 .5 0z" fill-rule="evenodd"></path>
                                                        </svg>
                                                    </span>
                                                    <span className="button__copy">Save Recipe</span>
                                                </button>
                                                <button className="a-button -withIcon -disabled" disabled="disabled" button-disabled="saved">
                                                <span className="button__icon">
                                                <span className="icon-afn-check"></span>
                                                </span>
                                                <span className="button__copy">Saved!</span>
                                                </button>
                                                <button className="a-button -icon" button-click="print-recipe">
                                                <span className="icon-afn-print"></span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="m-icon-text desktop">
                                            <div className="row m-icon-text-list">
                                                { recipe.healthy && 
                                                <div className="col-6 col-md-4 col-lg-3 m-icon-text-listItem">
                                                    <div className="m-icon-text-listItem__img">
                                                        <img src={require('../images/icons/healthy.svg')}  alt="Healthy" />
                                                    </div>
                                                    <div className="m-icon-text-listItem__label">
                                                        <span>Healthy</span>
                                                    </div>
                                                </div> }
                                                { recipe.noAlcohol && 
                                                <div className="col-6 col-md-4 col-lg-3 m-icon-text-listItem">
                                                    <div className="m-icon-text-listItem__img">
                                                        <img src={require('../images/icons/no-alcohol.svg')} alt="No Alcohol" />
                                                    </div>
                                                    <div className="m-icon-text-listItem__label">
                                                        <span>No Alcohol</span>
                                                    </div>
                                                </div> }
                                                { recipe.noMilk && 
                                                <div className="col-6 col-md-4 col-lg-3 m-icon-text-listItem">
                                                    <div className="m-icon-text-listItem__img">
                                                        <img src={require('../images/icons/no-milk.svg')} alt="No Milk" />
                                                    </div>
                                                    <div className="m-icon-text-listItem__label">
                                                        <span>No Milk</span>
                                                    </div>
                                                </div> }
                                                { recipe.noPork && 
                                                <div className="col-6 col-md-4 col-lg-3 m-icon-text-listItem">
                                                    <div className="m-icon-text-listItem__img">
                                                        <img src={require('../images/icons/no-pork.svg')} alt="No Pork" />
                                                    </div>
                                                    <div className="m-icon-text-listItem__label">
                                                        <span>No Pork</span>
                                                    </div>
                                                </div> }
                                            </div>
                                        </div>
                                        <div className="m-icon-text mobile-only">
                                            <div className="row active m-icon-text-list" data-list="teaser">
                                                { recipe.healthy && 
                                                <div className="col-6 col-md-4 col-lg-3 m-icon-text-listItem">
                                                    <div className="m-icon-text-listItem__img">
                                                        <img src={require('../images/icons/healthy.svg')} alt="Healthy"/>
                                                    </div>
                                                    <div className="m-icon-text-listItem__label">
                                                        <span>Healthy</span>
                                                    </div>
                                                </div> }
                                                { recipe.noAlcohol && 
                                                <div className="col-6 col-md-4 col-lg-3 m-icon-text-listItem">
                                                    <div className="m-icon-text-listItem__img">
                                                        <img src={require('../images/icons/no-alcohol.svg')} alt="No Alcohol"/>
                                                    </div>
                                                    <div className="m-icon-text-listItem__label">
                                                        <span>No Alcohol</span>
                                                    </div>
                                                </div> }
                                                { recipe.noMilk && 
                                                <div className="col-6 col-md-4 col-lg-3 m-icon-text-listItem">
                                                    <div className="m-icon-text-listItem__img">
                                                        <img src={require('../images/icons/no-milk.svg')}  alt="No Milk"/>
                                                    </div>
                                                    <div className="m-icon-text-listItem__label">
                                                        <span>No Milk</span>
                                                    </div>
                                                </div> }
                                                { recipe.noPork && 
                                                <div className="col-6 col-md-4 col-lg-3 m-icon-text-listItem">
                                                    <div className="m-icon-text-listItem__img">
                                                        <img src={require('../images/icons/no-pork.svg')}  alt="No Pork"/>
                                                    </div>
                                                    <div className="m-icon-text-listItem__label">
                                                        <span>No Pork</span>
                                                    </div>
                                                </div> }
                                            </div>
                                        </div>
                                        <div className="m-recipe-overview__highlights desktop">
                                            <div className="row m-recipe-info__table">
                                                <div className="col">
                                                    <ul>
                                                        <li><label>Difficulty: </label>
                                                            <span> {recipe.difficulty}</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col">
                                                    <ul>
                                                        <li><label>Preparation: </label> <span>{recipe.preparationTime} min</span>
                                                        </li>
                                                        <li><label>Cook: </label> <span>{recipe.cookTime} min</span>
                                                        </li>
                                                        <li><label>Clean up: </label> <span>{recipe.cleanTime} min</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col">
                                                    <ul>
                                                        <li><label>Steps: </label>
                                                            <span>{recipe.steps} steps</span>
                                                        </li>
                                                        <li><span>{recipe.numOfIngredients} Ingredients</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="m-recipe-overview__highlights not-desktop">
                                            <div className="row m-recipe-info__table">
                                                <div className="col">
                                                    <ul>
                                                        <li><label>Difficulty: </label>
                                                            <span>{recipe.difficulty}</span>
                                                        </li>
                                                        <li><label>Steps: </label>
                                                            <span>{recipe.steps} steps</span>
                                                        </li>
                                                        <li><span>{recipe.numOfIngredients} Ingredients</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col">
                                                    <ul>
                                                        <li><label>Preparation: </label>
                                                            <span>{recipe.preparationTime} min</span>
                                                        </li>
                                                        <li><label>Cook: </label> <span>{recipe.cookTime} min</span>
                                                        </li>
                                                        <li><label>Clean up: </label> <span>{recipe.cleanTime} min</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="desktop">
                                            <div className="m-social-sharing-bar ">
                                                <div className="m-social-sharing__label">
                                                    <span>Share This Recipe:</span>
                                                </div>
                                                <div className="m-social-sharing__list" id="desktop1578471783767_gig_containerParent">
                                                    <div className="m-social-sharing__icons" id="desktop1578471783767" gigid="showShareBarUI" >
                                                        <div className="gig-bar-container gig-share-bar-container">
                                                            <table cellspacing="0" cellpadding="0" role="presentation">
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="gig-button-container gig-button-container-count-none gig-button-container-facebook gig-button-container-facebook-count-none gig-share-button-container gig-button-container-horizontal">
                                                                                <div className="gig-button gig-share-button gig-button-up gig-button-count-none" id="desktop1578471783767-reaction0" title="" alt="" onclick="gigya.services.socialize.plugins.reactions.instances['desktop1578471783767'].buttonInstances['desktop1578471783767-reaction0'].onClick()" onmouseover="gigya.services.socialize.plugins.reactions.instances['desktop1578471783767'].buttonInstances['desktop1578471783767-reaction0'].changeState('over')" onmouseout="gigya.services.socialize.plugins.reactions.instances['desktop1578471783767'].buttonInstances['desktop1578471783767-reaction0'].changeState('up')" tabindex="0" role="button">
                                                                                    <table cellpadding="0" cellspacing="0" role="presentation">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td id="desktop1578471783767-reaction0-left" aria-hidden="true"></td>
                                                                                                <td id="desktop1578471783767-reaction0-icon">
                                                                                                    <img id="desktop1578471783767-reaction0-icon_img" src={require('../images/social-media/facebook-default.svg')} alt="" focusable="false"/>
                                                                                                </td>
                                                                                                <td id="desktop1578471783767-reaction0-right" aria-hidden="true"></td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="gig-button-container gig-button-container-count-none gig-button-container-twitter gig-button-container-twitter-count-none gig-share-button-container gig-button-container-horizontal">
                                                                                <div className="gig-button gig-share-button gig-button-up gig-button-count-none" id="desktop1578471783767-reaction1" title="" alt="" onclick="gigya.services.socialize.plugins.reactions.instances['desktop1578471783767'].buttonInstances['desktop1578471783767-reaction1'].onClick()" onmouseover="gigya.services.socialize.plugins.reactions.instances['desktop1578471783767'].buttonInstances['desktop1578471783767-reaction1'].changeState('over')" onmouseout="gigya.services.socialize.plugins.reactions.instances['desktop1578471783767'].buttonInstances['desktop1578471783767-reaction1'].changeState('up')" tabindex="0" role="button">
                                                                                    <table cellpadding="0" cellspacing="0" role="presentation">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td id="desktop1578471783767-reaction1-left" aria-hidden="true"></td>
                                                                                                <td id="desktop1578471783767-reaction1-icon"><img id="desktop1578471783767-reaction1-icon_img" src={require('../images/social-media/twitter-default.svg')} alt="" focusable="false"/></td>
                                                                                                <td id="desktop1578471783767-reaction1-right" aria-hidden="true"></td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="gig-button-container gig-button-container-count-none gig-button-container-pinterest gig-button-container-pinterest-count-none gig-share-button-container gig-button-container-horizontal">
                                                                                <div className="gig-button gig-share-button gig-button-up gig-button-count-none" id="desktop1578471783767-reaction2" title="" alt="" onclick="gigya.services.socialize.plugins.reactions.instances['desktop1578471783767'].buttonInstances['desktop1578471783767-reaction2'].onClick()" onmouseover="gigya.services.socialize.plugins.reactions.instances['desktop1578471783767'].buttonInstances['desktop1578471783767-reaction2'].changeState('over')" onmouseout="gigya.services.socialize.plugins.reactions.instances['desktop1578471783767'].buttonInstances['desktop1578471783767-reaction2'].changeState('up')" tabindex="0" role="button">
                                                                                    <table cellpadding="0" cellspacing="0" role="presentation">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td id="desktop1578471783767-reaction2-left" aria-hidden="true"></td>
                                                                                                <td id="desktop1578471783767-reaction2-icon" ><img id="desktop1578471783767-reaction2-icon_img" src={require('../images/social-media/pinterest-default.svg')}  alt="" focusable="false"/></td>
                                                                                                <td id="desktop1578471783767-reaction2-right" aria-hidden="true"></td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="gig-button-container gig-button-container-count-none gig-button-container-whatsapp gig-button-container-whatsapp-count-none gig-share-button-container gig-button-container-horizontal">
                                                                                <div className="gig-button gig-share-button gig-button-up gig-button-count-none" id="desktop1578471783767-reaction3" title="" alt="" onclick="gigya.services.socialize.plugins.reactions.instances['desktop1578471783767'].buttonInstances['desktop1578471783767-reaction3'].onClick()" onmouseover="gigya.services.socialize.plugins.reactions.instances['desktop1578471783767'].buttonInstances['desktop1578471783767-reaction3'].changeState('over')" onmouseout="gigya.services.socialize.plugins.reactions.instances['desktop1578471783767'].buttonInstances['desktop1578471783767-reaction3'].changeState('up')" tabindex="0" role="button">
                                                                                    <table cellpadding="0" cellspacing="0" role="presentation">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td id="desktop1578471783767-reaction3-left" aria-hidden="true"></td>
                                                                                                <td id="desktop1578471783767-reaction3-icon" ><img id="desktop1578471783767-reaction3-icon_img" src={require('../images/social-media/whatsapp-default.svg')} alt="" focusable="false"/></td>
                                                                                                <td id="desktop1578471783767-reaction3-right" aria-hidden="true"></td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <button className="m-email-sharing">
                                                        <a href="mailto:?subject=Snow%20Fungus%20Dessert&amp;body=Snow fungus contains dietary fibers that helps to lower cholesterol in the foods that we eat but also control the sugar absorption. It basically acts like a filter for your body. It also makes you even more beautiful by replenishing the collagen that we need to make our skin nice and bouncy. - https://asianfoodnetwork.com/en/recipes/cuisine/asian-desserts/snow-fungus-dessert.html">
                                                            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx="32" cy="32" r="32" fill="#C84152"></circle>
                                                                <path d="M20.125 21C19.1821 21 18.3171 21.3186 17.6264 21.8404L31.8306 35.0187C32.1488 35.3142 32.8512 35.3142 33.1694 35.0187L47.3759 21.8404C46.6603 21.2968 45.7806 21.0012 44.875 21H20.125ZM16.5421 23.0617C16.2027 23.6551 16 24.3431 16 25.0749V38.9274C16 39.7585 16.2546 40.525 16.6836 41.1669L16.7213 41.1438L27.1021 32.8669L16.5398 23.0617H16.5421ZM48.4579 23.0617L37.9002 32.8669L48.2787 41.1415L48.3164 41.1669C48.762 40.5015 48.9996 39.7231 49 38.9274V25.0749C49 24.3407 48.7973 23.6551 48.4579 23.0617V23.0617ZM28.3114 33.9867L17.8551 42.3258C18.5056 42.7483 19.2859 43 20.125 43H44.875C45.7141 43 46.4944 42.7483 47.1426 42.3258L36.6886 33.9867L34.3056 36.2031C33.8173 36.6544 33.1714 36.9058 32.5 36.9058C31.8286 36.9058 31.1827 36.6544 30.6944 36.2031L28.3114 33.9867V33.9867Z" fill="white"></path>
                                                            </svg>
                                                        </a>
                                                    </button>
                                                    <button className="m-copy-to-clipboard" data-copy="link" data-clipboard-text="https://asianfoodnetwork.com/en/recipes/cuisine/asian-desserts/snow-fungus-dessert.html">
                                                        <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="32" cy="32" r="32" fill="#C84152"></circle>
                                                            <g clip-path="url(#clip0)">
                                                                <path d="M34.85 39.3202L29.2825 44.8889C27.9343 46.2342 26.1097 46.993 24.2051 47.0005C22.3006 47.0079 20.4701 46.2635 19.1113 44.9289C19.1045 44.9224 19.0979 44.9157 19.0913 44.9089L19.0713 44.8889C17.7368 43.5304 16.9924 41.7 16.9999 39.7957C17.0074 37.8914 17.7661 36.0669 19.1113 34.7189L25.2488 28.5814C26.5971 27.2367 28.4216 26.4784 30.3258 26.4711C32.2301 26.4639 34.0603 27.2083 35.4188 28.5427L35.4388 28.5614L35.4588 28.5814C35.7963 28.9239 36.0913 29.2914 36.3463 29.6777L34.6788 31.3452C34.2038 31.8202 33.4788 31.8977 32.9225 31.5789C32.8482 31.4856 32.769 31.3963 32.685 31.3114C32.0584 30.6974 31.2149 30.3552 30.3376 30.3592C29.4602 30.3632 28.6198 30.713 27.9988 31.3327L21.8613 37.4702C21.2416 38.0916 20.892 38.9324 20.8885 39.8101C20.8849 40.6877 21.2278 41.5313 21.8425 42.1577C22.4691 42.7723 23.3128 43.1149 24.1904 43.1111C25.068 43.1074 25.9088 42.7576 26.53 42.1377L30.0188 38.6502C31.5391 39.3074 33.2095 39.5389 34.8513 39.3202H34.85ZM44.8888 19.0714C43.5302 17.7365 41.6996 16.9919 39.7949 16.9994C37.8903 17.0069 36.0656 17.7659 34.7175 19.1114L29.15 24.6802C30.7919 24.4619 32.4623 24.6939 33.9825 25.3514L37.47 21.8627C38.0913 21.2428 38.932 20.893 39.8097 20.8892C40.6873 20.8855 41.531 21.2281 42.1575 21.8427C42.7723 22.469 43.1151 23.3126 43.1116 24.1903C43.1081 25.0679 42.7585 25.9087 42.1388 26.5302L36.0013 32.6677C35.3805 33.2872 34.5404 33.6369 33.6634 33.6412C32.7864 33.6454 31.943 33.3037 31.3163 32.6902C31.2325 32.6052 31.1532 32.5159 31.0788 32.4227C30.8011 32.2635 30.4787 32.2001 30.1614 32.2421C29.844 32.2841 29.5493 32.4293 29.3225 32.6552L27.655 34.3227C27.91 34.7102 28.2063 35.0777 28.5425 35.4189L28.5625 35.4389L28.5825 35.4589C29.9411 36.7938 31.7718 37.5385 33.6764 37.531C35.581 37.5235 37.4057 36.7645 38.7538 35.4189L44.8913 29.2814C46.2358 27.9329 46.9939 26.1084 47.001 24.2041C47.008 22.2999 46.2633 20.4698 44.9288 19.1114L44.91 19.0914L44.89 19.0714H44.8888Z" fill="white"></path>
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0">
                                                                    <rect width="30" height="30" fill="white" transform="translate(17 17)"></rect>
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="m-recipe-info__options not-desktop m-save-bookmark">
                                            <button className="a-button -withIcon" button-click="save-bookmark" bookmark-type="afn" bookmark-author="Asian Food Network" bookmark-category="recipe" bookmark-subcategory="default" bookmark-thumbnail="/content/dam/afn/global/en/recipes/snow-fungus/AFN_snow_fungus_main_image.jpg.transform/1280x853/img.png" bookmark-title="Snow Fungus Dessert" bookmark-url="/content/afn/global/en/recipes/cuisine/asian-desserts/snow-fungus-dessert.html" bookmark-categoryid="afn_ratings_reviews_default_configuration" bookmark-ratingconfigid="afn_ratings_reviews_default_configuration" bookmark-streamid="L2NvbnRlbnQvYWZuL2dsb2JhbC9lbi9yZWNpcGVzL2N1aXNpbmUvYXNpYW4tZGVzc2VydHMvc25vdy1mdW5ndXMtZGVzc2VydC5odG1s" data-endpoint="https://asianfoodnetwork.com/en/recipes/cuisine/asian-desserts/snow-fungus-dessert/_jcr_content/root/responsivegrid/container/recipeoverview.gigya.bookmark.exist.json?uid={USERID}&amp;streamid=L2NvbnRlbnQvYWZuL2dsb2JhbC9lbi9yZWNpcGVzL2N1aXNpbmUvYXNpYW4tZGVzc2VydHMvc25vdy1mdW5ndXMtZGVzc2VydC5odG1s">
                                                <span className="button__icon">
                                                    <svg className="a-afnIcon -bookmark -filled" role="img" viewBox="0 0 12 17">
                                                        <path d="M.5 0h11c.3 0 .5.2.5.5v15.4a.5.5 0 0 1-.8.4l-5-3.1a.5.5 0 0 0-.5 0l-5 3.1a.5.5 0 0 1-.7-.4V.5C0 .2.2 0 .5 0z" fill-rule="evenodd"></path>
                                                    </svg>
                                                </span>
                                                <span className="button__copy">Save Recipe</span>
                                            </button>
                                            <button className="a-button -withIcon -disabled" disabled="disabled" button-disabled="saved">
                                            <span className="button__icon">
                                            <span className="icon-afn-check"></span>
                                            </span>
                                            <span className="button__copy">Saved!</span>
                                            </button>
                                        </div>
                                        <div className="not-desktop">
                                            <div className="m-social-sharing-bar ">
                                                <div className="m-social-sharing__label">
                                                    <span>Share This Recipe:</span>
                                                </div>
                                                <div className="m-social-sharing__list" id="not-desktop1578471783767_gig_containerParent">
                                                    <div className="m-social-sharing__icons" id="not-desktop1578471783767" gigid="showShareBarUI">
                                                        <div className="gig-bar-container gig-share-bar-container">
                                                            <table cellspacing="0" cellpadding="0" role="presentation">
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="gig-button-container gig-button-container-count-none gig-button-container-facebook gig-button-container-facebook-count-none gig-share-button-container gig-button-container-horizontal">
                                                                                <div className="gig-button gig-share-button gig-button-up gig-button-count-none" id="not-desktop1578471783767-reaction0" title="" alt="" onclick="gigya.services.socialize.plugins.reactions.instances['not-desktop1578471783767'].buttonInstances['not-desktop1578471783767-reaction0'].onClick()" onmouseover="gigya.services.socialize.plugins.reactions.instances['not-desktop1578471783767'].buttonInstances['not-desktop1578471783767-reaction0'].changeState('over')" onmouseout="gigya.services.socialize.plugins.reactions.instances['not-desktop1578471783767'].buttonInstances['not-desktop1578471783767-reaction0'].changeState('up')" tabindex="0" role="button">
                                                                                    <table cellpadding="0" cellspacing="0" role="presentation">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td id="not-desktop1578471783767-reaction0-left" aria-hidden="true"></td>
                                                                                                <td id="not-desktop1578471783767-reaction0-icon" >
                                                                                                    <img id="not-desktop1578471783767-reaction0-icon_img" src="/etc.clientlibs/afn/clientlibs/clientlib-site/resources/images/social-media/facebook-default.svg" alt="" focusable="false"/>
                                                                                                </td>
                                                                                                <td id="not-desktop1578471783767-reaction0-right" aria-hidden="true"></td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="gig-button-container gig-button-container-count-none gig-button-container-twitter gig-button-container-twitter-count-none gig-share-button-container gig-button-container-horizontal">
                                                                                <div className="gig-button gig-share-button gig-button-up gig-button-count-none" id="not-desktop1578471783767-reaction1" title="" alt="" onclick="gigya.services.socialize.plugins.reactions.instances['not-desktop1578471783767'].buttonInstances['not-desktop1578471783767-reaction1'].onClick()" onmouseover="gigya.services.socialize.plugins.reactions.instances['not-desktop1578471783767'].buttonInstances['not-desktop1578471783767-reaction1'].changeState('over')" onmouseout="gigya.services.socialize.plugins.reactions.instances['not-desktop1578471783767'].buttonInstances['not-desktop1578471783767-reaction1'].changeState('up')" tabindex="0" role="button">
                                                                                    <table cellpadding="0" cellspacing="0" role="presentation">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td id="not-desktop1578471783767-reaction1-left" aria-hidden="true"></td>
                                                                                                <td id="not-desktop1578471783767-reaction1-icon" ><img id="not-desktop1578471783767-reaction1-icon_img" src="/etc.clientlibs/afn/clientlibs/clientlib-site/resources/images/social-media/twitter-default.svg" alt="" focusable="false"/></td>
                                                                                                <td id="not-desktop1578471783767-reaction1-right" aria-hidden="true"></td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="gig-button-container gig-button-container-count-none gig-button-container-pinterest gig-button-container-pinterest-count-none gig-share-button-container gig-button-container-horizontal">
                                                                                <div className="gig-button gig-share-button gig-button-up gig-button-count-none" id="not-desktop1578471783767-reaction2" title="" alt="" onclick="gigya.services.socialize.plugins.reactions.instances['not-desktop1578471783767'].buttonInstances['not-desktop1578471783767-reaction2'].onClick()" onmouseover="gigya.services.socialize.plugins.reactions.instances['not-desktop1578471783767'].buttonInstances['not-desktop1578471783767-reaction2'].changeState('over')" onmouseout="gigya.services.socialize.plugins.reactions.instances['not-desktop1578471783767'].buttonInstances['not-desktop1578471783767-reaction2'].changeState('up')" tabindex="0" role="button">
                                                                                    <table cellpadding="0" cellspacing="0" role="presentation">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td id="not-desktop1578471783767-reaction2-left" aria-hidden="true"></td>
                                                                                                <td id="not-desktop1578471783767-reaction2-icon" ><img id="not-desktop1578471783767-reaction2-icon_img" src="/etc.clientlibs/afn/clientlibs/clientlib-site/resources/images/social-media/pinterest-default.svg" alt="" focusable="false"/></td>
                                                                                                <td id="not-desktop1578471783767-reaction2-right" aria-hidden="true"></td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="gig-button-container gig-button-container-count-none gig-button-container-whatsapp gig-button-container-whatsapp-count-none gig-share-button-container gig-button-container-horizontal">
                                                                                <div className="gig-button gig-share-button gig-button-up gig-button-count-none" id="not-desktop1578471783767-reaction3" title="" alt="" onclick="gigya.services.socialize.plugins.reactions.instances['not-desktop1578471783767'].buttonInstances['not-desktop1578471783767-reaction3'].onClick()" onmouseover="gigya.services.socialize.plugins.reactions.instances['not-desktop1578471783767'].buttonInstances['not-desktop1578471783767-reaction3'].changeState('over')" onmouseout="gigya.services.socialize.plugins.reactions.instances['not-desktop1578471783767'].buttonInstances['not-desktop1578471783767-reaction3'].changeState('up')" tabindex="0" role="button">
                                                                                    <table cellpadding="0" cellspacing="0" role="presentation">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td id="not-desktop1578471783767-reaction3-left" aria-hidden="true"></td>
                                                                                                <td id="not-desktop1578471783767-reaction3-icon"><img id="not-desktop1578471783767-reaction3-icon_img" src="/etc.clientlibs/afn/clientlibs/clientlib-site/resources/images/social-media/whatsapp-default.svg" alt="" focusable="false"/></td>
                                                                                                <td id="not-desktop1578471783767-reaction3-right" aria-hidden="true"></td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <button className="m-email-sharing">
                                                        <a href="mailto:?subject=Snow%20Fungus%20Dessert&amp;body=Snow fungus contains dietary fibers that helps to lower cholesterol in the foods that we eat but also control the sugar absorption. It basically acts like a filter for your body. It also makes you even more beautiful by replenishing the collagen that we need to make our skin nice and bouncy. - https://asianfoodnetwork.com/en/recipes/cuisine/asian-desserts/snow-fungus-dessert.html">
                                                            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx="32" cy="32" r="32" fill="#C84152"></circle>
                                                                <path d="M20.125 21C19.1821 21 18.3171 21.3186 17.6264 21.8404L31.8306 35.0187C32.1488 35.3142 32.8512 35.3142 33.1694 35.0187L47.3759 21.8404C46.6603 21.2968 45.7806 21.0012 44.875 21H20.125ZM16.5421 23.0617C16.2027 23.6551 16 24.3431 16 25.0749V38.9274C16 39.7585 16.2546 40.525 16.6836 41.1669L16.7213 41.1438L27.1021 32.8669L16.5398 23.0617H16.5421ZM48.4579 23.0617L37.9002 32.8669L48.2787 41.1415L48.3164 41.1669C48.762 40.5015 48.9996 39.7231 49 38.9274V25.0749C49 24.3407 48.7973 23.6551 48.4579 23.0617V23.0617ZM28.3114 33.9867L17.8551 42.3258C18.5056 42.7483 19.2859 43 20.125 43H44.875C45.7141 43 46.4944 42.7483 47.1426 42.3258L36.6886 33.9867L34.3056 36.2031C33.8173 36.6544 33.1714 36.9058 32.5 36.9058C31.8286 36.9058 31.1827 36.6544 30.6944 36.2031L28.3114 33.9867V33.9867Z" fill="white"></path>
                                                            </svg>
                                                        </a>
                                                    </button>
                                                    <button className="m-copy-to-clipboard" data-copy="link" data-clipboard-text="https://asianfoodnetwork.com/en/recipes/cuisine/asian-desserts/snow-fungus-dessert.html">
                                                        <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="32" cy="32" r="32" fill="#C84152"></circle>
                                                            <g clip-path="url(#clip0)">
                                                                <path d="M34.85 39.3202L29.2825 44.8889C27.9343 46.2342 26.1097 46.993 24.2051 47.0005C22.3006 47.0079 20.4701 46.2635 19.1113 44.9289C19.1045 44.9224 19.0979 44.9157 19.0913 44.9089L19.0713 44.8889C17.7368 43.5304 16.9924 41.7 16.9999 39.7957C17.0074 37.8914 17.7661 36.0669 19.1113 34.7189L25.2488 28.5814C26.5971 27.2367 28.4216 26.4784 30.3258 26.4711C32.2301 26.4639 34.0603 27.2083 35.4188 28.5427L35.4388 28.5614L35.4588 28.5814C35.7963 28.9239 36.0913 29.2914 36.3463 29.6777L34.6788 31.3452C34.2038 31.8202 33.4788 31.8977 32.9225 31.5789C32.8482 31.4856 32.769 31.3963 32.685 31.3114C32.0584 30.6974 31.2149 30.3552 30.3376 30.3592C29.4602 30.3632 28.6198 30.713 27.9988 31.3327L21.8613 37.4702C21.2416 38.0916 20.892 38.9324 20.8885 39.8101C20.8849 40.6877 21.2278 41.5313 21.8425 42.1577C22.4691 42.7723 23.3128 43.1149 24.1904 43.1111C25.068 43.1074 25.9088 42.7576 26.53 42.1377L30.0188 38.6502C31.5391 39.3074 33.2095 39.5389 34.8513 39.3202H34.85ZM44.8888 19.0714C43.5302 17.7365 41.6996 16.9919 39.7949 16.9994C37.8903 17.0069 36.0656 17.7659 34.7175 19.1114L29.15 24.6802C30.7919 24.4619 32.4623 24.6939 33.9825 25.3514L37.47 21.8627C38.0913 21.2428 38.932 20.893 39.8097 20.8892C40.6873 20.8855 41.531 21.2281 42.1575 21.8427C42.7723 22.469 43.1151 23.3126 43.1116 24.1903C43.1081 25.0679 42.7585 25.9087 42.1388 26.5302L36.0013 32.6677C35.3805 33.2872 34.5404 33.6369 33.6634 33.6412C32.7864 33.6454 31.943 33.3037 31.3163 32.6902C31.2325 32.6052 31.1532 32.5159 31.0788 32.4227C30.8011 32.2635 30.4787 32.2001 30.1614 32.2421C29.844 32.2841 29.5493 32.4293 29.3225 32.6552L27.655 34.3227C27.91 34.7102 28.2063 35.0777 28.5425 35.4189L28.5625 35.4389L28.5825 35.4589C29.9411 36.7938 31.7718 37.5385 33.6764 37.531C35.581 37.5235 37.4057 36.7645 38.7538 35.4189L44.8913 29.2814C46.2358 27.9329 46.9939 26.1084 47.001 24.2041C47.008 22.2999 46.2633 20.4698 44.9288 19.1114L44.91 19.0914L44.89 19.0714H44.8888Z" fill="white"></path>
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0">
                                                                    <rect width="30" height="30" fill="white" transform="translate(17 17)"></rect>
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <br/>
                        </div>



                        <div className="recipesteps aem-GridColumn--offset--medium--0 aem-GridColumn--small--none aem-GridColumn--medium--none aem-GridColumn--default--none    aem-GridColumn--medium--12 aem-GridColumn aem-GridColumn--small--12 aem-GridColumn--offset--small--0 aem-GridColumn--default--7 aem-GridColumn--offset--default--0">
                            <section className="o-recipe-steps">
                                <div className="o-ordered-listing">
                                    <div className="cmp-title">
                                        <h3 className="cmp-title__text">Instructions</h3>
                                    </div>
                                    <div className="cmp-text">
                                        <ol className="o-numbered-listing">
                                            {recipe.instructions && recipe.instructions.map((instruction, index) => {
                                                return <>
                                                    <li>
                                                        <div className="m-ordered-listing__item">
                                                            <div className="m-ordered-listing__title">
                                                                <div className="cmp-title">
                                                                    <h3 className="cmp-title__text">{instruction.name}</h3>
                                                                </div>
                                                            </div>
                                                            <div className="m-ordered-listing__copy">
                                                                <div className="cmp-text">
                                                                    <ul>
                                                                        {instruction.steps && instruction.steps.map(step => {
                                                                            return <li>{step}</li>
                                                                        })}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="cmp-image" data-cmp-src="/content/dam/afn/global/en/recipes/snow-fungus/AFN_snow_fungus_step2.jpg" data-title="Rinse dry ingredients" itemscope="" itemtype="http://schema.org/ImageObject">
                                                                <img data-src="/content/dam/afn/global/en/recipes/snow-fungus/AFN_snow_fungus_step2.jpg" className="cmp-image__image ls-is-cached lazyloaded" itemprop="contentUrl" data-cmp-hook-image="image" alt="Rinse dry ingredients" title="Rinse dry ingredients" src={recipe.images[index + 1]}/>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <hr/>
                                                </>
                                            })}
                                        </ol>
                                    </div>
                                </div>
                            </section>
                            <div className="m-recipe-arrange">
                                <div className="m-recipe-arrange__item">
                                    <div className="m-recipe-arrange__withIcon">
                                        <div className="m-recipe-arrange__icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                                <path d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"></path>
                                            </svg>
                                        </div>
                                        <div className="m-recipe-arrange__title">
                                            <div className="cmp-title">
                                                <h3 className="cmp-title__text">Plate and Serve!</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-recipe-arrange__copy">
                                        <div className="cmp-text">
                                            <p>{recipe.plateAndServeDescription}</p>
                                        </div>
                                    </div>
                                    <div className="cmp-image" data-cmp-src="/content/dam/afn/global/en/recipes/snow-fungus/AFN_snow_fungus_main_image1.jpg" data-title="Plate and Serve!" itemscope="" itemtype="http://schema.org/ImageObject">
                                        <img src={recipe.plateAndServeImage} className="lazyload cmp-image__image" itemprop="contentUrl" data-cmp-hook-image="image" alt="Plate and Serve!" title="Plate and Serve!"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="siblingpagination aem-GridColumn--offset--medium--0 aem-GridColumn--small--none aem-GridColumn--medium--none aem-GridColumn--default--none aem-GridColumn--medium--12 aem-GridColumn aem-GridColumn--small--12 aem-GridColumn--offset--small--0 aem-GridColumn--default--7 aem-GridColumn--offset--default--0">
                            <div className="m-default-pagination">
                                <div className="m-default-pagination__prev ">
                                    <a href="/content/afn/global/en/recipes/cuisine/asian-desserts/tangerine-cake-with-vegan-chocolate-ganache.html" className="a-button-link">
                                    <button className="m-default-pagination__button">
                                    <span className="icon-afn-navigate-left"></span>
                                    <span>Prev Recipe</span>
                                    </button>
                                    </a>
                                </div>
                                <div className="m-default-pagination__next ">
                                    <a href="/content/afn/global/en/recipes/cuisine/asian-desserts/one-pot-apple-osmanthus-cranberry-dessert-soup.html" className="a-button-link">
                                    <button className="m-default-pagination__button">
                                    <span>Next Recipe</span>
                                    <span className="icon-afn-navigate-right"></span>
                                    </button>
                                    </a>
                                </div>
                            </div>
                        </div>



                        <div className="categorytag aem-GridColumn--offset--medium--0 aem-GridColumn--small--none aem-GridColumn--medium--none aem-GridColumn--default--none aem-GridColumn--medium--12 aem-GridColumn aem-GridColumn--small--12 aem-GridColumn--offset--small--0 aem-GridColumn--default--7 aem-GridColumn--offset--default--0">
                            <div className="category-tags-round">
                                <div className="m-category-tags">
                                    <ul className="m-category-tags__list">
                                        <li><span className="m-category-tags__label">Categories:</span></li>
                                        <li>
                                            <div className="a-category-tag">
                                                <a href="https://asianfoodnetwork.com/en/search.html?search=Recipe"><span className="a-category-tag__title">Recipe</span></a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="a-category-tag">
                                                <a href="https://asianfoodnetwork.com/en/search.html?search=Under%2030%20mins"><span className="a-category-tag__title">Under 30 mins</span></a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="a-category-tag">
                                                <a href="https://asianfoodnetwork.com/en/search.html?search=Easy"><span className="a-category-tag__title">Easy</span></a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="a-category-tag">
                                                <a href="https://asianfoodnetwork.com/en/search.html?search=Dessert"><span className="a-category-tag__title">Dessert</span></a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="a-category-tag">
                                                <a href="https://asianfoodnetwork.com/en/search.html?search=Chinese%20New%20Year"><span className="a-category-tag__title">Chinese New Year</span></a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        
                        

                        
                    </div>
                </div>
            </div>
        )
    }
}
