import {McpServer} from '@modelcontextprotocol/sdk/server/mcp';
import {StdioServerTransport} from '@modelcontextprotocol/sdk/server/stdio.js';
import * as z from 'zod/v4';
import process from 'node:process';

async function main() {
  const mcpServer = new McpServer({
    name: 'legalrabbit-greeting',
    description: 'Greeting',
    version: '0.1.0'
  });
  mcpServer.registerTool(
    'greeting',
    {
      description: 'Get a greeting sentence',
      inputSchema: {
        firstName: z.string(),
        lastName: z.string().nullable()
      },
      outputSchema: {
        greeting: z.string()
      }
    },
    async ({firstName, lastName}) => {
      const data = {greeting: `Hello, ${firstName} ${lastName ?? ''}!`};
      return {
        content: [{type: 'text', text: JSON.stringify(data)}],
        structuredContent: data
      };
    }
  );
  const transport = new StdioServerTransport();
  await mcpServer.connect(transport);
}

main().catch(error => {
  console.error('Server error:', error);
  process.exit(1);
});
