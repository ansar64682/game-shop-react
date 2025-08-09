$folder = ".\public\img"
if (-not (Test-Path $folder)) { New-Item $folder -ItemType Directory }
Set-Location $folder

$files = @{
  "elden_ring.jpg" = "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg"
  "elden_ring_erdtree.jpg" = "https://cdn.akamai.steamstatic.com/steam/apps/2778580/header.jpg"
  "cyberpunk2077.jpg" = "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg"
  "astro_bot.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202405/3018/331ecf82df479372e226de9e44c43ed2fc8ec9ec22feee49.jpg"
  "metaphor_refantazio.jpg" = "https://www.atlus.com/metaphor/images/meta_share.jpg"
  "satisfactory.jpg" = "https://cdn.akamai.steamstatic.com/steam/apps/526870/header.jpg"
  "silent_hill_2_remake.jpg" = "https://cdn.akamai.steamstatic.com/steam/apps/2288620/header.jpg"
  "tekken8.jpg" = "https://cdn.akamai.steamstatic.com/steam/apps/1778820/header.jpg"
  "civilization7.jpg" = "https://i.redd.it/7vvzrv1zqd5c1.jpg"
  "ff7_rebirth.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202212/0214/V0bMRcoehvdP3og7vCxpWDHi.jpg"
  "black_myth_wukong.jpg" = "https://cdn.akamai.steamstatic.com/steam/apps/1876890/header.jpg"
  "dragons_dogma_2.jpg" = "https://cdn.akamai.steamstatic.com/steam/apps/2054970/header.jpg"
  "split_fiction.jpg" = "https://static.wikia.nocookie.net/fiction-battlefield/images/9/9f/Split.jpg"
  "alan_wake_2.jpg" = "https://cdn.akamai.steamstatic.com/steam/apps/108710/header.jpg"
  "monster_hunter_wilds.jpg" = "https://assetsio.reedpopcdn.com/monster-hunter-wilds-key-art.jpg"
  "indiana_jones_great_circle.jpg" = "https://cdn.akamai.steamstatic.com/steam/apps/2587880/header.jpg"
  "balatro.jpg" = "https://upload.wikimedia.org/wikipedia/en/b/b9/Balatro_Cover_Art.jpg"
  "ghost_of_tsushima_2.jpg" = "https://cdn.mobygames.com/covers/3544372-ghost-of-tsushima-directors-cut-playstation-5-front-cover.jpg"
  "frostpunk_2.jpg" = "https://cdn.akamai.steamstatic.com/steam/apps/1601580/header.jpg"
  "silksong.jpg" = "https://cdn.akamai.steamstatic.com/steam/apps/1030300/header.jpg"
  "mafia_old_country.jpg" = "https://cdn.akamai.steamstatic.com/steam/apps/1030830/header.jpg"
}

foreach ($name in $files.Keys) {
  $url = $files[$name]
  Write-Host "Downloading $name..."
  Invoke-WebRequest -Uri $url -OutFile $name -ErrorAction SilentlyContinue
}

Write-Host "🎉 All covers downloaded into public/img/"
