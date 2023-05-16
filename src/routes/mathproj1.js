import React from "react";
import '../Styling/ProjS.css';

function openPDF(){
    window.open('https://drive.google.com/file/d/1-8R7CsIoWxgT1UpILg4Rxo66soMyh131/view?usp=sharing', '_blank');
}

function MathPaper1() {
    return (
        <div className="container-Paper">
            <div className="start-container-Paper">
                <h1 className="title-Paper">The Vehicle Routing Problem for Save-On-Foods E-Commerce Grocery Delivery</h1>
                
                <p style={{ fontSize: '15px', marginBottom: '5px' }}>Ashutosh Dubal, Kevin He, Lacey Liang, Sherlyn Ng, and Tu Trinh</p>
                <p style={{ fontSize: '15px' }}>Department of Mathematics, Simon Fraser University, Burnaby, BC, V5A 1S6</p>

                <h2>Abstract</h2>

                <p>E-commerce is an increasingly popular form of commerce for groceries chains, allowing customers to place grocery 
                    orders online for delivery within a specific time window. The success of an e-commerce platform depends on the 
                    reliability of deliveries over the specified time window, ensuring all orders are delivered on time. However, 
                    creating the vehicle routes becomes a challenge as the number of constraints scales exponentially with the number 
                    of orders placed, making it difficult to solve the vehicle routing problem (VRP). Moreover, feasibility issues 
                    arise as business considerations, including delivery drop-off time and driver labour constraints need to be 
                    included. To overcome these routing challenges, we create an integer programming model that employs aspects of 
                    the VRP with time windows and the capacitated VRP and use local search algorithms to find a feasible local 
                    optimal solution. We also employ a penalty system to drop infeasible locations. These locations are then 
                    re-introduced to the solution. The performance is compared to the current delivery routing system. The 
                    findings of this work can be applied to other delivery services for analysts to evaluate their current delivery 
                    fleet size and improve their service area design.</p>

                <h5 className="keywords-Paper">Keywords: Vehicle Routing Problem with Time Windows; Capacitated Vehicle Routing 
                Problem; Delivery Routing; Grocery E-commerce</h5>

                <div className="intro-Paper">
                    <h2 className="title-intro-Paper">Introduction</h2>
                    <div className="body-intro-Paper">
                        <p>We collaborated with Save-On-Foods, a Canadian supermarket chain that offers e-commerce services for customers 
                            to shop online for their grocery order, select a delivery slot in which the order will arrive, and they will 
                            be handpicked and delivered to their doorstep within the selected delivery time slot. The delivery areas that 
                            Save-On-Foods offers are divided into catchments based on the area’s postal code, and each store is responsible 
                            for managing the e-commerce orders and deliveries for the orders placed within their assigned catchment.</p>
                        
                        <p>The delivery routing software currently in place uses methods to cluster its customers then applies a routing 
                            algorithm within each cluster. Delivery routes are evaluated at a centralized location, taking approximately 
                            5 minutes for the algorithm to generate a delivery route for a single driver. Employees have noted that half 
                            of the computed delivery routes require manual adjustments, with it taking 3 minutes per store.</p>

                        <p>This paper aims to propose a robust delivery routing model that accounts for the unique constraints at each 
                            location while reducing the total amount of adjustments needed, the total travel time of each vehicle, and 
                            the total number of drivers required to fulfill all deliveries. The performance of the proposed model is compared 
                            to the existing delivery routing software used by Save-On-Foods.</p>

                        <h3>1.1 Background and Significance</h3>

                        <p>Save-On-Foods’s e-commerce platform has recently been one of the fastest- growing areas in terms of sales in 
                            the organization. With its significant growth, issues arise with the scalability of the e-commerce delivery 
                            system as additional resources are required to manage the increased e-commerce demand at each store. With 
                            limited resources, drivers have reported an increase in deliveries per shift, with some drivers taking a 
                            shortened lunch break to complete all deliveries within their respective time windows. The reliability of 
                            delivery drop-off times is im- pacted by an increased number of deliveries, as outside factors including 
                            traffic and time spent fulfilling the order at each location are difficult to estimate. This leads to an 
                            increased number of deliveries arriving outside the chosen time window. Maintaining accurate delivery times 
                            is key to customer satisfaction and affects repeated usage of the Save-On-Foods’s e-commerce platform.</p>
                        
                        <p>The delivery routing software used by Save-On-Foods is a black box and does not contain features related to 
                            delivery driver workload. For store locations with more than one vehicle, the delivery load in each vehicle 
                            may vary significantly with delivery drivers reporting a maximum vehicle load difference of 11 units within 
                            the same shift. The large load difference provides drivers with an imbal- anced workload where some drivers 
                            complete their deliveries within a significantly shorter time frame than other drivers. Incorporating 
                            delivery load balancing be- tween the vehicles will create a more uniform workload for the delivery drivers, which 
                            will reduce the variance in labour between shifts and promotes fairness between delivery drivers.</p>

                        <p>The current delivery routing software also does not consider minimizing the number of drivers required for a given 
                            shift. Routes are generated with all of the available delivery drivers at the store location, despite the workload 
                            being able to be completed by fewer drivers. By minimizing the total number of drivers required for each shift, 
                            Save-On-Foods can reduce employment costs related to having more delivery drivers than required and reduce costs 
                            related to vehicle maintenance and gas usage.</p>

                        <p>A more robust and optimized delivery routing model would allow for reduced labor costs associated with adjusting 
                            the outputted routes and would improve the individual vehicle routes, allowing for additional buffer times between 
                            deliveries. The proposed model aims to ensure a full break duration for the driver and for deliveries to be made 
                            within their respective time window to maintain customer satisfaction.</p>

                        <h3>1.2 Scope of Study</h3>

                        <p>Save-On-Foods operates over 170 stores across Canada. However, we focus on a subset of 4 stores spanning 2 
                            Provinces covering high-demand high-density areas, high-demand medium-density areas, medium-demand medium-density 
                            areas, and low-demand low-density areas.</p>

                        <p>The model is evaluated based on synthetic e-commerce order data. The order data includes the delivery time 
                            slot for each customer location and a time matrix with the driving travel time between each pair of 
                            locations as its entries. The time matrix is calculated using the Google Distance Matrix API on the Google 
                            Maps Platform which factors in the maximum and average driving speeds on each street. Traffic conditions were 
                            estimated using the traffic data from the middle of the delivery shift and are assumed to be consistent 
                            throughout the entire shift5. Distance data is not considered in this study as the focus is to ensure that 
                            deliveries are completed within their respective time window.</p>

                        <p>A more accurate time matrix would allow better estimates of travel times and would provide a more accurate 
                            delivery routing schedule for the drivers to use. However, constructing a precise time matrix is difficult 
                            as traffic conditions change hourly, and delays from road closures and traffic accidents would require 
                            real-time adjustments to the delivery route. We assume that the time matrix is an accurate reflection of 
                            traffic patterns and road conditions in the entire delivery shift and that the time matrix is updated with 
                            forecasted road conditions prior to computing the driver delivery routes.</p>

                        <p>This study focuses on the delivery routing operation within a well-defined area for a single store. 
                            Each store is responsible for e-commerce delivery orders placed within their assigned catchment and 
                            the catchment areas are predefined by Save-On-Foods. The customer only has access to the store inventory 
                            within their catchment when placing their order and cannot place orders for items available at another 
                            store location, but not available at their assigned store due to business logistic constraints.</p>

                        <p>The model also assumes that after arriving at a delivery location, the driver will complete the delivery 
                            drop-off within a 12-minute window. This time window is known as the service time. The service time 
                            fluctuates by store location and delivery areas, with most stores having a 12 minute service time. We 
                            assume zero variability of the service time for this study.</p>

                        <p><strong>If you wat to read more click below</strong></p>
                
                        <button className="btn-pdf" onClick={openPDF}>Open PDF</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MathPaper1;