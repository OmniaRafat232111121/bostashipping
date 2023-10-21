# ShippingBosta

This web application is designed for shipment tracking and management. It provides users with the ability to track shipments, view shipment details, and manage the shipment process. The application is built using React, Redux Toolkit, and Material-UI for the front end and includes several components for tracking shipments, searching for shipments, and managing user interactions.

![task](https://github.com/OmniaRafat232111121/bostashipping/assets/76200523/48cf0be3-496c-44b3-af6d-6a890df4683e)

## Technical
- ReactJS
- Redux-toolkit
- MATERI_UI
- REACT_ROUTER_DOM
  

## How it works

### Navigation
 The navigation bar at the top of the application provides quick links to essential sections, such as the main page, pricing, sales contacts, and user login. It also allows users to switch between English and Arabic languages.

 ### ShippingTrack

- Users can input a shipment tracking number into the search box. It validates the input and checks for errors.

- Search Icon: After entering the tracking number, clicking the search icon initiates the search process.

- Tracking Result: The application retrieves the shipment details associated with the provided tracking number and displays them to the user. Users can see the status and other information about the shipment.

###  Language Switching
- Change Language: Users can switch between English and Arabic languages by clicking on the language button in the navigation bar.

### StateMangement(Redux-Toolkit)
ShipmentSlice: The project utilizes the Redux Toolkit and the "ShipmentSlice" component to manage the state of shipment-related data. This includes shipment details, loading status, errors, and the tracking number. Actions and reducers are defined to handle this data effectively.

### Prerequisites

List any prerequisites that users need to have installed. For example:
- Node.js 
- npm 

### Installation
1. Clone the repository:

    ```shell
      https://github.com/OmniaRafat232111121/bostashipping.git
   

