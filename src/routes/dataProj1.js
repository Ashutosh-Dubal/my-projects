import React from "react";
import '../Styling/ProjS.css';

function openPDF() {
    window.open('https://github.com/Ashutosh-Dubal/CDC-Nutrition-Analysis', '_blank');
}

function Dataproj1() {
    return (
        <div className="container-Paper">
            <div className="start-container-Paper">
                <h1 className="title-Paper">Regression Analysis of CDC Guidelines on Muscle-Strengthening Activity</h1>

                <p style={{ fontSize: '15px' }}>Ashutosh Dubal, Kevin He, and Jason Gill</p>

                <h2>Abstract</h2>

                <p>Adult obesity has been a long and growing issue in the United States (US) with some calling it an "obesity epidemic". 
                    The US Centers for Disease Control and Prevention (CDC) publishes guidelines on both the amount of moderate intensive 
                    activity and muscle-strengthening activity required for adults to mitigate the risks associated with obesity. 
                    In this analysis, we investigate the effects of year, state/district of residence, and age on the proportion of 
                    adults that satisfy CDC guidelines on muscle-strengthening activity. We performed an exploratory analysis to visualize 
                    the distribution of the data, conducted modelling using ordinary least squares and stepwise regression with 
                    10-fold cross-validation for model selection, and carried out residual analysis. An ordinary least squares model was 
                    developed that explained 88% of the variability, and all three factors of interest were shown to be statistically 
                    significant.
                </p>

                <div className="intro-Paper">
                    <h2 className="title-intro-Paper">Introduction</h2>
                    <div className="body-intro-Paper">
                        <p>The CDC in the US recommends that adults need at minimum 150 minutes of aerobic activity and at least two 
                            days of muscle-strengthening activity per week, but only 1 in 4 adults in the US and 1 in 5 high school 
                            students satisfy this recommendation. With obesity being a growing public health issue in the US, it is 
                            more than critical that Americans meet these recommendations by the CDC, as there are harmful effects 
                            associated with not getting enough physical activity. These effects include being at a higher likelihood 
                            of developing high blood pressure, high blood cholesterol, type 2 diabetes, heart disease, and cancer; 
                            while the benefits vastly improve quality of life with improved sleep, cognitive ability, musculoskeletal 
                            health, and a reduced risk of dementia.
                        </p>

                        <p>Using the nutrition data provided by the CDC, we investigate the proportion of adults that satisfy CDC 
                            guidelines on muscle-strengthening activity, and see if the year, age, and state/district of residence 
                            linearly affect the topic at hand. Since the data collected for this study only include the years 
                            2011, 2013, and 2015, we are also interested to see if there has been a change in proportions of adults 
                            engaging in muscle-strengthening activity over the years. In this study, we will investigate and 
                            determine what factors contribute to satisfying the muscle-strengthening guidelines by the CDC, and 
                            see how the different variables are related.</p>

                            <p><strong>If you wat to read more click below</strong></p>

                            <button className="btn-pdf" onClick={openPDF}>View paper on GitHub</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dataproj1;