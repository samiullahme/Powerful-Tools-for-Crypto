param(
  [string]$ProxyUrl = "http://127.0.0.1:4000",
  [string]$ProxyKey = "local-claude-code-key"
)

$ErrorActionPreference = "Stop"

$env:ANTHROPIC_BASE_URL = $ProxyUrl
$env:ANTHROPIC_AUTH_TOKEN = $ProxyKey
$env:ANTHROPIC_MODEL = "claude-sonnet-4-5"
$env:ANTHROPIC_SMALL_FAST_MODEL = "claude-3-5-haiku-20241022"

claude
