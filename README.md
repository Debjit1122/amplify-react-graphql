# Uniteopia Event Management Web App

![Uniteopia Logo](https://www.uniteopia.com/static/media/logo.3979654da57205936267.png)

The Uniteopia Event Management Web App is a full-stack application built on AWS using Amplify Studio, React, and GraphQL. It provides a user-friendly platform for organizing, ticketing, and managing events. This README provides an overview of the project, its features, and the steps taken to build it.

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
- [Future Enhancements](#future-enhancements)
- [Contact](#contact)

## Features

The Uniteopia Event Management Web App includes the following key features:

- **User Authentication:** Secure user registration and login using Amazon Cognito.
- **Event Listings:** A user-friendly dashboard displaying and managing upcoming events.
- **Secure File Storage:** Efficient storage and retrieval of event-related files using Amazon S3.

## Architecture

The Uniteopia Event Management Web App is powered by various AWS services, including:

- **Amplify Studio:** A visual development environment that seamlessly integrates with React.
- **Amazon Cognito:** Provides secure user authentication and identity management.
- **Amplify DataStore:** Stores event information and enables efficient data querying with GraphQL.
- **Amazon S3:** Secure and scalable file storage for event logos, images, and PDFs.

**Amplify Datastore Diagram**

![Amplify Datastore Diagram](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*PFYe_s4i3j6ze7NvwHMagA.png)

## Getting Started

To run the Uniteopia Event Management Web App locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/uniteopia.git`
2. Install dependencies: `npm install`
3. Configure AWS Amplify: Run `amplify configure` and follow the prompts to set up your AWS credentials.
4. Start the development server: `npm start`
5. Access the app in your browser at [http://localhost:3000](http://localhost:3000)

## Technologies Used

The Uniteopia Event Management Web App is built using the following technologies:

- **React:** JavaScript library for building user interfaces.
- **Amplify Studio:** Visual development environment for AWS applications.
- **GraphQL:** Query language for APIs.
- **Amazon Cognito:** User authentication and identity management service.
- **Amazon S3:** Object storage service for file storage.

## Future Enhancements

The Uniteopia Event Management Web App is an ongoing project with plans for future enhancements, including:

- **Real-Time Updates:** Implementing real-time updates to keep event managers and attendees informed about changes and registrations.
- **Enhanced Dashboard:** Expanding the dashboard's capabilities with advanced event management tools, analytics, and reporting.
- **Mobile Accessibility:** Ensuring a seamless experience for event managers and attendees on all devices.
- **Attendee Management:** Adding features to manage event attendees, track registrations, and improve the event experience.

## Contact

For any inquiries or feedback, please reach out to the project creator:

- **Email 📧:** [Debjit Dey](mailto:d.dey2002@yahoo.com)
- **LinkedIn:** [Debjit Dey](https://www.linkedin.com/in/debjitdey/)

This README provides a brief overview of the platform and serves as a starting point for developers interested in exploring and contributing to the project. For more detailed information, refer to the [blog post](https://dev.to/debjit1122/building-uniteopia-an-event-management-web-app-with-amplify-studio-react-and-graphql-5659).

Happy coding! 🚀
