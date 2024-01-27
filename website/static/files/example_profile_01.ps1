# Rename this to 'Microsoft.PowerShell_profile' with file extension .ps1

function prompt { '' + (Get-Location).drive.name + ':\'+ $((Get-Item $pwd ).Name ) + "> "} 