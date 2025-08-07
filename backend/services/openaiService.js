const { OPEN_AI_KEY, MODEL } = require('../config/openaiConfig');
const { ANALYSE_PROMPT } = require('./constants');

async function analyzeText(inputText, sourceText) {

    const messages = [
        {
            role: "system",
            content: ANALYSE_PROMPT,
        },
        ...(sourceText ? [{
            role: "user",
            content: `The following context was provided to help interpret the main text:\n${sourceText}`,
        }] : []),
        {
            role: "user",
            content: inputText,
        }
    ];

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${OPEN_AI_KEY}`,
        },
        body: JSON.stringify({
            model: MODEL,
            messages,
            temperature: 0.7,
        }),
    });

    const data = await response.json();
    const content = data.choices[0].message.content;
    const result = JSON.parse(content);
    result.analysisTime = new Date().toISOString();

    return result;
}

module.exports = analyzeText;
