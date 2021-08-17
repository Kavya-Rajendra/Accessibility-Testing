SET FEATURE = ISS_Accessibility
SET BROWSER = chrome
SET FOLDERNAME = reports

CALL gulp cucumber --ff=%FEATURE% --browsers=%BROWSER% --folderName=%FOLDERNAME%
CALL gulp htmlReport --folderName=%FOLDERNAME%
