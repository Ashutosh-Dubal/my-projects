import React from "react";
import "../Styling/ShowMorebttn.css";

const Data = ({ title, content, pdfLink }) => {
    const [expanded, setExpanded] = React.useState(false);
  
    return (
      <div>
        <li>
          <h3>{title}</h3>
        </li>
        <p>{expanded ? content : `${content.slice(0, 200)}...`}</p>
        {expanded && (
        <button
          className="google-drive-button"
          onClick={() => window.open(pdfLink, "_blank")}
        >
          GitHub
        </button>
      )}
        <button
          className="show-more-button"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show less ▲" : "Show more ▼"}
        </button>
      </div>
    );
  };
  
  const DataScience = () => {
    return (
      <div className="show-more">
        <ol>
          <Data
                title="IMDb Top TV Shows Scraper"
                content={'This Python project scrapes IMDb\'s Top Rated TV Shows, extracts key information like title, year, rating, and genres, and saves the data to a CSV file for further analysis or use in other projects.'}
                pdfLink='https://github.com/Ashutosh-Dubal/imdb-tv-show-scraper'
          />

          <Data
            title="Regression Analysis of CDC Guidelines on Muscle-Strengthening Activity"
            content={`Adult obesity has been a long and growing issue in the United States 
            (US) with some calling it an "obesity epidemic". The US Centers for Disease 
            Control and Prevention (CDC) publishes guidelines on both the amount of moderate 
            intensive activity and muscle-strengthening activity required for adults to 
            mitigate the risks associated with obesity. In this analysis, we investigate 
            the effects of year, state/district of residence, and age on the proportion of 
            adults that satisfy CDC guidelines on muscle-strengthening activity. We 
            performed an exploratory analysis to visualize the distribution of the data, 
            conducted modelling using ordinary least squares and stepwise regression with 
            10-fold cross-validation for model selection, and carried out residual analysis. 
            An ordinary least squares model was developed that explained 88% of the 
            variability, and all three factors of interest were shown to be statistically 
            significant.`}
            pdfLink='https://github.com/Ashutosh-Dubal/CDC-Nutrition-Analysis'
          />
  
        </ol>
      </div>
    );
  };

export default DataScience;