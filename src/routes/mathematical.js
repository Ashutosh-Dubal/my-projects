import React from "react";
import "../Styling/ShowMorebttn.css";

const Math = ({ title, content, pdfLink }) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div>
      <li>
        <h3>{title}</h3>
      </li>
      <p>{expanded ? content : `${content.slice(0, 200)}...`}</p>
      <button
        className="show-more-button"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show less ▲" : "Show more ▼"}
      </button>
      {expanded && (
      <button
        className="google-drive-button"
        onClick={() => window.open(pdfLink, "_blank")}
      >
        PDF
      </button>
    )}
    </div>
  );
};

const Mathematical = () => {
  return (
    <div className="show-more">
      <ol>
        <Math
          title="The Vehicle Routing Problem for Save-On-Foods E-Commerce Grocery Delivery"
          content={`E-commerce is an increasingly popular form of commerce for groceries chains, allowing 
          customers to place grocery orders online for delivery within a specific time window. The success 
          of an e-commerce platform depends on the reliability of deliveries over the specified 
          time window, ensuring all orders are delivered on time. However, creating the vehicle routes 
          becomes a challenge as the number of constraints scales exponentially with the number of 
          orders placed, making it difficult to solve the vehicle routing problem (VRP). 
          Moreover, feasibility issues arise as business considerations, including delivery drop-off 
          time and driver labour constraints need to be included. To overcome these routing challenges, 
          we create an integer programming model that employs aspects of the VRP with time windows 
          and the capacitated VRP and use local search algorithms to find a feasible local optimal 
          solution. We also employ a penalty system to drop infeasible locations. These locations are 
          then re-introduced to the solution. The performance is compared to the current delivery 
          routing system. The findings of this work can be applied to other delivery services for 
          analysts to evaluate their current delivery fleet size and improve their service area design.`}
          pdfLink='https://drive.google.com/file/d/1-8R7CsIoWxgT1UpILg4Rxo66soMyh131/view?usp=sharing'
        />

        <Math
          title="A Model for Supply Allocation in the City of Vancouver to Prepare for a Natural Disaster"
          content={`This paper aims to outline a supply plan that outfits 25 support hubs in the City 
          of Vancouver with essential food and water supplies in the event of a natural disaster. We 
          propose a model that takes as input the population, population distribution, percentage of 
          population that requires assistance, number of days to supply, number of cans and bottles 
          per day, Costco weekly capacity constraints, cost of gas per kilometre for the chosen vehicle, 
          and carrying capacity of chosen vehicle. The model then proposes a supply plan that outfits 
          the hubs with the necessary amount of supplies at the least cost in the least amount of time.`}
          pdfLink='https://drive.google.com/file/d/1-D6FXB9EJ5_k_kTpb2ejcQGNnuHuizpq/view?usp=sharing'
        />
      </ol>
    </div>
  );
};

export default Mathematical;
