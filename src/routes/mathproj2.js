import React from "react";
import '../Styling/ProjS.css';

function openPDF() {
    window.open('https://drive.google.com/file/d/1-D6FXB9EJ5_k_kTpb2ejcQGNnuHuizpq/view?usp=sharing', '_blank');
}

function MathPaper2() {
    return (
        <div className="container-Paper">
            <div className="start-container-mathPaper">
                <h1 className="title-mathPaper">A Model for Supply Allocation in the City of Vancouver to Prepare for a Natural Disaster</h1>

                <p style={{ fontSize: '15px', marginBottom: '5px' }}>Gareth Anonby, Ashutosh Dubal, Lacey Liang, Reece McGowan</p>
                <p style={{ fontSize: '15px' }}>Department of Mathematics, Simon Fraser University, Burnaby, BC, V5A 1S6</p>

                <h2>Abstract</h2>

                <p>This paper aims to outline a supply plan that outfits 25 support hubs in the City of Vancouver with essential 
                    food and water supplies in the event of a natural disas- ter. We propose a model that takes as input the population, 
                    population distribu- tion, percentage of population that requires assistance, number of days to supply, number of 
                    cans and bottles per day, Costco weekly capacity constraints, cost of gas per kilometre for the chosen vehicle, 
                    and carrying capacity of chosen vehicle. The model then proposes a supply plan that outfits the hubs with the 
                    necessary amount of supplies at the least cost in the least amount of time.</p>
                    
                    <div className="intro-mathPaper">
                        <h2 className="title-intro-mathPaper">Introduction</h2>
                        
                        <div className="body-intro-mathPaper">

                            <p>The City of Vancouver is currently faced with a daunting reality. According to some experts, there is 
                                a 12% probability that a magnitude-9.0 earthquake will strike near the West Coast in the next 50 years, 
                                causing massive damage and displacing thousands of people from their homes. The best way to ensure the 
                                smallest loss of life is to be prepared. This paper aims to outline a plan for 25 existing support 
                                hubs in the City of Vancouver to ensure each of them has an adequate amount of food and water to 
                                sustain those who might need assistance. The plan will consist of quantities of canned goods and water 
                                to buy from 3 Costcos in the City of Vancouver, as well as the best way to send these goods to 25 
                                support hubs. The goal is to ensure the city has fully stocked shelters in the event of a natural 
                                disaster, such as an earthquake. We also recommend a plan to account for food spoilage and water 
                                expiration.</p>

                            <p>There are many operations research papers related to disaster relief. For example, Gutierrez et al. 
                                created a model that chooses the best location of a temporary relief center “in order to optimize 
                                the delivery of relief goods to the randomly dispersed evacuation centers. As well, Hall et al. 
                                proposed a model for “scheduling costs and constraints within the manufacturer’s capacity allocation 
                                problem". Our hope is to propose a model for the purposes of disaster preparation, while allowing 
                                the City of Vancouver to account for growing population in the future for this supply allocation 
                                problem.</p>

                            <p><strong>If you want to read more click below</strong></p>
                            
                            <button className="btn-pdf" onClick={openPDF}>Open PDF</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}



export default MathPaper2;