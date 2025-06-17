# Oracle - AI Agents Platform (Frontend)

Oracle is an open-source platform for creating and managing AI agents, enabling integration with different AI models and services.

## Features

The Oracle frontend platform enables:

- Creating and managing AI agents with different configurations
- Real-time chat interface with AI agents
- File upload and processing capabilities
- Multi-agent workflows with visual editor
- Integration with various AI models and services
- Shared chat functionality for public agent access
- Client and MCP server management for administrators

## Technologies

- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Modern and accessible UI components
- **React Hook Form** - Form handling and validation
- **Zustand** - Lightweight state management
- **React Flow** - Interactive workflow editor
- **Socket.io** - Real-time communication
- **Framer Motion** - Smooth animations

## Requirements

- Node.js 18+
- npm, yarn, or pnpm
- Oracle backend running

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Configure environment variables:
```bash
cp .env.example .env.local
```

4. Edit `.env.local` with your configurations:
```bash
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_WS_URL=ws://localhost:3000
```

5. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Environment Variables

### Required
- `NEXT_PUBLIC_API_URL` - Backend API URL
- `NEXT_PUBLIC_WS_URL` - WebSocket server URL

### Optional
- `NEXT_PUBLIC_SITE_URL` - Site URL for absolute links
- `NEXT_PUBLIC_APP_NAME` - Application name

## Project Structure

```
frontend/
├── app/                    # Next.js App Router pages
│   ├── agents/            # Agent management pages
│   ├── chat/              # Chat interface
│   ├── clients/           # Client management (admin)
│   ├── documentation/     # API documentation
│   ├── login/             # Authentication
│   ├── mcp-servers/       # MCP server management (admin)
│   └── shared-chat/       # Public chat interface
├── components/            # Reusable UI components
│   └── ui/               # Shadcn UI components
├── contexts/             # React Context providers
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── services/             # API service modules
├── types/                # TypeScript type definitions
└── styles/               # Global styles
```

## Features Overview

### Agent Management
- Create and configure different types of agents
- Support for LLM, Task, Sequential, Parallel, Loop, and A2A agents
- Visual workflow editor for complex agent configurations
- Import/export agent configurations
- Real-time testing and debugging

### Chat Interface
- Real-time messaging with AI agents
- File upload support (images, documents, etc.)
- Message history and session management
- Markdown rendering for rich content
- Attached file preview and management

### Workflows
- Visual drag-and-drop workflow editor
- Support for different node types (Agent, Condition, Delay, Message, Start)
- Real-time workflow execution
- Node configuration and testing

### Administration
- Client management for multi-tenant scenarios
- MCP server configuration and management
- User authentication and authorization
- System monitoring and logs

### Shared Chat
- Public access to specific agents
- No authentication required for end users
- Customizable agent sharing settings
- Session management for anonymous users

## Authentication

The application supports:
- Email/password authentication
- JWT token-based sessions
- Role-based access control (admin/client)
- Email verification system
- Password reset functionality

## API Integration

The frontend integrates with the Oracle backend API for:
- User authentication and management
- Agent CRUD operations
- Real-time chat communication
- File upload and processing
- Workflow execution
- System administration

## Development

### Code Style
- ESLint configuration for code quality
- Prettier for code formatting
- TypeScript for type safety
- Consistent component structure

### Testing
```bash
npm run test
# or
yarn test
# or
pnpm test
```

### Build
```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Linting
```bash
npm run lint
# or
yarn lint
# or
pnpm lint
```

## Deployment

### Production Build
```bash
npm run build
npm start
```

### Docker
```bash
docker build -t oracle-frontend .
docker run -p 3000:3000 oracle-frontend
```

### Environment Variables for Production
- Set all required environment variables
- Configure proper API endpoints
- Enable HTTPS in production
- Set secure cookie settings

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the Apache License 2.0 - see the LICENSE file for details.

## Support

For support and questions:
- Create an issue on GitHub
- Check the documentation
- Contact the development team

**Trademark Notice:** The name "Oracle" and related branding are protected trademarks. Unauthorized use is prohibited.

## 👨‍💻 Development Commands

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality
- `npm run format` - Format code with Prettier

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [ReactFlow](https://reactflow.dev/) 
