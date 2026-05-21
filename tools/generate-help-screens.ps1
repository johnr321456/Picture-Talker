$ErrorActionPreference = "Stop"

$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$outDir = Join-Path $root "docs\screenshots"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

Add-Type -AssemblyName System.Drawing

function Brush($r, $g, $b) { New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb($r, $g, $b)) }
function Pen($r, $g, $b, $w) { New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb($r, $g, $b)), $w }

function New-Canvas {
  $bmp = New-Object System.Drawing.Bitmap 1400, 900
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit
  $g.Clear([System.Drawing.Color]::FromArgb(246, 247, 242))
  @{ Bitmap = $bmp; Graphics = $g }
}

function RoundedRectPath($x, $y, $w, $h, $r) {
  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $d = $r * 2
  $path.AddArc($x, $y, $d, $d, 180, 90)
  $path.AddArc($x + $w - $d, $y, $d, $d, 270, 90)
  $path.AddArc($x + $w - $d, $y + $h - $d, $d, $d, 0, 90)
  $path.AddArc($x, $y + $h - $d, $d, $d, 90, 90)
  $path.CloseFigure()
  $path
}

function Fill-Round($g, $x, $y, $w, $h, $r, $brush) {
  $path = RoundedRectPath $x $y $w $h $r
  $g.FillPath($brush, $path)
  $path.Dispose()
}

function Stroke-Round($g, $x, $y, $w, $h, $r, $pen) {
  $path = RoundedRectPath $x $y $w $h $r
  $g.DrawPath($pen, $path)
  $path.Dispose()
}

function Draw-Text($g, $text, $x, $y, $w, $h, $size, $style, $color, $align = "Near") {
  $font = New-Object System.Drawing.Font("Arial", $size, $style, [System.Drawing.GraphicsUnit]::Pixel)
  $brush = New-Object System.Drawing.SolidBrush $color
  $format = New-Object System.Drawing.StringFormat
  $format.Alignment = [System.Drawing.StringAlignment]::$align
  $format.LineAlignment = [System.Drawing.StringAlignment]::Center
  $format.Trimming = [System.Drawing.StringTrimming]::Word
  $g.DrawString($text, $font, $brush, (New-Object System.Drawing.RectangleF $x, $y, $w, $h), $format)
  $font.Dispose(); $brush.Dispose(); $format.Dispose()
}

function Draw-Button($g, $text, $x, $y, $w, $h, $primary = $false) {
  $bg = if ($primary) { Brush 36 124 99 } else { Brush 255 255 255 }
  $fg = if ($primary) { [System.Drawing.Color]::White } else { [System.Drawing.Color]::FromArgb(23, 33, 31) }
  Fill-Round $g $x $y $w $h 8 $bg
  Stroke-Round $g $x $y $w $h 8 (Pen 174 187 182 2)
  Draw-Text $g $text ($x + 8) $y ($w - 16) $h 22 ([System.Drawing.FontStyle]::Bold) $fg "Center"
}

function Draw-AppShell($g, $selected) {
  Fill-Round $g 40 30 1320 95 8 (Brush 255 255 255)
  Stroke-Round $g 40 30 1320 95 8 (Pen 203 216 210 2)
  Draw-Text $g "Tap picture icons to build a message" 65 50 745 55 28 ([System.Drawing.FontStyle]::Regular) ([System.Drawing.Color]::FromArgb(88, 103, 98))
  Draw-Button $g "Speak" 910 50 125 55 $true
  Draw-Button $g "Backspace" 1050 50 170 55 $false
  Draw-Button $g "Clear" 1235 50 95 55 $false

  $tabs = @("Communicate", "Builder", "Settings", "Help")
  for ($i = 0; $i -lt $tabs.Count; $i++) {
    Draw-Button $g $tabs[$i] (40 + ($i * 330)) 145 310 58 ($tabs[$i] -eq $selected)
  }
}

function Draw-Highlight($g, $x, $y, $w, $h) {
  Stroke-Round $g $x $y $w $h 10 (Pen 234 117 38 5)
}

function Draw-Callout($g, $title, $body, $x, $y, $w, $h, $tx, $ty) {
  Fill-Round $g $x $y $w $h 18 (Brush 255 248 204)
  $linePen = Pen 191 143 0 4
  Stroke-Round $g $x $y $w $h 18 $linePen
  Draw-Text $g $title ($x + 18) ($y + 12) ($w - 36) 34 23 ([System.Drawing.FontStyle]::Bold) ([System.Drawing.Color]::FromArgb(23, 33, 31))
  Draw-Text $g $body ($x + 18) ($y + 48) ($w - 36) ($h - 60) 20 ([System.Drawing.FontStyle]::Regular) ([System.Drawing.Color]::FromArgb(23, 33, 31))
  $sx = if ($tx -lt $x) { $x } elseif ($tx -gt ($x + $w)) { $x + $w } else { $x + ($w / 2) }
  $sy = if ($ty -lt $y) { $y } elseif ($ty -gt ($y + $h)) { $y + $h } else { $y + ($h / 2) }
  $g.DrawLine($linePen, $sx, $sy, $tx, $ty)
  $g.FillEllipse((Brush 191 143 0), $tx - 8, $ty - 8, 16, 16)
}

function Draw-Board($g, $x, $y, $cols, $labels, $mask = @()) {
  $colors = @(
    [System.Drawing.Color]::FromArgb(255, 239, 159),
    [System.Drawing.Color]::FromArgb(200, 239, 207),
    [System.Drawing.Color]::FromArgb(232, 242, 255),
    [System.Drawing.Color]::FromArgb(255, 220, 174),
    [System.Drawing.Color]::FromArgb(244, 209, 232),
    [System.Drawing.Color]::FromArgb(207, 224, 255)
  )
  $tileW = 150; $tileH = 104; $gap = 12
  for ($i = 0; $i -lt $labels.Count; $i++) {
    $cx = $x + (($i % $cols) * ($tileW + $gap))
    $cy = $y + ([Math]::Floor($i / $cols) * ($tileH + $gap))
    $baseColor = $colors[$i % $colors.Count]
    if ($mask -contains $i) { $baseColor = [System.Drawing.Color]::FromArgb(225, 229, 226) }
    Fill-Round $g $cx $cy $tileW $tileH 8 (New-Object System.Drawing.SolidBrush $baseColor)
    Stroke-Round $g $cx $cy $tileW $tileH 8 (Pen 90 90 90 2)
    $iconPen = if ($mask -contains $i) { Pen 130 130 130 3 } else { Pen 23 33 31 3 }
    $g.FillEllipse((Brush 255 255 255), $cx + 55, $cy + 14, 40, 40)
    $g.DrawEllipse($iconPen, $cx + 55, $cy + 14, 40, 40)
    $g.DrawLine($iconPen, $cx + 65, $cy + 34, $cx + 85, $cy + 34)
    $g.DrawLine($iconPen, $cx + 75, $cy + 24, $cx + 75, $cy + 44)
    Draw-Text $g $labels[$i] ($cx + 5) ($cy + 58) ($tileW - 10) 36 21 ([System.Drawing.FontStyle]::Bold) ([System.Drawing.Color]::FromArgb(23, 33, 31)) "Center"
  }
}

function Save-Canvas($canvas, $name) {
  $path = Join-Path $outDir $name
  $canvas.Bitmap.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
  $canvas.Graphics.Dispose(); $canvas.Bitmap.Dispose()
}

function Base-Communicate($g) {
  Draw-AppShell $g "Communicate"
  Fill-Round $g 40 225 760 56 8 (Brush 255 255 255)
  Stroke-Round $g 40 225 760 56 8 (Pen 203 216 210 2)
  Draw-Text $g "Find word    Search pictures or type to say" 60 225 720 56 22 ([System.Drawing.FontStyle]::Bold) ([System.Drawing.Color]::FromArgb(88, 103, 98))
  Draw-Button $g "Say now" 820 225 130 56 $false
  Draw-Button $g "Voice" 970 225 360 56 $false
  Draw-Board $g 40 320 6 @("I", "you", "want", "go", "more", "all done", "help", "stop", "yes", "no", "please", "thank you", "eat", "drink", "play", "bathroom", "happy", "sad")
}

function Base-BuilderStarter($g) {
  Draw-AppShell $g "Builder"
  Fill-Round $g 40 235 620 230 8 (Brush 255 255 255)
  Stroke-Round $g 40 235 620 230 8 (Pen 203 216 210 2)
  Draw-Text $g "Starter Boards" 65 255 550 40 28 ([System.Drawing.FontStyle]::Bold) ([System.Drawing.Color]::FromArgb(23, 33, 31))
  Draw-Text $g "Choose a starter" 65 315 520 30 22 ([System.Drawing.FontStyle]::Bold) ([System.Drawing.Color]::FromArgb(88, 103, 98))
  Draw-Button $g "Mealtime" 65 350 540 55 $false
  Draw-Button $g "Load Starter" 65 420 200 55 $true
  Draw-Board $g 720 250 3 @("First Words", "Mealtime", "Play", "School", "Feelings", "Sick or Pain", "Bathroom", "Devices", "Full Core")
}

function Base-Vocab($g) {
  Draw-AppShell $g "Builder"
  Fill-Round $g 45 235 620 330 8 (Brush 255 255 255)
  Stroke-Round $g 45 235 620 330 8 (Pen 203 216 210 2)
  Draw-Text $g "Vocabulary Builder" 70 255 560 40 28 ([System.Drawing.FontStyle]::Bold) ([System.Drawing.Color]::FromArgb(23, 33, 31))
  Draw-Text $g "Target words" 70 315 520 30 22 ([System.Drawing.FontStyle]::Bold) ([System.Drawing.Color]::FromArgb(88, 103, 98))
  Fill-Round $g 70 350 540 95 8 (Brush 255 255 255)
  Stroke-Round $g 70 350 540 95 8 (Pen 203 216 210 2)
  Draw-Text $g "my, up, down, off, on, play, more, go, eat, drink, turn" 88 360 500 72 21 ([System.Drawing.FontStyle]::Regular) ([System.Drawing.Color]::FromArgb(23, 33, 31))
  Draw-Text $g "[x] Show only target words" 75 460 420 36 22 ([System.Drawing.FontStyle]::Bold) ([System.Drawing.Color]::FromArgb(23, 33, 31))
  Draw-Button $g "Apply Targets" 70 510 210 55 $true
  Draw-Board $g 720 250 4 @("my", "up", "down", "off", "on", "play", "more", "go", "eat", "drink", "turn", "help") @(11)
}

function Base-CustomTile($g) {
  Draw-AppShell $g "Builder"
  Fill-Round $g 50 235 655 420 8 (Brush 255 255 255)
  Stroke-Round $g 50 235 655 420 8 (Pen 203 216 210 2)
  Draw-Text $g "Add Picture Tile" 75 255 560 40 28 ([System.Drawing.FontStyle]::Bold) ([System.Drawing.Color]::FromArgb(23, 33, 31))
  Draw-Button $g "Word: juice" 75 330 260 55 $false
  Draw-Button $g "Speak as: juice" 365 330 260 55 $false
  Draw-Button $g "Picture: cup" 75 420 260 55 $false
  Draw-Button $g "Type: Thing" 365 420 260 55 $false
  Draw-Button $g "Page: Mealtime" 75 510 550 55 $false
  Draw-Button $g "Add Tile" 75 590 180 55 $true
  Draw-Board $g 770 270 3 @("food", "water", "snack", "juice", "milk", "spoon", "finished", "yuck", "help")
}

function Base-Settings($g) {
  Draw-AppShell $g "Settings"
  Fill-Round $g 60 245 560 300 8 (Brush 255 255 255)
  Stroke-Round $g 60 245 560 300 8 (Pen 203 216 210 2)
  Draw-Text $g "Speech" 85 265 480 40 28 ([System.Drawing.FontStyle]::Bold) ([System.Drawing.Color]::FromArgb(23, 33, 31))
  Draw-Text $g "Rate   [------o---]" 85 340 460 38 24 ([System.Drawing.FontStyle]::Bold) ([System.Drawing.Color]::FromArgb(23, 33, 31))
  Draw-Text $g "Pitch  [-----o----]" 85 410 460 38 24 ([System.Drawing.FontStyle]::Bold) ([System.Drawing.Color]::FromArgb(23, 33, 31))
  Draw-Text $g "[x] Speak each tile when tapped" 85 485 460 38 23 ([System.Drawing.FontStyle]::Bold) ([System.Drawing.Color]::FromArgb(23, 33, 31))
  Fill-Round $g 720 245 560 300 8 (Brush 255 255 255)
  Stroke-Round $g 720 245 560 300 8 (Pen 203 216 210 2)
  Draw-Text $g "Access" 745 265 480 40 28 ([System.Drawing.FontStyle]::Bold) ([System.Drawing.Color]::FromArgb(23, 33, 31))
  Draw-Text $g "[x] Lock editing during communication" 745 340 500 38 23 ([System.Drawing.FontStyle]::Bold) ([System.Drawing.Color]::FromArgb(23, 33, 31))
  Draw-Text $g "[ ] Larger tile labels" 745 410 500 38 23 ([System.Drawing.FontStyle]::Bold) ([System.Drawing.Color]::FromArgb(23, 33, 31))
  Draw-Text $g "[ ] High contrast" 745 480 500 38 23 ([System.Drawing.FontStyle]::Bold) ([System.Drawing.Color]::FromArgb(23, 33, 31))
}

function Base-Backup($g) {
  Draw-AppShell $g "Builder"
  Fill-Round $g 70 245 560 360 8 (Brush 255 255 255)
  Stroke-Round $g 70 245 560 360 8 (Pen 203 216 210 2)
  Draw-Text $g "Board Tools" 95 265 500 40 28 ([System.Drawing.FontStyle]::Bold) ([System.Drawing.Color]::FromArgb(23, 33, 31))
  Draw-Button $g "Edit Mode: Off" 95 330 220 55 $false
  Draw-Button $g "Print Board" 340 330 220 55 $false
  Draw-Button $g "Export Backup" 95 410 220 55 $false
  Draw-Button $g "Import Backup" 340 410 220 55 $false
  Draw-Button $g "Restore Starter Board" 95 490 465 55 $false
  Draw-Board $g 750 260 3 @("custom", "pages", "tiles", "voices", "settings", "phrases", "targets", "backup", "print")
}

function Make-Step($name, $baseFn, $title, $body, $highlight, $callout, $target) {
  $c = New-Canvas; $g = $c.Graphics
  & $baseFn $g
  Draw-Highlight $g $highlight[0] $highlight[1] $highlight[2] $highlight[3]
  Draw-Callout $g $title $body $callout[0] $callout[1] $callout[2] $callout[3] $target[0] $target[1]
  Save-Canvas $c $name
}

Make-Step "01-communicate-step-1.png" ${function:Base-Communicate} "Step 1: Tap a picture" "Tap a tile such as want, more, or help. The word is added to the message bar." @(340,320,150,104) @(830,330,470,120) @(415,372)
Make-Step "01-communicate-step-2.png" ${function:Base-Communicate} "Step 2: Check the message" "The message bar shows the words in order. Use Backspace if the last word is wrong." @(40,30,900,95) @(70,630,520,120) @(265,78)
Make-Step "01-communicate-step-3.png" ${function:Base-Communicate} "Step 3: Speak" "Tap Speak to say the whole message out loud." @(910,50,125,55) @(780,650,440,105) @(972,78)

Make-Step "02-starter-boards-step-1.png" ${function:Base-BuilderStarter} "Step 1: Choose a starter" "Pick a routine such as Mealtime, School, or First Words." @(65,350,540,55) @(740,535,520,115) @(335,378)
Make-Step "02-starter-boards-step-2.png" ${function:Base-BuilderStarter} "Step 2: Load it" "Tap Load Starter. It replaces the current board with the starter you chose." @(65,420,200,55) @(95,610,520,115) @(165,448)
Make-Step "02-starter-boards-step-3.png" ${function:Base-BuilderStarter} "Step 3: Communicate" "The app returns to Communicate with the new board ready to use." @(40,145,310,58) @(760,620,500,115) @(190,174)

Make-Step "03-vocabulary-builder-step-1.png" ${function:Base-Vocab} "Step 1: Enter target words" "Type the small set of words you want to practice today." @(70,350,540,95) @(740,600,520,115) @(340,395)
Make-Step "03-vocabulary-builder-step-2.png" ${function:Base-Vocab} "Step 2: Show only targets" "Turn on the checkbox to reduce distraction while keeping word positions stable." @(70,455,420,45) @(730,90,540,125) @(260,478)
Make-Step "03-vocabulary-builder-step-3.png" ${function:Base-Vocab} "Step 3: Apply targets" "Tap Apply Targets. Non-target words are grayed out during practice." @(70,510,210,55) @(755,640,520,115) @(175,538)

Make-Step "04-custom-tile-step-1.png" ${function:Base-CustomTile} "Step 1: Add the word" "Word is the label on the tile. Speak as is what the voice says." @(75,330,550,55) @(765,90,540,115) @(350,358)
Make-Step "04-custom-tile-step-2.png" ${function:Base-CustomTile} "Step 2: Pick picture and type" "Picture can be a simple word like cup, heart, school, or a typed symbol." @(75,420,550,55) @(770,630,520,120) @(350,448)
Make-Step "04-custom-tile-step-3.png" ${function:Base-CustomTile} "Step 3: Choose the page" "Put the tile on the page where it will be easiest to find." @(75,510,550,55) @(760,95,520,115) @(350,538)
Make-Step "04-custom-tile-step-4.png" ${function:Base-CustomTile} "Step 4: Add tile" "Tap Add Tile. It saves locally and appears on the selected page." @(75,590,180,55) @(750,650,520,115) @(165,618)

Make-Step "05-settings-step-1.png" ${function:Base-Settings} "Step 1: Adjust speech" "Change Rate or Pitch until the voice is comfortable and understandable." @(85,330,460,120) @(725,620,520,115) @(310,395)
Make-Step "05-settings-step-2.png" ${function:Base-Settings} "Step 2: Choose tile speech" "Leave this on to speak every tile, or turn it off to speak only full messages." @(85,480,460,45) @(90,620,540,120) @(315,505)
Make-Step "05-settings-step-3.png" ${function:Base-Settings} "Step 3: Set access options" "Lock editing for daily use. Larger labels and high contrast can make tiles easier to see." @(745,335,500,165) @(760,620,520,120) @(995,420)

Make-Step "06-backup-print-step-1.png" ${function:Base-Backup} "Step 1: Export backup" "Save a JSON backup of custom pages, tiles, phrases, targets, and settings." @(95,410,220,55) @(740,590,540,120) @(205,438)
Make-Step "06-backup-print-step-2.png" ${function:Base-Backup} "Step 2: Import backup" "Use Import Backup on another device browser to load the same board." @(340,410,220,55) @(730,90,540,120) @(450,438)
Make-Step "06-backup-print-step-3.png" ${function:Base-Backup} "Step 3: Print board" "Print a paper board for modeling, school, therapy, or fridge practice." @(340,330,220,55) @(95,645,540,115) @(450,358)

Write-Host "Generated step-by-step help screenshots in $outDir"
