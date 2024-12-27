
"use client";

import React, { useEffect, useState } from "react";
import CommentSection from "@/components/Comments";
import AuthorCard from "@/components/AuthorCard";

const posts = [
  {
    id: "1",
    title: "Meachine Learning ",
    description: "Definition: Machine learning (ML) is a subset of artificial intelligence (AI) focused on building systems that learn and improve from experience without explicit programming.Core Idea: ML enables computers to identify patterns and make decisions or predictions based on data.Key Techniques: Supervised learning, unsupervised learning, and reinforcement learning are the primary approaches in ML.Supervised Learning: The algorithm learns from labeled data to make predictions, e.g., spam detection in emails.Unsupervised Learning: The algorithm identifies hidden patterns or structures in unlabeled data, e.g., customer segmentation.Reinforcement Learning: Agents learn to make decisions by receiving rewards or penalties, commonly used in robotics and gaming.Popular Algorithms: Algorithms like decision trees, support vector machines, and neural networks form the backbone of ML models.Deep Learning: A subset of ML, deep learning uses neural networks with multiple layers to solve complex tasks like image and speech recognition.Applications: ML is used in fields like healthcare, finance, autonomous vehicles, natural language processing, and recommendation systems.Data Dependency: The quality and quantity of data directly impact the performance of ML models.Training and Testing: Models are trained on a dataset and then tested to evaluate their performance.Overfitting and Underfitting: Common issues in ML; overfitting happens when a model is too complex, and underfitting occurs when it's too simple.Ethical Concerns: ML raises concerns about bias in data, privacy, and explainability of models.Tools and Frameworks: Popular tools like TensorFlow, PyTorch, and Scikit-learn simplify the implementation of ML models.Future of ML: With advancements in computational power and data availability, ML continues to evolve, shaping technologies of the future.",
    image: "../M1.png",
  },
  {
    id: "2",
    title: "AWS Machine Learning blog",
    description: "Overview: AWS Machine Learning (ML) is a suite of services and tools provided by Amazon Web Services to develop, deploy, and scale ML models in the cloudAmazon SageMaker: A fully managed service that simplifies building, training, and deploying machine learning modelsPre-Trained Models: AWS offers pre-trained AI services for computer vision, speech recognition, translation, and natural language processingAutoML: SageMaker Autopilot automates the ML workflow, including data preprocessing, feature engineering, and model selectionData Integration: AWS integrates seamlessly with data services like Amazon S3, Redshift, and DynamoDB to handle large-scale datasetsElastic Infrastructure: AWS provides scalable compute resources like EC2 instances and GPU-based options for ML model trainingAWS AI Services: Services like Amazon Rekognition, Polly, and Comprehend offer out-of-the-box solutions for specific AI tasksCustom Models: SageMaker enables users to bring their own data and algorithms to create custom ML modelsEdge Deployment: Amazon SageMaker Edge Manager facilitates deploying models to edge devices for real-time predictionsCost-Effectiveness: Pay-as-you-go pricing allows flexibility and cost efficiency in ML experiments and deploymentsSecurity: AWS ML services include encryption, access control, and compliance certifications to ensure secure ML workflowsDeveloper Tools: SDKs and APIs make it easy for developers to integrate ML capabilities into applicationsExperiment Tracking: SageMaker Studio provides tools for tracking experiments and managing model versions.Real-Time Inference: AWS supports real-time and batch inference to suit various use cases, from live applications to bulk predictions.Use Cases: AWS ML powers diverse applications, including personalized recommendations, fraud detection, predictive analytics, and industrial automation",
    image: "../aws.png",
  },
  {
    "id": "3",
    "title": "Best AI Copywriting Tools",
    "description": "Overview: AI copywriting tools leverage machine learning and natural language processing to generate high-quality, engaging content in seconds. Popular Tools: Platforms like Jasper, Copy.ai, Writesonic, and Wordtune are leading in this space for creating copy effortlessly. Use Cases: These tools are used for blog writing, ad copy, email marketing, social media posts, and product descriptions. GPT-Based Technology: Many of these tools are powered by OpenAI's GPT models, enabling highly contextual and creative writing. Customization: Users can tailor tone, style, and output length to meet specific branding needs. Multilingual Support: AI copywriting tools often support multiple languages, making them suitable for global audiences. Time Efficiency: These tools significantly reduce the time needed to create compelling content. SEO Optimization: Many tools include features for keyword suggestions and SEO-friendly copy. Collaboration: Some platforms provide team collaboration features for content reviews and editing. Templates: Pre-built templates for various industries and formats make creating content more accessible. AI Feedback: Tools like Grammarly and ProWritingAid offer real-time grammar and style suggestions alongside content generation. Accessibility: Many platforms offer browser extensions or integrations with CMS systems like WordPress. Scalability: AI tools handle large-scale content creation needs for enterprises and startups alike. Cost-Effective: Subscription-based pricing makes professional-level copywriting accessible to businesses of all sizes. Future Trends: The evolution of AI copywriting tools points towards even greater personalization and creativity in automated content.",
    "image": "../copy.png"
  },
  {
    "id": "4",
    "title": "Blockchain Technology Overview",
    "description": "Overview: Blockchain is a decentralized, distributed ledger technology that records transactions across multiple nodes in a secure and tamper-proof manner. Core Features: It ensures transparency, immutability, and security in data handling and transaction processes. Popular Platforms: Ethereum, Bitcoin, Hyperledger, and Binance Smart Chain are prominent blockchain platforms. Smart Contracts: Blockchain supports self-executing contracts with predefined rules, enabling automation in transactions. Decentralization: Transactions are verified by a distributed network of nodes, eliminating the need for intermediaries. Use Cases: Applications include cryptocurrency, supply chain management, healthcare, real estate, and digital identity verification. Security: Cryptographic techniques ensure that blockchain data is secure and resistant to unauthorized alterations. Transparency: Blockchain allows all participants to access a shared and updated record of transactions. Scalability: Emerging technologies like Layer 2 solutions aim to improve transaction speeds and scalability. Consensus Mechanisms: Protocols like Proof of Work (PoW) and Proof of Stake (PoS) ensure agreement among network participants. NFTs: Non-fungible tokens enable unique digital asset ownership using blockchain technology. Interoperability: Cross-chain solutions enhance compatibility between different blockchain networks. Cost Efficiency: By eliminating intermediaries, blockchain reduces transaction costs in various industries. Regulatory Challenges: Despite its potential, blockchain faces hurdles in compliance and legal frameworks worldwide. Future Trends: The rise of Web3, decentralized finance (DeFi), and tokenization signal the growing adoption of blockchain technology.",
    "image": "../blockchain.png"
  },
  {
    "id": "5",
    "title": "ChatGPT Overview",
    "description": "Overview: ChatGPT is a conversational AI model developed by OpenAI that generates human-like text based on user input. Core Features: It provides natural language understanding and generation, enabling seamless interaction across various topics. Training: ChatGPT is trained on vast datasets of text to learn grammar, facts, reasoning, and conversational patterns. Use Cases: Applications include customer support, content creation, coding assistance, education, and personal productivity. Customization: Organizations can fine-tune ChatGPT to meet specific needs or integrate it into their workflows. Accessibility: Available through OpenAI's API, web app, and integrations with tools like Microsoft Teams and Office. Real-Time Assistance: ChatGPT assists with answering questions, brainstorming ideas, and solving problems effectively. Multilingual Support: It supports multiple languages, making it a versatile tool for global users. Programming Help: Offers code generation, debugging, and explanations for developers. Content Generation: Helps create essays, articles, emails, and marketing content with customizable tone and style. Education: Aids students and professionals in learning new concepts and preparing for exams. Limitations: ChatGPT can sometimes produce incorrect or nonsensical responses and lacks real-time knowledge unless connected to external tools. Security: User interactions are designed to be secure, and privacy is a priority. Cost-Effective: Flexible pricing models make ChatGPT accessible for individual and business use. Future Trends: Continuous improvements in AI models are expanding ChatGPT's capabilities and applications in everyday tasks.",
    "image": "../chatgpt.png"
  },
  {
    "id": "6",
    "title": "Google AI Overview",
    "description": "Overview: Google AI is a division of Google focused on advancing artificial intelligence through research, development, and practical applications. Core Features: Google AI integrates machine learning and deep learning technologies into various tools and services. Popular Products: Includes Google Assistant, Google Translate, Google Lens, and TensorFlow, among others. Research Areas: Google AI focuses on natural language processing, computer vision, robotics, and responsible AI development. Use Cases: Powers applications like personalized recommendations, search engine optimization, automated translations, and healthcare solutions. TensorFlow: An open-source machine learning framework developed by Google for building and training AI models. BERT Model: A state-of-the-art natural language processing model created by Google for understanding human language. Responsible AI: Google AI emphasizes fairness, transparency, and accountability in developing and deploying AI solutions. Accessibility: AI tools and APIs like AutoML and Cloud AI are available for developers and businesses. Edge AI: Supports AI on devices with tools like Coral, enabling local inference without relying on the cloud. Collaboration: Google AI fosters collaboration with researchers and institutions to advance the field. Scalability: Offers enterprise-grade AI solutions through Google Cloud Platform for large-scale applications. Multilingual Support: Enables AI applications to cater to diverse languages and global users. Innovation: Google AI contributes to advancements like quantum computing and AI-powered drug discovery. Future Trends: Google AI continues to push boundaries in AI research, focusing on making AI more useful and accessible to everyone.",
    "image": "../google_ai.png"
  }
  
  
  
  
  // Add other posts...
];

export default function Post({ params }: { params: Promise<{ id: string }> }) {
  const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null);

  useEffect(() => {
    params.then((resolved) => setResolvedParams(resolved));
  }, [params]);

  if (!resolvedParams) {
    return <h2 className="text-2xl font-bold text-center mt-10 text-gray-500">Loading...</h2>;
  }

  const { id } = resolvedParams;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <h2 className="text-2xl font-bold text-center mt-10 text-gray-500">Post Not Found</h2>;
  }

  const renderParagraphs = (description: string) => {
    return description.split("\n").map((para, index) => (
      <p key={index} className="mt-4 text-justify text-gray-300">
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 bg-gray-900 text-gray-100 shadow-lg rounded-lg">
      <h1 className="text-4xl font-extrabold text-gray-100 text-center leading-tight">
        {post.title}
      </h1>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto rounded-lg shadow-md mt-6 object-cover"
        />
      )}
      <div className="mt-6 text-lg text-gray-300">
        {renderParagraphs(post.description)}
      </div>
      <CommentSection postId={post.id} />
      <AuthorCard />
    </div>
  );
}
