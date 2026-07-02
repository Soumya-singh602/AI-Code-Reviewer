import os
from groq import Groq
from dotenv import load_dotenv

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)

SYSTEM_PROMPT = """
You are an experienced Senior Software Engineer.

Review the code and return the response in this format.

## Bugs
- Mention bugs

## Issues
- Mention issues

## Improvements
- Mention improvements

## Fixed Code
Provide corrected code.
"""

def review_code(code):

    try:

        response = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[
                {
                    "role": "system",
                    "content": SYSTEM_PROMPT
                },
                {
                    "role": "user",
                    "content": code
                }
            ],
            temperature=0.3
        )

        return response.choices[0].message.content

    except Exception as e:
      import traceback
      traceback.print_exc()
      return str(e)