# Claude Code with non-Anthropic models

This setup runs Claude Code through a local LiteLLM proxy. Claude Code still
speaks the Anthropic API shape locally, but LiteLLM forwards the request to
OpenRouter models.

## Recommended model

Use `moonshotai/kimi-k2.7-code` first for complex coding and logic-heavy
agentic work.
It is the default in `litellm.config.yaml`.

Fallbacks:

- `qwen/qwen3-coder`: strong coding model, good fallback if Kimi is unavailable.
- `deepseek/deepseek-chat-v3.1`: good general coding/reasoning value option.

## Run

Open PowerShell in this repository.

```powershell
$env:OPENROUTER_API_KEY = "sk-or-your-key"
$env:LITELLM_MASTER_KEY = "local-claude-code-key"
.\tools\claude-code-gateway\start-litellm.ps1
```

Open a second PowerShell window in the same repository.

```powershell
.\tools\claude-code-gateway\start-claude-kimi.ps1
```

## Switch model

To switch the default model, edit the Claude aliases in
`litellm.config.yaml` from:

```yaml
model: openrouter/moonshotai/kimi-k2.7-code
```

to one of:

```yaml
model: openrouter/qwen/qwen3-coder
model: openrouter/deepseek/deepseek-v3.1-terminus
```
