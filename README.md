# SINS - Secure Interactive Malware Sandbox

Landing page for the SINS platform - an interactive malware sandbox for security researchers and professionals.

## Features

- Modern neumorphic UI design
- Responsive layout
- Gatsby-powered static site
- Docker containerization for development

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Docker (optional, for containerized development)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/S-I-N-S/website.git
cd website
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run develop
```

Or with Docker:

```bash
docker-compose up
```

4. Open your browser and visit http://localhost:8000

## Building for Production

```bash
npm run build
```

The built files will be in the `public` directory.

## Project Structure

- `src/pages/`: Gatsby pages
- `src/components/`: React components
- `src/styles/`: CSS styles
- `src/images/`: Static images

## License

This project is licensed under the MIT License - see the LICENSE file for details.