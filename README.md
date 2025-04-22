# LinkedIn Applicant Messenger

A tool to automate personalized messaging to LinkedIn job applicants.

## Features

- Customizable message templates
- Personalization using applicant's first name
- Optional approval before sending each message
- Configurable applicant limit
- Modern, clean UI with Tailwind CSS

## Deployment

This project is configured for deployment on Vercel. To deploy:

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy the project:
```bash
vercel
```

4. Follow the prompts to complete the deployment

## Development

To run locally:
```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## Usage

1. Customize your message template
2. Set the applicant limit (optional)
3. Toggle message approval if needed
4. Generate and copy the script
5. Paste the script in LinkedIn's developer console

## License

MIT 