import React from 'react'

export const RecipeInstructions = ({recipe}) => {
    return (
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
    )
}
export default RecipeInstructions