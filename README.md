# Nested Buttons Event Propagation

This project demonstrates the use of event propagation handling in React. It includes a simple React component showcasing nested buttons with separate click event handlers. The inner button click is configured to stop propagation, ensuring that only its handler is triggered without affecting the outer button.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (https://nodejs.org/)
- npm (comes installed with Node.js)

### Installation

1. Clone the repository:

```bash
git clone https://your-repository-url.git


Navigate to the project directory:
cd event-propagation-assignment

Install the dependencies:
npm install

Start the development server:
npm start
This will run the app in the development mode. Open http://localhost:3000 to view it in your browser.



The application displays two buttons — an outer button and an inner button nested within the outer one. Clicking the inner button will trigger an alert specific to it, without triggering the outer button's click event due to the use of event.stopPropagation(). Clicking the outer button (outside the inner button) triggers its own alert.

This setup is useful for understanding how event propagation works in React and how to manage it for nested interactive elements