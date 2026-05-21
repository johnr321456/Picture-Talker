$ErrorActionPreference = "Stop"

$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$outDir = Join-Path $root "docs\animations"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

Add-Type -AssemblyName System.Drawing
Add-Type -AssemblyName PresentationCore
Add-Type -AssemblyName WindowsBase
Add-Type @"
using System;
using System.Runtime.InteropServices;
public static class NativeMethods {
  [DllImport("gdi32.dll")]
  public static extern bool DeleteObject(IntPtr hObject);
}
"@

function Brush($r, $g, $b, $a = 255) { New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb($a, $r, $g, $b)) }
function Pen($r, $g, $b, $w, $a = 255) { New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb($a, $r, $g, $b)), $w }

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

function New-Frame {
  $bmp = New-Object System.Drawing.Bitmap 720, 460
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit
  $g.Clear([System.Drawing.Color]::FromArgb(246, 247, 242))
  @{ Bitmap = $bmp; Graphics = $g }
}

function Draw-Button($g, $text, $x, $y, $w, $h, $primary = $false) {
  $bg = if ($primary) { Brush 36 124 99 } else { Brush 255 255 255 }
  $fg = if ($primary) { [System.Drawing.Color]::White } else { [System.Drawing.Color]::FromArgb(23, 33, 31) }
  Fill-Round $g $x $y $w $h 5 $bg
  Stroke-Round $g $x $y $w $h 5 (Pen 174 187 182 1.5)
  Draw-Text $g $text ($x + 4) $y ($w - 8) $h 14 ([System.Drawing.FontStyle]::Bold) $fg "Center"
}

function Draw-App($g, $screen) {
  Fill-Round $g 8 8 704 444 4 (Brush 255 255 255)
  Stroke-Round $g 8 8 704 444 4 (Pen 174 187 182 2)
  Fill-Round $g 22 22 450 42 5 (Brush 255 255 255)
  Stroke-Round $g 22 22 450 42 5 (Pen 203 216 210 1.5)
  Draw-Text $g "Tap picture icons to build a message" 34 24 425 38 15 ([System.Drawing.FontStyle]::Regular) ([System.Drawing.Color]::FromArgb(88, 103, 98))
  Draw-Button $g "Speak" 488 22 70 42 $true
  Draw-Button $g "Backspace" 568 22 84 42 $false
  Draw-Button $g "Clear" 660 22 42 42 $false
  Draw-Button $g "Communicate" 22 78 150 38 ($screen -eq "talk")
  Draw-Button $g "Builder" 184 78 150 38 ($screen -eq "builder")
  Draw-Button $g "Settings" 346 78 150 38 ($screen -eq "settings")
  Draw-Button $g "Help" 508 78 150 38 $false
}

function Draw-Tiles($g, $x, $y, $cols, $labels, $muted = @()) {
  $colors = @(
    [System.Drawing.Color]::FromArgb(255,239,159),
    [System.Drawing.Color]::FromArgb(200,239,207),
    [System.Drawing.Color]::FromArgb(232,242,255),
    [System.Drawing.Color]::FromArgb(255,220,174),
    [System.Drawing.Color]::FromArgb(244,209,232)
  )
  $w = 82; $h = 64; $gap = 8
  for ($i = 0; $i -lt $labels.Count; $i++) {
    $cx = $x + (($i % $cols) * ($w + $gap))
    $cy = $y + ([Math]::Floor($i / $cols) * ($h + $gap))
    $color = if ($muted -contains $i) { [System.Drawing.Color]::FromArgb(225,229,226) } else { $colors[$i % $colors.Count] }
    Fill-Round $g $cx $cy $w $h 5 (New-Object System.Drawing.SolidBrush $color)
    Stroke-Round $g $cx $cy $w $h 5 (Pen 90 90 90 1.5)
    $g.FillEllipse((Brush 255 255 255), $cx + 30, $cy + 9, 22, 22)
    $g.DrawEllipse((Pen 23 33 31 2), $cx + 30, $cy + 9, 22, 22)
    Draw-Text $g $labels[$i] ($cx + 3) ($cy + 33) ($w - 6) 25 13 ([System.Drawing.FontStyle]::Bold) ([System.Drawing.Color]::FromArgb(23,33,31)) "Center"
  }
}

function Draw-Panel($g, $title, $x, $y, $w, $h) {
  Fill-Round $g $x $y $w $h 6 (Brush 255 255 255)
  Stroke-Round $g $x $y $w $h 6 (Pen 203 216 210 1.5)
  Draw-Text $g $title ($x + 14) ($y + 10) ($w - 28) 28 17 ([System.Drawing.FontStyle]::Bold) ([System.Drawing.Color]::FromArgb(23,33,31))
}

function Draw-Instruction($g, $text) {
  Fill-Round $g 420 342 270 82 12 (Brush 255 248 204)
  Stroke-Round $g 420 342 270 82 12 (Pen 191 143 0 2.5)
  Draw-Text $g $text 438 352 234 62 15 ([System.Drawing.FontStyle]::Bold) ([System.Drawing.Color]::FromArgb(23,33,31))
}

function Draw-Cursor($g, $x, $y, $click = $false) {
  if ($click) {
    $g.FillEllipse((Brush 255 235 66 155), $x - 25, $y - 25, 50, 50)
    $g.DrawEllipse((Pen 191 143 0 3), $x - 25, $y - 25, 50, 50)
  }
  $points = @(
    (New-Object System.Drawing.PointF $x, $y),
    (New-Object System.Drawing.PointF ($x + 7), ($y + 31)),
    (New-Object System.Drawing.PointF ($x + 15), ($y + 21)),
    (New-Object System.Drawing.PointF ($x + 26), ($y + 39)),
    (New-Object System.Drawing.PointF ($x + 34), ($y + 35)),
    (New-Object System.Drawing.PointF ($x + 23), ($y + 18)),
    (New-Object System.Drawing.PointF ($x + 36), ($y + 18))
  )
  $g.FillPolygon((Brush 255 255 255), $points)
  $g.DrawPolygon((Pen 23 33 31 2), $points)
}

function Add-Frame($frames, $draw, $cursor, $instruction, $click = $false) {
  $f = New-Frame; $g = $f.Graphics
  & $draw $g
  Draw-Instruction $g $instruction
  Draw-Cursor $g $cursor[0] $cursor[1] $click
  $frames.Add($f.Bitmap) | Out-Null
  $g.Dispose()
}

function Save-Gif($frames, $name) {
  $path = Join-Path $outDir $name
  if ($frames.Count -eq 0) { return }
  $encoder = New-Object System.Windows.Media.Imaging.GifBitmapEncoder
  foreach ($frame in $frames) {
    $handle = $frame.GetHbitmap()
    try {
      $source = [System.Windows.Interop.Imaging]::CreateBitmapSourceFromHBitmap(
        $handle,
        [IntPtr]::Zero,
        [System.Windows.Int32Rect]::Empty,
        [System.Windows.Media.Imaging.BitmapSizeOptions]::FromEmptyOptions()
      )
      $source.Freeze()
      $metadata = New-Object System.Windows.Media.Imaging.BitmapMetadata "gif"
      $metadata.SetQuery("/grctlext/Delay", [UInt16]45)
      $metadata.SetQuery("/grctlext/Disposal", [Byte]2)
      $encoder.Frames.Add([System.Windows.Media.Imaging.BitmapFrame]::Create($source, $null, $metadata, $null))
    } finally {
      [NativeMethods]::DeleteObject($handle) | Out-Null
    }
  }
  $stream = [System.IO.File]::Open($path, [System.IO.FileMode]::Create)
  try { $encoder.Save($stream) } finally { $stream.Close() }
  Add-InfiniteGifLoop $path
  for ($i = 0; $i -lt $frames.Count; $i++) { $frames[$i].Dispose() }
}

function Add-InfiniteGifLoop($path) {
  $bytes = [System.IO.File]::ReadAllBytes($path)
  $needle = [System.Text.Encoding]::ASCII.GetBytes("NETSCAPE2.0")
  for ($i = 0; $i -le $bytes.Length - $needle.Length; $i++) {
    $found = $true
    for ($j = 0; $j -lt $needle.Length; $j++) {
      if ($bytes[$i + $j] -ne $needle[$j]) {
        $found = $false
        break
      }
    }
    if ($found) { return }
  }

  $loopBlock = [byte[]](0x21,0xFF,0x0B,0x4E,0x45,0x54,0x53,0x43,0x41,0x50,0x45,0x32,0x2E,0x30,0x03,0x01,0x00,0x00,0x00)
  $insertAt = 13
  if (($bytes[10] -band 0x80) -ne 0) {
    $globalColorTableSize = 3 * [Math]::Pow(2, (($bytes[10] -band 0x07) + 1))
    $insertAt += [int]$globalColorTableSize
  }

  $output = New-Object byte[] ($bytes.Length + $loopBlock.Length)
  [Array]::Copy($bytes, 0, $output, 0, $insertAt)
  [Array]::Copy($loopBlock, 0, $output, $insertAt, $loopBlock.Length)
  [Array]::Copy($bytes, $insertAt, $output, $insertAt + $loopBlock.Length, $bytes.Length - $insertAt)
  [System.IO.File]::WriteAllBytes($path, $output)
}

function Make-Animation($name, $steps) {
  $frames = New-Object System.Collections.ArrayList
  foreach ($step in $steps) {
    foreach ($point in $step.Path) {
      Add-Frame $frames $step.Draw $point $step.Text $false
    }
    Add-Frame $frames $step.Draw $step.Target $step.Text $true
    Add-Frame $frames $step.Draw $step.Target $step.Text $true
  }
  Save-Gif $frames $name
}

$drawCommunicate = {
  param($g)
  Draw-App $g "talk"
  Fill-Round $g 22 130 360 36 5 (Brush 255 255 255)
  Stroke-Round $g 22 130 360 36 5 (Pen 203 216 210 1.5)
  Draw-Text $g "Find word    Search pictures" 34 130 330 36 14 ([System.Drawing.FontStyle]::Bold) ([System.Drawing.Color]::FromArgb(88,103,98))
  Draw-Button $g "Say now" 392 130 75 36 $false
  Draw-Button $g "Voice" 478 130 160 36 $false
  Draw-Tiles $g 22 190 6 @("I", "you", "want", "go", "more", "done", "help", "stop", "yes", "no", "please", "thanks")
}

$drawStarter = {
  param($g)
  Draw-App $g "builder"
  Draw-Panel $g "Starter Boards" 22 136 340 170
  Draw-Text $g "Choose a starter" 40 190 200 24 14 ([System.Drawing.FontStyle]::Bold) ([System.Drawing.Color]::FromArgb(88,103,98))
  Draw-Button $g "Mealtime" 40 218 285 34 $false
  Draw-Button $g "Load Starter" 40 264 120 34 $true
  Draw-Tiles $g 410 145 3 @("First Words", "Mealtime", "Play", "School", "Feelings", "Sick")
}

$drawVocab = {
  param($g)
  Draw-App $g "builder"
  Draw-Panel $g "Vocabulary Builder" 22 136 360 225
  Draw-Text $g "Target words" 40 190 220 24 14 ([System.Drawing.FontStyle]::Bold) ([System.Drawing.Color]::FromArgb(88,103,98))
  Fill-Round $g 40 218 285 56 5 (Brush 255 255 255)
  Stroke-Round $g 40 218 285 56 5 (Pen 203 216 210 1.5)
  Draw-Text $g "my, up, down, off, on, play, more" 52 220 250 52 13 ([System.Drawing.FontStyle]::Regular) ([System.Drawing.Color]::FromArgb(23,33,31))
  Draw-Text $g "[x] Show only target words" 40 286 245 28 14 ([System.Drawing.FontStyle]::Bold) ([System.Drawing.Color]::FromArgb(23,33,31))
  Draw-Button $g "Apply Targets" 40 322 130 34 $true
  Draw-Tiles $g 410 145 4 @("my", "up", "down", "off", "on", "play", "more", "help") @(7)
}

$drawTile = {
  param($g)
  Draw-App $g "builder"
  Draw-Panel $g "Add Picture Tile" 22 136 360 250
  Draw-Button $g "Word: juice" 40 190 135 34 $false
  Draw-Button $g "Speak as: juice" 190 190 150 34 $false
  Draw-Button $g "Picture: cup" 40 244 135 34 $false
  Draw-Button $g "Type: Thing" 190 244 150 34 $false
  Draw-Button $g "Page: Mealtime" 40 298 300 34 $false
  Draw-Button $g "Add Tile" 40 350 105 34 $true
  Draw-Tiles $g 410 155 3 @("food", "water", "snack", "juice", "milk", "spoon")
}

$drawSettings = {
  param($g)
  Draw-App $g "settings"
  Draw-Panel $g "Speech" 30 145 300 190
  Draw-Text $g "Rate   [------o---]" 52 195 230 28 15 ([System.Drawing.FontStyle]::Bold) ([System.Drawing.Color]::FromArgb(23,33,31))
  Draw-Text $g "Pitch  [-----o----]" 52 245 230 28 15 ([System.Drawing.FontStyle]::Bold) ([System.Drawing.Color]::FromArgb(23,33,31))
  Draw-Text $g "[x] Speak each tile when tapped" 52 296 250 28 14 ([System.Drawing.FontStyle]::Bold) ([System.Drawing.Color]::FromArgb(23,33,31))
  Draw-Panel $g "Access" 380 145 300 190
  Draw-Text $g "[x] Lock editing" 402 195 230 28 15 ([System.Drawing.FontStyle]::Bold) ([System.Drawing.Color]::FromArgb(23,33,31))
  Draw-Text $g "[ ] Larger labels" 402 245 230 28 15 ([System.Drawing.FontStyle]::Bold) ([System.Drawing.Color]::FromArgb(23,33,31))
  Draw-Text $g "[ ] High contrast" 402 296 230 28 15 ([System.Drawing.FontStyle]::Bold) ([System.Drawing.Color]::FromArgb(23,33,31))
}

Make-Animation "communicate-workflow.gif" @(
  @{ Draw=$drawCommunicate; Text="Step 1: Tap a picture tile."; Path=@(@(250,410),@(300,330),@(335,250)); Target=@(335,250) },
  @{ Draw=$drawCommunicate; Text="Step 2: Check the message bar."; Path=@(@(335,250),@(235,135),@(135,48)); Target=@(135,48) },
  @{ Draw=$drawCommunicate; Text="Step 3: Tap Speak."; Path=@(@(135,48),@(410,40),@(522,42)); Target=@(522,42) }
)

Make-Animation "starter-board-workflow.gif" @(
  @{ Draw=$drawStarter; Text="Step 1: Open Builder."; Path=@(@(90,392),@(220,106)); Target=@(220,106) },
  @{ Draw=$drawStarter; Text="Step 2: Choose a starter."; Path=@(@(220,106),@(200,235)); Target=@(200,235) },
  @{ Draw=$drawStarter; Text="Step 3: Load Starter."; Path=@(@(200,235),@(95,281)); Target=@(95,281) }
)

Make-Animation "vocabulary-builder-workflow.gif" @(
  @{ Draw=$drawVocab; Text="Step 1: Type target words."; Path=@(@(250,390),@(160,242)); Target=@(160,242) },
  @{ Draw=$drawVocab; Text="Step 2: Turn on target mask."; Path=@(@(160,242),@(78,300)); Target=@(78,300) },
  @{ Draw=$drawVocab; Text="Step 3: Apply Targets."; Path=@(@(78,300),@(108,340)); Target=@(108,340) }
)

Make-Animation "custom-tile-workflow.gif" @(
  @{ Draw=$drawTile; Text="Step 1: Enter the word."; Path=@(@(260,400),@(100,207)); Target=@(100,207) },
  @{ Draw=$drawTile; Text="Step 2: Pick picture and type."; Path=@(@(100,207),@(110,262)); Target=@(110,262) },
  @{ Draw=$drawTile; Text="Step 3: Choose a page."; Path=@(@(110,262),@(180,315)); Target=@(180,315) },
  @{ Draw=$drawTile; Text="Step 4: Add Tile."; Path=@(@(180,315),@(88,367)); Target=@(88,367) }
)

Make-Animation "settings-workflow.gif" @(
  @{ Draw=$drawSettings; Text="Step 1: Adjust speech rate."; Path=@(@(640,405),@(175,208)); Target=@(175,208) },
  @{ Draw=$drawSettings; Text="Step 2: Choose tile speech."; Path=@(@(175,208),@(75,308)); Target=@(75,308) },
  @{ Draw=$drawSettings; Text="Step 3: Set access options."; Path=@(@(75,308),@(425,208)); Target=@(425,208) }
)

Write-Host "Generated animated help GIFs in $outDir"
