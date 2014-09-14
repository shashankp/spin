##Lesson

function Get-Lesson($LessonId)
{
    #TODO: return Array of Dictionary
    return ,@(
     )
}

function Start-Lesson($LessonId)
{
    #$Items = Get-Lesson("test")
    $Items = @(
        @{M="Welcome to your first lesson in PowerShell"; Invoke=$false},
        @{Q="Powershell prints values as they are entered. Try entering number 9"; 
          A="9";
          #TODO: Message after correct answer
          Invoke = $false},
        @{Q="Adding numbers get evaluated as expected. Add numbers 3 and 5"; 
          Clue="Type 3 + 5";
          A="3+5"},
        @{M="Congrats on completing your first lesson"; Invoke=$false}
     )

    $CompletedItems = 0
    foreach($Item in $Items)
    {
        $FractionCompleted = $CompletedItems/$Items.Count
        Display-Percentage-Completed-Message ($FractionCompleted)

        $Completed = $false
        $UserInput = ""
        Do {
            
            if ($Item.ContainsKey("M")) {
                ##Message
                
                Display-Message -msg $Item.'M' -pause $true
                $Completed = $true
            } else {
                
                ##Question
                Display-Message -msg $Item.'Q'

                Do {
                    Write-Host "PS> " -NoNewline -ForegroundColor White
                    $UserInput = Read-Host
                    } while ($UserInput.Trim().Length -eq 0)

                if (-not $Item.ContainsKey("Invoke") -or $Item.'Invoke' -eq $true) 
                {  
                    #$ExecutionContext.InvokeCommand.ExpandString($c)
                    Invoke-Expression $UserInput 
                }

                #Answer
                if ($UserInput -replace '\s+','' -eq $Item.'A')
                {
                    #Correct
                    $Completed = $true        
                    Display-Message "Correct"
                } else {
                    #Incorrect
                    Display-Message "Oops. Try again."        
                    #TODO: provide clue
                }
            }
        } while ($Completed -eq $false)
        $CompletedItems++
    }
    Display-Percentage-Completed-Message (1)
}
