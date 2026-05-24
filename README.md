Claude Code MCP empty string bug
==================================

This repo demonstrates a bug in the Claude Code regarding the MCP tool use with an empty string param.

If any param's value is an empty string, Claude Code will erase every param and invoke the tool with no params.


How to reproduce
-----------------

0. Run `npm install`
1. Run Claude Code: `claude --model sonnet --verbose  --dangerously-skip-permissions`
2. Use the prompt: `Invoke the greeting tool with the first name as "tanin" and the last name as an empty string`.
3. You will observe that the tool invocation fails repeatedly even though Claude Code's intention is correct.
4. Now try this prompt: `Invoke the greeting tool with the first name as "tanin" and the last name as null`
5. You will observe that Claude Code invoke the tool successfully.


About LegalRabbit
------------------

We are a Legal AI lab based in Singapore and Seattle. 

Our first product is a Cowork docx plugin that is 2-5x cheaper than the Anthropic's docx skill, faster, and more reliable. 
You can learn more here: https://github.com/LegalRabbit-AI/legalrabbit-docx-claude-plugin
