# Simple deployment zip creator
$zipName = "ljj-deployment.zip"

# Remove old zip if exists
if (Test-Path $zipName) { Remove-Item $zipName }

# Create zip with essential files
$files = "app.js", "package.json", "index.html", "styles.css", "vercel.json"
$existing = $files | Where-Object { Test-Path $_ }

if ($existing) {
    Add-Type -AssemblyName System.IO.Compression.FileSystem
    $zip = [System.IO.Compression.ZipFile]::Open($zipName, 'Create')
    
    foreach ($file in $existing) {
        [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, $file, $file)
        Write-Host "Added: $file"
    }
    
    $zip.Dispose()
    Write-Host "Created: $zipName"
} else {
    Write-Host "No files found!"
}
