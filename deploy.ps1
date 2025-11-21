# Deployment script for GitHub Pages
Write-Host "Starting deployment..." -ForegroundColor Cyan

# Add Node.js to PATH
$env:PATH = "C:\Program Files\nodejs;$env:PATH"

# Step 1: Build the project
Write-Host "Building project..." -ForegroundColor Yellow
& "C:\Program Files\nodejs\node.exe" .\node_modules\vite\bin\vite.js build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "Build successful!" -ForegroundColor Green

# Step 2: Find Git
$gitPaths = @(
    "C:\Program Files\Git\cmd\git.exe",
    "C:\Program Files (x86)\Git\cmd\git.exe",
    "$env:LOCALAPPDATA\Programs\Git\cmd\git.exe"
)

$gitPath = $null
foreach ($path in $gitPaths) {
    if (Test-Path $path) {
        $gitPath = $path
        break
    }
}

if (-not $gitPath) {
    Write-Host "Git not found. Please install Git and try again." -ForegroundColor Yellow
    exit 1
}

# Step 3: Deploy to GitHub Pages
Write-Host "Deploying to GitHub Pages..." -ForegroundColor Yellow
$gitDir = Split-Path $gitPath -Parent
$oldPath = $env:PATH
$env:PATH = "$gitDir;$env:PATH"

# Deploy with nojekyll and no custom domain
& "C:\Program Files\nodejs\node.exe" .\node_modules\gh-pages\bin\gh-pages.js -d dist --nojekyll --remove "CNAME"

$deployResult = $LASTEXITCODE
$env:PATH = $oldPath

if ($deployResult -ne 0) {
    Write-Host "Deployment failed!" -ForegroundColor Red
    exit 1
}

Write-Host "Deployment successful!" -ForegroundColor Green
Write-Host "Your site should be live at: https://rayantion26.github.io/AboutMe/" -ForegroundColor Cyan
