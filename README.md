# Ask This Website

Ask This Website is an innovative web application that allows users to engage in intelligent conversations about any website. Simply enter a URL, and start chatting with an AI-powered bot that has analyzed the website's content.

## Features

- Dynamic chat interface for querying website content
- Real-time responses using AI and Retrieval-Augmented Generation (RAG)
- Seamless indexing of new websites
- Session management for persistent conversations
- Responsive design for optimal use on various devices

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- NextUI components
- Upstash RAG Chat
- Upstash Redis
- AI library for chat functionality

## Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/ask-this-website.git
   cd ask-this-website
2. Install dependencies
   ```bash
   npm install
3. Set up environment variables (refer to the Environment Variables section below)
4. Run the development server
   ```bash
   npm run dev
5. Open http://localhost:3000 in your browser
Environment Variables
This project requires several environment variables to be set. Create a .env.local file in the root directory of the project and add the following variables:
```bash
UPSTASH_VECTOR_REST_URL=your_upstash_vector_rest_url
UPSTASH_VECTOR_REST_TOKEN=your_upstash_vector_rest_token
QSTASH_TOKEN=your_qstash_token
UPSTASH_REDIS_REST_URL=your_upstash_redis_rest_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_rest_token
```

Replace your_* with your actual values. These credentials can be obtained from your Upstash dashboard.

## Usage

1. Enter the URL of the website you want to chat about on the landing page
2. Wait for the AI to analyze the content
3. Start asking questions or discussing topics related to the website
4. Receive intelligent, context-aware responses from the chatbot
   
