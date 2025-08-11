// src/data/mockData.js

export const mockData = {
  blog: [
    {
      id: 1,
      slug: 'understanding-large-language-models',
      title: 'Understanding Large Language Models (LLMs)',
      description: 'A deep dive into the architecture and capabilities of modern LLMs like GPT-4.',
      author: 'Dr. Aisha Al-Farsi',
      date: 'August 10, 2025',
      tags: ['AI', 'NLP', 'Deep Learning'],
      image: 'https://placehold.co/600x400/D97706/FFFFFF?text=LLMs',
      content: `
        <h2>The Rise of Transformers</h2>
        <p>The transformer architecture, introduced in the paper "Attention Is All You Need," is the foundation of most modern LLMs. Unlike previous models like RNNs, transformers can process entire sequences of text at once, enabling them to capture long-range dependencies and context far more effectively.</p>
        <p>The key innovation is the self-attention mechanism, which allows the model to weigh the importance of different words in the input when processing a particular word.</p>
        <pre><code class="language-js">// Simplified attention mechanism
function attention(query, key, value) {
  const scores = dotProduct(query, key);
  const weights = softmax(scores);
  return multiply(weights, value);
}</code></pre>
        <h2>Scaling Laws and Emergent Abilities</h2>
        <p>Research has shown that as you increase the size of the model (more parameters) and the amount of training data, LLMs exhibit "emergent abilities"—capabilities that are not present in smaller models but appear at larger scales. These include few-shot learning, complex reasoning, and even rudimentary code generation.</p>
      `
    },
    {
      id: 2,
      slug: 'ethical-ai-development',
      title: 'The Importance of Ethical AI Development',
      description: 'Navigating the challenges of bias, fairness, and transparency in artificial intelligence.',
      author: 'Yusuf Ahmed',
      date: 'July 22, 2025',
      tags: ['Ethics', 'AI', 'Society'],
      image: 'https://placehold.co/600x400/10B981/FFFFFF?text=Ethical+AI',
      content: `
        <h2>Bias in, Bias out</h2>
        <p>AI models learn from the data they are trained on. If that data reflects existing societal biases, the model will learn and potentially amplify those biases. It's crucial to curate datasets carefully and employ techniques to mitigate bias during and after training.</p>
        <h2>Transparency and Explainability</h2>
        <p>Many advanced AI models operate as "black boxes," making it difficult to understand their decision-making process. Developing methods for explainable AI (XAI) is essential for building trust and ensuring accountability, especially in high-stakes applications like healthcare and finance.</p>
      `
    },
  ],
  portfolio: [
    {
      id: 1,
      title: 'Retail Demand Forecasting',
      description: 'Developed an AI model for a major retailer to predict product demand with 95% accuracy.',
      image: 'https://placehold.co/600x400/F59E0B/FFFFFF?text=Retail+AI',
      tags: ['Machine Learning', 'Forecasting', 'Retail']
    },
    {
      id: 2,
      title: 'Healthcare Chatbot Assistant',
      description: 'A conversational AI to help patients schedule appointments and get information.',
      image: 'https://placehold.co/600x400/EF4444/FFFFFF?text=Healthcare+Bot',
      tags: ['NLP', 'Chatbot', 'Healthcare']
    },
  ],
  projects: [
    {
      id: 1,
      title: 'Project "Scribe"',
      description: 'An advanced Arabic-to-English translation model with a focus on preserving cultural nuance.',
      date: 'In Progress',
      tags: ['NLP', 'Translation', 'Arabic'],
      image: 'https://placehold.co/600x400/8B5CF6/FFFFFF?text=Scribe'
    },
  ],
  research: [
    {
      id: 1,
      title: 'A Novel Approach to Zero-Shot Cross-Lingual Transfer',
      authors: 'Al-Farsi, A., et al.',
      journal: 'Proceedings of the Annual Meeting of the Association for Computational Linguistics',
      year: 2024,
      url: '#'
    },
  ],
  books: [
    {
      id: 1,
      title: 'Deep Learning with Python',
      author: 'François Chollet',
      image: 'https://placehold.co/400x600/D97706/FFFFFF?text=Book+Cover',
      url: '#'
    },
  ],
};