param(
  [int]$Port = 4000
)

$ErrorActionPreference = "Stop"

if (-not $env:OPENROUTER_API_KEY) {
  throw "Set OPENROUTER_API_KEY first. Example: `$env:OPENROUTER_API_KEY='sk-or-...'"
}

if (-not $env:LITELLM_MASTER_KEY) {
  $env:LITELLM_MASTER_KEY = "local-claude-code-key"
}

$ConfigPath = Join-Path $PSScriptRoot "litellm.config.yaml"
litellm --config $ConfigPath --host 127.0.0.1 --port $Port
