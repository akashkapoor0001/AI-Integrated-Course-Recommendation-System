const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Root route to test server is running
app.get('/', (req, res) => {
  res.send('Hey! Server is running.');
});

app.post('/recommend', async (req, res) => {
  const { interests, degree, goals } = req.body;

  const prompt = `Recommend 5 courses for a student with interests in ${interests}, currently pursuing a ${degree}, and aiming to ${goals}. Provide course titles, descriptions, and links if available.`;

  try {
    const response = await axios.post(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent', // Update the model name
        {
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': 'AIzaSyAsvqUBWEwu955FkE-lSssABxjzz-MJC-c', // Replace with your actual API key
          },
        }
      );
      

    if (response.data?.candidates?.length > 0) {
      const textResponse = response.data.candidates[0]?.content?.parts[0]?.text || '';

      const courses = textResponse
        .split('\n')
        .filter((line) => line.trim())
        .map((line) => {
          const [title, description] = line.split(': ');
          return { title: title?.trim(), description: description?.trim() || 'No description available' };
        });

      res.json({ courses });
    } else {
      res.status(500).json({ error: 'Invalid response from AI API' });
    }
  } catch (error) {
    console.error('Error calling Google Generative AI API:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch recommendations' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
