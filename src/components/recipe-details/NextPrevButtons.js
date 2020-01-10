import React from 'react'

export const NextPrevButtons = () => {
    return (
        <div>
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
        </div>
    )
}
export default NextPrevButtons
