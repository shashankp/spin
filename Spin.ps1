. .\Lesson.ps1

function Pause
{
    #$Host.UI.RawUI.ReadKey() | Out-Null
    Write-Host `n
    $Ignore = Read-Host '::'
}

function Display-Message($Msg, $Pause)
{
    Write-Host " |  $Msg" -ForegroundColor Cyan
    if ($Pause -eq $true) { Pause }
}

function Display-Percentage-Completed-Message($FractionCompleted)
{
    $PercentageCompleted = [System.Convert]::ToInt32(100 * $FractionCompleted)                
    $TotalLength = ($host.UI.RawUI.BufferSize.Width - 20)
    $StatusBar = "=" * [System.Convert]::ToInt32($FractionCompleted * $TotalLength)
    $Spaces = " " * ($TotalLength-$StatusBar.Length)
    $Msg = " |{0}{1}|  {2:d}% `n" -f $StatusBar, $Spaces, $PercentageCompleted
    Write-Host $Msg -ForegroundColor Cyan
}


function Display-Menu($Message, $Options, $Targets)
{
    if ($Options.Count -ne $Targets.Count) 
    {
        Write-Error "Invalid args to Display-Menu"
        return
    }

    Display-Message $Message    

    #Display Menu
    $i = 1
    foreach($Option in $Options)
    {
        Write-Host "$i $Option"
        $i++
    }
    #TODO: 0 to exit

    #Read Selection
    Write-Host `n
    
    #TODO: do-while
    Write-Host "Selection: " -ForegroundColor Blue -NoNewline
    $MenuSelection = Read-Host
    if ($MenuSelection -ge 1 -and 
        $MenuSelection -le $Targets.Count)
    {
        &$Targets[$MenuSelection-1]
    }
}

function Start-Spin
{
    ##Greet
    clear-Host
    $UserName = Read-Host 'What shall I call you? '
    Display-Message -msg "Hi $UserName"

    #Menu
    Display-Menu -Options @("TestLesson","Err") -Targets @("Start-Lesson","option2") -Message "Main Menu"

    #Lesson
}

Display-Message "Hi! Hit Enter when you are ready to begin."
Read-Host
Start-Spin