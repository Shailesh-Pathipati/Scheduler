# SedCal - Seamless Calendar Coordination

## Overview

In today's fast-paced work environment, scheduling meetings among team members can be a daunting task due to conflicting schedules. To streamline this process, we present SedCal, a web portal designed to aggregate individual calendars within a common company or domain. SedCal simplifies the coordination of informal meetings by identifying common available times and preventing conflicts when scheduling events.

## Features

- **Calendar Aggregation:** SedCal allows users within a common company or domain to aggregate their individual calendars on the platform.

- **Conflict-Free Scheduling:** When creating meetings or events, SedCal ensures that there are no conflicts with existing scheduled meetings, avoiding overlapping commitments.

- **Intuitive Interface:** The user-friendly interface makes it easy for team members to view, create, and manage meetings effortlessly.

## Getting Started

Follow these steps to set up and run SedCal on your local machine:

### Prerequisites

- Node.js installed
- npm (Node Package Manager) installed
- MongoDB installed and running

### Installation

1. Clone the SedCal repository to your local machine:

   ```bash
   git clone https://github.com/your-username/SedCal.git
   ```

2. Navigate to the project directory:

   ```bash
   cd SedCal
   ```

3. Install backend dependencies:

   ```bash
   npm install
   ```

4. Navigate to the `client` directory:

   ```bash
   cd client
   ```

5. Install frontend dependencies:

   ```bash
   npm install
   ```

### Configuration

1. Create a `.env` file in the root directory of the backend (`SedCal`) and add the following:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```

2. Replace `your_mongodb_connection_string` with the connection string for your MongoDB database.

### Running the Application

1. Start the backend server:

   ```bash
   npm start
   ```

   The backend will run on `http://localhost:3001`.

2. In a new terminal, navigate to the `client` directory:

   ```bash
   cd client
   ```

3. Start the frontend:

   ```bash
   npm i http-server
   npx http server  -p 3000
   ```

   The frontend will run on `http://localhost:3000`.

4. Open your browser and visit `http://localhost:3000` to access SedCal.

## Usage

1. Register or log in to your SedCal account.

2. Connect your calendar to SedCal to enable calendar aggregation.

3. Create meetings or events, and SedCal will identify common available times among team members.

4. Ensure smooth scheduling without conflicts, thanks to SedCal's intelligent conflict resolution.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.
