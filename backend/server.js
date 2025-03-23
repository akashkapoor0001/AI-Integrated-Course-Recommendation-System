const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/recommend', async (req, res) => {
  const { interests, degree, cgpa, level } = req.body;

  const prompt = `Recommend 5 courses for a student interested in ${interests}, pursuing a ${degree}, with a CGPA of ${cgpa}, at ${level} level. considering the details, Provide course titles, descriptions, and links to the course.`;

  try {
    const response = await axios.post(
      'https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent',
      {
        contents: [{ parts: [{ text: prompt }] }],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': 'AIzaSyAsvqUBWEwu955FkE-lSssABxjzz-MJC-c',
        },
      }
    );

    const courses = response.data.candidates[0].content.parts[0].text
      .split('\n')
      .filter((line) => line.trim())
      .map((line) => {
        const [title, description] = line.split(': ');
        return { title, description };
      });

    res.json({ courses });
  } catch (error) {
    console.error('Error calling Google Generative AI API:', error);
    res.status(500).json({ error: 'Failed to fetch recommendations' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
