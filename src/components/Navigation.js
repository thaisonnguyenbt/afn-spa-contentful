import React from 'react'
import {Link} from 'react-router-dom'

export const Navigation = ({ recipe }) => {
  return (
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
  )
}
export default Navigation